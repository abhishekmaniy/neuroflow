import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

// Add a new node
export const POST = async (
  req: NextRequest,
  { params }: { params: { mindmapId: string } }
) => {
  const { mindmapId } = params
  const { parentId, content, positionX = 0, positionY = 0 } = await req.json()

  try {
    const node = await db.node.create({
      data: {
        mindMapId: mindmapId,
        parentId: parentId || null,
        content,
        positionX,
        positionY,
        createdBy: 'USER'
      }
    })

    return NextResponse.json({ node })
  } catch (error) {
    console.error('Error creating node:', error)
    return NextResponse.json(
      { error: 'Failed to create node' },
      { status: 500 }
    )
  }
}

// Update a node
export const PUT = async (
  req: NextRequest,
  { params }: { params: { mindmapId: string } }
) => {
  const { mindmapId } = params
  const { nodeId, content, positionX, positionY } = await req.json()

  try {
    const node = await db.node.update({
      where: { id: nodeId },
      data: {
        content,
        ...(positionX !== undefined && { positionX }),
        ...(positionY !== undefined && { positionY })
      }
    })

    return NextResponse.json({ node })
  } catch (error) {
    console.error('Error updating node:', error)
    return NextResponse.json(
      { error: 'Failed to update node' },
      { status: 500 }
    )
  }
}

// Delete a node and its children
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { mindmapId: string } }
) => {
  const { mindmapId } = params
  const { nodeId } = await req.json()

  try {
    // First, delete all child nodes recursively
    const deleteChildren = async (parentId: string) => {
      const children = await db.node.findMany({
        where: { parentId: parentId }
      })
      
      for (const child of children) {
        await deleteChildren(child.id)
      }
      
      await db.node.deleteMany({
        where: { parentId: parentId }
      })
    }

    await deleteChildren(nodeId)
    
    // Then delete the node itself
    await db.node.delete({
      where: { id: nodeId }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting node:', error)
    return NextResponse.json(
      { error: 'Failed to delete node' },
      { status: 500 }
    )
  }
}