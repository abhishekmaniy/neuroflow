'use client'

import { useUserStore } from '@/store/user-store'
import { Workspace } from '@/types'
import { useAuth } from '@clerk/nextjs'
import axios from 'axios'
import { Calendar, Home, Inbox, LogOut, Search, Settings, Sparkles } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import CreateDialog from '../WorkspaceDialog'

const items = [
  { title: 'Home', url: '#', icon: Home },
  { title: 'Inbox', url: '#', icon: Inbox },
  { title: 'Calendar', url: '#', icon: Calendar },
  { title: 'Search', url: '#', icon: Search },
  { title: 'Settings', url: '#', icon: Settings }
]

export function MindmapSidebar({ workspaceId }: { workspaceId: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const [workspace, setWorkspace] = useState<Workspace | null>(null)
  const { user, setUser, workspaces, setTeams } = useUserStore()
  const [openWorkspaceDialog, setOpenWorkspaceDialog] = useState(false)
  const [openTeamDialog, setOpenTeamDialog] = useState(false)
  const [loading, setLoading] = useState(false)
  const { userId, signOut } = useAuth()
  const teams = workspace?.teams
  console.log(teams)
  const router = useRouter()
  const pathname = usePathname()

  // Selected workspace/team state
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState<string | null>(
    workspaceId || null
  )
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(
    teams?.[0]?.id || null
  )

  const fetchWorkspaces = async () => {
    try {
      const response = await axios.get('/api/workspaces')
      setTeams(response.data) // or setWorkspaces if you have it
    } catch (e) { }
  }
  const fetchTeams = async () => {
    if (!workspaceId) return
    try {
      const response = await axios.get(`/api/workspace/${workspaceId}`)
      setWorkspace(response.data)
    } catch (e) { }
  }

  // Fetch workspace only once when workspaceId changes
  useEffect(() => {
    const getWorkSpace = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`/api/workspace/${workspaceId}`)
        setWorkspace(response.data)
        setSelectedWorkspaceId(response.data.id)
      } catch (e) {
        setWorkspace(null)
      }
      setIsLoading(false)
    }
    if (workspaceId) getWorkSpace()
  }, [workspaceId])

  // Fetch user only once when userId changes
  useEffect(() => {
    const getUser = async () => {
      if (!userId) return
      try {
        const response = await axios.get(`/api/get-user/${userId}`)
        setUser(response.data)
        // Set default selected team if not set
        if (response.data?.TeamMember?.[0]?.team?.id) {
          setSelectedTeamId(response.data.TeamMember[0].team.id)
        }
      } catch (e) {
        // handle error
      }
    }
    if (userId) getUser()
    // eslint-disable-next-line
  }, [userId, setUser])

  const handleAddWorkspace = () => setOpenWorkspaceDialog(true)
  const handleAddTeam = () => setOpenTeamDialog(true)

  const handleCreateWorkspace = async (workspaceName: string) => {
    setLoading(true)
    try {
      const response = await axios.post('/api/workspace', {
        workspaceName,
        userId
      })
      // Refetch workspaces
      await fetchWorkspaces()
      // Redirect to new workspace
      router.push(`/workspace/${response.data.id}`)
      setSelectedWorkspaceId(response.data.id)
    } finally {
      setLoading(false)
      setOpenWorkspaceDialog(false)
    }
  }

  const handleCreateTeam = async (teamName: string) => {
    setLoading(true)
    try {
      const response = await axios.post('/api/team', {
        teamName,
        userId,
        workspaceId
      })
      // Refetch teams
      await fetchTeams()
      // Redirect to new team
      router.push(`/team/${response.data.id}`)
      setSelectedTeamId(response.data.id)
    } finally {
      setLoading(false)
      setOpenTeamDialog(false)
    }
  }

  // Get selected workspace/team objects
  const selectedWorkspace =
    workspaces?.find(ws => ws.id === selectedWorkspaceId) ||
    workspace ||
    workspaces?.[0]
  const selectedTeam =
    teams?.find(team => team.id === selectedTeamId) || teams?.[0]

  return (
    <>
      <aside className='h-full w-64 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border-r border-blue-100 dark:border-blue-900 shadow-2xl flex flex-col'>
        {/* Logo/Header */}
        <div className='px-6 py-8 flex flex-col items-center border-b border-blue-100 dark:border-blue-900'>
          <div className='flex items-center gap-2 mb-2'>
            <Sparkles className='w-7 h-7 text-blue-500 dark:text-blue-300 animate-pulse' />
            <span className='text-2xl font-extrabold text-blue-700 dark:text-white tracking-wide'>
              NeuroFlow
            </span>
          </div>
          <span className='text-xs text-blue-400 dark:text-blue-200 font-medium tracking-wide'>
            Mind Map Workspace
          </span>
          <span>
            <Button onClick={() => signOut()} ><LogOut /></Button>
          </span>
        </div>
        {/* Navigation */}
        <nav className='flex-1 px-4 py-6 space-y-6'>
          {/* Workspace Dropdown */}
          <div className='flex items-center justify-between mb-1 px-2 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/30'>
            <span className='text-blue-700 dark:text-blue-200 font-semibold'>
              Workspaces
            </span>
            <Button
              size='sm'
              variant='ghost'
              className='text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800'
              onClick={handleAddWorkspace}
            >
              +
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className='w-full flex items-center justify-between px-4 py-2 rounded-lg bg-blue-100/60 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition mb-2'>
                <span>{selectedWorkspace?.name || 'Workspace'}</span>
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-blue-100 dark:border-blue-800 py-2 mt-2 min-w-[200px]'>
              <DropdownMenuLabel className='px-4 py-2 text-blue-700 dark:text-blue-200 font-semibold'>
                Workspaces
              </DropdownMenuLabel>
              <DropdownMenuSeparator className='my-1' />
              {workspaces?.map(ws => {
                const isActive = pathname === `/workspace/${ws.id}`
                return (
                  <DropdownMenuItem
                    key={ws.id}
                    className={`px-4 py-2 text-blue-900 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-800/40 cursor-pointer rounded transition ${isActive
                      ? 'bg-blue-200 dark:bg-blue-800 font-bold text-blue-800 dark:text-blue-200'
                      : ''
                      }`}
                    onClick={() => {
                      setSelectedWorkspaceId(ws.id)
                      router.push(`/workspace/${ws.id}`)
                    }}
                  >
                    {ws.name}
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Team Dropdown */}
          <div className='flex items-center justify-between mb-1 px-2 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/30'>
            <span className='text-blue-700 dark:text-blue-200 font-semibold'>
              Teams
            </span>
            <Button
              size='sm'
              variant='ghost'
              className='text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800'
              onClick={handleAddTeam}
            >
              +
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className='w-full flex items-center justify-between px-4 py-2 rounded-lg bg-blue-100/60 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition'>
                <span>{selectedTeam?.name || 'Team'}</span>
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-blue-100 dark:border-blue-800 py-2 mt-2 min-w-[200px]'>
              <DropdownMenuLabel className='px-4 py-2 text-blue-700 dark:text-blue-200 font-semibold'>
                Teams
              </DropdownMenuLabel>
              <DropdownMenuSeparator className='my-1' />
              {teams?.map(team => {
                const isActive = pathname === `/team/${team.id}`
                return (
                  <DropdownMenuItem
                    key={team.id}
                    className={`px-4 py-2 text-blue-900 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-800/40 cursor-pointer rounded transition ${isActive
                      ? 'bg-blue-200 dark:bg-blue-800 font-bold text-blue-800 dark:text-blue-200'
                      : ''
                      }`}
                    onClick={() => {
                      setSelectedTeamId(team.id)
                      router.push(`/team/${team.id}`)
                    }}
                  >
                    {team.name}
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        {/* Footer */}
        <div className='mt-auto px-6 py-4 border-t border-blue-100 dark:border-blue-900 text-xs text-blue-400 dark:text-blue-200 text-center'>
          &copy; {new Date().getFullYear()} NeuroFlow
        </div>
      </aside>
      <CreateDialog
        open={openWorkspaceDialog}
        setOpen={setOpenWorkspaceDialog}
        onCreate={handleCreateWorkspace}
        title='Workspace'
        description='Give your new workspace a name.'
        placeholder='Eg. Demo'
        loading={loading}
      />
      <CreateDialog
        open={openTeamDialog}
        setOpen={setOpenTeamDialog}
        onCreate={handleCreateTeam}
        title='Team'
        description='Give your new team a name.'
        placeholder='Eg. Marketing'
        loading={loading}
      />
    </>
  )
}
