import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import { db } from '@/lib/db'

export async function GET (req: NextRequest) {
  const url = new URL(req.url)
  const code = url.searchParams.get('code')
  const mindmapId = url.searchParams.get('state')

  if (!code || !mindmapId) {
    return NextResponse.json(
      { error: 'Missing code or state' },
      { status: 400 }
    )
  }

  const client_id = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID
  const client_secret = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_SECRET
  const redirect_uri = `${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI}/docs`

  console.log(code, client_id, client_secret, redirect_uri)

  try {
    // Step 1: Exchange code for tokens
    const tokenRes = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id,
      client_secret,
      redirect_uri,
      grant_type: 'authorization_code'
    })

    const { access_token } = tokenRes.data

    // Step 2: Retrieve the mindmap and its nodes
    const mindmap = await db.mindMap.findFirst({
      where: { id: mindmapId },
      include: { nodes: true }
    })

    if (!mindmap) {
      return NextResponse.json({ error: 'Mind map not found' }, { status: 404 })
    }

    // Step 3: Format mindmap content as a detailed structured document
    let docContent = `# Mind Map: ${mindmap.title}\n\n`

    function formatNode (node: any, depth = 0) {
      const bullet = depth === 0 ? '•' : depth === 1 ? '◦' : '→'
      const indent = '  '.repeat(depth)
      let text = `${indent}${bullet} ${node.content}\n`
      const children =
        mindmap?.nodes?.filter((n: any) => n.parentId === node.id) || []
      for (const child of children) {
        text += formatNode(child, depth + 1)
      }
      return text
    }

    if (mindmap && mindmap.nodes) {
      const rootNodes = mindmap.nodes.filter((n: any) => !n.parentId)
      for (const root of rootNodes) {
        docContent += formatNode(root)
      }
    }

    // Step 4: Create a new Google Doc with the structured content
    const docRes = await axios.post(
      'https://docs.googleapis.com/v1/documents',
      {
        title: `Exported Mind Map - ${mindmap.title}`
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        }
      }
    )

    const documentId = docRes.data.documentId

    // Step 5: Insert the formatted content into the document
    await axios.post(
      `https://docs.googleapis.com/v1/documents/${documentId}:batchUpdate`,
      {
        requests: [
          {
            insertText: {
              location: { index: 1 },
              text: docContent
            }
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        }
      }
    )

    const documentUrl = `https://docs.google.com/document/d/${documentId}/edit`

    return NextResponse.redirect(documentUrl)
  } catch (error) {
    if (typeof error === 'object' && error !== null) {
      const err = error as { response?: { data?: any }; message?: string }
      console.error('OAuth callback error:', err.response?.data || err.message)
    } else {
      console.error('OAuth callback error:', error)
    }
    return NextResponse.json(
      { error: 'Failed to process Google OAuth' },
      { status: 500 }
    )
  }
}
