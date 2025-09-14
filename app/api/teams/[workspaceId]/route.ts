import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  req: NextRequest,
  { params }: { params: { workspaceId: string } }
) => {
  const { workspaceId } = params

  const workspace = await db.workspace.findFirst({
    where: {
      id: workspaceId
    },
    include: {
      teams: true
    }
  })

  const teams = workspace?.teams

  return NextResponse.json(teams)
}
