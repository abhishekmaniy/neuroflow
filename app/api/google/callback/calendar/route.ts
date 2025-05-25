
import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import { db } from '@/lib/db'

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const code = url.searchParams.get('code')
  const mindmapId = url.searchParams.get('state')

    console.log("mindmapId" , mindmapId)
    console.log("code" , code)

  if (!code || !mindmapId) {
    return NextResponse.json(
      { error: 'Missing code or state' },
      { status: 400 }
    )
  }

  const client_id = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID
  const client_secret = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_SECRET
  const redirect_uri = `${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI}/calendar`

  console.log(mindmapId)

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

    // Step 2: Get mindmap details
    const mindmap = await db.mindMap.findFirst({
      where: { id: mindmapId }
    })

    if (!mindmap) {
      return NextResponse.json(
        { error: 'Mind map not found' },
        { status: 404 }
      )
    }

    // Step 3: Create calendar event
    const now = new Date().toISOString()
    const end = new Date(Date.now() + 60 * 60 * 1000).toISOString() // 1 hour later

    const event = {
      summary: `Mind Map Generated: ${mindmap.title}`,
      description: `A mind map titled "${mindmap.title}" was generated. Check your app for details.`,
      start: {
        dateTime: now
      },
      end: {
        dateTime: end
      }
    }

    const eventRes = await axios.post(
      'https://www.googleapis.com/calendar/v3/calendars/primary/events',
      event,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        }
      }
    )

    const eventHtmlLink = eventRes.data.htmlLink

    return NextResponse.redirect(eventHtmlLink)
  } catch (error) {
    if (typeof error === 'object' && error !== null) {
      const err = error as { response?: { data?: any }; message?: string }
      console.error('OAuth calendar callback error:', err.response?.data || err.message)
    } else {
      console.error('OAuth calendar callback error:', error)
    }
    return NextResponse.json(
      { error: 'Failed to process Google Calendar OAuth' },
      { status: 500 }
    )
  }
}
