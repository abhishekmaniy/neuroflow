// src/components/Navbar.tsx
'use client'

import { Button } from '@/components/ui/button'
import { SignOutButton, useAuth, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useEffect, useState } from 'react'
import { User } from '@/lib/generated/prisma'
import axios from 'axios'
import { useUserStore } from '@/store/user-store'

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const { isSignedIn } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const { isLoaded, user } = useUser()
  const { setUser, setSubscription } = useUserStore()

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  useEffect(() => {
    const syncUser = async () => {
      if (!isLoaded || !user || !isSignedIn) return
      
      const userData: User = {
        name: `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim(),
        email: user.emailAddresses?.[0]?.emailAddress ?? '',
        id: user.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      try {
        setIsLoading(true)
        const response = await axios.post('/api/sign-in', userData)
        const data = response.data
        setUser(data.user)
        setSubscription(data.user.subscription)
      } catch (error) {
        console.error('Failed to sync user:', error)
      } finally {
        setIsLoading(false)
      }
    }

    syncUser()
  }, [isLoaded, user, isSignedIn])

  if (isLoading) {
    return (
      <div className='h-full w-full flex justify-center items-center'>
        Setting up Your Account...
      </div>
    )
  }

  return (
    <nav className="w-full py-4 border-b border-white/20 dark:border-slate-800/40 backdrop-blur-3xl bg-white/70 dark:bg-slate-900/70 sticky top-0 z-30 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center select-none">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-md tracking-tight">
              NeuroFlow
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {!isSignedIn ? (
            <>
              <Link
                href="/#features"
                className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-colors"
                onClick={handleNavClick('features')}
              >
                Features
              </Link>
              <Link
                href="/#pricing"
                className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-colors"
                onClick={handleNavClick('pricing')}
              >
                Pricing
              </Link>
              <Link
                href="/#testimonials"
                className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-colors"
                onClick={handleNavClick('testimonials')}
              >
                Testimonials
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/workspace"
                className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-colors"
              >
                Workspaces
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {isSignedIn ? (
            <>
              <Avatar>
                <AvatarImage
                  src={user?.imageUrl || 'https://github.com/shadcn.png'}
                  alt={user?.firstName || 'User'}
                />
                <AvatarFallback>
                  {user?.firstName?.[0] ?? 'U'}
                  {user?.lastName?.[0] ?? ''}
                </AvatarFallback>
              </Avatar>
              <SignOutButton>
                <Button
                  variant="outline"
                  className="border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/30 transition"
                >
                  Log out
                </Button>
              </SignOutButton>
            </>
          ) : (
            <Button
              variant="outline"
              className="border-indigo-300 dark:border-indigo-600 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 font-semibold transition"
              onClick={() => router.push('/sign-in')}
            >
              Log in
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar