// Services Section Component
export default function Services() {
  const services = [
    {
      icon: '🤖',
      title: 'AI Chatbot Integration',
      description: 'This demo showcases potential AI chatbot integration for automated customer interactions and lead qualification.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '📊',
      title: 'Lead Capture Automation',
      description: 'Demonstration of automated lead capture workflows, form handling, and data collection processes.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Modern, responsive web interfaces built with Next.js, TypeScript, and Tailwind CSS.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Demo Capabilities
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This demo showcases potential AI automation services such as:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-6">{service.icon}</div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-20 blur-2xl rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
