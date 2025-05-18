'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'


const Navbar = () => {
  const pathname = usePathname()

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    // Only apply smooth scrolling on the homepage
    if (pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
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
          <Button
            variant='outline'
            className='hidden md:inline-flex dark:text-white dark:border-gray-700'
          >
            Log in
          </Button>
          <Button className='bg-neuro-primary hover:bg-neuro-secondary text-white'>
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
