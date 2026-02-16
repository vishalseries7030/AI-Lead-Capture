// Portfolio/Case Studies Component
export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce AI Assistant',
      category: 'Retail',
      description: 'Implemented AI chatbot that handles 5,000+ customer queries daily, reducing support costs by 60%',
      results: ['60% cost reduction', '95% customer satisfaction', '3x faster response time'],
      icon: '🛒',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Healthcare Lead Automation',
      category: 'Healthcare',
      description: 'Automated patient inquiry system that qualifies and routes leads to appropriate departments',
      results: ['200% more qualified leads', '24/7 availability', '40% faster booking'],
      icon: '🏥',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Real Estate Chatbot',
      category: 'Real Estate',
      description: 'Smart property recommendation system with virtual tour scheduling and instant responses',
      results: ['150% increase in tours', '80% automation rate', '4.8/5 user rating'],
      icon: '🏠',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Education Platform',
      category: 'Education',
      description: 'Student support chatbot handling admissions, course info, and enrollment assistance',
      results: ['10,000+ students helped', '90% query resolution', '50% staff time saved'],
      icon: '🎓',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real results from businesses we've helped transform with AI
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`}></div>

              <div className="relative z-10">
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-6xl">{project.icon}</div>
                  <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-300 mb-3">Key Results:</div>
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                      <span className="text-gray-300 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Want to see your business here?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
}
