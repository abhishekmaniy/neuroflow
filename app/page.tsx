'use client'

import CallToAction from '@/components/CallToAction'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import { useEffect } from 'react'

export default function Home () {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900'>
      <Navbar />
      <main className='flex-1'>
        <section className='relative'>
          <div className='absolute inset-0 pointer-events-none z-0'>
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-[80vw] h-[60vh] bg-gradient-to-tr from-purple-300 via-blue-200 to-pink-200 opacity-40 blur-3xl rounded-full'></div>
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200 via-blue-100 to-purple-200 opacity-30 blur-2xl rounded-full'></div>
          </div>
          <div className='relative z-10'>
            <Hero />
          </div>
        </section>
        <section className='relative py-16'>
          <div className='container mx-auto px-4'>
            <Features />
          </div>
        </section>
        <section className='relative py-16 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl mx-4 my-8 shadow-2xl border border-white/30 dark:border-gray-800/40'>
          <div className='container mx-auto px-4'>
            <HowItWorks />
          </div>
        </section>
        <section className='relative py-16'>
          <div className='container mx-auto px-4'>
            <Testimonials />
          </div>
        </section>
        <section className='relative py-16 bg-gradient-to-r from-neuro-primary via-neuro-blue to-neuro-secondary rounded-3xl mx-4 my-8 shadow-xl'>
          <div className='container mx-auto px-4'>
            <Pricing />
          </div>
        </section>
        <section className='relative py-16'>
          <div className='container mx-auto px-4'>
            <CallToAction />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
