

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
    <section className="neuro-section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            How It Works
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-neuro-primary to-neuro-blue rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            From idea to organized mind map in seconds. Here's how NeuroFlow transforms your thoughts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-16 h-16 rounded-2xl bg-neuro-soft dark:bg-neuro-primary/20 flex items-center justify-center text-4xl mb-6 group-hover:-translate-y-2 transition-transform">
                  {step.icon}
                </div>
                <div className="mb-4 flex items-center">
                  <span className="text-4xl font-bold text-neuro-light dark:text-neuro-primary/50 mr-3">{step.number}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 left-full w-full h-2 -z-10 -translate-x-1/2">
                  <div className="absolute left-0 top-0 w-full h-0.5 bg-neuro-soft dark:bg-gray-700"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-neuro-primary rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
