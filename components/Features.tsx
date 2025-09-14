// src/components/Features.tsx
'use client'

import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered Mapping",
    description: "Our advanced AI analyzes your input and creates structured, meaningful mind maps.",
    icon: "🧠",
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with teammates by sharing your mind maps for collaborative editing.",
    icon: "👥",
  },
  {
    title: "Interactive Canvas",
    description: "Zoom, pan, and navigate your mind maps with an intuitive and responsive interface.",
    icon: "🔍",
  },
  {
    title: "Multiple Export Formats",
    description: "Download your mind maps as PNG, PDF, SVG or share them via link with anyone.",
    icon: "💾",
  },
  {
    title: "AI Chat Assistant",
    description: "Refine and enhance your mind maps through natural conversation with our AI.",
    icon: "💬",
  },
  {
    title: "Version History",
    description: "Track changes and access previous versions of your mind maps anytime.",
    icon: "🕒",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 relative inline-block text-slate-900 dark:text-white">
          Powerful Features
          <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          NeuroFlow combines powerful AI with intuitive design to help you create beautiful, insightful mind maps.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-none bg-white/80 dark:bg-slate-950/70 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform flex flex-col items-center p-8"
          >
            <CardContent className="flex flex-col items-center p-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 via-indigo-300 to-purple-400 dark:from-indigo-900 dark:via-indigo-800 dark:to-purple-700 flex items-center justify-center text-4xl mb-4 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white text-center">
                {feature.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-center">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features