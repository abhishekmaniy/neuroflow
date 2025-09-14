'use client'

import MindMapCanvas from '@/components/mindmap/Canvas'
import { MindmapSidebar } from '@/components/mindmap/MindmapSidebar'
import TeamTemplate from '@/components/TeamTemplate'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const props = useParams()

  const { teamId } = props

  if (typeof teamId !== 'string') {
    throw new Error('teamId is required and must be a string')
  }

  return (
    <div className='flex h-screen w-screen overflow-hidden'>
      <SidebarProvider>
        <MindmapSidebar teamId={teamId} />
        <TeamTemplate />
      </SidebarProvider>
    </div>
  )
}

export default page
