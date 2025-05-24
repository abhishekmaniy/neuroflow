import { db } from '@/lib/db'
import { Role } from '@/lib/generated/prisma'
import { Node } from '@/types'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  const { chatId, content } = await req.json()

  console.log(chatId, content)

  const messages = await db.message.findMany({
    where: { chatId },
    orderBy: { createdAt: 'asc' }
  })

  const chat = await db.chat.findUnique({
    where: { id: chatId },
    include: { mindMap: true }
  })

  console.log('message founded', messages)

  // Format history for prompt
  const conversation_history = messages
    .map(m => `${m.role === 'USER' ? 'User' : 'Assistant'}: ${m.content}`)
    .join('\n')

  const miindmap = await db.mindMap.findUnique({
    where: { id: chat?.mindMapId },
    include: { nodes: true, User: true }
  })

  const prompt = `
You are an AI assistant for a mind map app.

Conversation history:
${conversation_history}

Mindmap context:
${
  miindmap
    ? JSON.stringify(
        {
          id: miindmap.id,
          title: miindmap.title,
          userId: miindmap.userId,
          isPublic: miindmap.isPublic,
          generatedBy: miindmap.generatedBy,
          nodes: miindmap.nodes
        },
        null,
        2
      )
    : 'null'
}
Current user message:
${content}

Instructions:
- You must ALWAYS reply with a single JSON object in this format:
  {
    "message": "Your assistant message.",
    "mindmapObject": { ...new or updated mind map object, or null if not applicable }
  }
- Never reply with plain text or markdown. Only reply with a valid JSON object as described above.
- If the user asks to generate a mind map on a new topic, set mindmapObject to the new mind map.
- If the user asks to enhance or update, update mindmapObject based on the current mind map context above, but DO NOT change the topic/title unless the user explicitly requests a new topic.
- The mindmapObject must strictly match:
  MindMap {
    id: string,
    title: string,
    userId: string,
    isPublic: boolean,
    generatedBy: "AI",
    nodes: Node[]
  }
  Node {
    id: string,
    mindMapId: string,
    parentId?: string,
    content: string,
    positionX: number,
    positionY: number,
    direction: "TOP" | "RIGHT" | "LEFT" | "DOWN",
    children: Node[]
  }
- If not generating or enhancing a mind map, set mindmapObject to null.
- Never invent or hallucinate fields. Use only the schema above.
- Always ensure exactly one root node (parentId: null) in nodes.

Reply ONLY with the JSON object.
`

  try {
    console.log('in try block')
    if (!chatId || !content) {
      return NextResponse.json(
        { error: 'chatId and content are required.' },
        { status: 400 }
      )
    }

    const message = await db.message.create({
      data: {
        chatId,
        content,
        role: Role.USER
      }
    })
    console.log('Message created ', message)

    const chat = await db.chat.findUnique({
      where: { id: chatId },
      include: { Message: { orderBy: { createdAt: 'asc' } } }
    })

    const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
    const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' })

    console.log('prompt', prompt)
    const result = await model.generateContent(prompt)
    const response = result.response
    const text = await response.text().trim()
    console.log('result', text)

    const cleanText = text.replace(/```json|```/g, '')
    const mindMapJson = JSON.parse(cleanText)

    console.log(mindMapJson)

    if (mindMapJson.mindmapObject) {
      const mm = mindMapJson.mindmapObject

      const mindMap = await db.mindMap.update({
        where: { id: chat?.mindMapId },
        data: {
          title: mm.title,
          isPublic: mm.isPublic ?? false,
          updatedAt: new Date()
        }
      })

      await db.node.deleteMany({ where: { mindMapId: mindMap.id } })

      function flattenNodes (
        nodes: Node[],
        parentId: string | null = null
      ): any[] {
        let flat: any[] = []
        for (const node of nodes) {
          flat.push({
            tempId: node.id, // <-- Add this line
            tempParentId: parentId,
            mindMapId: mindMap.id,
            content: node.content,
            positionX: node.positionX,
            positionY: node.positionY,
            direction: node.direction,
            children: []
          })
          if (node.children && node.children.length) {
            flat = flat.concat(flattenNodes(node.children, node.id))
          }
        }
        return flat
      }

      const flattenedNodes = flattenNodes(mm.nodes)
      const rootNodes = flattenedNodes.filter(n => n.tempParentId === null)
      if (rootNodes.length !== 1) {
        return NextResponse.json(
          { error: 'Mind map must have exactly one root node.' },
          { status: 400 }
        )
      }

      // Insert nodes
      const tempIdToDbId = new Map<string, string>()
      for (const node of flattenedNodes) {
        const createdNode = await db.node.create({
          data: {
            mindMapId: node.mindMapId,
            content: node.content,
            positionX: node.positionX,
            positionY: node.positionY,
            direction: node.direction
            // parentId will be updated later
          }
        })
        tempIdToDbId.set(node.tempId, createdNode.id)
      }

      // Update parentId for nodes
      const updatePromises = flattenedNodes
        .filter(
          node => node.tempParentId !== null && node.tempParentId !== undefined
        )
        .map(node =>
          db.node.update({
            where: { id: tempIdToDbId.get(node.tempId)! },
            data: { parentId: tempIdToDbId.get(node.tempParentId!)! }
          })
        )
      await Promise.all(updatePromises)

      // Return the updated mind map with nodes and chat
      const mindmapObject = await db.mindMap.findUnique({
        where: { id: mindMap.id },
        include: { nodes: true, Chat: { include: { Message: true } } }
      })
      const message = await db.message.create({
        data: {
          chatId,
          content: mindMapJson.message,
          role: Role.ASSISTANT
        }
      })
      const newChat = await db.chat.findUnique({
        where: { id: chatId },
        include: {
          Message: { orderBy: { createdAt: 'asc' } },
          mindMap: true,
          User: true
        }
      })

      return NextResponse.json({ data: { mindmapObject, chat: newChat } })
    } else {
      const message = await db.message.create({
        data: {
          chatId,
          content: mindMapJson.message,
          role: Role.ASSISTANT
        }
      })
      const newChat = await db.chat.findUnique({
        where: { id: chatId },
        include: {
          Message: { orderBy: { createdAt: 'asc' } },
          mindMap: true,
          User: true
        }
      })
      return NextResponse.json({ chat: newChat })
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
