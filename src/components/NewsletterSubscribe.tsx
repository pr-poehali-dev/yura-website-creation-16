import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !email.includes('@')) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный email",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      toast({
        title: "Успешно подписаны! 🎉",
        description: "Теперь вы будете получать новые статьи первыми",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-2 animate-pulse-glow">
          <Icon name="Mail" size={32} className="text-white" />
        </div>
        
        <h3 className="text-2xl font-bold">Подпишитесь на рассылку</h3>
        <p className="text-muted-foreground">
          Получайте новые статьи прямо на почту. Никакого спама, только качественный контент!
        </p>
        
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-4">
          <Input
            type="email"
            placeholder="ваш@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            {isLoading ? (
              <>
                <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                Подписываем...
              </>
            ) : (
              <>
                <Icon name="Send" size={16} className="mr-2" />
                Подписаться
              </>
            )}
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground">
          Нажимая "Подписаться", вы соглашаетесь с политикой конфиденциальности
        </p>
      </div>
    </Card>
  );
}
