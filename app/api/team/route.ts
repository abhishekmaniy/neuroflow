import { db } from '@/lib/db'
import { TeamRole } from '@/lib/generated/prisma'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  const { teamName, userId, workspaceId } = await req.json()

  const team = await db.team.create({
    data: {
      name: teamName,
      workspace: { connect: { id: workspaceId } }
    }
  })

  const TeamMember = await db.teamMember.create({
    data: {
      role: TeamRole.ADMIN,
      team: { connect: { id: team.id } },
      user: { connect: { id: userId } }
    }
  })

  const newTeam = db.team.findFirst({
    where: {
      id: team.id
    }
  })

  return NextResponse.json({ team: newTeam })
}
