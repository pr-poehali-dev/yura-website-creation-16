import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface GameCardProps {
  title: string;
  creator: string;
  image: string;
  players: number;
  likes: number;
  genre: string;
}

export default function GameCard({ title, creator, image, players, likes, genre }: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card
      className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-bounce-in bg-white group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>

        <div className="absolute top-3 left-3">
          <Badge className="bg-primary text-white font-bold px-3 py-1">
            {genre}
          </Badge>
        </div>

        <div className="absolute top-3 right-3 flex gap-2">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm font-semibold">
            <Icon name="Users" size={14} className="mr-1" />
            {players >= 1000 ? `${(players / 1000).toFixed(1)}K` : players}
          </Badge>
        </div>

        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
              <Icon name="Play" size={18} className="mr-2" />
              ИГРАТЬ
            </Button>
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <Icon name="User" size={12} />
            {creator}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <Button
            variant="ghost"
            size="sm"
            className={`gap-2 ${isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Icon name="ThumbsUp" size={16} className={isLiked ? 'fill-current' : ''} />
            <span className="font-semibold">{isLiked ? likes + 1 : likes}%</span>
          </Button>

          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Icon name="MoreVertical" size={16} />
          </Button>
        </div>
      </div>
    </Card>
  );
}
