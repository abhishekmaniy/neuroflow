import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  const { userId } = params

  const user = await db.user.findFirst({
    where: {
      id: userId
    },
    include: {
      MindMap: true,
      workspace: {
        include: {
          teams: true
        }
      },
      Chat: true,
      TeamMember: true
    }
  })

  return NextResponse.json(user)
}
