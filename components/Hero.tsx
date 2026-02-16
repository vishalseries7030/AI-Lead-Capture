'use client';

import { useState, useEffect } from 'react';

// Hero Section Component with Typing Effect
export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'AI-Powered Lead Capture – Concept Demo';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden z-10">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Portfolio Demo Project
        </div>

        {/* Main Headline with Typing Effect */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-fade-in-up min-h-[120px]" style={{ animationDelay: '0.1s' }}>
          {typedText}
          <span className="animate-pulse">|</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          This is a demo project showcasing how AI-driven chatbots can automate lead capture and improve customer engagement.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToContact}
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <span className="relative z-10">Explore Demo</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
        </button>

        {/* Tech Stack Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-sm text-gray-400">Built with Next.js & Tailwind CSS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎨</div>
            <div className="text-sm text-gray-400">Modern SaaS-Style UI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🤖</div>
            <div className="text-sm text-gray-400">Chatbot Interaction Simulation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-sm text-gray-400">Small Business Automation Use Cases</div>
          </div>
        </div>
      </div>
    </section>
  );
}
