'use client'

import { MindmapSidebar } from '@/components/mindmap/MindmapSidebar'
import { ChatInterface } from '@/components/mindmap/ChatInterface'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'
import dynamic from 'next/dynamic'

// Dynamically import the TLDraw component with no SSR
const WhiteboardCanvas = dynamic(
  () => import('@/components/whiteboard/WhiteboardCanvas'),
  { ssr: false }
)

interface WhiteboardData {
  id: string
  title: string
  content: any // This would be the actual whiteboard data structure
  teamId: string
}

export default function WhiteboardPage() {
  const params = useParams()
  const { teamId, whiteboardId } = params
  const [whiteboardData, setWhiteboardData] = useState<WhiteboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWhiteboardData = async () => {
      try {
        // If this is a new whiteboard (bootstrap option), create via API
        if (whiteboardId === 'new') {
          try {
            const response = await axios.post(`/api/team/${teamId}/features`, {
              featureType: 'whiteboard',
              title: 'New Whiteboard',
              prompt: null
            })
            
            if (response.data.success) {
              const result = response.data.data
              // Redirect to the new whiteboard
              window.location.href = `/team/${teamId}/whiteboard/${result.id}`
              return
            }
          } catch (error) {
            console.error('Error creating whiteboard:', error)
            // Fallback to empty data if API call fails
            setWhiteboardData({
              id: 'new',
              title: 'Untitled Whiteboard',
              content: {},
              teamId: teamId as string
            })
          }
        } else {
          // Fetch existing whiteboard data
          const response = await axios.get(`/api/team/${teamId}/whiteboard/${whiteboardId}`)
          setWhiteboardData(response.data)
        }
      } catch (error) {
        console.error('Error fetching whiteboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    if (teamId && whiteboardId) {
      fetchWhiteboardData()
    }
  }, [teamId, whiteboardId])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <SidebarProvider>
        {/* Left sidebar for navigation and controls */}
        <MindmapSidebar teamId={teamId as string} />
        
        {/* Main content area with the whiteboard canvas */}
        <div className="flex-1 relative">
          <WhiteboardCanvas whiteboardData={whiteboardData} />
        </div>
        
        {/* Right sidebar for AI chat interface */}
        <div className="w-80 border-l border-gray-200 dark:border-gray-800 h-full">
          <ChatInterface whiteboardId={whiteboardId as string} teamId={teamId as string} />
        </div>
      </SidebarProvider>
    </div>
  )
}