'use client';

import { useEffect, useRef, useState } from 'react';

// Scroll-triggered Animations Component
export default function ScrollAnimations() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '⚡',
      title: 'Instant Setup',
      description: 'Get your AI chatbot running in under 5 minutes',
      delay: '0s',
    },
    {
      icon: '🎨',
      title: 'Fully Customizable',
      description: 'Match your brand colors, tone, and personality',
      delay: '0.1s',
    },
    {
      icon: '🔗',
      title: 'Easy Integration',
      description: 'Works with your existing tools and platforms',
      delay: '0.2s',
    },
    {
      icon: '📱',
      title: 'Multi-Channel',
      description: 'Website, WhatsApp, Facebook, and more',
      delay: '0.3s',
    },
    {
      icon: '🧠',
      title: 'Smart AI',
      description: 'Learns from every conversation to improve',
      delay: '0.4s',
    },
    {
      icon: '📊',
      title: 'Detailed Reports',
      description: 'Track performance with real-time analytics',
      delay: '0.5s',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-gray-400 text-lg">
            Powerful features that make automation effortless
          </p>
        </div>

        {/* Animated Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: isVisible ? feature.delay : '0s',
              }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-500"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}
