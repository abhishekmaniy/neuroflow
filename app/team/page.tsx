'use client'

import { MindmapSidebar } from '@/components/mindmap/MindmapSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useUserStore } from '@/store/user-store'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

const outerContainerStyle = {
  minHeight: '100vh',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  padding: 0,
  margin: 0
}

const Page = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const workspaceId = searchParams.get('workspaceId') || ''
  const [loading, setLoading] = useState(false)
  const { workspaces, teams , user } = useUserStore()
  console.log(teams)

  return (
    <SidebarProvider>
      <div style={outerContainerStyle}>
        <MindmapSidebar workspaceId={workspaceId} />
        <div className='flex-1 flex flex-col h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900'>
          <h1 className='text-center text-3xl font-bold text-blue-700 dark:text-white mt-8 mb-6 tracking-wide'>
            Teams
          </h1>
          <div className='flex-1 flex flex-wrap justify-center items-start gap-8 px-8 pb-8 overflow-y-auto w-full max-w-6xl mx-auto'>
            {loading ? (
              <div className='text-blue-500'>Loading...</div>
            ) : teams.length > 0 ? (
              teams.map(team => (
                <div
                  key={team.id}
                  onClick={() => router.push(`/team/${team.id}`)}
                  className='cursor-pointer bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border border-blue-100 dark:border-blue-900 rounded-2xl shadow-xl p-8 min-w-[220px] max-w-[320px] flex flex-col items-start transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl'
                >
                  <h2 className='text-xl font-bold text-blue-700 dark:text-blue-200 mb-2'>
                    {team.name}
                  </h2>
                  <span className='mt-auto text-xs text-blue-400 dark:text-blue-200'>
                    ID: {team.id}
                  </span>
                </div>
              ))
            ) : (
              <p className='text-blue-400 dark:text-blue-200 text-lg'>
                No teams found.
              </p>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Page
