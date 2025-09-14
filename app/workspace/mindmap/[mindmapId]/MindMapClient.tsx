// app/mindmap/MindMapClient.tsx
'use client'

import Navbar from '@/components/Navbar'
import MindMapCanvas from '@/components/mindmap/Canvas'
import ChatInterface from '@/components/mindmap/ChatInterface'
import ControlPanel from '@/components/mindmap/ControlPannel'
import ExportDialog from '@/components/mindmap/ExportDialog'
import { toast } from '@/hooks/use-toast'
import { GeneratedBy } from '@/lib/generated/prisma'
import { useChatStore } from '@/store/chat-store'
import { useMindMapStore } from '@/store/mindmap-store'
import { MindMap, Node } from '@/types'
import { useAuth } from '@clerk/nextjs'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const MindMapClient = () => {
  const params = useParams()
  const { mindmapId } = params

  const { mindMap, setMindMap } = useMindMapStore()
  const { setChat } = useChatStore()
  const [nodes, setNodes] = useState<Node[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const { userId } = useAuth()

  const getMindMap = async (id: string) => {
    setIsLoading(true)
    const response = await axios.get(`/api/mindmap/${id}`)
    const { data } = response
    const mindmap: MindMap = {
      id: data.id,
      title: data.title,
      userId: data.userId,
      isPublic: data.isPublic,
      generatedBy: GeneratedBy.AI,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      nodes: data.nodes || [],
      Chat: data.Chat || null,
      User: data.User || null,
      chatId: data.chatId
    }

    setMindMap(mindmap)
    setNodes(data.nodes)
    if (mindmap.Chat || mindmap.Chat) {
      setChat(mindmap.Chat ?? mindmap.Chat)
    }
    setIsLoading(false)
    toast({
      title: 'Mind map loaded successfully!'
    })
    return data
  }

  // Node management functions
  const handleAddNode = async (parentId: string, content: string) => {
    try {
      const response = await axios.post(`/api/mindmap/${mindmapId}/nodes`, {
        parentId,
        content
      })
      
      // Refresh the mindmap
      if (typeof mindmapId === 'string') {
        await getMindMap(mindmapId)
      }
      
      toast({
        title: 'Node added successfully!'
      })
    } catch (error) {
      console.error('Error adding node:', error)
      toast({
        title: 'Failed to add node',
        variant: 'destructive'
      })
    }
  }

  const handleEditNode = async (nodeId: string, content: string) => {
    try {
      await axios.put(`/api/mindmap/${mindmapId}/nodes`, {
        nodeId,
        content
      })
      
      // Refresh the mindmap
      if (typeof mindmapId === 'string') {
        await getMindMap(mindmapId)
      }
      
      toast({
        title: 'Node updated successfully!'
      })
    } catch (error) {
      console.error('Error updating node:', error)
      toast({
        title: 'Failed to update node',
        variant: 'destructive'
      })
    }
  }

  const handleDeleteNode = async (nodeId: string) => {
    try {
      await axios.delete(`/api/mindmap/${mindmapId}/nodes`, {
        data: { nodeId }
      })
      
      // Refresh the mindmap
      if (typeof mindmapId === 'string') {
        await getMindMap(mindmapId)
      }
      
      toast({
        title: 'Node deleted successfully!'
      })
    } catch (error) {
      console.error('Error deleting node:', error)
      toast({
        title: 'Failed to delete node',
        variant: 'destructive'
      })
    }
  }

  useEffect(() => {
    console.log('Updated mindMapData:', mindMap)
  }, [mindMap])

  useEffect(() => {
    if (userId && typeof mindmapId === 'string') {
      getMindMap(mindmapId)
    }
  }, [userId, mindmapId])

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullScreen(true))
        .catch(err =>
          toast({
            title: `Error entering fullscreen: ${err.message}`
          })
        )
    } else {
      document.exitFullscreen().then(() => setIsFullScreen(false))
    }
  }

  const handleRegenerateMindMap = (message: string) => {
    setIsLoading(true)
    setTimeout(() => {
      const updatedData = enhanceMindMap(mindMap, message)
      setMindMap(updatedData)
      setIsLoading(false)
      toast({
        title: 'Mind map updated!'
      })
    }, 1000)
  }

  const handleDownload = (format: string) => {
    toast({
      title: `Downloading mind map as ${format.toUpperCase()}`
    })
  }

  const handleShare = () => {}
  const handleViewHistory = () => {}

  const enhanceMindMap = (currentData: any, message: string) => {
    if (!currentData) return null
    const newData = JSON.parse(JSON.stringify(currentData))
    newData.children = newData.children || []

    if (message.toLowerCase().includes('add')) {
      newData.children.push({
        text: message.replace(/add|Add/g, '').trim(),
        children: [{ text: 'New detail 1' }]
      })
    } else if (message.toLowerCase().includes('expand')) {
      const idx = Math.floor(Math.random() * newData.children.length)
      if (!newData.children[idx].children) newData.children[idx].children = []
      newData.children[idx].children.push({
        text: message.replace(/expand|Expand/g, '').trim()
      })
    }

    return newData
  }

  return (
    <div className='min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
      <Navbar />
      <main className='flex-1 container mx-auto px-4 py-8'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold text-center md:text-left'>
            Mind Map: {mindMap?.title || 'Loading...'}
          </h1>

          <ExportDialog />
        </div>

        <p className='text-gray-600 dark:text-gray-400 mb-6 text-center md:text-left'>
          Explore, refine, and share your mind map
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          <div className='lg:col-span-3'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow h-[600px] overflow-auto flex items-center justify-center'>
              {isLoading ? (
                <div className='flex flex-col items-center w-full h-full justify-center'>
                  <div className='w-16 h-16 border-4 border-neuro-primary border-t-transparent rounded-full animate-spin mb-4'></div>
                  <p className='text-neuro-primary font-medium'>
                    Generating your mind map...
                  </p>
                </div>
              ) : mindMap && mindMap.nodes && mindMap.nodes.length > 0 ? (
                <MindMapCanvas 
                  mindMap={mindMap} 
                  nodes={mindMap.nodes}
                  onAddNode={handleAddNode}
                  onEditNode={handleEditNode}
                  onDeleteNode={handleDeleteNode}
                />
              ) : (
                <div className='flex justify-center items-center h-full text-lg text-gray-500'>
                  No data found
                </div>
              )}
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            <div className='h-[450px]'>
              <ChatInterface onRegenerateMap={handleRegenerateMindMap} />
            </div>
            <ControlPanel
              onDownload={handleDownload}
              onShare={handleShare}
              onViewHistory={handleViewHistory}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default MindMapClient
