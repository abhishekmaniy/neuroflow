'use client'

import React, { useMemo, useRef, useState } from 'react'

type Node = {
  id: string
  content: string
  parentId?: string | null
  positionX?: number
  positionY?: number
  direction?: string
}

type MindMap = {
  id: string
  title: string
  nodes: Node[]
}

interface TreeNode extends Node {
  children?: TreeNode[]
}

const COLORS = [
  'from-blue-400 to-blue-600',
  'from-pink-400 to-pink-600',
  'from-yellow-400 to-yellow-600',
  'from-green-400 to-green-600',
  'from-purple-400 to-purple-600',
  'from-red-400 to-red-600',
  'from-cyan-400 to-cyan-600'
]

// Helper to wrap text into multiple lines
function wrapText (text: string, maxChars = 14) {
  const words = text.split(' ')
  const lines: string[] = []
  let current = ''
  for (const word of words) {
    if ((current + ' ' + word).trim().length > maxChars) {
      lines.push(current.trim())
      current = word
    } else {
      current += ' ' + word
    }
  }
  if (current) lines.push(current.trim())
  return lines
}

function getNodeRect (text: string) {
  const lines = wrapText(text)
  const paddingX = 28 // horizontal padding
  const paddingY = 18 // vertical padding per line
  const fontSize = lines.length > 2 ? 14 : 18
  const maxLineLength = Math.max(...lines.map(l => l.length), 0)
  const width = Math.max(90, maxLineLength * (fontSize * 0.6) + paddingX)
  const height = lines.length * fontSize + paddingY
  return { width, height }
}

function getSubtreeHeight (node: TreeNode): number {
  const { height } = getNodeRect(node.content)
  if (!node.children || node.children.length === 0) return height
  const gap = 32
  const childrenHeights = node.children.map(getSubtreeHeight)
  return Math.max(
    height,
    childrenHeights.reduce((a, b) => a + b, 0) +
      gap * (node.children.length - 1)
  )
}

function getHorizontalPositions (
  node: TreeNode,
  x: number,
  y: number,
  parentX: number | null,
  parentY: number | null,
  colorIdx: number = 0
): {
  node: TreeNode
  x: number
  y: number
  parentX: number | null
  parentY: number | null
  colorIdx: number
  width: number
  height: number
}[] {
  const { width, height } = getNodeRect(node.content)
  const result: any[] = []
  result.push({ node, x, y, parentX, parentY, colorIdx, width, height })

  if (!node.children || node.children.length === 0) return result

  // Calculate total height needed for all children
  const gap = 32
  const childrenHeights = node.children.map(getSubtreeHeight)
  const totalChildrenHeight =
    childrenHeights.reduce((a, b) => a + b, 0) +
    gap * (node.children.length - 1)

  // Start y so that children are vertically centered under their parent
  let childY = y - totalChildrenHeight / 2
  node.children.forEach((child, i) => {
    const subtreeHeight = childrenHeights[i]
    const childRect = getNodeRect(child.content)
    const childX = x + width / 2 + 80 + childRect.width / 2 // 80px horizontal gap
    const childCenterY = childY + subtreeHeight / 2

    result.push(
      ...getHorizontalPositions(
        child,
        childX,
        childCenterY,
        x + width / 2, // parent's right edge
        y,
        (colorIdx + 1) % COLORS.length
      )
    )
    childY += subtreeHeight + gap
  })
  return result
}

function buildTree (nodes: Node[]): TreeNode | null {
  if (!Array.isArray(nodes) || nodes.length === 0) return null
  const nodeMap = new Map<string, TreeNode>()
  nodes.forEach(n => nodeMap.set(n.id, { ...n, children: [] }))

  let root: TreeNode | null = null
  nodes.forEach(n => {
    const node = nodeMap.get(n.id)!
    if (!n.parentId) {
      root = node
    } else {
      const parent = nodeMap.get(n.parentId)
      if (parent) {
        parent.children!.push(node)
      }
    }
  })
  return root
}

