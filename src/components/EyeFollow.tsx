import { useState, useEffect } from 'react';

export default function EyeFollow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const eyeElement = document.getElementById('watching-eye');
    if (!eyeElement) return;

    const rect = eyeElement.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(mousePos.y - eyeCenterY, mousePos.x - eyeCenterX);
    const distance = Math.min(10, Math.hypot(mousePos.x - eyeCenterX, mousePos.y - eyeCenterY) / 50);

    setEyePos({
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance
    });
  }, [mousePos]);

  return (
    <div className="fixed bottom-8 right-8 z-50 pointer-events-none">
      <div 
        id="watching-eye"
        className="relative w-24 h-24 bg-white rounded-full border-4 border-red-900 shadow-2xl animate-pulse-red"
      >
        <div 
          className="absolute top-1/2 left-1/2 w-12 h-12 bg-red-900 rounded-full transition-transform duration-100"
          style={{
            transform: `translate(calc(-50% + ${eyePos.x}px), calc(-50% + ${eyePos.y}px))`
          }}
        >
          <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-black rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      <p className="text-center text-xs text-red-600 mt-2 font-creepster">
        Я СЛЕЖУ ЗА ТОБОЙ
      </p>
    </div>
  );
}
