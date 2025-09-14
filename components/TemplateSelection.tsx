import { useMindMapStore } from '@/store/mindmap-store'
import { useUserStore } from '@/store/user-store'
import { useAuth } from '@clerk/nextjs'
import axios from 'axios'
import { Router } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaProjectDiagram, FaSitemap, FaBrain } from 'react-icons/fa'

const templates = [
  {
    key: 'flowchart',
    name: 'Flowchart',
    icon: <FaProjectDiagram />,
    description: 'Visualize processes and workflows step by step.'
  },
  {
    key: 'mindmap',
    name: 'Mind Map',
    icon: <FaSitemap />,
    description: 'Organize ideas and concepts visually.'
  },
  {
    key: 'conceptmap',
    name: 'Concept Map',
    icon: <FaBrain />,
    description: 'Show relationships between concepts.'
  }
]

interface TemplateSelectionProps {
  onSelect?: (key: string) => void
}

const TemplateSelection = ({ onSelect }: TemplateSelectionProps) => {
  const [selected, setSelected] = useState<string | null>(null)
  const [prompt, setPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { userId } = useAuth()
  const { mindMap, setMindMap } = useMindMapStore()
  const router = useRouter()
  const { workspaceId } = useParams()

  const handleSelect = (key: string) => {
    setSelected(key)
    if (onSelect) onSelect(key)
  }

  const handleGenerateMindmap = async () => {
    setIsLoading(true)
    const response = await axios.post('/api/gemini-process', {
      prompt,
      userId,
      workspaceId
    })

    const { data } = response.data

    setMindMap(data)
    router.push(`/${data.id}`)
  }

  const selectedTemplate = templates.find(t => t.key === selected)

  return (
    <section className='relative flex items-center justify-center min-h-screen w-full overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-gradient-to-tr from-blue-200 via-white to-blue-400 opacity-50 blur-3xl rounded-full'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 via-white to-blue-300 opacity-30 blur-2xl rounded-full'></div>
        <div className='absolute top-1/3 left-1/4 w-40 h-40 bg-blue-100/60 dark:bg-blue-900/30 rounded-full blur-xl animate-float'></div>
        <div className='absolute top-24 right-1/4 w-16 h-16 bg-blue-200 dark:bg-blue-900/30 rounded-lg rotate-12 animate-float'></div>
        <div className='absolute bottom-32 right-1/3 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg rotate-45 animate-float delay-500'></div>
      </div>

      {/* Main Card */}
      <div className='relative z-10 w-full max-w-5xl mx-auto px-4 md:px-16 py-14 bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-blue-100 dark:border-blue-900/40 flex flex-col items-center'>
        <div className='bg-gradient-to-r from-blue-500 to-blue-700 inline-block rounded-full py-2 px-7 mb-7 text-white text-base font-semibold shadow-lg'>
          🎨 Choose a Visual Template
        </div>
        <h1 className='text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-blue-900 dark:text-white drop-shadow-lg text-center'>
          Select Your{' '}
          <span className='bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent'>
            Template
          </span>
        </h1>
        <p className='text-lg md:text-2xl text-blue-700 dark:text-blue-200 mb-10 max-w-3xl mx-auto font-medium text-center'>
          NeuroFlow helps you visualize your ideas as{' '}
          <span className='font-bold'>Flowcharts</span>,{' '}
          <span className='font-bold'>Mind Maps</span>, or{' '}
          <span className='font-bold'>Concept Maps</span>. Pick one to get
          started!
        </p>
        <div className='flex justify-center gap-6 mb-10 w-full'>
          {templates.map(t => (
            <button
              key={t.key}
              className={`flex flex-col items-center px-8 py-6 rounded-2xl border-2 transition-all duration-200 shadow-sm hover:shadow-lg cursor-pointer group
                ${
                  selected === t.key
                    ? 'bg-blue-600 border-blue-700 text-white scale-105'
                    : 'bg-white/80 dark:bg-blue-950/80 text-blue-900 dark:text-white border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/40'
                }`}
              onClick={() => handleSelect(t.key)}
              type='button'
              title={t.name}
            >
              <span className='text-4xl mb-3 group-hover:scale-125 transition-transform'>
                {t.icon}
              </span>
              <span className='font-semibold text-xl mb-1'>{t.name}</span>
              <span className='text-sm text-blue-700 dark:text-blue-200'>
                {t.description}
              </span>
            </button>
          ))}
        </div>
        {selectedTemplate && (
          <div className='w-full text-white max-w-lg mx-auto bg-white/90 dark:bg-blue-950/80 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-800 p-6 text-center'>
            <h2 className='text-2xl font-bold mb-2 flex items-center justify-center gap-2'>
              <span className='text-2xl'>{selectedTemplate.icon}</span>
              {selectedTemplate.name}
            </h2>
            <p className='text-blue-700 dark:text-blue-200'>
              {selectedTemplate.description}
            </p>
            {selected === 'mindmap' && (
              <form
                onSubmit={e => {
                  e.preventDefault()
                }}
                className='w-full flex flex-col md:flex-row gap-4 items-center justify-center mb-7 mt-8'
              >
                <input
                  type='text'
                  className='flex-grow px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-700 bg-white/90 dark:bg-blue-950/80 text-lg text-blue-900 dark:text-white shadow focus:ring-2 focus:ring-blue-400 focus:outline-none transition'
                  placeholder='Enter a topic or idea to map out...'
                  onChange={e => setPrompt(e.target.value)}
                />
                <button
                  type='submit'
                  className='bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow hover:scale-105 transition'
                  onClick={() => handleGenerateMindmap()}
                >
                  Generate Mind Map
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default TemplateSelection
