import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import { db } from '@/lib/db'

function buildTree (nodes: any[]) {
  const nodeMap = new Map<string, any>()
  nodes.forEach(n => nodeMap.set(n.id, { ...n, children: [] }))
  let root = null
  nodes.forEach(n => {
    const node = nodeMap.get(n.id)!
    if (!n.parentId) {
      root = node
    } else {
      const parent = nodeMap.get(n.parentId)
      if (parent) parent.children.push(node)
    }
  })
  return root
}

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
  const redirect_uri = `${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI}/slides`

  try {
    // 1. Exchange code for tokens
    const tokenRes = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id,
      client_secret,
      redirect_uri,
      grant_type: 'authorization_code'
    })
    const { access_token } = tokenRes.data

    // 2. Retrieve the mindmap and its nodes
    const mindmap = await db.mindMap.findFirst({
      where: { id: mindmapId },
      include: { nodes: true }
    })
    if (!mindmap) {
      return NextResponse.json({ error: 'Mind map not found' }, { status: 404 })
    }

    // 3. Build tree from nodes
    const root = buildTree(mindmap.nodes)

    // 4. Create Slides presentation
    const slidesRes = await axios.post(
      'https://slides.googleapis.com/v1/presentations',
      { title: `Exported Mind Map - ${mindmap.title}` },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    const presentationId = slidesRes.data.presentationId

    // 5. Get presentation details to find object IDs
    const presentationDetails = await axios.get(
      `https://slides.googleapis.com/v1/presentations/${presentationId}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )
    const slides = presentationDetails.data.slides
    const titleSlide = slides[0]
    let titleElement = titleSlide.pageElements.find(
      (el: any) =>
        el.shape &&
        el.shape.placeholder &&
        (el.shape.placeholder.type === 'TITLE' ||
          el.shape.placeholder.type === 'CENTER_TITLE') &&
        el.objectId
    )

    // 6. Prepare batch requests
    const requests: any[] = []

    // If not found, create a new text box at the top of the slide
    if (!titleElement) {
      // Generate a random objectId for the new text box
      const newTitleId =
        'custom_title_' + Math.random().toString(36).substr(2, 9)
      // Insert a new text box at the top center
      const createTitleBoxReq = {
        createShape: {
          objectId: newTitleId,
          shapeType: 'TEXT_BOX',
          elementProperties: {
            pageObjectId: titleSlide.objectId,
            size: {
              width: { magnitude: 400, unit: 'PT' },
              height: { magnitude: 60, unit: 'PT' }
            },
            transform: {
              scaleX: 1,
              scaleY: 1,
              translateX: 100,
              translateY: 40,
              unit: 'PT'
            }
          }
        }
      }
      // Add this request at the start of your requests array
      requests.unshift(createTitleBoxReq)
      // Use this new objectId for the title
      titleElement = { objectId: newTitleId }
    }

    requests.push({
      insertText: {
        objectId: titleElement.objectId,
        text: `Mind Map: ${mindmap.title}`
      }
    })

    // Helper to recursively add slides for each node with children
    let slideIndex = 1
    function addSlides (node: any) {
      if (node.children && node.children.length > 0) {
        const slideObjectId = `node_slide_${slideIndex}`
        requests.push({
          createSlide: {
            objectId: slideObjectId,
            insertionIndex: slideIndex,
            slideLayoutReference: { predefinedLayout: 'TITLE_AND_BODY' }
          }
        })
        // After slide is created, add title and body text
        // We'll use a placeholder objectId for title/body and replace it after creation
        // But since we can't know the objectId in advance, we'll use a placeholder and fix it below

        // Store for later mapping
        node._slideObjectId = slideObjectId
        slideIndex++
      }
      if (node.children) {
        node.children.forEach(addSlides)
      }
    }
    addSlides(root)

    // 7. Batch update: create slides
    await axios.post(
      `https://slides.googleapis.com/v1/presentations/${presentationId}:batchUpdate`,
      { requests },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        }
      }
    )

    // 8. Get updated presentation details to find title/body objectIds for each slide
    const updatedDetails = await axios.get(
      `https://slides.googleapis.com/v1/presentations/${presentationId}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )
    const updatedSlides = updatedDetails.data.slides

    // 9. Prepare requests to insert text into each slide
    const textRequests: any[] = []
    function addTextRequests (node: any) {
      if (node.children && node.children.length > 0 && node._slideObjectId) {
        const slide = updatedSlides.find(
          (s: any) => s.objectId === node._slideObjectId
        )
        if (slide) {
          // Find title and body shapes
          const titleShape = slide.pageElements.find(
            (el: any) =>
              el.shape &&
              el.shape.placeholder &&
              (el.shape.placeholder.type === 'TITLE' ||
                el.shape.placeholder.type === 'CENTER_TITLE') &&
              el.objectId
          )
          const bodyShape = slide.pageElements.find(
            (el: any) =>
              el.shape &&
              el.shape.placeholder &&
              el.shape.placeholder.type === 'BODY' &&
              el.objectId
          )
          if (titleShape) {
            textRequests.push({
              insertText: {
                objectId: titleShape.objectId,
                text: node.content
              }
            })
          }
          if (bodyShape) {
            textRequests.push({
              insertText: {
                objectId: bodyShape.objectId,
                text: node.children.map((c: any) => `• ${c.content}`).join('\n')
              }
            })
          }
        }
      }
      if (node.children) {
        node.children.forEach(addTextRequests)
      }
    }
    addTextRequests(root)

    // 10. Batch update: insert text
    if (textRequests.length > 0) {
      await axios.post(
        `https://slides.googleapis.com/v1/presentations/${presentationId}:batchUpdate`,
        { requests: textRequests },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json'
          }
        }
      )
    }

    const slidesUrl = `https://docs.google.com/presentation/d/${presentationId}/edit`
    return NextResponse.redirect(slidesUrl)
  } catch (error) {
    if (typeof error === 'object' && error !== null) {
      const err = error as { response?: { data?: any }; message?: string }
      console.error('Slides callback error:', err.response?.data || err.message)
    } else {
      console.error('Slides callback error:', error)
    }
    return NextResponse.json(
      { error: 'Failed to process Google Slides export' },
      { status: 500 }
    )
  }
}
