'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Hero = () => {
  const [prompt, setPrompt] = useState('')
  const router = useRouter()
  const { isSignedIn } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isSignedIn) {
      router.push('/sign-in')
      return
    }
    if (prompt.trim()) {
      const encodedPrompt = encodeURIComponent(prompt)
      router.push(`/mindmap?prompt=${encodedPrompt}`)
    }
  }

  return (
    <section className="relative flex items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Blue/white glassy background shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-gradient-to-tr from-blue-200 via-white to-blue-400 opacity-50 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 via-white to-blue-300 opacity-30 blur-2xl rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-blue-100/60 dark:bg-blue-900/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-24 right-1/4 w-16 h-16 bg-blue-200 dark:bg-blue-900/30 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg rotate-45 animate-float delay-500"></div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-16 py-14 bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-blue-100 dark:border-blue-900/40 flex flex-col items-center">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 inline-block rounded-full py-2 px-7 mb-7 text-white text-base font-semibold shadow-lg">
          ✨ Transform your ideas visually
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-7 leading-tight text-blue-900 dark:text-white drop-shadow-lg text-center">
          Transform Your <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Ideas</span>{' '}
          into <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">Mind Maps</span> Instantly
        </h1>
        <p className="text-lg md:text-2xl text-blue-700 dark:text-blue-200 mb-10 max-w-4xl mx-auto font-medium text-center">
          NeuroFlow uses AI to create beautiful, structured mind maps from your thoughts. Just type your idea, and watch it branch out into an organized visual framework.
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col md:flex-row gap-4 items-center justify-center mb-7"
        >
          <input
            type="text"
            className="flex-grow px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-700 bg-white/90 dark:bg-blue-950/80 text-lg text-blue-900 dark:text-white shadow focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            placeholder="Enter a topic or idea to map out..."
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 text-white font-bold px-10 py-3 rounded-xl shadow-xl hover:scale-105 transition-transform text-lg border-0 outline-none
              before:absolute before:inset-0 before:rounded-xl before:bg-blue-400 before:blur-lg before:opacity-40 before:-z-10"
            style={{ boxShadow: '0 4px 32px 0 rgba(59,130,246,0.25)' }}
          >
            <span className="inline-flex items-center gap-2">
              <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Generate Map
            </span>
          </Button>
        </form>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {[
            'Digital marketing strategy',
            'Learning web development',
            'Project management plan'
          ].map((example, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 text-sm text-blue-700 dark:text-blue-200 font-medium shadow border border-blue-100 dark:border-blue-800"
            >
              Try: <span className="text-blue-600 dark:text-blue-300">{`"${example}"`}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero