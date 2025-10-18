import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
}

interface ArticleCardProps {
  article: Article;
  onToggleFavorite?: (id: number) => void;
  isFavorite?: boolean;
}

export default function ArticleCard({ article, onToggleFavorite, isFavorite = false }: ArticleCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up bg-gradient-to-br from-white to-muted/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        </div>
        
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground hover:bg-primary">
            {article.category}
          </Badge>
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white"
            onClick={() => onToggleFavorite?.(article.id)}
          >
            <Icon 
              name={isFavorite ? "Heart" : "Heart"} 
              size={16}
              className={isFavorite ? "fill-red-500 text-red-500" : ""}
            />
          </Button>
        </div>
      </div>

      <CardHeader className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            >
              #{tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
          {article.title}
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground line-clamp-3">
          {article.excerpt}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
            {article.author.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{article.author}</span>
            <span className="text-xs text-muted-foreground">{article.date}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Icon name="Clock" size={16} />
          <span>{article.readTime}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
