'use client';

import { useState, FormEvent } from 'react';

// Contact Form Component
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would send to your email or backend
    console.log('Form submitted:', formData);
    console.log('Send to: vlpayyawar@gmail.com');
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to automate your business? Let's talk!
          </p>
        </div>

        {/* Contact Form */}
        <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl rounded-full"></div>
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/95 rounded-2xl backdrop-blur-sm">
              <div className="text-center">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-400">We'll get back to you soon.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
