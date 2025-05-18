'use client'


import Canvas from '@/components/mindmap/Canvas'
import ChatInterface from '@/components/mindmap/ChatInterface'
import ControlPanel from '@/components/mindmap/ControlPannel'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Fullscreen } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

const MindMapPage = () => {
  const searchParams = useSearchParams()
  const initialPrompt = searchParams.get('prompt') || ''
  const [mindMapData, setMindMapData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const { toast: uiToast } = useToast()

  // Handle fullscreen functionality
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        toast.error(
          'Error attempting to enable fullscreen mode: ' + err.message
        )
      })
      setIsFullScreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullScreen(false)
      }
    }
  }

  // Add keyboard listener for fullscreen
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'f' || e.key === 'F') {
        toggleFullScreen()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  // Simulate loading and generating a mind map
  useEffect(() => {
    if (initialPrompt) {
      generateMindMap(initialPrompt)
    }
  }, [initialPrompt])

  const generateMindMap = (prompt: string) => {
    setIsLoading(true)

    // In a real implementation, this would call an AI service
    setTimeout(() => {
      // Generate placeholder data based on the prompt
      const newMindMapData = generatePlaceholderData(prompt)
      setMindMapData(newMindMapData)
      setIsLoading(false)

      toast.success('Mind map generated successfully!')
    }, 1500)
  }

  const handleRegenerateMindMap = (message: string) => {
    // Update the mind map based on the chat message
    setIsLoading(true)

    // In a real implementation, this would call an AI service
    setTimeout(() => {
      // Generate updated data based on the message
      const updatedData = enhanceMindMap(mindMapData, message)
      setMindMapData(updatedData)
      setIsLoading(false)

      toast.success('Mind map updated!')
    }, 1000)
  }

  const handleDownload = (format: string) => {
    // In a real implementation, this would convert the mind map to the chosen format
    // and trigger a download
    toast.success(`Downloading mind map as ${format.toUpperCase()}`)
  }

  const handleShare = () => {
    // Handled in the ControlPanel component
  }

  const handleViewHistory = () => {
    // In a real implementation, this would load the history from the server
  }

  // Helper function to generate placeholder mind map data
  const generatePlaceholderData = (prompt: string) => {
    // Very simple placeholder generator - in a real app, this would use AI
    const mainTopic = prompt.trim()
    const subtopics = [
      'Key Concepts',
      'Applications',
      'Challenges',
      'Resources'
    ]

    return {
      text: mainTopic,
      children: subtopics.map((topic, index) => ({
        text: topic,
        children: Array(Math.floor(Math.random() * 3) + 1)
          .fill(null)
          .map((_, i) => ({
            text: `${topic} detail ${i + 1}`,
            ...(Math.random() > 0.7
              ? {
                  children: [{ text: `Sub-detail ${i + 1}` }]
                }
              : {})
          }))
      }))
    }
  }

  // Helper function to enhance the mind map based on a message
  const enhanceMindMap = (currentData: any, message: string) => {
    if (!currentData) return null

    // Clone the current data
    const newData = JSON.parse(JSON.stringify(currentData))

    // Add a new node based on the message
    // In a real implementation, this would be much more sophisticated
    if (message.toLowerCase().includes('add')) {
      // Add a new branch
      newData.children.push({
        text: message.replace(/add|Add/g, '').trim(),
        children: [{ text: 'New detail 1' }]
      })
    } else if (message.toLowerCase().includes('expand')) {
      // Expand an existing branch
      if (newData.children.length > 0) {
        const randomIndex = Math.floor(Math.random() * newData.children.length)
        newData.children[randomIndex].children = [
          ...(newData.children[randomIndex].children || []),
          { text: message.replace(/expand|Expand/g, '').trim() }
        ]
      }
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
            <div className='lg:col-span-3'>
              <div className='bg-white dark:bg-gray-800 rounded-lg shadow h-[600px]'>
                <Canvas mindMapData={mindMapData} />
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
        )}
      </main>
    </div>
  )
}

export default MindMapPage
