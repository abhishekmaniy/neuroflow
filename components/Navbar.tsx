'use client'

import { Button } from '@/components/ui/button'
import { SignOutButton, useAuth, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useEffect, useState } from 'react'
import { User } from '@/lib/generated/prisma'
import { useUserStore } from '@/store/user-store'
import axios from 'axios'

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
        id: user.id
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
    <nav className='w-full py-4 border-b border-gray-100 dark:border-gray-800 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 sticky top-0 z-30'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <Link href='/' className='flex items-center'>
            <span className='text-2xl font-bold neuro-gradient-text'>
              NeuroFlow
            </span>
          </Link>
        </div>

        <div className='hidden md:flex items-center space-x-8'>
          <Link
            href='/'
            className='text-gray-700 dark:text-gray-300 hover:text-neuro-primary transition-colors'
          >
            Home
          </Link>
          <Link
            href='/#features'
            className='text-gray-700 dark:text-gray-300 hover:text-neuro-primary transition-colors'
            onClick={handleNavClick('features')}
          >
            Features
          </Link>
          <Link
            href='/#pricing'
            className='text-gray-700 dark:text-gray-300 hover:text-neuro-primary transition-colors'
            onClick={handleNavClick('pricing')}
          >
            Pricing
          </Link>
          <Link
            href='/examples'
            className='text-gray-700 dark:text-gray-300 hover:text-neuro-primary transition-colors'
          >
            Examples
          </Link>
        </div>

        <div className='flex items-center space-x-4'>
          <ThemeToggle />
          {isSignedIn ? (
            <>
              <Avatar>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='@shadcn'
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <SignOutButton />
            </>
          ) : (
            <Button
              variant='outline'
              className='hidden md:inline-flex dark:text-white dark:border-gray-700'
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
