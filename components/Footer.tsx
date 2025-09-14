// src/components/Footer.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa' // Using react-icons for a cleaner implementation

const Footer = () => {
  return (
    <footer className="relative bg-white/80 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800 backdrop-blur-2xl py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Main Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
                NeuroFlow
              </span>
            </Link>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Transform your ideas into structured mind maps with the power of AI.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-500 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-500 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li><Link href="/features" className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition-colors">Features</Link></li>
              <li><Link href="/examples" className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition-colors">Examples</Link></li>
              <li><Link href="/pricing" className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-600 dark:text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} NeuroFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;