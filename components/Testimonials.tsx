// src/components/Testimonials.tsx
'use client'

import React from 'react';

const testimonials = [
  {
    quote: "NeuroFlow has completely changed how I prepare for presentations and organize my thoughts. The AI generates connections I wouldn't have thought of!",
    author: "Sarah Johnson",
    title: "Marketing Director",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    quote: "As a teacher, I use NeuroFlow to create study guides for my students. The visual format helps them understand complex topics much more easily.",
    author: "Michael Rodriguez",
    title: "High School Teacher",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    quote: "The ability to refine my mind maps through a natural conversation with the AI is incredible. It's like having a brainstorming partner available 24/7.",
    author: "Priya Patel",
    title: "Product Manager",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 relative inline-block text-slate-900 dark:text-white">
          What Our Users Say
          <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          See how NeuroFlow is helping people organize their thoughts and ideas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/80 dark:bg-slate-950/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-800 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform"
          >
            <div>
              <div className="mb-6 text-xl italic text-slate-800 dark:text-slate-200 text-center relative before:content-['“'] before:absolute before:-top-4 before:-left-2 before:text-5xl before:text-indigo-400 before:opacity-30 before:font-serif after:content-['”'] after:absolute after:-bottom-4 after:-right-2 after:text-5xl after:text-indigo-400 after:opacity-30 after:font-serif">
                <p>{testimonial.quote}</p>
              </div>
            </div>
            <div className="flex items-center mt-4 pt-4 border-t border-white/40 dark:border-slate-800">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-300 dark:border-indigo-700 shadow-md mr-4">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;