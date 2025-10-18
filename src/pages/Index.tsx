import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import GlitchText from '@/components/GlitchText';
import CreepyCard from '@/components/CreepyCard';
import Screamer from '@/components/Screamer';
import BloodDrips from '@/components/BloodDrips';
import EyeFollow from '@/components/EyeFollow';
import Icon from '@/components/ui/icon';

const CREEPY_SECTIONS = [
  {
    id: 1,
    title: 'Заброшенный дом',
    description: 'Старый особняк на краю города. Говорят, там до сих пор слышны крики...',
    image: 'https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/5a8c4680-2d2b-4deb-a7f5-952a5cf50cf5.jpg'
  },
  {
    id: 2,
    title: 'Темный лес',
    description: 'Никто не возвращается оттуда. Но ты можешь попробовать...',
    image: 'https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/0d2cd9e8-c8b3-42eb-927f-09e030596cb6.jpg'
  },
  {
    id: 3,
    title: 'Последнее предупреждение',
    description: 'Ты уверен, что хочешь продолжить? Повернуть назад уже не получится.',
    image: 'https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/edb581a0-9973-469b-a187-a08ea300c491.jpg'
  }
];

export default function Index() {
  const [showScreamer, setShowScreamer] = useState(false);
  const [screamerCount, setScreamerCount] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    const shakeInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
      }
    }, 3000);

    return () => clearInterval(shakeInterval);
  }, []);

  const handleCardClick = (id: number) => {
    if (id === 3) {
      setCountdown(5);
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev === null || prev <= 1) {
            clearInterval(timer);
            triggerScreamer();
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (Math.random() > 0.5) {
      triggerScreamer();
    }
  };

  const triggerScreamer = () => {
    setShowScreamer(true);
    setScreamerCount(prev => prev + 1);
  };

  return (
    <div className={`min-h-screen bg-background text-foreground overflow-hidden ${isShaking ? 'animate-shake' : ''}`}>
      <BloodDrips />
      <EyeFollow />
      
      {showScreamer && (
        <Screamer 
          delay={0}
          duration={2000}
          onComplete={() => setShowScreamer(false)}
        />
      )}

      <div 
        className="relative min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url(https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/5a8c4680-2d2b-4deb-a7f5-952a5cf50cf5.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-transparent to-black/50" />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center space-y-8 mb-16 animate-creep-in">
            <h1 className="text-7xl md:text-9xl font-bold text-red-600 drop-shadow-[0_0_30px_rgba(139,0,0,0.8)]">
              <GlitchText text="ДОБРО ПОЖАЛОВАТЬ" />
            </h1>
            
            <p className="text-2xl md:text-3xl text-red-400/80 animate-flicker">
              В ТВОЙ ХУДШИЙ КОШМАР
            </p>

            <div className="flex items-center justify-center gap-4 pt-8">
              <Icon name="Skull" size={32} className="text-red-600 animate-pulse-red" />
              <p className="text-lg text-muted-foreground">
                Ты посетитель #{screamerCount + 666}
              </p>
              <Icon name="Skull" size={32} className="text-red-600 animate-pulse-red" />
            </div>
          </div>

          <Card className="p-8 mb-12 bg-black/60 border-2 border-red-900/50 backdrop-blur-sm animate-fade-in-scary">
            <div className="text-center space-y-4">
              <Icon name="AlertTriangle" size={48} className="mx-auto text-red-600 animate-shake" />
              <h2 className="text-3xl font-bold text-red-500">
                ⚠️ ПРЕДУПРЕЖДЕНИЕ ⚠️
              </h2>
              <p className="text-foreground/90 leading-relaxed max-w-2xl mx-auto">
                Этот сайт содержит пугающие элементы и скримеры. 
                Не рекомендуется для людей со слабым сердцем. 
                Продолжая просмотр, вы делаете это на свой страх и риск.
              </p>
              <p className="text-red-400 text-sm animate-flicker">
                Мы предупредили. Остальное на твоей совести.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {CREEPY_SECTIONS.map((section) => (
              <CreepyCard
                key={section.id}
                title={section.title}
                description={section.description}
                image={section.image}
                onClick={() => handleCardClick(section.id)}
              />
            ))}
          </div>

          {countdown !== null && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50 animate-fade-in-scary">
              <div className="text-center space-y-8">
                <h2 className="text-6xl font-bold text-red-600 animate-glitch">
                  ГОТОВЬСЯ...
                </h2>
                <p className="text-9xl font-bold text-white animate-pulse-red">
                  {countdown}
                </p>
              </div>
            </div>
          )}

          <Card className="p-12 bg-black/60 border-2 border-red-900/50 backdrop-blur-sm">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 animate-pulse-red rounded-full border-4 border-red-600" />
                  <Icon name="Ghost" size={80} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 animate-shake" />
                </div>
              </div>

              <h2 className="text-4xl font-bold">
                <GlitchText text="НЕ ОБОРАЧИВАЙСЯ" />
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                За тобой кто-то наблюдает. Ты чувствуешь это, правда? 
                Холодок по спине... Ощущение чужого взгляда...
              </p>

              <div className="pt-6 space-y-4">
                <Button
                  size="lg"
                  className="bg-red-900 hover:bg-red-800 text-white border-2 border-red-600 animate-pulse-red text-xl px-12"
                  onClick={triggerScreamer}
                >
                  <Icon name="Zap" size={24} className="mr-3 animate-shake" />
                  НАЖМИ, ЕСЛИ ОСМЕЛИШЬСЯ
                </Button>
                
                <p className="text-xs text-red-500 animate-flicker">
                  (Серьёзно, не нажимай)
                </p>
              </div>
            </div>
          </Card>

          <footer className="mt-16 text-center space-y-4 pb-8 border-t border-red-900/30 pt-8">
            <p className="text-red-600 text-sm animate-flicker">
              ТЫ НИКОГДА НЕ ПОКИНЕШЬ ЭТО МЕСТО
            </p>
            <p className="text-muted-foreground text-xs">
              © 2024 Haunted Site. Создано в темноте 🕯️
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
