// Trust Badges - Portfolio Project Info
export default function TrustBadges() {
  const badges = [
    { icon: '👨‍💻', text: 'Solo Developer', color: 'text-blue-400' },
    { icon: '🎨', text: 'UI/UX Focused', color: 'text-purple-400' },
    { icon: '⚡', text: 'Modern Stack', color: 'text-cyan-400' },
    { icon: '🚀', text: 'Production Ready', color: 'text-orange-400' },
  ];

  const highlights = [
    { name: 'Portfolio Demonstration Project', icon: '📁' },
    { name: 'Designed & Developed by Vishal Payyawar', icon: '👨‍💻' },
    { name: 'Frontend Concept with Chatbot Simulation', icon: '🤖' },
    { name: 'Open to Real-World Collaboration', icon: '🤝' },
  ];

  return (
    <section className="py-16 px-4 relative z-10 border-y border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Project Info */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">About This Project</h3>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            This is a portfolio demonstration showcasing modern web development capabilities and AI chatbot UI concepts
          </p>
        </div>

        {/* Tech Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
            >
              <span className="text-3xl">{badge.icon}</span>
              <span className={`text-sm font-semibold ${badge.color}`}>
                {badge.text}
              </span>
            </div>
          ))}
        </div>

        {/* Project Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl hover:from-gray-800/50 hover:to-gray-900/50 transition-all"
            >
              <span className="text-4xl">{highlight.icon}</span>
              <span className="text-sm text-gray-300">
                {highlight.name}
              </span>
            </div>
          ))}
        </div>

        {/* Developer Info */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2">
            Built by Vishal Payyawar
          </p>
          <div className="flex justify-center gap-4 text-xs text-gray-500">
            <span>📧 vlpayyawar@gmail.com</span>
            <span>📱 +91 7030763055</span>
          </div>
        </div>
      </div>
    </section>
  );
}
