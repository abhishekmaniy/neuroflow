'use client'


import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Hero = () => {
  const [prompt, setPrompt] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (prompt.trim()) {
      // Encode the prompt to pass as URL parameter
      const encodedPrompt = encodeURIComponent(prompt)
      router.push(`/mindmap?prompt=${encodedPrompt}`)
    }
  }

  return (
    <div className='relative overflow-hidden'>
      {/* Abstract shapes for background */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-20 left-10 w-64 h-64 rounded-full bg-neuro-soft dark:bg-neuro-primary/20 opacity-60 blur-3xl animate-pulse-slow'></div>
        <div className='absolute bottom-20 right-10 w-80 h-80 rounded-full bg-neuro-light dark:bg-neuro-secondary/30 opacity-40 blur-3xl animate-pulse-slow'></div>
        <div className='absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-neuro-blue/20 dark:bg-neuro-blue/10 opacity-60 blur-2xl animate-float'></div>
      </div>

      {/* Floating elements */}
      <div className='absolute z-0 opacity-80'>
        <div className='absolute top-24 right-1/4 w-16 h-16 bg-purple-200 dark:bg-purple-900/30 rounded-lg rotate-12 animate-float'></div>
        <div className='absolute top-40 left-1/4 w-20 h-20 bg-blue-200 dark:bg-blue-900/30 rounded-full -rotate-12 animate-float delay-300'></div>
        <div className='absolute bottom-32 right-1/3 w-12 h-12 bg-pink-200 dark:bg-pink-900/30 rounded-lg rotate-45 animate-float delay-500'></div>
      </div>

      <div className='container mx-auto px-4 pt-24 pb-40 relative z-10'>
        <div className='max-w-5xl mx-auto text-center'>
          <div className='bg-gradient-to-br from-neuro-primary to-neuro-blue inline-block rounded-full py-2 px-4 mb-6 text-white text-sm font-medium'>
            ✨ Transform your ideas visually
          </div>

          <h1 className='text-5xl md:text-7xl font-extrabold mb-8 leading-tight'>
            Transform Your <span className='neuro-gradient-text'>Ideas</span>{' '}
            into
            <span className='neuro-gradient-text'> Mind Maps</span> Instantly
          </h1>

          <p className='text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto'>
            NeuroFlow uses AI to create beautiful, structured mind maps from
            your thoughts. Just type your idea, and watch it branch out into an
            organized visual framework.
          </p>

          <form
            onSubmit={handleSubmit}
            className='max-w-3xl mx-auto backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 p-2 rounded-2xl shadow-lg'
          >
            <div className='flex flex-col md:flex-row gap-4'>
              <input
                type='text'
                className='neuro-input flex-grow text-lg dark:bg-gray-900 dark:text-white dark:border-gray-700'
                placeholder='Enter a topic or idea to map out...'
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                required
              />
              <Button
                type='submit'
                className='neuro-button-primary md:w-auto w-full text-lg relative overflow-hidden group'
              >
                <span className='relative z-10'>Generate Map</span>
                <span className='absolute inset-0 bg-gradient-to-r from-neuro-primary via-neuro-secondary to-neuro-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
              </Button>
            </div>
          </form>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <span className='px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-300'>
              Try:{' '}
              <span className='text-neuro-primary font-medium'>
                "Digital marketing strategy"
              </span>
            </span>
            <span className='px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-300'>
              Try:{' '}
              <span className='text-neuro-primary font-medium'>
                "Learning web development"
              </span>
            </span>
            <span className='px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-300'>
              Try:{' '}
              <span className='text-neuro-primary font-medium'>
                "Project management plan"
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
