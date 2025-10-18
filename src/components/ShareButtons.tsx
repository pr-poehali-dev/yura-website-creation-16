import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url = window.location.href }: ShareButtonsProps) {
  const { toast } = useToast();

  const shareLinks = {
    vk: `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Ссылка скопирована!",
      description: "Теперь можете поделиться ей где угодно",
    });
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex flex-wrap gap-3 animate-fade-in">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('vk')}
        className="hover:bg-[#0077FF] hover:text-white hover:border-[#0077FF] transition-all duration-300"
      >
        <Icon name="MessageCircle" size={16} className="mr-2" />
        VK
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('telegram')}
        className="hover:bg-[#0088cc] hover:text-white hover:border-[#0088cc] transition-all duration-300"
      >
        <Icon name="Send" size={16} className="mr-2" />
        Telegram
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('twitter')}
        className="hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all duration-300"
      >
        <Icon name="Twitter" size={16} className="mr-2" />
        Twitter
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('facebook')}
        className="hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300"
      >
        <Icon name="Facebook" size={16} className="mr-2" />
        Facebook
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
        className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      >
        <Icon name="Link" size={16} className="mr-2" />
        Копировать
      </Button>
    </div>
  );
}
