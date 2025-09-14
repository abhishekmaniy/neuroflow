'use client'

import React, { useMemo, useRef, useState } from 'react'

type ConceptNode = {
  id: string
  content: string
  positionX: number
  positionY: number
  category?: string
}

type ConceptConnection = {
  id: string
  fromNodeId: string
  toNodeId: string
  relationshipLabel: string
}

type ConceptMap = {
  id: string
  title: string
  nodes: ConceptNode[]
  connections: ConceptConnection[]
}

interface ConceptMapCanvasProps {
  conceptMap: ConceptMap
  onAddNode?: (content: string, x: number, y: number, category?: string) => void
  onEditNode?: (nodeId: string, content: string, category?: string) => void
  onDeleteNode?: (nodeId: string) => void
  onConnectNodes?: (fromNodeId: string, toNodeId: string, relationshipLabel: string) => void
  onDeleteConnection?: (connectionId: string) => void
}

const COLORS = [
  'from-purple-400 to-purple-600',
  'from-blue-400 to-blue-600', 
  'from-green-400 to-green-600',
  'from-yellow-400 to-yellow-600',
  'from-red-400 to-red-600',
  'from-pink-400 to-pink-600',
  'from-indigo-400 to-indigo-600',
  'from-cyan-400 to-cyan-600'
]

