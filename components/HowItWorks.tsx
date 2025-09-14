// src/components/HowItWorks.tsx
'use client'

import React from 'react';

const steps = [
  {
    number: "01",
    title: "Enter Your Idea",
    description: "Start by typing your main idea, topic, or question into the prompt box.",
    icon: "💡",
  },
  {
    number: "02",
    title: "AI Generates Your Map",
    description: "Our AI analyzes your input and creates a structured mind map with connected concepts.",
    icon: "🧠",
  },
  {
    number: "03",
    title: "Refine & Enhance",
    description: "Use the AI chat to ask questions, add details, or refocus your mind map.",
    icon: "💬",
  },
  {
    number: "04",
    title: "Share or Download",
    description: "Export your mind map in various formats or share it with colleagues and friends.",
    icon: "📤",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 relative inline-block text-slate-900 dark:text-white">
          How It Works
          <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          From idea to organized mind map in seconds. Here's how NeuroFlow transforms your thoughts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            <div className="p-8 bg-white/80 dark:bg-slate-950/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-slate-800 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-900/40 dark:to-purple-900/40 flex items-center justify-center text-4xl mb-6 shadow-md text-indigo-600 dark:text-indigo-400">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-slate-700 dark:text-slate-300 text-center text-sm">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 left-full w-[calc(100%-48px)] h-px -z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="w-full h-full bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-700 dark:to-purple-700"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;