// src/components/Hero.tsx
'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

const FEATURES = [
  {
    key: 'mindmap',
    name: 'Mind Maps',
    description: 'Visually organize your ideas and concepts with intelligent node connections.',
    icon: '🧠'
  },
  {
    key: 'flowchart',
    name: 'Flowcharts',
    description: 'Map out processes and workflows with professional diagrams.',
    icon: '🔗'
  },
  {
    key: 'conceptmap',
    name: 'Concept Maps',
    description: 'Create relationships between concepts and ideas.',
    icon: '📝'
  }
]

const Hero = () => {
  const router = useRouter()
  const { isSignedIn } = useAuth()

  return (
    <section className="relative flex items-center justify-center min-h-[80vh] py-24 md:py-32">
      {/* Background and dynamic shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-indigo-500/10 blur-3xl rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-2xl rounded-full animate-float delay-500"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl animate-float"></div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-16 py-14 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 dark:border-slate-800/40 flex flex-col items-center">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 inline-block rounded-full py-2 px-7 mb-7 text-white text-base font-semibold shadow-lg">
          ✨ Transform your ideas visually
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-7 leading-tight text-slate-900 dark:text-white drop-shadow-md text-center">
          Transform Your{' '}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Ideas
          </span>{' '}
          into Visual{' '}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Diagrams
          </span>{' '}
          Instantly
        </h1>
        <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-300 mb-10 max-w-4xl mx-auto font-medium text-center">
          NeuroFlow uses AI to create beautiful, structured visual diagrams from your thoughts. Collaborate with teams in workspaces and enhance your diagrams with AI assistance.
        </p>
        

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-4xl">
          {FEATURES.map(feature => (
            <div
              key={feature.key}
              className="bg-white/90 dark:bg-slate-950/80 rounded-2xl shadow-lg border border-white/20 dark:border-slate-800 p-6 text-center hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              <span className="text-4xl mb-3 block">{feature.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{feature.name}</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
          {!isSignedIn ? (
            <>
              <Button
                onClick={() => router.push('/sign-in')}
                className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform text-lg border-0"
                style={{ boxShadow: '0 4px 32px 0 rgba(80,60,200,0.25)' }}
              >
                Get Started for Free
              </Button>
            </>
          ) : (
            <Button
              onClick={() => router.push('/workspace')}
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform text-lg border-0"
              style={{ boxShadow: '0 4px 32px 0 rgba(80,60,200,0.25)' }}
            >
              Go to Workspace
            </Button>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
            ✓ AI-powered diagram generation
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
            ✓ Team collaboration in workspaces
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            ✓ Interactive canvas with edit, delete, and create features
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero