import MindMapCanvas from '@/components/mindmap/Canvas'
import { MindmapSidebar } from '@/components/mindmap/MindmapSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

const MindmapWorkspacePage = () => {
  return (
    <div className='flex h-screen w-screen overflow-hidden'>
      <SidebarProvider>
        <MindmapSidebar />
        <MindMapCanvas  />
      </SidebarProvider>
    </div>
  )
}

export default MindmapWorkspacePage
