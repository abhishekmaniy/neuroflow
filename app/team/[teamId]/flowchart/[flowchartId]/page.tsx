'use client'

import FlowchartCanvas from '@/components/flowchart/FlowchartCanvas'
import { MindmapSidebar } from '@/components/mindmap/MindmapSidebar'
import { ChatInterface } from '@/components/mindmap/ChatInterface'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface FlowchartData {
  id: string
  title: string
  content: any // This would be the actual flowchart data structure
  teamId: string
}

export default function FlowchartPage() {
  const params = useParams()
  const { teamId, flowchartId } = params
  const [flowchartData, setFlowchartData] = useState<FlowchartData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFlowchartData = async () => {
      try {
        // If this is a new flowchart (bootstrap option), create via API
        if (flowchartId === 'new') {
          try {
            const response = await axios.post(`/api/team/${teamId}/features`, {
              featureType: 'flowchart',
              title: 'New Flowchart',
              prompt: null
            })
            
            if (response.data.success) {
              const result = response.data.data
              // Redirect to the new flowchart
              window.location.href = `/team/${teamId}/flowchart/${result.id}`
              return
            }
          } catch (error) {
            console.error('Error creating flowchart:', error)
            // Fallback to empty data if API call fails
            setFlowchartData({
              id: 'new',
              title: 'Untitled Flowchart',
              content: { nodes: [], edges: [] },
              teamId: teamId as string
            })
          }
        } else {
          // Fetch existing flowchart data
          const response = await axios.get(`/api/team/${teamId}/flowchart/${flowchartId}`)
          setFlowchartData(response.data)
        }
      } catch (error) {
        console.error('Error fetching flowchart data:', error)
      } finally {
        setLoading(false)
      }
    }

    if (teamId && flowchartId) {
      fetchFlowchartData()
    }
  }, [teamId, flowchartId])

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
        
        {/* Main content area with the flowchart canvas */}
        <div className="flex-1 relative">
          <FlowchartCanvas flowchartData={flowchartData} />
        </div>
        
        {/* Right sidebar for AI chat interface */}
        <div className="w-80 border-l border-gray-200 dark:border-gray-800 h-full">
          <ChatInterface flowchartId={flowchartId as string} teamId={teamId as string} />
        </div>
      </SidebarProvider>
    </div>
  )
}