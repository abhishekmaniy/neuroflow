'use client'

import React, { JSX } from 'react'
import { Node as DBNode, MindMap } from '@/lib/generated/prisma'
// props: { mindMap: MindMap; nodes: Node[] }

import { Node } from '@/lib/generated/prisma'

interface TreeNode extends Node {
  children?: TreeNode[]
}

function buildTree (nodes: Node[]): TreeNode[] {
  const map = new Map<string, TreeNode>()
  const roots: TreeNode[] = []

  nodes.forEach(node => {
    map.set(node.id, { ...node, children: [] })
  })

  map.forEach(node => {
    if (node.parentId) {
      const parent = map.get(node.parentId)
      if (parent) {
        parent.children!.push(node)
      }
    } else {
      roots.push(node)
    }
  })

  return roots
}

const renderNode = (node: TreeNode): JSX.Element => {
  return (
    <div key={node?.id} className='text-center p-2'>
      <div className='p-4 border text-black border-gray-400 bg-white shadow rounded'>
        <strong>{node?.content}</strong>
      </div>
      {node?.children && node?.children.length > 0 && (
        <div className='mt-4 text-black space-y-4 pl-8 border-l-2 border-gray-300'>
          {node?.children.map(child => renderNode(child))}
        </div>
      )}
    </div>
  )
}

export default function MindMapCanvas (props: {
  mindMap: MindMap
  nodes: Node[]
}) {
  const { mindMap, nodes } = props
  const tree = buildTree(nodes)
  console.log(mindMap , nodes)

  if (!mindMap && !nodes) {
    return (
      <>
        <div>Loading...</div>
      </>
    )
  }

  return (
    <div className='w-full h-full p-8 overflow-auto bg-gray-50'>
      <div className='text-2xl font-bold text-center mb-8'>
        {mindMap?.title}
      </div>
      <div className='flex justify-center gap-16 flex-wrap'>
        {tree?.map(node => (
          <div key={node.id}>{renderNode(node)}</div>
        ))}
      </div>
    </div>
  )
}
