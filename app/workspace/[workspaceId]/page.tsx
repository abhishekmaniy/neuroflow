'use client'

import MindMapCanvas from '@/components/mindmap/Canvas'
import { MindmapSidebar } from '@/components/mindmap/MindmapSidebar'
import TemplateSelection from '@/components/TemplateSelection'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useMindMapStore } from '@/store/mindmap-store'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
  const props = useParams()

  const { workspaceId } = props
  const { mindMap, setMindMap } = useMindMapStore()
  const nodes = mindMap?.nodes

  if (typeof workspaceId !== 'string') {
    throw new Error('workspaceId is required and must be a string')
  }

  const [isTemplateSelected, setIsTemplateSelected] = useState(null)

  const handelSelectTemplate = () => {}

  return (
    <div className='flex h-screen w-screen overflow-hidden'>
      <SidebarProvider>
        <MindmapSidebar workspaceId={workspaceId} />
        {!isTemplateSelected ? (
          <TemplateSelection onSelect={handelSelectTemplate} />
        ) : (
          <MindMapCanvas mindMap={mindMap!} nodes={nodes!} />
        )}
      </SidebarProvider>
    </div>
  )
}

export default page
