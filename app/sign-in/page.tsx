'use client'

import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans">
      {/* Left pane with branding and marketing text */}
      <div className="relative flex flex-1 items-center justify-center p-8 text-white bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl shadow-2xl border border-white/30 dark:border-slate-800/40">
        {/* Background decorations with blurred shapes */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-indigo-500/10 blur-3xl rounded-full animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-2xl rounded-full animate-float delay-500"></div>
          <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl animate-float"></div>
        </div>

        <div className="relative z-10 text-center max-w-sm mx-auto p-4">
          <Link href="/" className="mb-2 inline-block">
            <span className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 drop-shadow-lg">
              NeuroFlow
            </span>
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight text-slate-900 dark:text-white drop-shadow-md">
            Welcome Back!
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium">
            Continue your creative journey.
          </p>
        </div>
      </div>

      {/* Right pane with the Clerk Sign-In component */}
      <div className="flex flex-1 items-center justify-center p-8 md:p-12 bg-slate-50 dark:bg-slate-950">
        <SignIn
          fallbackRedirectUrl="/workspace"
          appearance={{
            elements: {
              card: "rounded-3xl shadow-2xl border-none",
              headerTitle: "text-2xl md:text-3xl font-bold text-slate-900 dark:text-white",
              headerSubtitle: "text-slate-600 dark:text-slate-300",
              formButtonPrimary: "bg-indigo-500 hover:bg-indigo-600 transition-colors text-white text-lg font-semibold rounded-full",
              socialButtonsBlockButton: "rounded-full border-2 border-slate-200 dark:border-slate-800",
              socialButtonsBlockButtonText: "font-semibold text-slate-800 dark:text-slate-200",
              dividerLine: "bg-slate-200 dark:bg-slate-800",
              dividerText: "text-slate-500 dark:text-slate-400",
              formFieldInput: "rounded-full p-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none",
              formFieldLabel: "font-medium text-slate-700 dark:text-slate-300",
            }
          }}
        />
      </div>
    </div>
  )
}
