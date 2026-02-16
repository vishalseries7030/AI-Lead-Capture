'use client';

// Pricing Plans Component
export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '₹9,999',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic AI Chatbot',
        'Up to 1,000 conversations/month',
        'Email support',
        'Basic analytics',
        'Website integration',
        '1 custom workflow',
      ],
      popular: false,
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      name: 'Professional',
      price: '₹24,999',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Advanced AI Chatbot',
        'Up to 10,000 conversations/month',
        'Priority support (24/7)',
        'Advanced analytics & reports',
        'Multi-channel integration',
        '5 custom workflows',
        'Lead scoring',
        'CRM integration',
      ],
      popular: true,
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: [
        'Custom AI Solutions',
        'Unlimited conversations',
        'Dedicated account manager',
        'Custom integrations',
        'White-label solution',
        'Unlimited workflows',
        'API access',
        'On-premise deployment option',
        'Custom training',
      ],
      popular: false,
      gradient: 'from-orange-600 to-red-600',
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Sample Pricing Structure
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Pricing shown is sample structure for demonstration purposes
          </p>
          <p className="text-gray-500 text-sm italic">
            Custom pricing depends on actual implementation scope and requirements
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border ${
                plan.popular ? 'border-purple-500 scale-105' : 'border-gray-700'
              } rounded-2xl p-8 hover:scale-105 transition-transform duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                  {plan.price}
                </span>
                <span className="text-gray-400 text-lg">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:shadow-purple-500/50'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Discuss Project
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            All pricing is indicative and subject to project scope discussion
          </p>
          <p className="text-gray-500 text-sm">
            Need a custom solution? <button onClick={scrollToContact} className="text-blue-400 hover:underline">Contact for consultation</button>
          </p>
        </div>
      </div>
    </section>
  );
}
