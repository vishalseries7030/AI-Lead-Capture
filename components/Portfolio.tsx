// Portfolio/Case Studies Component
export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce AI Assistant',
      category: 'Retail',
      description: 'Conceptual demonstration of AI chatbot handling customer queries, product recommendations, and order support.',
      results: ['Improved response efficiency', 'Automated inquiry handling', 'Enhanced user experience'],
      icon: '🛒',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Healthcare Lead Automation',
      category: 'Healthcare',
      description: 'Demo scenario showing automated patient inquiry system with lead qualification and routing capabilities.',
      results: ['Streamlined lead routing', '24/7 availability simulation', 'Better engagement flow'],
      icon: '🏥',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Real Estate Chatbot',
      category: 'Real Estate',
      description: 'Demonstration of property recommendation system with virtual tour scheduling and instant response features.',
      results: ['Automated tour scheduling', 'Instant query responses', 'Improved user engagement'],
      icon: '🏠',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Education Platform',
      category: 'Education',
      description: 'Conceptual student support chatbot for handling admissions, course information, and enrollment assistance.',
      results: ['Automated student support', 'Efficient query resolution', 'Streamlined processes'],
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
            Demo Use Case Scenarios
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-2">
            Conceptual demonstrations for UI/UX presentation purposes
          </p>
          <p className="text-gray-500 text-sm italic">
            These examples showcase potential applications and interface designs
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
                  <div className="text-sm font-semibold text-gray-300 mb-3">Demonstrated Features:</div>
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
            Interested in discussing real-world implementation?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