// Recursively calculate positions and bounding box
function getNodePositions (
  node: TreeNode,
  x: number,
  y: number,
  radius: number,
  angleStart: number,
  angleEnd: number
): {
  node: TreeNode
  x: number
  y: number
  parentX: number
  parentY: number
  colorIdx: number
  width: number
  height: number
}[] {
  const result: any[] = []
  const children = node.children || []
  const { width, height } = getNodeRect(node.content)
  const nodeDiagonal = Math.sqrt(width * width + height * height) / 2
  result.push({
    node,
    x,
    y,
    parentX: x,
    parentY: y,
    colorIdx: 0,
    width,
    height
  })
  if (children.length === 0) return result

  // --- Improved: Use vertical layout for many children ---
  const MIN_VERTICAL_LAYOUT_CHILDREN = 5
  if (children.length >= MIN_VERTICAL_LAYOUT_CHILDREN) {
    // Dynamically set vertical gap based on number of children
    // More children = smaller gap, but never less than 12px, never more than 40px
    const VERTICAL_GAP = Math.max(12, Math.min(40, 80 / children.length))

    const childRects = children.map(child => getNodeRect(child.content))
    const totalHeight = childRects.reduce(
      (sum, r) => sum + r.height + VERTICAL_GAP,
      -VERTICAL_GAP
    )
    let yOffset = y - totalHeight / 2
    children.forEach((child, i) => {
      const { width: childWidth, height: childHeight } = getNodeRect(
        child.content
      )
      const childX = x + width / 2 + 120 + childWidth / 2 // 120px horizontal offset
      const childY = yOffset + childHeight / 2
      yOffset += childHeight + VERTICAL_GAP
      result.push({
        node: child,
        x: childX,
        y: childY,
        parentX: x + width / 2,
        parentY: y,
        colorIdx: i % COLORS.length,
        width: childWidth,
        height: childHeight
      })
      result.push(
        ...getNodePositions(
          child,
          childX,
          childY,
          radius * 0.8,
          angleStart,
          angleEnd
        )
      )
    })
    return result
  }
  // --- End vertical layout ---

  // Radial layout for few children
  const childRects = children.map(child => getNodeRect(child.content))
  const maxChildDiagonal = Math.max(
    ...childRects.map(
      r => Math.sqrt(r.width * r.width + r.height * r.height) / 2
    ),
    nodeDiagonal
  )
  const branchRadius = Math.max(
    radius,
    maxChildDiagonal * (1.7 + children.length * 0.15) // reduced spacing
  )

  const angleStep = (angleEnd - angleStart) / Math.max(children.length, 1)
  children.forEach((child, i) => {
    const angle = angleStart + i * angleStep
    const { width: childWidth, height: childHeight } = getNodeRect(
      child.content
    )
    const childDiagonal =
      Math.sqrt(childWidth * childWidth + childHeight * childHeight) / 2
    const childX = x + (branchRadius + childDiagonal) * Math.cos(angle)
    const childY = y + (branchRadius + childDiagonal) * Math.sin(angle)
    result.push({
      node: child,
      x: childX,
      y: childY,
      parentX: x,
      parentY: y,
      colorIdx: i % COLORS.length,
      width: childWidth,
      height: childHeight
    })
    // Recursively add grandchildren
    result.push(
      ...getNodePositions(
        child,
        childX,
        childY,
        branchRadius * 0.8,
        angle - angleStep / 2,
        angle + angleStep / 2
      )
    )
  })
  return result
}

// Calculate bounding box for all nodes
function getBoundingBox (
  positions: { x: number; y: number; width: number; height: number }[]
) {
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity
  positions.forEach(({ x, y, width, height }) => {
    minX = Math.min(minX, x - width / 2)
    maxX = Math.max(maxX, x + width / 2)
    minY = Math.min(minY, y - height / 2)
    maxY = Math.max(maxY, y + height / 2)
  })
  return { minX, minY, maxX, maxY }
}

export default function MindMapCanvas (props: {
  mindMap: MindMap
  nodes: Node[]
  onAddNode?: (parentId: string, content: string) => void
  onEditNode?: (nodeId: string, content: string) => void
  onDeleteNode?: (nodeId: string) => void
}) {
  const { mindMap, nodes, onAddNode, onEditNode, onDeleteNode } = props
  const tree = useMemo(() => buildTree(nodes), [nodes])

  // Center root node
  const centerX = 0
  const centerY = 0

  // Layout
  const positionedNodes = useMemo(() => {
    if (!tree) return []
    return getHorizontalPositions(tree, centerX, centerY, null, null)
  }, [tree])

  // Calculate bounding box and viewBox for auto-zoom
  const bbox = useMemo(() => getBoundingBox(positionedNodes), [positionedNodes])
  const padding = 100
  const viewBox = [
    bbox.minX - padding,
    bbox.minY - padding,
    bbox.maxX - bbox.minX + 2 * padding,
    bbox.maxY - bbox.minY + 2 * padding
  ].join(' ')

  // Zoom and pan state
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = useState(false)
  const [panStart, setPanStart] = useState<{ x: number; y: number } | null>(
    null
  )
  const svgRef = useRef<SVGSVGElement>(null)

  // Editing state
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [editingNode, setEditingNode] = useState<string | null>(null)
  const [editContent, setEditContent] = useState('')
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [addParentId, setAddParentId] = useState<string | null>(null)
  const [newNodeContent, setNewNodeContent] = useState('')

  // Zoom handlers
  const handleZoomIn = () => setZoom(z => Math.min(z * 1.2, 5))
  const handleZoomOut = () => setZoom(z => Math.max(z / 1.2, 0.2))

  // Pan handlers
  const handleDoubleClick = (e: React.MouseEvent) => {
    setIsPanning(true)
    setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
    if (svgRef.current) svgRef.current.style.cursor = 'grab'
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning && panStart) {
      setPan({
        x: e.clientX - panStart.x,
        y: e.clientY - panStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsPanning(false)
    setPanStart(null)
    if (svgRef.current) svgRef.current.style.cursor = 'default'
  }

  // Node interaction handlers
  const handleNodeClick = (e: React.MouseEvent, nodeId: string) => {
    e.stopPropagation()
    setSelectedNode(nodeId)
  }

  const handleNodeDoubleClick = (e: React.MouseEvent, node: Node) => {
    e.stopPropagation()
    setEditingNode(node.id)
    setEditContent(node.content)
  }

  const handleAddNode = (parentId: string) => {
    setAddParentId(parentId)
    setShowAddDialog(true)
    setNewNodeContent('')
  }

  const handleEditSave = () => {
    if (editingNode && onEditNode && editContent.trim()) {
      onEditNode(editingNode, editContent.trim())
      setEditingNode(null)
      setEditContent('')
    }
  }

  const handleEditCancel = () => {
    setEditingNode(null)
    setEditContent('')
  }

  const handleAddSave = () => {
    if (addParentId && onAddNode && newNodeContent.trim()) {
      onAddNode(addParentId, newNodeContent.trim())
      setShowAddDialog(false)
      setAddParentId(null)
      setNewNodeContent('')
    }
  }

  const handleDeleteNode = (nodeId: string) => {
    if (onDeleteNode && window.confirm('Are you sure you want to delete this node?')) {
      onDeleteNode(nodeId)
      setSelectedNode(null)
    }
  }

  if (!mindMap || !nodes || !tree) {
    return <div className='text-center text-gray-500'>Loading...</div>
  }

  return (
    <div
      className='w-full h-full p-8 overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-lg shadow-lg relative select-none'
      style={{ position: 'relative', userSelect: isPanning ? 'none' : 'auto' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Zoom controls */}
      <div className='absolute top-6 left-6 z-10 flex flex-col gap-2'>
        <button
          className='bg-white/80 dark:bg-gray-800/80 rounded-full shadow p-2 hover:bg-blue-100 dark:hover:bg-blue-900 transition'
          onClick={handleZoomIn}
          aria-label='Zoom in'
        >
          <span className='text-2xl font-bold'>+</span>
        </button>
        <button
          className='bg-white/80 dark:bg-gray-800/80 rounded-full shadow p-2 hover:bg-blue-100 dark:hover:bg-blue-900 transition'
          onClick={handleZoomOut}
          aria-label='Zoom out'
        >
          <span className='text-2xl font-bold'>−</span>
        </button>
      </div>
      <div className='text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white drop-shadow'>
        {mindMap.title}
      </div>
      <svg
        ref={svgRef}
        width='100%'
        height='700'
        viewBox={viewBox}
        style={{
          transform: `translate(${pan.x}px,${pan.y}px) scale(${zoom})`,
          transition: isPanning ? 'none' : 'transform 0.2s',
          cursor: isPanning ? 'grabbing' : 'default'
        }}
        onDoubleClick={handleDoubleClick}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Draw connectors */}
        {positionedNodes.map(({ node, x, y, parentX, parentY }, idx) =>
          node.parentId && parentX !== null && parentY !== null ? (
            <line
              key={`line-${node.id}-${idx}`}
              x1={parentX}
              y1={parentY}
              x2={x}
              y2={y}
              stroke='#bbb'
              strokeWidth={3}
              strokeLinecap='round'
              style={{ pointerEvents: 'none' }}
            />
          ) : null
        )}
        {/* Gradients for branches */}
        <defs>
          {COLORS.map((c, idx) => (
            <linearGradient
              key={c}
              id={`gradient-${idx}`}
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop
                offset='0%'
                stopColor={c.split(' ')[0].replace('from-', '')}
              />
              <stop
                offset='100%'
                stopColor={c.split(' ')[1].replace('to-', '')}
              />
            </linearGradient>
          ))}
        </defs>
        {/* Draw nodes */}
        {positionedNodes.map(({ node, x, y, colorIdx, width, height }, idx) => {
          const lines = wrapText(node.content)
          const fontSize = lines.length > 2 ? 14 : 18
          const isSelected = selectedNode === node.id
          const isEditing = editingNode === node.id
          
          return (
            <g key={`${node.id}-${idx}`} transform={`translate(${x},${y})`}>
              <rect
                x={-width / 2}
                y={-height / 2}
                width={width}
                height={height}
                rx={14}
                fill={`url(#gradient-${colorIdx})`}
                stroke={isSelected ? '#3b82f6' : '#fff'}
                strokeWidth={isSelected ? 6 : 4}
                filter='url(#shadow)'
                style={{
                  transition: 'filter 0.2s',
                  cursor: 'pointer'
                }}
                onClick={(e) => handleNodeClick(e, node.id)}
                onDoubleClick={(e) => handleNodeDoubleClick(e, node)}
              />
              
              {/* Node action buttons (shown when selected) */}
              {isSelected && !isEditing && (
                <g>
                  {/* Add child button */}
                  <circle
                    cx={width / 2 + 15}
                    cy={0}
                    r={12}
                    fill="#10b981"
                    stroke="#fff"
                    strokeWidth={2}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleAddNode(node.id)}
                  />
                  <text
                    x={width / 2 + 15}
                    y={0}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={14}
                    fill="#fff"
                    fontWeight="bold"
                    style={{ pointerEvents: 'none' }}
                  >
                    +
                  </text>
                  
                  {/* Edit button */}
                  <circle
                    cx={width / 2 + 15}
                    cy={-25}
                    r={12}
                    fill="#3b82f6"
                    stroke="#fff"
                    strokeWidth={2}
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => handleNodeDoubleClick(e, node)}
                  />
                  <text
                    x={width / 2 + 15}
                    y={-25}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={10}
                    fill="#fff"
                    fontWeight="bold"
                    style={{ pointerEvents: 'none' }}
                  >
                    ✎
                  </text>
                  
                  {/* Delete button (only if not root) */}
                  {node.parentId && (
                    <>
                      <circle
                        cx={width / 2 + 15}
                        cy={25}
                        r={12}
                        fill="#ef4444"
                        stroke="#fff"
                        strokeWidth={2}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleDeleteNode(node.id)}
                      />
                      <text
                        x={width / 2 + 15}
                        y={25}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={12}
                        fill="#fff"
                        fontWeight="bold"
                        style={{ pointerEvents: 'none' }}
                      >
                        ×
                      </text>
                    </>
                  )}
                </g>
              )}
              
              <title>{node.content}</title>
              {!isEditing && lines.map((line, i) => (
                <text
                  key={i}
                  x={0}
                  y={fontSize * (i - (lines.length - 1) / 2)}
                  textAnchor='middle'
                  dominantBaseline='middle'
                  fontSize={fontSize}
                  fill='#fff'
                  fontWeight='bold'
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                >
                  {line}
                </text>
              ))}
            </g>
          )
        })}
        {/* SVG shadow filter */}
        <filter id='shadow' x='-50%' y='-50%' width='200%' height='200%'>
          <feDropShadow
            dx='0'
            dy='4'
            stdDeviation='8'
            floodColor='#000'
            floodOpacity='0.18'
          />
        </filter>
      </svg>
      <div className='absolute left-1/2 bottom-4 -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 pointer-events-none'>
        <span>
          Click nodes to select, double-click to edit. Use +/− to zoom and pan with double-click.
        </span>
      </div>

      {/* Edit Node Dialog */}
      {editingNode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Edit Node</h3>
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="w-full p-3 border rounded-lg resize-none h-24 text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700"
              placeholder="Enter node content..."
              autoFocus
            />
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleEditSave}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Save
              </button>
              <button
                onClick={handleEditCancel}
                className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Node Dialog */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Add New Node</h3>
            <textarea
              value={newNodeContent}
              onChange={(e) => setNewNodeContent(e.target.value)}
              className="w-full p-3 border rounded-lg resize-none h-24 text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700"
              placeholder="Enter new node content..."
              autoFocus
            />
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleAddSave}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
              >
                Add Node
              </button>
              <button
                onClick={() => setShowAddDialog(false)}
                className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
