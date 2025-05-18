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
    <section id="features" className="neuro-section bg-neuro-gradient-soft dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            Powerful Features
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-neuro-primary to-neuro-blue rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            NeuroFlow combines powerful AI with intuitive design to help you create beautiful, insightful mind maps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="neuro-card border-none overflow-hidden bg-white dark:bg-gray-800/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-2xl bg-neuro-soft dark:bg-neuro-primary/20 flex items-center justify-center text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