function wrapText(text: string, maxChars = 16) {
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

function getNodeRect(text: string) {
  const lines = wrapText(text)
  const paddingX = 32
  const paddingY = 20
  const fontSize = lines.length > 2 ? 12 : 14
  const maxLineLength = Math.max(...lines.map(l => l.length), 0)
  const width = Math.max(100, maxLineLength * (fontSize * 0.7) + paddingX)
  const height = lines.length * fontSize + paddingY
  return { width, height }
}

export default function ConceptMapCanvas({
  conceptMap,
  onAddNode,
  onEditNode,
  onDeleteNode,
  onConnectNodes,
  onDeleteConnection
}: ConceptMapCanvasProps) {
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = useState(false)
  const [panStart, setPanStart] = useState<{ x: number; y: number } | null>(null)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [editingNode, setEditingNode] = useState<string | null>(null)
  const [editContent, setEditContent] = useState('')
  const [editCategory, setEditCategory] = useState('')
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [newNodeContent, setNewNodeContent] = useState('')
  const [newNodeCategory, setNewNodeCategory] = useState('')
  const [addPosition, setAddPosition] = useState({ x: 0, y: 0 })
  const [connecting, setConnecting] = useState<string | null>(null)
  const [showConnectionDialog, setShowConnectionDialog] = useState(false)
  const [connectionTarget, setConnectionTarget] = useState<string | null>(null)
  const [relationshipLabel, setRelationshipLabel] = useState('')

  const svgRef = useRef<SVGSVGElement>(null)

  // Calculate bounding box
  const bbox = useMemo(() => {
    if (!conceptMap.nodes.length) return { minX: 0, minY: 0, maxX: 800, maxY: 600 }
    
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
    conceptMap.nodes.forEach(node => {
      const { width, height } = getNodeRect(node.content)
      minX = Math.min(minX, node.positionX - width / 2)
      maxX = Math.max(maxX, node.positionX + width / 2)
      minY = Math.min(minY, node.positionY - height / 2)
      maxY = Math.max(maxY, node.positionY + height / 2)
    })
    return { minX, minY, maxX, maxY }
  }, [conceptMap.nodes])

  const padding = 100
  const viewBox = [
    bbox.minX - padding,
    bbox.minY - padding,
    bbox.maxX - bbox.minX + 2 * padding,
    bbox.maxY - bbox.minY + 2 * padding
  ].join(' ')

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(conceptMap.nodes.map(n => n.category).filter(Boolean))]
    return cats.length > 0 ? cats : ['default']
  }, [conceptMap.nodes])

  const getCategoryColor = (category?: string) => {
    if (!category) return COLORS[0]
    const index = categories.indexOf(category)
    return COLORS[index % COLORS.length]
  }

  // Event handlers
  const handleZoomIn = () => setZoom(z => Math.min(z * 1.2, 5))
  const handleZoomOut = () => setZoom(z => Math.max(z / 1.2, 0.2))

  const handleCanvasDoubleClick = (e: React.MouseEvent) => {
    const rect = svgRef.current?.getBoundingClientRect()
    if (!rect) return
    
    const x = (e.clientX - rect.left - pan.x) / zoom
    const y = (e.clientY - rect.top - pan.y) / zoom
    
    setAddPosition({ x, y })
    setShowAddDialog(true)
    setNewNodeContent('')
    setNewNodeCategory('')
  }

  const handleNodeClick = (e: React.MouseEvent, nodeId: string) => {
    e.stopPropagation()
    if (connecting) {
      if (connecting !== nodeId) {
        setConnectionTarget(nodeId)
        setShowConnectionDialog(true)
      }
      setConnecting(null)
    } else {
      setSelectedNode(nodeId)
    }
  }

  const handleNodeDoubleClick = (e: React.MouseEvent, node: ConceptNode) => {
    e.stopPropagation()
    setEditingNode(node.id)
    setEditContent(node.content)
    setEditCategory(node.category || '')
  }

  const handleEditSave = () => {
    if (editingNode && onEditNode && editContent.trim()) {
      onEditNode(editingNode, editContent.trim(), editCategory || undefined)
      setEditingNode(null)
      setEditContent('')
      setEditCategory('')
    }
  }

  const handleAddSave = () => {
    if (onAddNode && newNodeContent.trim()) {
      onAddNode(newNodeContent.trim(), addPosition.x, addPosition.y, newNodeCategory || undefined)
      setShowAddDialog(false)
      setNewNodeContent('')
      setNewNodeCategory('')
    }
  }

  const handleDeleteNode = (nodeId: string) => {
    if (onDeleteNode && window.confirm('Are you sure you want to delete this concept?')) {
      onDeleteNode(nodeId)
      setSelectedNode(null)
    }
  }

  const startConnection = (nodeId: string) => {
    setConnecting(nodeId)
    setSelectedNode(null)
  }

  const handleConnectionSave = () => {
    if (connecting && connectionTarget && onConnectNodes && relationshipLabel.trim()) {
      onConnectNodes(connecting, connectionTarget, relationshipLabel.trim())
      setShowConnectionDialog(false)
      setConnectionTarget(null)
      setRelationshipLabel('')
    }
  }

  const renderNode = (node: ConceptNode) => {
    const { width, height } = getNodeRect(node.content)
    const lines = wrapText(node.content)
    const fontSize = lines.length > 2 ? 12 : 14
    const isSelected = selectedNode === node.id
    const isEditing = editingNode === node.id
    const colorGradient = getCategoryColor(node.category)

    return (
      <g key={node.id} transform={`translate(${node.positionX},${node.positionY})`}>
        {/* Node background */}
        <rect
          x={-width / 2}
          y={-height / 2}
          width={width}
          height={height}
          rx={12}
          fill={`url(#gradient-${node.category || 'default'})`}
          stroke={isSelected ? '#3b82f6' : '#fff'}
          strokeWidth={isSelected ? 4 : 2}
          filter="url(#shadow)"
          style={{ cursor: 'pointer' }}
          onClick={(e) => handleNodeClick(e, node.id)}
          onDoubleClick={(e) => handleNodeDoubleClick(e, node)}
        />

        {/* Category indicator */}
        {node.category && (
          <rect
            x={-width / 2}
            y={-height / 2}
            width={width}
            height={6}
            rx={12}
            fill={`url(#gradient-${node.category})`}
            opacity={0.8}
          />
        )}

        {/* Node action buttons */}
        {isSelected && !isEditing && (
          <g>
            {/* Connect button */}
            <circle
              cx={width / 2 + 20}
              cy={0}
              r={12}
              fill="#10b981"
              stroke="#fff"
              strokeWidth={2}
              style={{ cursor: 'pointer' }}
              onClick={() => startConnection(node.id)}
            />
            <text
              x={width / 2 + 20}
              y={0}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={10}
              fill="#fff"
              fontWeight="bold"
              style={{ pointerEvents: 'none' }}
            >
              ↔
            </text>
            
            {/* Edit button */}
            <circle
              cx={width / 2 + 20}
              cy={-25}
              r={12}
              fill="#3b82f6"
              stroke="#fff"
              strokeWidth={2}
              style={{ cursor: 'pointer' }}
              onClick={(e) => handleNodeDoubleClick(e, node)}
            />
            <text
              x={width / 2 + 20}
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
            
            {/* Delete button */}
            <circle
              cx={width / 2 + 20}
              cy={25}
              r={12}
              fill="#ef4444"
              stroke="#fff"
              strokeWidth={2}
              style={{ cursor: 'pointer' }}
              onClick={() => handleDeleteNode(node.id)}
            />
            <text
              x={width / 2 + 20}
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
          </g>
        )}

        {/* Node text */}
        {!isEditing && lines.map((line, i) => (
          <text
            key={i}
            x={0}
            y={fontSize * (i - (lines.length - 1) / 2)}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={fontSize}
            fill="#fff"
            fontWeight="bold"
            style={{ pointerEvents: 'none' }}
          >
            {line}
          </text>
        ))}

        {/* Category label */}
        {node.category && !isEditing && (
          <text
            x={0}
            y={height / 2 + 16}
            textAnchor="middle"
            fontSize={10}
            fill="#666"
            fontWeight="bold"
            style={{ pointerEvents: 'none' }}
          >
            {node.category}
          </text>
        )}
      </g>
    )
  }

  return (
    <div className="w-full h-full relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-lg shadow-lg overflow-hidden">
      {/* Zoom controls */}
      <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
        <button
          className="bg-white/80 dark:bg-gray-800/80 rounded-full shadow p-2 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
          onClick={handleZoomIn}
        >
          <span className="text-2xl font-bold">+</span>
        </button>
        <button
          className="bg-white/80 dark:bg-gray-800/80 rounded-full shadow p-2 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
          onClick={handleZoomOut}
        >
          <span className="text-2xl font-bold">−</span>
        </button>
      </div>

      {/* Category legend */}
      {categories.length > 1 && (
        <div className="absolute top-6 right-6 z-10 bg-white/90 dark:bg-gray-800/90 rounded-lg p-4 shadow">
          <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Categories</h4>
          <div className="space-y-1">
            {categories.map((category, index) => (
              <div key={category} className="flex items-center gap-2">
                <div 
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${getCategoryColor(category)}`}
                />
                <span className="text-xs text-gray-600 dark:text-gray-400">{category}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Title */}
      <div className="text-3xl font-bold text-center mb-8 pt-6 text-gray-800 dark:text-white">
        {conceptMap.title}
      </div>

      <svg
        ref={svgRef}
        width="100%"
        height="600"
        viewBox={viewBox}
        style={{
          transform: `translate(${pan.x}px,${pan.y}px) scale(${zoom})`,
          transition: isPanning ? 'none' : 'transform 0.2s'
        }}
        onDoubleClick={handleCanvasDoubleClick}
      >
        {/* Gradients */}
        <defs>
          {categories.map((category) => (
            <linearGradient
              key={category}
              id={`gradient-${category}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={getCategoryColor(category).split(' ')[0].replace('from-', '')} />
              <stop offset="100%" stopColor={getCategoryColor(category).split(' ')[1].replace('to-', '')} />
            </linearGradient>
          ))}
          
          {/* Shadow filter */}
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="8"
              floodColor="#000"
              floodOpacity="0.18"
            />
          </filter>
        </defs>

        {/* Connections */}
        {conceptMap.connections.map(connection => {
          const fromNode = conceptMap.nodes.find(n => n.id === connection.fromNodeId)
          const toNode = conceptMap.nodes.find(n => n.id === connection.toNodeId)
          
          if (!fromNode || !toNode) return null
          
          const midX = (fromNode.positionX + toNode.positionX) / 2
          const midY = (fromNode.positionY + toNode.positionY) / 2
          
          return (
            <g key={connection.id}>
              <line
                x1={fromNode.positionX}
                y1={fromNode.positionY}
                x2={toNode.positionX}
                y2={toNode.positionY}
                stroke="#666"
                strokeWidth={2}
                strokeDasharray="none"
              />
              
              {/* Relationship label background */}
              <rect
                x={midX - connection.relationshipLabel.length * 3}
                y={midY - 10}
                width={connection.relationshipLabel.length * 6}
                height={20}
                rx={10}
                fill="#fff"
                stroke="#666"
                strokeWidth={1}
                opacity={0.9}
              />
              
              {/* Relationship label */}
              <text
                x={midX}
                y={midY}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={11}
                fill="#333"
                fontWeight="bold"
              >
                {connection.relationshipLabel}
              </text>
            </g>
          )
        })}

        {/* Nodes */}
        {conceptMap.nodes.map(renderNode)}
      </svg>

      {/* Instructions */}
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 pointer-events-none">
        <span>
          {connecting ? 'Click another concept to create relationship' : 'Double-click canvas to add concepts. Click concepts to select.'}
        </span>
      </div>

      {/* Edit Node Dialog */}
      {editingNode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Edit Concept</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Content</label>
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full p-3 border rounded-lg resize-none h-24 text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700"
                  placeholder="Enter concept content..."
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Category (optional)</label>
                <input
                  type="text"
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value)}
                  className="w-full p-3 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700"
                  placeholder="e.g., Process, Person, Location..."
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleEditSave}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Save
              </button>
              <button
                onClick={() => setEditingNode(null)}
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
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Add New Concept</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Content</label>
                <textarea
                  value={newNodeContent}
                  onChange={(e) => setNewNodeContent(e.target.value)}
                  className="w-full p-3 border rounded-lg resize-none h-24 text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700"
                  placeholder="Enter concept content..."
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Category (optional)</label>
                <input
                  type="text"
                  value={newNodeCategory}
                  onChange={(e) => setNewNodeCategory(e.target.value)}
                  className="w-full p-3 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700"
                  placeholder="e.g., Process, Person, Location..."
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleAddSave}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
              >
                Add Concept
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

      {/* Connection Dialog */}
      {showConnectionDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Create Relationship</h3>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Relationship Label</label>
              <input
                type="text"
                value={relationshipLabel}
                onChange={(e) => setRelationshipLabel(e.target.value)}
                className="w-full p-3 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700"
                placeholder="e.g., 'is part of', 'causes', 'relates to'..."
                autoFocus
              />
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleConnectionSave}
                className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
              >
                Create Relationship
              </button>
              <button
                onClick={() => setShowConnectionDialog(false)}
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