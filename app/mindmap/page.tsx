'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'
import axios from 'axios'
import { Fullscreen } from 'lucide-react'
import { toast } from 'sonner'

import Navbar from '@/components/Navbar'
import MindMapCanvas from '@/components/mindmap/Canvas'
import ChatInterface from '@/components/mindmap/ChatInterface'
import { Button } from '@/components/ui/button'

import { GeneratedBy, MindMap, Node } from '@/lib/generated/prisma'
import ControlPanel from '@/components/mindmap/ControlPannel'

const MindMapPage = () => {
  const searchParams = useSearchParams()
  const initialPrompt = searchParams.get('prompt') || ''

  const [mindMapData, setMindMapData] = useState<MindMap | null>(null)
  const [nodes, setNodes] = useState<Node[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const { userId } = useAuth()

  // 🧠 Generate mind map from prompt
  const getMindMapAndNodes = async () => {
    setIsLoading(true)
    try {
      if (!userId || !initialPrompt) return
      const mindMap = await generateMindMap(initialPrompt)
      console.log('Generated MindMap:', mindMap)
    } catch (error) {
      toast.error('Failed to generate mind map')
    } finally {
      setIsLoading(false)
    }
  }

  const generateMindMap = async (prompt: string) => {
    const response = await axios.post('/api/gemini-process', { prompt, userId })
    const { data } = response.data

    const generatedByEnum =
      data.generatedBy === 'AI' ? GeneratedBy.AI : GeneratedBy.MANUAL

    const mindmap: MindMap = {
      id: data.id,
      title: data.title,
      userId: data.userId,
      isPublic: data.isPublic,
      generatedBy: generatedByEnum,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    }

    setMindMapData(mindmap)
    setNodes(data.nodes)
    toast.success('Mind map generated successfully!')
    return mindmap
  }

  useEffect(() => {
    if (userId && initialPrompt) {
      getMindMapAndNodes()
    }
  }, [userId, initialPrompt])

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullScreen(true))
        .catch(err => toast.error('Error enabling fullscreen: ' + err.message))
    } else {
      document.exitFullscreen().then(() => setIsFullScreen(false))
    }
  }

  // 🧠 Handle Chat Updates
  const handleRegenerateMindMap = (message: string) => {
    setIsLoading(true)
    setTimeout(() => {
      const updatedData = enhanceMindMap(mindMapData, message)
      setMindMapData(updatedData)
      setIsLoading(false)
      toast.success('Mind map updated!')
    }, 1000)
  }

  // ⚙️ Control Panel Handlers
  const handleDownload = (format: string) => {
    toast.success(`Downloading mind map as ${format.toUpperCase()}`)
  }

  const handleShare = () => {
    // Placeholder – this is handled inside ControlPanel
  }

  const handleViewHistory = () => {
    // Placeholder – expand if needed
  }

  // 🔁 Enhance mind map (local fake augmentation)
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
            Mind Map: {decodeURIComponent(initialPrompt)}
          </h1>
          <Button
            onClick={toggleFullScreen}
            variant='outline'
            size='sm'
            className='flex items-center gap-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
            title="Press 'F' to toggle fullscreen"
          >
            <Fullscreen size={18} />
            {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </Button>
        </div>

        <p className='text-gray-600 dark:text-gray-400 mb-6 text-center md:text-left'>
          Explore, refine, and share your mind map
        </p>

        {isLoading ? (
          <div className='flex items-center justify-center h-[600px]'>
            <div className='flex flex-col items-center'>
              <div className='w-16 h-16 border-4 border-neuro-primary border-t-transparent rounded-full animate-spin mb-4'></div>
              <p className='text-neuro-primary font-medium'>
                Generating your mind map...
              </p>
            </div>
          </div>
        ) : (
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
            {/* Mind Map Canvas */}
            <div className='lg:col-span-3'>
              <div className='bg-white dark:bg-gray-800 rounded-lg shadow h-[600px]'>
                {mindMapData && nodes ? (
                  <MindMapCanvas mindMap={mindMapData} nodes={nodes} />
                ) : (
                  <div className='flex justify-center items-center h-full text-lg text-gray-500'>
                    No data found
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar */}
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
        )}
      </main>
    </div>
  )
}

export default MindMapPage
