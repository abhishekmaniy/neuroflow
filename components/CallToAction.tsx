'use client'


import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="bg-neuro-gradient dark:bg-gray-900 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-neuro-light/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Join thousands of users who use NeuroFlow to organize their thoughts, 
            plan projects, study effectively, and brainstorm creative ideas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-neuro-primary hover:bg-neuro-soft hover:text-neuro-primary/90 text-lg py-6 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-white/20">
              Get Started for Free
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/20 text-lg py-6 px-10 rounded-full shadow-lg hover:shadow-xl transition-all">
              See Examples
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-white/80">Active Users</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-white/80">Mind Maps Created</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-white/80">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
