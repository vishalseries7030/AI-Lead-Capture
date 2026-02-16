'use client';

// Testimonials Placeholder Component
export default function Testimonials() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Testimonial section placeholder
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">💬</span>
              </div>
            </div>

            {/* Message */}
            <p className="text-xl md:text-2xl text-gray-300 text-center mb-8 leading-relaxed italic">
              "Real client feedback will be added after live deployments."
            </p>

            {/* Info */}
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">
                This is a portfolio demonstration project
              </p>
              <p className="text-gray-500 text-xs">
                Testimonials will be collected from actual implementations
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 text-6xl text-blue-500/20">"</div>
            <div className="absolute bottom-4 right-4 text-6xl text-purple-500/20 rotate-180">"</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Interested in being a first client?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            Let's Collaborate
          </button>
        </div>
      </div>
    </section>
  );
}
