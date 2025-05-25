import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url)
  const mindmapId = url.pathname.split('/').pop() // or use regex if needed

  if (!mindmapId) {
    return NextResponse.json({ error: 'Missing mindmapId' }, { status: 400 })
  }

  const mindMap = await db.mindMap.findUnique({
    where: { id: mindmapId },
    include: {
      nodes: true,
      Chat: {
        include: {
          Message: {
            orderBy: { createdAt: 'asc' }
          }
        }
      },
      User: true
    }
  })

  if (!mindMap)
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(mindMap)
}