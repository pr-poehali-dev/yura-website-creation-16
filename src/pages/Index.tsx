import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GameCard from '@/components/GameCard';
import PlayerProfile from '@/components/PlayerProfile';
import RobuxCard from '@/components/RobuxCard';
import Icon from '@/components/ui/icon';

const GAMES = [
  {
    id: 1,
    title: 'Mega Obby Adventure',
    creator: 'BuilderPro',
    image: 'https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/4ae9cff7-a5ff-4db3-a824-c9910008bb80.jpg',
    players: 12500,
    likes: 94,
    genre: 'Obby'
  },
  {
    id: 2,
    title: 'Симулятор ресторана',
    creator: 'CookingMaster',
    image: 'https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/8b169a3a-bd1c-4bda-9e2c-70d51b940acf.jpg',
    players: 8900,
    likes: 89,
    genre: 'Tycoon'
  },
  {
    id: 3,
    title: 'Битва за крепость',
    creator: 'WarGames',
    image: 'https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/b2a5b31b-44b0-4feb-ac60-5b2b0c006df4.jpg',
    players: 25000,
    likes: 97,
    genre: 'Shooter'
  },
  {
    id: 4,
    title: 'Roleplay City',
    creator: 'RPMakers',
    image: 'https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/8b169a3a-bd1c-4bda-9e2c-70d51b940acf.jpg',
    players: 15600,
    likes: 91,
    genre: 'Roleplay'
  },
  {
    id: 5,
    title: 'Космические приключения',
    creator: 'SpaceDevs',
    image: 'https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/4ae9cff7-a5ff-4db3-a824-c9910008bb80.jpg',
    players: 6700,
    likes: 88,
    genre: 'Adventure'
  },
  {
    id: 6,
    title: 'Pet Simulator Ultra',
    creator: 'PetLover',
    image: 'https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/b2a5b31b-44b0-4feb-ac60-5b2b0c006df4.jpg',
    players: 45000,
    likes: 96,
    genre: 'Simulator'
  }
];

const ROBUX_PACKAGES = [
  { amount: 400, price: 199, bonus: 0 },
  { amount: 800, price: 349, bonus: 10 },
  { amount: 1700, price: 699, bonus: 20, popular: true },
  { amount: 4500, price: 1499, bonus: 25 }
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = GAMES.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <header className="bg-white border-b-4 border-primary shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg animate-pulse-scale">
                <Icon name="Box" size={28} className="text-white" />
              </div>
              <h1 className="text-3xl font-black text-primary hidden sm:block">ROBLOX</h1>
            </div>

            <div className="flex-1 max-w-md">
              <div className="relative">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  type="text"
                  placeholder="Поиск игр..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-2 border-primary/20 focus:border-primary"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" className="border-2 border-primary/20 hover:border-primary">
                <Icon name="Bell" size={18} />
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold hidden sm:flex">
                <Icon name="Coins" size={18} className="mr-2" />
                Купить Робуксы
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-accent to-secondary p-12 text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          
          <div className="relative z-10 max-w-2xl space-y-6 animate-slide-up">
            <h2 className="text-5xl font-black leading-tight">
              Присоединяйся к миллионам игроков!
            </h2>
            <p className="text-xl opacity-90">
              Исследуй бесконечные миры, создавай свои игры и играй с друзьями
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Создать игру
              </Button>
            </div>
          </div>
        </div>

        <PlayerProfile />

        <Tabs defaultValue="games" className="w-full">
          <TabsList className="w-full justify-start bg-white p-2 shadow-md border-2 border-primary/10 h-auto">
            <TabsTrigger
              value="games"
              className="data-[state=active]:bg-primary data-[state=active]:text-white font-bold px-6"
            >
              <Icon name="Gamepad2" size={18} className="mr-2" />
              Игры
            </TabsTrigger>
            <TabsTrigger
              value="robux"
              className="data-[state=active]:bg-primary data-[state=active]:text-white font-bold px-6"
            >
              <Icon name="Coins" size={18} className="mr-2" />
              Робуксы
            </TabsTrigger>
            <TabsTrigger
              value="avatar"
              className="data-[state=active]:bg-primary data-[state=active]:text-white font-bold px-6"
            >
              <Icon name="User" size={18} className="mr-2" />
              Аватар
            </TabsTrigger>
          </TabsList>

          <TabsContent value="games" className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Популярные игры</h2>
              <Button variant="outline" className="border-2 border-primary/20">
                <Icon name="Filter" size={18} className="mr-2" />
                Фильтры
              </Button>
            </div>

            {filteredGames.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <Icon name="Search" size={64} className="mx-auto text-muted-foreground" />
                <p className="text-xl text-muted-foreground">Игры не найдены</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGames.map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="robux" className="mt-8 space-y-6">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-4xl font-bold">Купить Робуксы</h2>
              <p className="text-muted-foreground text-lg">
                Разблокируй эксклюзивные предметы и улучшения
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ROBUX_PACKAGES.map((pkg, index) => (
                <RobuxCard key={index} {...pkg} />
              ))}
            </div>

            <div className="bg-blue-50 border-2 border-primary/20 rounded-xl p-6 text-center">
              <Icon name="Info" size={24} className="mx-auto mb-3 text-primary" />
              <p className="text-sm text-muted-foreground">
                Робуксы — это виртуальная валюта Roblox. Используй их для покупки улучшений,
                аксессуаров и премиум-контента.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="avatar" className="mt-8 space-y-6">
            <div className="text-center py-24 space-y-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl animate-pulse-scale">
                <Icon name="User" size={64} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold">Настрой своего персонажа</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Создай уникальный образ из миллионов предметов одежды, аксессуаров и анимаций
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Открыть редактор
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <footer className="text-center space-y-4 pt-12 pb-8 border-t-2 border-primary/10">
          <div className="flex justify-center gap-6 flex-wrap">
            <Button variant="ghost" size="sm">О нас</Button>
            <Button variant="ghost" size="sm">Помощь</Button>
            <Button variant="ghost" size="sm">Блог</Button>
            <Button variant="ghost" size="sm">Вакансии</Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Roblox Clone. Создано для демонстрации 🎮
          </p>
        </footer>
      </div>
    </div>
  );
}
