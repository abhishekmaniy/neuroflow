import { db } from '@/lib/db'
import { TeamRole } from '@/lib/generated/prisma'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (
  req: NextRequest,
  { params }: { params: { teamId: string } }
) => {
  const { teamId } = params
  const { userEmail, role = TeamRole.MEMBER } = await req.json()

  try {
    // Find user by email
    const user = await db.user.findFirst({
      where: { email: userEmail }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found with this email' },
        { status: 404 }
      )
    }

    // Check if user is already a member
    const existingMember = await db.teamMember.findFirst({
      where: {
        userId: user.id,
        teamId: teamId
      }
    })

    if (existingMember) {
      return NextResponse.json(
        { error: 'User is already a member of this team' },
        { status: 400 }
      )
    }

    // Add user to team
    const teamMember = await db.teamMember.create({
      data: {
        userId: user.id,
        teamId: teamId,
        role: role
      },
      include: {
        user: true,
        team: true
      }
    })

    return NextResponse.json({ teamMember })
  } catch (error) {
    console.error('Error adding team member:', error)
    return NextResponse.json(
      { error: 'Failed to add team member' },
      { status: 500 }
    )
  }
}

export const GET = async (
  req: NextRequest,
  { params }: { params: { teamId: string } }
) => {
  const { teamId } = params

  try {
    const members = await db.teamMember.findMany({
      where: { teamId },
      include: {
        user: true
      }
    })

    return NextResponse.json({ members })
  } catch (error) {
    console.error('Error fetching team members:', error)
    return NextResponse.json(
      { error: 'Failed to fetch team members' },
      { status: 500 }
    )
  }
}