'use client'

import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-200/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 dark:text-white mb-6 drop-shadow-lg">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-xl text-blue-700 dark:text-blue-200 max-w-2xl mx-auto mb-10">
            Join thousands of users who use NeuroFlow to organize their thoughts, 
            plan projects, study effectively, and brainstorm creative ideas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 text-white font-bold text-lg py-6 px-10 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 border-0 outline-none">
              Get Started for Free
            </Button>
            <Button variant="outline" className="border-2 border-blue-400 text-blue-700 dark:text-blue-200 hover:bg-blue-100/40 dark:hover:bg-blue-900/30 text-lg py-6 px-10 rounded-full shadow-lg hover:shadow-xl transition-all">
              See Examples
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-blue-900 dark:text-white">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2 text-blue-700 dark:text-blue-200">10K+</div>
              <div className="text-blue-600 dark:text-blue-300/80">Active Users</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2 text-blue-700 dark:text-blue-200">50K+</div>
              <div className="text-blue-600 dark:text-blue-300/80">Mind Maps Created</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2 text-blue-700 dark:text-blue-200">4.9/5</div>
              <div className="text-blue-600 dark:text-blue-300/80">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;