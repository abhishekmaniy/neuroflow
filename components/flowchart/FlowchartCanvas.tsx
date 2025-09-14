'use client'

import React, { useCallback, useEffect, useState } from 'react'
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  Panel,
  NodeTypes,
  EdgeTypes
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import axios from 'axios'
import { useParams } from 'next/navigation'

interface FlowchartCanvasProps {
  flowchartData: any
}

// Define custom node types here if needed
const nodeTypes: NodeTypes = {
  // custom: CustomNode,
}

// Define custom edge types here if needed
const edgeTypes: EdgeTypes = {
  // custom: CustomEdge,
}
export default function FlowchartCanvas({ flowchartData }: FlowchartCanvasProps) {
  const params = useParams()
  const { teamId, flowchartId } = params
  
  // Initialize with empty arrays or data from props
  const initialNodes = flowchartData?.content?.nodes || []
  const initialEdges = flowchartData?.content?.edges || []
  
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [title, setTitle] = useState(flowchartData?.title || 'Untitled Flowchart')
  
  // Save flowchart data when it changes
  const saveFlowchart = useCallback(async () => {
    if (flowchartId === 'new') return
    
    try {
      await axios.put(`/api/team/${teamId}/flowchart/${flowchartId}`, {
        title,
        content: { nodes, edges }
      })
    } catch (error) {
      console.error('Error saving flowchart:', error)
    }
  }, [nodes, edges, title, teamId, flowchartId])
  
  // Save flowchart data when nodes or edges change (debounced)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      saveFlowchart()
    }, 1000)
    
    return () => clearTimeout(timeoutId)
  }, [nodes, edges, saveFlowchart])
  
  // Handle connecting nodes
  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge(params, eds))
  }, [setEdges])
  
  // Add a new node
  const addNode = () => {
    const newNode = {
      id: `node-${nodes.length + 1}`,
      data: { label: `Node ${nodes.length + 1}` },
      position: { x: 100, y: 100 + nodes.length * 100 }
    }
    
    setNodes((nds) => [...nds, newNode])
  }
  
    return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
        <Panel position="top-left">
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={saveFlowchart}
              className="mb-2 px-2 py-1 border rounded w-full"
            />
            <button
              onClick={addNode}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            >
              Add Node
            </button>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  )
}

  
    

}

