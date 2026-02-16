// Trust Badges & Social Proof
export default function TrustBadges() {
  const badges = [
    { icon: '🔒', text: 'SSL Secured', color: 'text-green-400' },
    { icon: '✓', text: 'GDPR Compliant', color: 'text-blue-400' },
    { icon: '⭐', text: '4.9/5 Rating', color: 'text-yellow-400' },
    { icon: '🏆', text: 'Award Winning', color: 'text-purple-400' },
    { icon: '💯', text: '100% Uptime', color: 'text-cyan-400' },
    { icon: '🚀', text: 'Fast Support', color: 'text-orange-400' },
  ];

  const logos = [
    { name: 'Trusted by 150+ Companies', icon: '🏢' },
    { name: 'Featured in Tech News', icon: '📰' },
    { name: 'ISO Certified', icon: '📜' },
    { name: 'Industry Leader', icon: '👑' },
  ];

  return (
    <section className="py-16 px-4 relative z-10 border-y border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
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

        {/* Social Proof */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm mb-6">
            Trusted by leading businesses across India
          </p>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl hover:from-gray-800/50 hover:to-gray-900/50 transition-all"
            >
              <span className="text-4xl">{logo.icon}</span>
              <span className="text-xs text-gray-400 text-center">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Live Stats */}
        <div className="mt-12 flex justify-center gap-8 flex-wrap">
          <div className="text-center">
            <div className="flex items-center gap-2 justify-center mb-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-2xl font-bold text-white">1,247</span>
            </div>
            <span className="text-sm text-gray-400">Active Users Now</span>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-2 justify-center mb-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-2xl font-bold text-white">24/7</span>
            </div>
            <span className="text-sm text-gray-400">Support Available</span>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-2 justify-center mb-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-2xl font-bold text-white">99.9%</span>
            </div>
            <span className="text-sm text-gray-400">Uptime Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
