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

// Calculate node radius based on text
function getNodeRadius (text: string) {
  const lines = wrapText(text)
  const base = 60
  const perLine = 12
  const perChar = 1.5
  const maxLine = Math.max(...lines.map(l => l.length), 0)
  return (
    base +
    Math.max(0, lines.length - 2) * perLine +
    Math.max(0, maxLine - 12) * perChar
  )
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
  nodeRadius: number
}[] {
  const result: any[] = []
  const children = node.children || []
  const nodeRadius = getNodeRadius(node.content)
  result.push({ node, x, y, parentX: x, parentY: y, colorIdx: 0, nodeRadius })
  if (children.length === 0) return result

  // Find max radius among children for spacing
  const childRadii = children.map(child => getNodeRadius(child.content))
  const maxChildRadius = Math.max(...childRadii, nodeRadius)
  const branchRadius = Math.max(radius, maxChildRadius * 2.2)

  const angleStep = (angleEnd - angleStart) / Math.max(children.length, 1)
  children.forEach((child, i) => {
    const angle = angleStart + i * angleStep
    const childX = x + branchRadius * Math.cos(angle)
    const childY = y + branchRadius * Math.sin(angle)
    result.push({
      node: child,
      x: childX,
      y: childY,
      parentX: x,
      parentY: y,
      colorIdx: i % COLORS.length,
      nodeRadius: getNodeRadius(child.content)
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
  positions: { x: number; y: number; nodeRadius: number }[]
) {
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity
  positions.forEach(({ x, y, nodeRadius }) => {
    minX = Math.min(minX, x - nodeRadius)
    maxX = Math.max(maxX, x + nodeRadius)
    minY = Math.min(minY, y - nodeRadius)
    maxY = Math.max(maxY, y + nodeRadius)
  })
  return { minX, minY, maxX, maxY }
}


export default function MindMapCanvas(props: {
  mindMap: MindMap
  nodes: Node[]
}) {
  const { mindMap, nodes } = props
  const tree = useMemo(() => buildTree(nodes), [nodes])

  // Layout
  const centerX = 0
  const centerY = 0
  const baseRadius = 220

  // Zoom and pan state
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = useState(false)
  const [panStart, setPanStart] = useState<{ x: number; y: number } | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  // Get all positioned nodes for rendering
  const positionedNodes = useMemo(() => {
    if (!tree) return []
    return getNodePositions(
      tree,
      centerX,
      centerY,
      baseRadius,
      -Math.PI / 2,
      1.5 * Math.PI
    )
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

  // Zoom handlers
  const handleZoomIn = () => setZoom(z => Math.min(z * 1.2, 5))
  const handleZoomOut = () => setZoom(z => Math.max(z / 1.2, 0.2))

  // Pan handlers
  const handleDoubleClick = (e: React.MouseEvent) => {
    setIsPanning(true)
    setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
    // Prevent text selection
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

  // Prevent scrollbars
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
      <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
        <button
          className="bg-white/80 dark:bg-gray-800/80 rounded-full shadow p-2 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
          onClick={handleZoomIn}
          aria-label="Zoom in"
        >
          <span className="text-2xl font-bold">+</span>
        </button>
        <button
          className="bg-white/80 dark:bg-gray-800/80 rounded-full shadow p-2 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
          onClick={handleZoomOut}
          aria-label="Zoom out"
        >
          <span className="text-2xl font-bold">−</span>
        </button>
      </div>
      <div className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white drop-shadow">
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
        {positionedNodes.map(
          ({ node, x, y, parentX, parentY, colorIdx }, idx) =>
            node.parentId ? (
              <line
                key={`line-${node.id}-${idx}`}
                x1={parentX}
                y1={parentY}
                x2={x}
                y2={y}
                stroke={`url(#gradient-${colorIdx})`}
                strokeWidth={4}
                opacity={0.7}
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
        {positionedNodes.map(({ node, x, y, colorIdx, nodeRadius }, idx) => {
          const lines = wrapText(node.content)
          const fontSize = lines.length > 2 ? 14 : 18
          return (
            <g key={`${node.id}-${idx}`} transform={`translate(${x},${y})`}>
              <circle
                r={nodeRadius}
                fill={`url(#gradient-${colorIdx})`}
                stroke='#fff'
                strokeWidth={4}
                filter='url(#shadow)'
                style={{
                  transition: 'filter 0.2s',
                  cursor: 'pointer'
                }}
              />
              <title>{node.content}</title>
              {lines.map((line, i) => (
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
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 pointer-events-none">
        <span>Double click and drag to move the mind map. Use +/− to zoom.</span>
      </div>
    </div>
  )
}
