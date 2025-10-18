import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
  likes: number;
}

interface CommentSectionProps {
  articleId: number;
}

export default function CommentSection({ articleId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Анна Петрова',
      text: 'Отличная статья! Очень полезная информация, обязательно применю в работе.',
      date: '2 часа назад',
      likes: 12
    },
    {
      id: 2,
      author: 'Игорь Смирнов',
      text: 'Интересный подход к решению проблемы. Можно больше деталей по второму пункту?',
      date: '5 часов назад',
      likes: 8
    }
  ]);
  
  const [newComment, setNewComment] = useState('');
  const [likedComments, setLikedComments] = useState<Set<number>>(new Set());

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      author: 'Вы',
      text: newComment,
      date: 'только что',
      likes: 0
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleLike = (id: number) => {
    setLikedComments(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });

    setComments(comments.map(c => 
      c.id === id 
        ? { ...c, likes: likedComments.has(id) ? c.likes - 1 : c.likes + 1 }
        : c
    ));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold flex items-center gap-3">
        <Icon name="MessageSquare" size={28} className="text-primary" />
        Комментарии ({comments.length})
      </h2>

      <Card className="p-6 border-2 border-primary/20">
        <Textarea
          placeholder="Поделитесь своими мыслями..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px] mb-4 resize-none"
        />
        <Button 
          onClick={handleAddComment}
          className="w-full sm:w-auto"
          disabled={!newComment.trim()}
        >
          <Icon name="Send" size={16} className="mr-2" />
          Опубликовать
        </Button>
      </Card>

      <div className="space-y-4">
        {comments.map((comment, index) => (
          <Card 
            key={comment.id} 
            className="p-6 hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex gap-4">
              <Avatar className="h-12 w-12 bg-gradient-to-br from-primary to-secondary">
                <AvatarFallback className="text-white font-semibold">
                  {comment.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{comment.author}</p>
                    <p className="text-sm text-muted-foreground">{comment.date}</p>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(comment.id)}
                    className={likedComments.has(comment.id) ? 'text-red-500' : ''}
                  >
                    <Icon 
                      name="Heart" 
                      size={16} 
                      className={`mr-1 ${likedComments.has(comment.id) ? 'fill-current' : ''}`}
                    />
                    {comment.likes}
                  </Button>
                </div>
                
                <p className="text-foreground/90">{comment.text}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
