import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      
      const chars = '!@#$%^&*(){}[]<>?/\\|~`';
      const glitchedText = text
        .split('')
        .map(char => Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : char)
        .join('');
      
      setDisplayText(glitchedText);
      
      setTimeout(() => {
        setDisplayText(text);
        setIsGlitching(false);
      }, 100);
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <span 
      className={`${className} ${isGlitching ? 'animate-glitch text-red-600' : ''} transition-colors`}
      style={{
        textShadow: isGlitching ? '2px 2px 4px rgba(139, 0, 0, 0.8)' : 'none'
      }}
    >
      {displayText}
    </span>
  );
}
