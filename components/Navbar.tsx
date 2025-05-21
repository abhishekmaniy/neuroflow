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
    <nav className="w-full py-4 border-b border-blue-100 dark:border-blue-900/40 backdrop-blur-2xl bg-white/80 dark:bg-blue-950/80 sticky top-0 z-30 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center select-none">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
              NeuroFlow
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-blue-800 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-400 font-semibold transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#features"
            className="text-blue-800 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-400 font-semibold transition-colors"
            onClick={handleNavClick('features')}
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="text-blue-800 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-400 font-semibold transition-colors"
            onClick={handleNavClick('pricing')}
          >
            Pricing
          </Link>
          <Link
            href="/examples"
            className="text-blue-800 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-400 font-semibold transition-colors"
          >
            Examples
          </Link>
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
                  className="border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition"
                >
                  Log out
                </Button>
              </SignOutButton>
            </>
          ) : (
            <Button
              variant="outline"
              className="border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition"
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