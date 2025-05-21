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
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] bg-gradient-to-tr from-blue-200 via-white to-blue-400 opacity-40 blur-2xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-100 via-white to-blue-300 opacity-20 blur-2xl rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 relative inline-block text-blue-900 dark:text-white">
            How It Works
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></span>
          </h2>
          <p className="text-lg text-blue-700 dark:text-blue-200 max-w-3xl mx-auto">
            From idea to organized mind map in seconds. Here's how NeuroFlow transforms your thoughts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="p-8 bg-white/80 dark:bg-blue-950/70 backdrop-blur-xl rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 flex items-center justify-center text-4xl mb-6 shadow-lg">
                  {step.icon}
                </div>
                <div className="mb-4 flex items-center">
                  <span className="text-4xl font-bold text-blue-400 dark:text-blue-300 mr-3">{step.number}</span>
                  <h3 className="text-xl font-bold text-blue-900 dark:text-white">{step.title}</h3>
                </div>
                <p className="text-blue-700 dark:text-blue-200 text-center">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 left-full w-full h-2 -z-10 -translate-x-1/2">
                  <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-400 dark:from-blue-800 dark:to-blue-700"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 dark:bg-blue-700 rounded-full"></div>
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