// Benefits Section Component
export default function Benefits() {
  const benefits = [
    {
      icon: '⚡',
      title: '24/7 Customer Support',
      description: 'Never miss a customer inquiry. Our AI chatbots work around the clock to provide instant support.',
      color: 'text-yellow-400',
    },
    {
      icon: '🚀',
      title: 'Faster Lead Response',
      description: 'Respond to leads in seconds, not hours. Increase your conversion rates with instant engagement.',
      color: 'text-blue-400',
    },
    {
      icon: '📈',
      title: 'Increased Conversions',
      description: 'Convert more visitors into customers with personalized, intelligent conversations.',
      color: 'text-green-400',
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the power of AI-driven customer engagement
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
            >
              {/* Icon with glow effect */}
              <div className="relative inline-block mb-6">
                <div className={`text-6xl ${benefit.color}`}>{benefit.icon}</div>
                <div className={`absolute inset-0 ${benefit.color} opacity-20 blur-xl`}></div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color.replace('text-', 'from-')} to-transparent opacity-50`}></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-3xl">
            <p className="text-xl text-gray-300 mb-4">
              Ready to transform your business with AI?
            </p>
            <p className="text-gray-400">
              Join hundreds of businesses already using our AI solutions to scale their operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
