'use client'

import { MindmapSidebar } from '@/components/mindmap/MindmapSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import CreateDialog from '@/components/WorkspaceDialog'
import { useUserStore } from '@/store/user-store'
import { useAuth } from '@clerk/nextjs'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type Workspace = {
  id: string
  name: string
  description?: string
}

const containerStyle = {
  minHeight: '100vh',
  height: '100vh',
  width: '100vw',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column' as const
}

const outerContainerStyle = {
  minHeight: '100vh',
  height: '100vh',
  width: '100vw',
  display: 'flex', // Make sidebar and content side by side
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  padding: 0,
  margin: 0
}

const mainContentStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column' as const,
  height: '100vh',
  overflow: 'hidden'
}

const workspaceListStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '2rem',
  width: '100%',
  overflowY: 'auto',
  padding: '2rem 0 4rem 0',
  boxSizing: 'border-box'
}

const cardStyle = {
  cursor: 'pointer',
  background: '#fff',
  borderRadius: '1rem',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  padding: '2rem 2.5rem',
  minWidth: '260px',
  maxWidth: '320px',
  transition: 'transform 0.15s, box-shadow 0.15s',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'flex-start',
  border: '1px solid #e5e7eb'
}

const Page = () => {
  const { userId } = useAuth()
  const { user, setUser } = useUserStore()
  const router = useRouter()
  const workspaces = user?.workspace as Workspace[] | undefined

  const [open, setOpen] = useState(!user?.isProfileSetup)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setOpen(!user?.isProfileSetup)
  }, [user?.isProfileSetup])

  useEffect(() => {
    if (user || !userId) return

    const getUser = async () => {
      const response = await axios.get(`/api/get-user/${userId}`)
      setUser(response.data)
    }

    getUser()
  }, [user, userId, setUser])

  const handleCreateWorkspace = async (workspaceName: string) => {
    setLoading(true)
    try {
      const response = await axios.post('/api/workspace', {
        workspaceName,
        userId
      })
      router.push(`/workspace/${response.data.id}`)
    } finally {
      setLoading(false)
    }
  }

  if (user?.isProfileSetup) {
    return (
      <SidebarProvider>
        <div style={outerContainerStyle}>
          <MindmapSidebar workspaceId='' />
          <div className='flex-1 flex flex-col h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900'>
            <h1 className='text-center text-4xl font-extrabold mt-8 mb-6 text-blue-700 dark:text-white tracking-wide'>
              Your Workspaces
            </h1>
            <div className='flex-1 flex flex-wrap justify-center items-start gap-8 px-8 pb-8 overflow-y-auto'>
              {workspaces && workspaces.length > 0 ? (
                workspaces.map(ws => (
                  <div
                    key={ws.id}
                    onClick={() => router.push(`/workspace/${ws.id}`)}
                    className='cursor-pointer bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border border-blue-100 dark:border-blue-900 rounded-2xl shadow-xl p-8 min-w-[260px] max-w-[320px] flex flex-col items-start transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl'
                  >
                    <h2 className='text-xl font-bold text-blue-700 dark:text-blue-200 mb-2'>
                      {ws.name}
                    </h2>
                    <p className='text-blue-500 dark:text-blue-300 mb-4'>
                      {ws.description || 'No description'}
                    </p>
                    <span className='mt-auto text-xs text-blue-400 dark:text-blue-200'>
                      ID: {ws.id}
                    </span>
                  </div>
                ))
              ) : (
                <p className='text-blue-400 dark:text-blue-200 text-lg'>
                  No workspaces found.
                </p>
              )}
            </div>
          </div>
        </div>
      </SidebarProvider>
    )
  } else {
    return (
      <CreateDialog
        open={open}
        setOpen={setOpen}
        onCreate={handleCreateWorkspace}
        title='Workspace'
        description='Start by creating your first workspace. You can add more later!'
        placeholder='Eg. Demo'
        loading={loading}
        disableClose={true}
      />
    )
  }
}

export default Page
