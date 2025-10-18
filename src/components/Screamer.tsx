import { useState, useEffect } from 'react';

interface ScreamerProps {
  delay?: number;
  duration?: number;
  onComplete?: () => void;
}

export default function Screamer({ delay = 5000, duration = 3000, onComplete }: ScreamerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, duration);

      return () => clearTimeout(hideTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black animate-fade-in-scary"
      style={{ animation: 'fade-in-scary 0.1s ease-out' }}
    >
      <img 
        src="https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/0d2cd9e8-c8b3-42eb-927f-09e030596cb6.jpg"
        alt="Screamer"
        className="w-full h-full object-cover animate-shake"
      />
      <div className="absolute inset-0 bg-red-900/20 animate-flicker" />
    </div>
  );
}
