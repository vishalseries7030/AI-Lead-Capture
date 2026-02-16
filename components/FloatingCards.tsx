'use client';

import { useState } from 'react';

// 3D Floating Cards with Tilt Effect
export default function FloatingCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Deploy in minutes, not hours',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🎯',
      title: 'Laser Focused',
      description: 'Capture qualified leads only',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: '💎',
      title: 'Premium Quality',
      description: 'Enterprise-grade solutions',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: '🔒',
      title: 'Bank-Level Security',
      description: 'Your data is always safe',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Why We're Different
          </h2>
          <p className="text-gray-400 text-lg">
            Experience the future of AI automation
          </p>
        </div>

        {/* 3D Floating Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setHoveredCard(index)}
              style={{
                transition: 'transform 0.1s ease-out',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl`}></div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full hover:border-gray-600 transition-colors">
                {/* Icon */}
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm">
                  {card.description}
                </p>

                {/* Shine Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  style={{
                    transform: hoveredCard === index ? 'translateX(100%)' : 'translateX(-100%)',
                    transition: 'transform 0.6s ease-in-out',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
