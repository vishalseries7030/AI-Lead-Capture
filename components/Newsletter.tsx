'use client';

import { useState, FormEvent } from 'react';

// Newsletter Signup Component
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-600/30 to-pink-600/30 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="text-6xl mb-6 text-center">📧</div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Stay Updated with AI Insights
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Get the latest tips, case studies, and AI automation strategies delivered to your inbox. Join 1,000+ business owners already subscribed.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>

            {/* Privacy note */}
            <p className="text-gray-400 text-sm text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>

            {/* Success Message */}
            {isSubscribed && (
              <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center">
                <p className="text-green-400 font-semibold">
                  🎉 Thank you for subscribing! Check your inbox for confirmation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
