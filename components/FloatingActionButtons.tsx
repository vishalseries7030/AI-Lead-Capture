'use client';

import { useState } from 'react';

// Floating Action Buttons
export default function FloatingActionButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: '📞',
      label: 'Call Us',
      action: () => window.location.href = 'tel:+917030763055',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '📧',
      label: 'Email',
      action: () => window.location.href = 'mailto:vlpayyawar@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/917030763055', '_blank'),
      color: 'from-green-600 to-green-400',
    },
    {
      icon: '📅',
      label: 'Book Demo',
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {/* Action Buttons */}
      <div className={`flex flex-col gap-3 mb-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className={`group relative flex items-center gap-3 bg-gradient-to-r ${action.color} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110`}
            style={{
              transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
            }}
          >
            <span className="text-2xl">{action.icon}</span>
            <span className="font-semibold whitespace-nowrap pr-2">{action.label}</span>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {action.label}
            </div>
          </button>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center ${isOpen ? 'rotate-45' : 'rotate-0'}`}
      >
        <span className="text-3xl">{isOpen ? '✕' : '+'}</span>
      </button>

      {/* Pulse Effect */}
      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 bg-orange-500 rounded-full animate-ping opacity-20"></div>
      )}
    </div>
  );
}
