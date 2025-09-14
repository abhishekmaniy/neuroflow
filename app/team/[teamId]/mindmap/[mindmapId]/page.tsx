'use client'

import MindMapCanvas from '@/components/mindmap/Canvas'
import { MindmapSidebar } from '@/components/mindmap/MindmapSidebar'
import { ChatInterface } from '@/components/mindmap/ChatInterface'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface MindmapData {
  id: string
  title: string
  content: any // This would be the actual mindmap data structure
  teamId: string
}

export default function MindmapPage() {
  const params = useParams()
  const { teamId, mindmapId } = params
  const [mindmapData, setMindmapData] = useState<MindmapData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMindmapData = async () => {
      try {
        // If this is a new mindmap (bootstrap option), create via API
        if (mindmapId === 'new') {
          try {
            const response = await axios.post(`/api/team/${teamId}/features`, {
              featureType: 'mindmap',
              title: 'New Mindmap',
              prompt: null
            })
            
            if (response.data.success) {
              const result = response.data.data
              // Redirect to the new mindmap
              window.location.href = `/team/${teamId}/mindmap/${result.id}`
              return
            }
          } catch (error) {
            console.error('Error creating mindmap:', error)
            // Fallback to empty data if API call fails
            setMindmapData({
              id: 'new',
              title: 'Untitled Mindmap',
              content: { nodes: [], edges: [] },
              teamId: teamId as string
            })
          }
          setLoading(false)
          return
        }

        // Otherwise fetch the mindmap data from the API
        const response = await axios.get(`/api/team/${teamId}/mindmap/${mindmapId}`)
        setMindmapData(response.data)
      } catch (error) {
        console.error('Error fetching mindmap data:', error)
      } finally {
        setLoading(false)
      }
    }

    if (teamId && mindmapId) {
      fetchMindmapData()
    }
  }, [teamId, mindmapId])

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
        
        {/* Main content area with the mindmap canvas */}
        <div className="flex-1 relative">
          <MindMapCanvas mindmapData={mindmapData} />
        </div>
        
        {/* Right sidebar for AI chat interface */}
        <div className="w-80 border-l border-gray-200 dark:border-gray-800 h-full">
          <ChatInterface mindmapId={mindmapId as string} teamId={teamId as string} />
        </div>
      </SidebarProvider>
    </div>
  )
}