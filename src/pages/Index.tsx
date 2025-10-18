import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import ArticleCard from '@/components/ArticleCard';
import TagFilter from '@/components/TagFilter';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import CommentSection from '@/components/CommentSection';
import ShareButtons from '@/components/ShareButtons';
import Icon from '@/components/ui/icon';
import { Toaster } from '@/components/ui/toaster';

const MOCK_ARTICLES = [
  {
    id: 1,
    title: 'Современные тренды веб-разработки в 2024',
    excerpt: 'Погружаемся в мир новейших технологий и инструментов, которые меняют индустрию разработки. От AI-ассистентов до серверных компонентов.',
    image: 'https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/9ae9ccbc-56f4-48c3-bf82-13c80f49814d.jpg',
    author: 'Алексей Иванов',
    date: '15 окт 2024',
    readTime: '8 мин',
    tags: ['веб-разработка', 'технологии', 'тренды'],
    category: 'Технологии'
  },
  {
    id: 2,
    title: 'Искусство создания пользовательских интерфейсов',
    excerpt: 'Разбираем принципы хорошего UX/UI дизайна. Как создавать интерфейсы, которые любят пользователи и которые приносят результаты бизнесу.',
    image: 'https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/ae3a094f-2d13-481f-a711-74b77dde63bf.jpg',
    author: 'Мария Петрова',
    date: '12 окт 2024',
    readTime: '12 мин',
    tags: ['дизайн', 'UX', 'UI'],
    category: 'Дизайн'
  },
  {
    id: 3,
    title: 'TypeScript: От основ к продвинутым техникам',
    excerpt: 'Полное руководство по TypeScript для разработчиков. Изучаем типизацию, дженерики, декораторы и лучшие практики написания надежного кода.',
    image: 'https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/d0361b35-118c-44fc-812d-bf696fd38101.jpg',
    author: 'Дмитрий Соколов',
    date: '10 окт 2024',
    readTime: '15 мин',
    tags: ['TypeScript', 'программирование', 'веб-разработка'],
    category: 'Программирование'
  },
  {
    id: 4,
    title: 'Оптимизация производительности React приложений',
    excerpt: 'Практические советы по ускорению React-приложений. Мемоизация, ленивая загрузка, виртуализация списков и другие техники оптимизации.',
    image: 'https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/9ae9ccbc-56f4-48c3-bf82-13c80f49814d.jpg',
    author: 'Елена Новикова',
    date: '8 окт 2024',
    readTime: '10 мин',
    tags: ['React', 'производительность', 'оптимизация'],
    category: 'Технологии'
  }
];

