import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CreepyCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

export default function CreepyCard({ title, description, image, onClick }: CreepyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative overflow-hidden border-2 border-red-900/30 bg-card hover:border-red-700 transition-all duration-500 cursor-pointer group animate-creep-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 brightness-50' : 'scale-100 brightness-75'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        
        {isHovered && (
          <div className="absolute inset-0 bg-red-900/20 animate-flicker" />
        )}
      </div>

      <div className="p-6 space-y-3 relative">
        <div className="absolute -top-3 right-4">
          <div className={`w-12 h-12 rounded-full bg-red-900 flex items-center justify-center ${isHovered ? 'animate-pulse-red' : ''}`}>
            <Icon name="Skull" size={24} className="text-red-200" />
          </div>
        </div>

        <h3 className={`text-2xl font-bold text-foreground ${isHovered ? 'animate-glitch' : ''}`}>
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-red-600 uppercase tracking-wider">
            Нажми, если осмелишься
          </span>
          <Icon 
            name="ChevronRight" 
            size={20} 
            className={`text-red-600 transition-transform ${isHovered ? 'translate-x-2' : ''}`}
          />
        </div>
      </div>

      {isHovered && (
        <div className="absolute top-0 left-0 w-1 h-full bg-red-600 animate-blood-drip" />
      )}
    </Card>
  );
}
