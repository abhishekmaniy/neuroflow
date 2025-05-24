import { db } from '@/lib/db'
import { GeneratedBy } from '@/lib/generated/prisma'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!

export const POST = async (req: NextRequest) => {
  const { prompt: topic, userId } = await req.json()

  console.log(userId)
  console.log(topic)

  if (!topic || !userId) {
    return NextResponse.json(
      { error: 'Missing topic or userId' },
      { status: 400 }
    )
  }

  const fullPrompt = `
You are an assistant that generates a structured MindMap JSON object based on this Prisma schema:

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

Generate a complete JSON representing a mind map titled "${topic}" with the following constraints:
- There must be **exactly one root node** (the center node, with parentId: null).
- All other nodes must be children (direct or indirect) of this root node.
- Each node must follow the structure of the Node model above.
- Use placeholder values for UUIDs ("id", "mindMapId") and "userId", but keep them consistent.
- The root node should have 3-5 children, each with 2-3 children of their own.
- Use realistic content for each node related to "${topic}".
- Return only the final JSON, no extra explanation.
`

  try {
    const ai = new GoogleGenerativeAI(GEMINI_API_KEY)
    const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const result = await model.generateContent(fullPrompt)
    const response = result.response
    const text = (await response.text()).trim()

    const cleanText = text.replace(/```json|```/g, '')
    const mindMapJson = JSON.parse(cleanText)

    const mindMap = await db.mindMap.create({
      data: {
        title: mindMapJson.title,
        userId: userId,
        isPublic: mindMapJson.isPublic ?? false,
        generatedBy: 'AI',
        Chat: {
          create: []
        },
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    // 2. Flatten the nodes tree to a list
    interface GeminiNode {
      id: string
      mindMapId: string
      parentId?: string | null
      content: string
      positionX: number
      positionY: number
      direction: 'TOP' | 'RIGHT' | 'LEFT' | 'DOWN'
      children: GeminiNode[]
    }

    const flattenedNodes: (Omit<GeminiNode, 'id'> & {
      tempId: string
      tempParentId?: string | null
    })[] = []

    function flattenNodes (nodes: GeminiNode[], parentId: string | null = null) {
      for (const node of nodes) {
        flattenedNodes.push({
          tempId: node.id, // temp id from AI or generated UUID string
          tempParentId: parentId,
          mindMapId: mindMap.id,
          content: node.content,
          positionX: node.positionX,
          positionY: node.positionY,
          direction: node.direction,
          children: []
        })
        if (node.children && node.children.length) {
          flattenNodes(node.children, node.id)
        }
      }
    }

    flattenNodes(mindMapJson.nodes)
    const rootNodes = flattenedNodes.filter(n => n.tempParentId === null)
    if (rootNodes.length !== 1) {
      return NextResponse.json(
        { error: 'Mind map must have exactly one root node.' },
        { status: 400 }
      )
    }

    // 3. Insert all nodes **without parentId** (because we don't have DB ids yet)
    // Using transaction with multiple creates or createMany (but createMany doesn’t support parentId relationships)
    // So create without parentId first, then update parentId with correct db ids.

    // Map from tempId to DB id
    const tempIdToDbId = new Map<string, string>()

    // Insert nodes one by one but parallelize with Promise.all (optional)
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

    // 4. Now update nodes to set the correct parentId in DB
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

    // 5. Return the mindMap with nodes or just confirmation
    const mindMapWithNodes = await db.mindMap.findUnique({
      where: { id: mindMap.id },
      include: { nodes: true }
    })

    return NextResponse.json({ data: mindMapWithNodes })
  } catch (e: any) {
    console.error('Error creating mind map:', e)
    return NextResponse.json(
      { error: 'Failed to generate or save mind map', message: e.message },
      { status: 500 }
    )
  }
}
