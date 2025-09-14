'use client'

import MindMapCanvas from '@/components/mindmap/Canvas'
import { MindmapSidebar } from '@/components/mindmap/MindmapSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useMindMapStore } from '@/store/mindmap-store'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

const page = () => {
  const { mindMap , setMindMap } = useMindMapStore()
  const nodes = mindMap?.nodes
  const workspaceId = mindMap?.workspaceId
  const { templateId } = useParams()

  useEffect(() => {
    if (mindMap) {
      return
    }

    const getMindmap = async () => {
      const response = await axios.get(`/api/mindmap/${templateId}`)
      const data = response.data
      setMindMap(data)
    }

    getMindmap()
  }, [])

  if (!mindMap) {
    return <div>Getting Your Mindmap...</div>
  }

  console.log(mindMap)

  return (
    <div className='flex h-screen w-screen overflow-hidden'>
      <SidebarProvider>
        <MindmapSidebar workspaceId={workspaceId!} />
        <MindMapCanvas mindMap={mindMap} nodes={nodes!} />
      </SidebarProvider>
    </div>
  )
}

export default page
