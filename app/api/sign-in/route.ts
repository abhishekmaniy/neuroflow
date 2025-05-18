import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  if (req.method === 'POST') {
    const { name, email, id } = await req.json()
    

    const userExist = await db.user.findFirst({
      where: {
        id
      }
    })

    if (userExist) {
      return NextResponse.json({ user: userExist })
    }

    const newUser = await db.user.create({
      data: {
        id,
        name,
        email
      }
    })

    return NextResponse.json({ user: newUser })
  } else {
    console.log('error ehile creting user')
    return NextResponse.json({ message: 'Error in server' }, { status: 400 })
  }
}
