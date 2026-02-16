'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

// Floating AI Chatbot Component
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm Vishal's AI assistant. How can I help you today? Ask me about pricing, demos, or our services!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // AI Response Logic
  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().trim();

    // Price inquiry
    if (lowerMessage.includes('price') || lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
      return "Our pricing plans start at ₹9,999/month for the Starter plan, ₹24,999/month for Professional, and custom pricing for Enterprise. Each plan includes AI chatbot integration, lead capture automation, and 24/7 support. Would you like to schedule a demo to see which plan fits your needs?";
    }

    // Demo request
    if (lowerMessage.includes('demo') || lowerMessage.includes('demonstration') || lowerMessage.includes('show me')) {
      return "I'd love to show you a demo! You can book a personalized demo session with Vishal. Simply fill out the contact form below or call us at +91 7030763055, and we'll reach out within 24 hours to schedule a time that works for you. Looking forward to it!";
    }

    // Greeting
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Welcome to AI Lead Capture by Vishal Payyawar. I'm here to help you automate your business with AI-powered solutions. What would you like to know about our services?";
    }

    // Features inquiry
    if (lowerMessage.includes('feature') || lowerMessage.includes('what can') || lowerMessage.includes('capabilities')) {
      return "Our platform offers AI Chatbot Integration for 24/7 customer support, Lead Capture Automation to qualify and route leads instantly, and modern Website Development. We help businesses increase conversions by 10x with faster response times!";
    }

    // Support inquiry
    if (lowerMessage.includes('support') || lowerMessage.includes('help')) {
      return "We provide 24/7 customer support through multiple channels. Our AI chatbots handle common queries instantly, and Vishal and the team are always available for complex issues. You can reach us at vlpayyawar@gmail.com or call +91 7030763055. You'll never miss a customer inquiry!";
    }

    // Contact inquiry
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return "You can reach Vishal Payyawar at:\n📧 Email: vlpayyawar@gmail.com\n📱 Phone: +91 7030763055\n\nOr fill out the contact form on this page, and we'll respond within 24 hours. For urgent matters, feel free to call directly!";
    }

    // Who are you
    if (lowerMessage.includes('who') || lowerMessage.includes('about')) {
      return "I'm the AI assistant for Vishal Payyawar's AI Lead Capture service. Vishal specializes in AI chatbot integration, lead automation, and website development. With 150+ happy clients and 500+ projects completed, we're here to help transform your business with AI!";
    }

    // Default intelligent response
    return "That's a great question! Our AI-powered platform helps businesses automate customer interactions and capture leads efficiently. Would you like to know more about our pricing, schedule a demo, or learn about specific features? You can also reach Vishal directly at +91 7030763055!";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Clear input
    setInputValue('');

    // Simulate AI thinking and response
    setTimeout(() => {
      const botResponse: Message = {
        text: getAIResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold animate-pulse">
              1
            </span>
          </>
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-in-right">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">AI Assistant</h3>
                <p className="text-xs text-blue-100">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800/50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in-up`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isBot
                      ? 'bg-gray-700 text-gray-100'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-900 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => setInputValue('pricing')}
                className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors"
              >
                💰 Pricing
              </button>
              <button
                onClick={() => setInputValue('demo')}
                className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors"
              >
                📅 Demo
              </button>
              <button
                onClick={() => setInputValue('features')}
                className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors"
              >
                ⚡ Features
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
