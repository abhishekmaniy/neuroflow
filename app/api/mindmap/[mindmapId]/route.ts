import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  req: NextRequest,
  { params }: { params: { mindmapId: string } }
) => {
  const { mindmapId } = params
  const mindMap = await db.mindMap.findUnique({
    where: { id: mindmapId },
    include: { nodes: true, Chat: true, User: true }
  })
  if (!mindMap)
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(mindMap)
}
