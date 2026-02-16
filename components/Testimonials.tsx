'use client';

import { useState } from 'react';

// Testimonials Component
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart India',
      image: '👨‍💼',
      rating: 5,
      text: 'Vishal and his team delivered an outstanding AI chatbot solution that increased our lead conversion by 300%. Highly professional and responsive!',
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Director, Digital Solutions',
      image: '👩‍💼',
      rating: 5,
      text: 'The website development service was exceptional. Our new site is fast, beautiful, and generates leads 24/7. Best investment we made!',
    },
    {
      name: 'Amit Patel',
      role: 'Founder, E-commerce Startup',
      image: '👨‍💻',
      rating: 5,
      text: 'Working with Vishal was a game-changer. The AI automation saved us countless hours and the ROI was visible within the first month.',
    },
    {
      name: 'Sneha Desai',
      role: 'Operations Manager, Retail Chain',
      image: '👩‍💻',
      rating: 5,
      text: 'Incredible support and expertise! The chatbot handles customer queries perfectly, and our team can focus on complex issues. Highly recommend!',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from businesses we've helped transform
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">⭐</span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl text-gray-200 text-center mb-8 leading-relaxed">
              "{testimonials[activeIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="text-6xl">{testimonials[activeIndex].image}</div>
              <div className="text-left">
                <div className="font-bold text-white text-lg">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[activeIndex].role}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-blue-500 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
