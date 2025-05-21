// File: /app/api/get-nodes/route.ts

import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json()
    console.log("mindMapId" ,  data)

    // if (!mindMapId) {
    //   return NextResponse.json({ error: 'Missing mindMapId' }, { status: 400 })
    // }

    // const nodes = await db.node.findMany({
    //   where: {
    //     mindMapId: mindMapId
    //   }
    // })

    // console.log("nodes" , nodes )

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching nodes:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
