import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog'
import { Button } from '../ui/button'
import {
  CloudDownload,
  FileText,
  Calendar,
  FileSliders,
  BookText
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useMindMapStore } from '@/store/mindmap-store'

const ExportDialog = () => {
  const OAUTH_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID

  const REDIRECT_URI_DOCS = `${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI}/docs`
  const REDIRECT_URI_SLIDES = `${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI}/slides`
  const REDIRECT_URI_CALENDAR = `${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI}/calendar`

  const router = useRouter()
  const { mindMap } = useMindMapStore()

  const handleNotionExport = () => {
    // Redirect to your Notion auth or export endpoint
    router.push('/api/notion/export')
  }

  const mindmapId = mindMap?.id
  const state = mindmapId

  const handleSlidesExport = () => {
    const scope =
      'https://www.googleapis.com/auth/presentations https://www.googleapis.com/auth/drive.file'
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${OAUTH_CLIENT_ID}&redirect_uri=${REDIRECT_URI_SLIDES}&response_type=code&scope=${encodeURIComponent(
      scope
    )}&access_type=offline&prompt=consent&state=${state}`
    router.push(authUrl)
  }

  console.log(REDIRECT_URI_DOCS)
  console.log(REDIRECT_URI_SLIDES)
  console.log(REDIRECT_URI_CALENDAR)

  const handleDocsExport = () => {
    const scope =
      'https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive.file'
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${OAUTH_CLIENT_ID}&redirect_uri=${REDIRECT_URI_DOCS}&response_type=code&scope=${encodeURIComponent(
      scope
    )}&access_type=offline&prompt=consent&state=${state}`

    console.log(authUrl)

    router.push(authUrl)
  }

  const handleCalendarExport = () => {
     const scope =
      'https://www.googleapis.com/auth/calendar.events'
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${OAUTH_CLIENT_ID}&redirect_uri=${REDIRECT_URI_CALENDAR}&response_type=code&scope=${encodeURIComponent(
      scope
    )}&access_type=offline&prompt=consent&state=${state}`
    router.push(authUrl)
  }

  const exportOptions = [
    {
      label: 'Notion',
      color: 'text-yellow-500',
      icon: BookText,
      onClick: () => handleNotionExport()
    },
    {
      label: 'Google Slides',
      color: 'text-orange-500',
      icon: FileSliders,
      onClick: () => handleSlidesExport()
    },
    {
      label: 'Google Docs',
      color: 'text-blue-500',
      icon: FileText,
      onClick: () => handleDocsExport()
    },
    {
      label: 'Google Calendar',
      color: 'text-red-500',
      icon: Calendar,
      onClick: () => handleCalendarExport()
    }
  ]
  const scope =
    'https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive.file'

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant='default'
            className='bg-neuro-primary hover:bg-neuro-primary/90 text-white shadow'
          >
            Export Mind Map <CloudDownload className='ml-2 w-5 h-5' />
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[500px] bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-xl'>
          <DialogHeader className='text-center'>
            <div className='w-full h-32 bg-gradient-to-r from-purple-300 via-neuro-primary to-blue-400 rounded-xl mb-4 flex items-center justify-center'>
              <CloudDownload className='w-12 h-12 text-white' />
            </div>
            <DialogTitle className='text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100'>
              Export Your Mind Map
            </DialogTitle>
            <DialogDescription className='text-gray-600 dark:text-gray-400'>
              Select a service below to export and share your generated mind map
              effortlessly.
            </DialogDescription>
          </DialogHeader>

          <div className='grid grid-cols-2 gap-4 py-6'>
            {exportOptions.map(option => {
              const Icon = option.icon
              return (
                <button
                  key={option.label}
                  onClick={option.onClick}
                  className='flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition transform hover:scale-105 hover:border-neuro-primary hover:shadow-lg'
                >
                  <Icon
                    className={`w-8 h-8 mb-2 ${option.color} transition-transform duration-300 group-hover:scale-110`}
                  />
                  <span className='font-medium text-sm text-gray-800 dark:text-gray-100 group-hover:text-neuro-primary transition'>
                    {option.label}
                  </span>
                </button>
              )
            })}
          </div>

          <DialogFooter className='justify-center'>
            <Button variant='ghost' onClick={() => window.location.reload()}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ExportDialog
