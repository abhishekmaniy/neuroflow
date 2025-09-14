import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  const { workspaceName, userId } = await req.json()

  // First, create the default team and get its id

  const workspace = await db.workspace.create({
    data: {
      name: workspaceName as string,
      User: userId ? { connect: { id: userId } } : undefined,
      teams: {
        create: []
      }
    }
  })

  const team = await db.team.create({
    data: {
      name: 'Default Team',
      workspace: { connect: { id: workspace.id } }
    }
  })

  const user = await db.user.update({
    where: {
      id: userId
    },
    data: {
      isProfileSetup: true
    }
  })

  return NextResponse.json(workspace)
}
