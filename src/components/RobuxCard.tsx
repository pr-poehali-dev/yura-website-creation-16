import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface RobuxCardProps {
  amount: number;
  price: number;
  bonus?: number;
  popular?: boolean;
}

export default function RobuxCard({ amount, price, bonus, popular }: RobuxCardProps) {
  return (
    <Card
      className={`relative p-6 text-center transition-all duration-300 hover:scale-105 ${
        popular
          ? 'bg-gradient-to-br from-primary to-accent text-white border-4 border-secondary shadow-2xl'
          : 'bg-white hover:shadow-xl'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold">
            ПОПУЛЯРНОЕ
          </span>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <Icon
            name="Coins"
            size={48}
            className={popular ? 'text-yellow-300 animate-pulse-scale' : 'text-primary'}
          />
        </div>

        <div>
          <p className={`text-4xl font-bold ${popular ? 'text-white' : 'text-primary'}`}>
            {amount.toLocaleString()}
          </p>
          <p className={`text-sm ${popular ? 'text-white/80' : 'text-muted-foreground'}`}>
            Робуксов
          </p>
        </div>

        {bonus && (
          <div
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              popular ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700'
            }`}
          >
            +{bonus}% бонус
          </div>
        )}

        <div className={`text-3xl font-bold ${popular ? 'text-white' : 'text-foreground'}`}>
          ₽{price}
        </div>

        <Button
          className={`w-full font-bold ${
            popular
              ? 'bg-white text-primary hover:bg-white/90'
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
          size="lg"
        >
          КУПИТЬ
        </Button>
      </div>
    </Card>
  );
}