const ALL_TAGS = Array.from(new Set(MOCK_ARTICLES.flatMap(a => a.tags)));
const CATEGORIES = Array.from(new Set(MOCK_ARTICLES.map(a => a.category)));

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [showArticle, setShowArticle] = useState<number | null>(null);

  const filteredArticles = useMemo(() => {
    return MOCK_ARTICLES.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => article.tags.includes(tag));
      const matchesCategory = selectedCategory === 'Все' || article.category === selectedCategory;
      
      return matchesSearch && matchesTags && matchesCategory;
    });
  }, [searchQuery, selectedTags, selectedCategory]);

  const handleToggleFavorite = (id: number) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  if (showArticle) {
    const article = MOCK_ARTICLES.find(a => a.id === showArticle);
    if (!article) return null;

    return (
      <div className="min-h-screen bg-background">
        <Toaster />
        
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => setShowArticle(null)}
            className="mb-6 hover:bg-primary/10"
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Назад к статьям
          </Button>

          <article className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  {article.category}
                </span>
              </div>
              
              <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {article.title}
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                    {article.author.charAt(0)}
                  </div>
                  <span className="font-medium text-foreground">{article.author}</span>
                </div>
                <span>•</span>
                <span>{article.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Icon name="Clock" size={16} />
                  {article.readTime}
                </span>
              </div>
            </div>

            <img 
              src={article.image} 
              alt={article.title}
              className="w-full rounded-xl shadow-2xl"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
              
              <p>
                Это демонстрация статьи блога. В реальном проекте здесь будет полный текст статьи 
                с форматированием, изображениями, кодом и другими элементами контента.
              </p>
              
              <p>
                Современные блоги требуют не только качественного контента, но и удобной навигации, 
                интерактивных элементов и приятного визуального оформления. Именно это мы и реализовали 
                в данном проекте.
              </p>
            </div>

            <Separator className="my-8" />

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Icon name="Share2" size={20} className="text-primary" />
                Поделиться статьей
              </h3>
              <ShareButtons title={article.title} />
            </div>

            <Separator className="my-8" />

            <CommentSection articleId={article.id} />
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      
      <div 
        className="relative h-[500px] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(155, 135, 245, 0.9), rgba(217, 70, 239, 0.8)), url(https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/d0361b35-118c-44fc-812d-bf696fd38101.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center space-y-6 relative z-10 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Современный Блог
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-95">
            Статьи о технологиях, дизайне и разработке. Делимся знаниями и опытом.
          </p>
          
          <div className="flex gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              onClick={() => document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Читать статьи
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/20"
              onClick={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Подписаться
            </Button>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12" id="articles">
        <div className="max-w-2xl mx-auto">
          <div className="relative animate-fade-in">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск по статьям..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>

        <Tabs defaultValue="Все" className="w-full" onValueChange={setSelectedCategory}>
          <TabsList className="w-full justify-start overflow-x-auto h-auto flex-wrap gap-2 bg-muted/50 p-2">
            <TabsTrigger value="Все" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Все статьи
            </TabsTrigger>
            {CATEGORIES.map(cat => (
              <TabsTrigger 
                key={cat} 
                value={cat}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {cat}
              </TabsTrigger>
            ))}
            <TabsTrigger value="Избранное" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Heart" size={16} className="mr-2" />
              Избранное ({favorites.size})
            </TabsTrigger>
          </TabsList>

          <div className="mt-8 space-y-8">
            <TagFilter 
              tags={ALL_TAGS}
              selectedTags={selectedTags}
              onTagToggle={handleTagToggle}
              onClearAll={() => setSelectedTags([])}
            />

            <TabsContent value="Избранное" className="mt-0">
              {favorites.size === 0 ? (
                <div className="text-center py-16 space-y-4 animate-fade-in">
                  <Icon name="Heart" size={48} className="mx-auto text-muted-foreground" />
                  <p className="text-xl text-muted-foreground">
                    У вас пока нет избранных статей
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Нажмите на ❤️ на карточке статьи, чтобы добавить её в избранное
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {MOCK_ARTICLES.filter(a => favorites.has(a.id)).map((article) => (
                    <div key={article.id} onClick={() => setShowArticle(article.id)} className="cursor-pointer">
                      <ArticleCard 
                        article={article}
                        onToggleFavorite={handleToggleFavorite}
                        isFavorite={favorites.has(article.id)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>

            {['Все', ...CATEGORIES].map(category => (
              <TabsContent key={category} value={category} className="mt-0">
                {filteredArticles.length === 0 ? (
                  <div className="text-center py-16 space-y-4 animate-fade-in">
                    <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground" />
                    <p className="text-xl text-muted-foreground">
                      Статьи не найдены
                    </p>
                    <Button variant="outline" onClick={() => {
                      setSearchQuery('');
                      setSelectedTags([]);
                    }}>
                      Сбросить фильтры
                    </Button>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-8">
                    {filteredArticles.map((article) => (
                      <div key={article.id} onClick={() => setShowArticle(article.id)} className="cursor-pointer">
                        <ArticleCard 
                          article={article}
                          onToggleFavorite={handleToggleFavorite}
                          isFavorite={favorites.has(article.id)}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>

        <div id="subscribe" className="pt-8">
          <NewsletterSubscribe />
        </div>

        <footer className="text-center space-y-4 pt-12 pb-8 border-t">
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="sm">
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="User" size={16} className="mr-2" />
              О авторе
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Mail" size={16} className="mr-2" />
              Контакты
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Rss" size={16} className="mr-2" />
              RSS
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Современный Блог. Создано с ❤️
          </p>
        </footer>
      </div>
    </div>
  );
}
