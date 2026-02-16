'use client';

import { useEffect, useState } from 'react';

// Interactive Cursor Trail Effect
export default function CursorTrail() {
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
      };

      setTrails((prev) => [...prev.slice(-20), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: (index + 1) / trails.length * 0.5,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.3s ease-out',
          }}
        />
      ))}
    </div>
  );
}
