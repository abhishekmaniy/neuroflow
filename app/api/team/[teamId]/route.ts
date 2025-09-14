import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  req: NextRequest,
  { params }: { params: { teamId: string } }
) => {
  const { teamId } = params

  const team = await db.team.findFirst({
    where: {
      id: teamId
    },
    include: {
      workspace: true,
      members: true
    }
  })

  return NextResponse.json({ team })
}
