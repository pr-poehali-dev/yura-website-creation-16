import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearAll: () => void;
}

export default function TagFilter({ tags, selectedTags, onTagToggle, onClearAll }: TagFilterProps) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Icon name="Tag" size={20} className="text-primary" />
          Фильтр по тегам
        </h3>
        {selectedTags.length > 0 && (
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onClearAll}
            className="text-muted-foreground hover:text-foreground"
          >
            <Icon name="X" size={16} className="mr-1" />
            Сбросить
          </Button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <Badge
              key={tag}
              variant={isSelected ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                isSelected 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                  : 'hover:bg-primary/10'
              }`}
              onClick={() => onTagToggle(tag)}
            >
              #{tag}
              {isSelected && (
                <Icon name="Check" size={14} className="ml-1" />
              )}
            </Badge>
          );
        })}
      </div>
      
      {selectedTags.length > 0 && (
        <p className="text-sm text-muted-foreground">
          Выбрано: {selectedTags.length} {selectedTags.length === 1 ? 'тег' : 'тегов'}
        </p>
      )}
    </div>
  );
}
