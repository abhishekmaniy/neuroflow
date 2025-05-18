

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
    <section className="neuro-section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See how NeuroFlow is helping people organize their thoughts and ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-neuro-soft rounded-xl p-6 shadow-sm relative">
              <div className="mb-6 text-xl italic text-gray-700">"{testimonial.quote}"</div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
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
