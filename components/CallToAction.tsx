// src/components/CallToAction.tsx
'use client'

import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section id="cta" className="relative py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 relative inline-block text-slate-900 dark:text-white">
          Ready to Transform Your Ideas?
          <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          Join thousands of users who use NeuroFlow to organize their thoughts,
          plan projects, study effectively, and brainstorm creative ideas.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto mb-16">
        <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg py-6 px-10 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 border-0">
          Get Started for Free
        </Button>
        <Button variant="outline" className="border-2 border-indigo-400 text-indigo-700 dark:text-indigo-200 hover:bg-indigo-100/40 dark:hover:bg-indigo-900/30 text-lg py-6 px-10 rounded-full shadow-lg hover:shadow-xl transition-all">
          See Examples
        </Button>
      </div>

      {/* Stats Section in a container */}
      <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-white/80 dark:bg-slate-950/70 backdrop-blur-xl shadow-2xl border border-white/20 dark:border-slate-800">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-slate-900 dark:text-white">
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              10K+
            </div>
            <div className="text-slate-600 dark:text-slate-300/80">Active Users</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              50K+
            </div>
            <div className="text-slate-600 dark:text-slate-300/80">Mind Maps Created</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              4.9/5
            </div>
            <div className="text-slate-600 dark:text-slate-300/80">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;