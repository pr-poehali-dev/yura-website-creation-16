import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function PlayerProfile() {
  const stats = [
    { label: 'Друзей', value: '247', icon: 'Users' },
    { label: 'Игр', value: '89', icon: 'Gamepad2' },
    { label: 'Робуксов', value: '1,250', icon: 'Coins' }
  ];

  const badges = [
    { name: 'Ветеран', color: 'bg-yellow-500' },
    { name: 'Строитель', color: 'bg-blue-500' },
    { name: 'Исследователь', color: 'bg-green-500' }
  ];

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 animate-slide-up shadow-xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="relative group">
            <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-shadow">
              <Icon name="User" size={64} />
            </div>
            <div className="absolute -bottom-2 -right-2">
              <Badge className="bg-green-500 text-white border-2 border-white">
                <Icon name="Circle" size={8} className="mr-1 fill-current" />
                Онлайн
              </Badge>
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
            <Icon name="UserPlus" size={18} className="mr-2" />
            Добавить в друзья
          </Button>
        </div>

        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">SuperGamer2024</h2>
            <p className="text-muted-foreground flex items-center gap-2">
              <Icon name="MapPin" size={16} />
              Россия • На платформе с 2020
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-3 bg-white rounded-lg border-2 border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-center mb-1">
                  <Icon name={stat.icon as any} size={20} className="text-primary" />
                </div>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-muted-foreground">Достижения</p>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <Badge
                  key={badge.name}
                  className={`${badge.color} text-white px-3 py-1 font-semibold`}
                >
                  <Icon name="Award" size={14} className="mr-1" />
                  {badge.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
