'use client';

import { useState } from 'react';

// Interactive Demo Section
export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you?', isBot: true },
  ]);
  const [inputValue, setInputValue] = useState('');

  const tabs = [
    { name: 'Chatbot Demo', icon: '🤖' },
    { name: 'Lead Capture', icon: '📊' },
    { name: 'Analytics', icon: '📈' },
  ];

  const handleSendDemo = () => {
    if (!inputValue.trim()) return;

    setMessages([
      ...messages,
      { text: inputValue, isBot: false },
      { text: 'This is a live demo! Your AI chatbot will respond instantly to customer queries.', isBot: true },
    ]);
    setInputValue('');
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            See It In Action
          </h2>
          <p className="text-gray-400 text-lg">
            Try our AI chatbot live - no signup required!
          </p>
        </div>

        {/* Interactive Demo Container */}
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-700">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 px-6 py-4 text-center transition-all ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b-2 border-blue-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <span className="text-2xl mr-2">{tab.icon}</span>
                <span className="font-semibold">{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Demo Content */}
          <div className="p-8">
            {activeTab === 0 && (
              <div className="space-y-4">
                {/* Chat Messages */}
                <div className="bg-gray-900/50 rounded-xl p-6 h-64 overflow-y-auto space-y-4">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                          msg.isBot
                            ? 'bg-gray-700 text-gray-100'
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendDemo()}
                    placeholder="Type a message to try the chatbot..."
                    className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleSendDemo}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    Send
                  </button>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-white mb-4">Lead Capture Dashboard</h3>
                <p className="text-gray-400 mb-6">
                  Track every lead, conversation, and conversion in real-time
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="bg-gray-900/50 rounded-xl p-4">
                    <div className="text-3xl font-bold text-blue-400">247</div>
                    <div className="text-sm text-gray-400">Leads Today</div>
                  </div>
                  <div className="bg-gray-900/50 rounded-xl p-4">
                    <div className="text-3xl font-bold text-green-400">89%</div>
                    <div className="text-sm text-gray-400">Response Rate</div>
                  </div>
                  <div className="bg-gray-900/50 rounded-xl p-4">
                    <div className="text-3xl font-bold text-purple-400">34</div>
                    <div className="text-sm text-gray-400">Conversions</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-white mb-4">Real-Time Analytics</h3>
                <p className="text-gray-400 mb-6">
                  Get insights into customer behavior and chatbot performance
                </p>
                <div className="bg-gray-900/50 rounded-xl p-6 max-w-2xl mx-auto">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Customer Satisfaction</span>
                      <span className="text-green-400 font-bold">98%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Average Response Time</span>
                      <span className="text-blue-400 font-bold">0.8s</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
