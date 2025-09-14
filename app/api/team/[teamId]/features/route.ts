import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/db'

export async function POST(req: NextRequest, { params }: { params: { teamId: string } }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { featureType, title, prompt } = await req.json()
    const teamId = params.teamId

    // Validate input
    if (!featureType || !title || !teamId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Check if team exists and user is a member
    const team = await prisma.team.findUnique({
      where: { id: teamId },
      include: { members: true }
    })

    if (!team) {
      return NextResponse.json({ error: 'Team not found' }, { status: 404 })
    }

    const isMember = team.members.some(member => member.userId === session.user.id)
    if (!isMember) {
      return NextResponse.json({ error: 'Not a team member' }, { status: 403 })
    }

    // Create a new chat for the feature
    const chat = await prisma.chat.create({
      data: {
        title: `${title} Chat`,
        userId: session.user.id
      }
    })

    let result

    // Create the appropriate feature based on featureType
    switch (featureType) {
      case 'mindmap':
        result = await prisma.mindMap.create({
          data: {
            title,
            nodes: [],
            connections: [],
            userId: session.user.id,
            teamId,
            chatId: chat.id
          }
        })
        break

      case 'flowchart':
        result = await prisma.flowchart.create({
          data: {
            title,
            nodes: [],
            connections: [],
            userId: session.user.id,
            teamId,
            chatId: chat.id
          }
        })
        break

      case 'whiteboard':
        result = await prisma.whiteboard.create({
          data: {
            title,
            content: {},
            userId: session.user.id,
            teamId,
            chatId: chat.id
          }
        })
        break

      default:
        return NextResponse.json({ error: 'Invalid feature type' }, { status: 400 })
    }

    // If prompt is provided, generate content using AI
    if (prompt) {
      // This would be implemented in a separate API call after redirect
      // For now, we just return the created feature
    }

    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error('Error creating feature:', error)
    return NextResponse.json({ error: 'Failed to create feature' }, { status: 500 })
  }
}