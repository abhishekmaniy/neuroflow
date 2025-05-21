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
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] bg-gradient-to-tr from-blue-200 via-white to-blue-400 opacity-40 blur-2xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-100 via-white to-blue-300 opacity-20 blur-2xl rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-white">
            What Our Users Say
          </h2>
          <p className="text-lg text-blue-700 dark:text-blue-200 max-w-3xl mx-auto">
            See how NeuroFlow is helping people organize their thoughts and ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-blue-950/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-blue-100 dark:border-blue-900 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6 text-xl italic text-blue-800 dark:text-blue-200 text-center">"{testimonial.quote}"</div>
              <div className="flex items-center mt-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-300 dark:border-blue-700 shadow mr-4">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-blue-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-blue-600 dark:text-blue-300">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;