function wrapText(text: string, maxChars = 12) {
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

export default function FlowchartCanvas({
  flowchart,
  onAddNode,
  onEditNode,
  onDeleteNode,
  onConnectNodes,
  onDeleteConnection
}: FlowchartCanvasProps) {
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = useState(false)
  const [panStart, setPanStart] = useState<{ x: number; y: number } | null>(null)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [editingNode, setEditingNode] = useState<string | null>(null)
  const [editContent, setEditContent] = useState('')
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [newNodeType, setNewNodeType] = useState<FlowchartNode['type']>('process')
  const [newNodeContent, setNewNodeContent] = useState('')
  const [addPosition, setAddPosition] = useState({ x: 0, y: 0 })
  const [connecting, setConnecting] = useState<string | null>(null)

  const svgRef = useRef<SVGSVGElement>(null)

  // Calculate bounding box
  const bbox = useMemo(() => {
    if (!flowchart.nodes.length) return { minX: 0, minY: 0, maxX: 800, maxY: 600 }
    
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
    flowchart.nodes.forEach(node => {
      const style = NODE_STYLES[node.type]
      minX = Math.min(minX, node.positionX - style.width / 2)
      maxX = Math.max(maxX, node.positionX + style.width / 2)
      minY = Math.min(minY, node.positionY - style.height / 2)
      maxY = Math.max(maxY, node.positionY + style.height / 2)
    })
    return { minX, minY, maxX, maxY }
  }, [flowchart.nodes])

  const padding = 100
  const viewBox = [
    bbox.minX - padding,
    bbox.minY - padding,
    bbox.maxX - bbox.minX + 2 * padding,
    bbox.maxY - bbox.minY + 2 * padding
  ].join(' ')

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
  }

  const handleNodeClick = (e: React.MouseEvent, nodeId: string) => {
    e.stopPropagation()
    if (connecting) {
      if (connecting !== nodeId && onConnectNodes) {
        onConnectNodes(connecting, nodeId)
      }
      setConnecting(null)
    } else {
      setSelectedNode(nodeId)
    }
  }

  const handleNodeDoubleClick = (e: React.MouseEvent, node: FlowchartNode) => {
    e.stopPropagation()
    setEditingNode(node.id)
    setEditContent(node.content)
  }

  const handleEditSave = () => {
    if (editingNode && onEditNode && editContent.trim()) {
      onEditNode(editingNode, editContent.trim())
      setEditingNode(null)
      setEditContent('')
    }
  }

  const handleAddSave = () => {
    if (onAddNode && newNodeContent.trim()) {
      onAddNode(newNodeType, newNodeContent.trim(), addPosition.x, addPosition.y)
      setShowAddDialog(false)
      setNewNodeContent('')
    }
  }

  const handleDeleteNode = (nodeId: string) => {
    if (onDeleteNode && window.confirm('Are you sure you want to delete this node?')) {
      onDeleteNode(nodeId)
      setSelectedNode(null)
    }
  }

  const startConnection = (nodeId: string) => {
    setConnecting(nodeId)
    setSelectedNode(null)
  }

  const renderNode = (node: FlowchartNode) => {
    const style = NODE_STYLES[node.type]
    const lines = wrapText(node.content)
    const fontSize = lines.length > 2 ? 12 : 14
    const isSelected = selectedNode === node.id
    const isEditing = editingNode === node.id

    return (
      <g key={node.id} transform={`translate(${node.positionX},${node.positionY})`}>
        {/* Node shape */}
        {style.shape === 'rect' && (
          <rect
            x={-style.width / 2}
            y={-style.height / 2}
            width={style.width}
            height={style.height}
            rx={8}
            fill={`url(#gradient-${node.type})`}
            stroke={isSelected ? '#3b82f6' : '#fff'}
            strokeWidth={isSelected ? 4 : 2}
            filter="url(#shadow)"
            style={{ cursor: 'pointer' }}
            onClick={(e) => handleNodeClick(e, node.id)}
            onDoubleClick={(e) => handleNodeDoubleClick(e, node)}
          />
        )}
        
        {style.shape === 'ellipse' && (
          <ellipse
            cx={0}
            cy={0}
            rx={style.width / 2}
            ry={style.height / 2}
            fill={`url(#gradient-${node.type})`}
            stroke={isSelected ? '#3b82f6' : '#fff'}
            strokeWidth={isSelected ? 4 : 2}
            filter="url(#shadow)"
            style={{ cursor: 'pointer' }}
            onClick={(e) => handleNodeClick(e, node.id)}
            onDoubleClick={(e) => handleNodeDoubleClick(e, node)}
          />
        )}
        
        {style.shape === 'diamond' && (
          <polygon
            points={`0,${-style.height/2} ${style.width/2},0 0,${style.height/2} ${-style.width/2},0`}
            fill={`url(#gradient-${node.type})`}
            stroke={isSelected ? '#3b82f6' : '#fff'}
            strokeWidth={isSelected ? 4 : 2}
            filter="url(#shadow)"
            style={{ cursor: 'pointer' }}
            onClick={(e) => handleNodeClick(e, node.id)}
            onDoubleClick={(e) => handleNodeDoubleClick(e, node)}
          />
        )}

        {/* Node action buttons */}
        {isSelected && !isEditing && (
          <g>
            {/* Connect button */}
            <circle
              cx={style.width / 2 + 20}
              cy={0}
              r={12}
              fill="#10b981"
              stroke="#fff"
              strokeWidth={2}
              style={{ cursor: 'pointer' }}
              onClick={() => startConnection(node.id)}
            />
            <text
              x={style.width / 2 + 20}
              y={0}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={10}
              fill="#fff"
              fontWeight="bold"
              style={{ pointerEvents: 'none' }}
            >
              →
            </text>
            
            {/* Edit button */}
            <circle
              cx={style.width / 2 + 20}
              cy={-25}
              r={12}
              fill="#3b82f6"
              stroke="#fff"
              strokeWidth={2}
              style={{ cursor: 'pointer' }}
              onClick={(e) => handleNodeDoubleClick(e, node)}
            />
            <text
              x={style.width / 2 + 20}
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
              cx={style.width / 2 + 20}
              cy={25}
              r={12}
              fill="#ef4444"
              stroke="#fff"
              strokeWidth={2}
              style={{ cursor: 'pointer' }}
              onClick={() => handleDeleteNode(node.id)}
            />
            <text
              x={style.width / 2 + 20}
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
      </g>
    )
  }

  return (
    <div className="w-full h-full relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-lg shadow-lg overflow-hidden">
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

      {/* Title */}
      <div className="text-3xl font-bold text-center mb-8 pt-6 text-gray-800 dark:text-white">
        {flowchart.title}
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
          {Object.entries(NODE_STYLES).map(([type, style]) => (
            <linearGradient
              key={type}
              id={`gradient-${type}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={style.color.split(' ')[0].replace('from-', '')} />
              <stop offset="100%" stopColor={style.color.split(' ')[1].replace('to-', '')} />
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
        {flowchart.connections.map(connection => {
          const fromNode = flowchart.nodes.find(n => n.id === connection.fromNodeId)
          const toNode = flowchart.nodes.find(n => n.id === connection.toNodeId)
          
          if (!fromNode || !toNode) return null
          
          return (
            <g key={connection.id}>
              <line
                x1={fromNode.positionX}
                y1={fromNode.positionY}
                x2={toNode.positionX}
                y2={toNode.positionY}
                stroke="#666"
                strokeWidth={2}
                markerEnd="url(#arrowhead)"
              />
              {connection.label && (
                <text
                  x={(fromNode.positionX + toNode.positionX) / 2}
                  y={(fromNode.positionY + toNode.positionY) / 2 - 10}
                  textAnchor="middle"
                  fontSize={12}
                  fill="#666"
                  fontWeight="bold"
                >
                  {connection.label}
                </text>
              )}
            </g>
          )
        })}

        {/* Arrow marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="#666"
            />
          </marker>
        </defs>

        {/* Nodes */}
        {flowchart.nodes.map(renderNode)}
      </svg>

      {/* Instructions */}
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 pointer-events-none">
        <span>
          {connecting ? 'Click another node to connect' : 'Double-click canvas to add nodes. Click nodes to select.'}
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
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Add New Node</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Node Type</label>
              <select
                value={newNodeType}
                onChange={(e) => setNewNodeType(e.target.value as FlowchartNode['type'])}
                className="w-full p-3 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="start">Start/End (Oval)</option>
                <option value="process">Process (Rectangle)</option>
                <option value="decision">Decision (Diamond)</option>
                <option value="end">End (Oval)</option>
              </select>
            </div>
            <textarea
              value={newNodeContent}
              onChange={(e) => setNewNodeContent(e.target.value)}
              className="w-full p-3 border rounded-lg resize-none h-24 text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700"
              placeholder="Enter node content..."
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