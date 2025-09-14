// src/app/page.tsx or similar
'use client'

import CallToAction from '@/components/CallToAction'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  const { isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isSignedIn) {
      router.push('/workspace')
    }
  }, [isSignedIn, router])

  return (
    <div className='min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans relative overflow-hidden'>
      {/* Background grid and gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-repeat [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0z\' fill=\'none\'/%3E%3Cpath fill=\'%23a0a0a0\' d=\'M10 0L0 10l10 10 10-10zM5 5l5 5 5-5z\'/%3E%3C/svg%3E")', backgroundSize: '20px 20px'}}></div>
      </div>
      <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/10 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-blue-950/20 z-0'></div>

      <Navbar />
      <main className='flex-1 relative z-10'>
        <section id="hero" className='relative'>
          <Hero />
        </section>
        
        <section id="features" className='relative py-20 md:py-32'>
          <div className='container mx-auto px-4'>
            <Features />
          </div>
        </section>
        
        <section id="how-it-works" className='relative py-20 md:py-32 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl mx-4 my-8 shadow-2xl border border-white/30 dark:border-gray-800/40'>
          <div className='container mx-auto px-4'>
            <HowItWorks />
          </div>
        </section>
        
        <section id="testimonials" className='relative py-20 md:py-32'>
          <div className='container mx-auto px-4'>
            <Testimonials />
          </div>
        </section>
        
        <section id="pricing" className='relative py-20 md:py-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl mx-4 my-8 shadow-2xl'>
          <div className='container mx-auto px-4'>
            <Pricing />
          </div>
        </section>
        
        <section id="call-to-action" className='relative py-20 md:py-32'>
          <div className='container mx-auto px-4'>
            <CallToAction />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}