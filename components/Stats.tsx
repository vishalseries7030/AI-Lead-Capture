'use client';

// Demo Stats Component - Removed fake metrics
export default function Stats() {
  const stats = [
    { icon: '⚛️', label: 'Built with React & Next.js', value: 'Next.js 15' },
    { icon: '🎨', label: 'Styled with Tailwind CSS', value: 'v4' },
    { icon: '📱', label: 'Fully Responsive Design', value: '100%' },
    { icon: '⚡', label: 'Performance Optimized', value: 'Fast' },
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-110 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
