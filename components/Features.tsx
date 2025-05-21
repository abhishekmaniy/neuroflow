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
    <section
      id="features"
      className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] bg-gradient-to-tr from-blue-200 via-white to-blue-400 opacity-40 blur-2xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-100 via-white to-blue-300 opacity-20 blur-2xl rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 relative inline-block text-blue-900 dark:text-white">
            Powerful Features
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></span>
          </h2>
          <p className="text-lg text-blue-700 dark:text-blue-200 max-w-3xl mx-auto">
            NeuroFlow combines powerful AI with intuitive design to help you create beautiful, insightful mind maps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none bg-white/80 dark:bg-blue-950/70 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform flex flex-col items-center"
            >
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 flex items-center justify-center text-4xl mb-4 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-white text-center">
                  {feature.title}
                </h3>
                <p className="text-blue-700 dark:text-blue-200 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features