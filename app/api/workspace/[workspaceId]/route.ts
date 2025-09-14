import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db' // adjust import as needed

export const GET = async (
  req: NextRequest,
  { params }: { params: { workspaceId: string } }
) => {
  const { workspaceId } = await params

  console.log(workspaceId)

  const workspace = await db.workspace.findFirst({
    where: { id: workspaceId },
    include: {
      teams: true,
      mindmaps: true,
      User: true,
      flowcharts: true,
      whiteboards: true
    }
  })

  return NextResponse.json(workspace)
}
