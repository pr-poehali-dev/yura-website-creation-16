import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function AuthorSection() {
  const skills = [
    'TypeScript', 'React', 'Node.js', 'UI/UX Design', 
    'Web Performance', 'Cloud Architecture'
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Email', icon: 'Mail', url: 'mailto:author@blog.com' }
  ];

  const stats = [
    { label: 'Статей', value: '120+' },
    { label: 'Читателей', value: '50K+' },
    { label: 'Лет опыта', value: '8+' }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Об авторе
        </h2>
        <p className="text-muted-foreground text-lg">
          Знакомство с человеком за статьями
        </p>
      </div>

      <Card className="overflow-hidden border-0 shadow-2xl">
        <div className="relative h-48 bg-gradient-to-br from-primary via-secondary to-accent">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        </div>

        <div className="relative px-6 sm:px-12 pb-12">
          <div className="flex flex-col sm:flex-row gap-8 -mt-20">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/3ed1e7d2-ff54-4a85-8024-56565dc95e78/files/bc758566-0daa-4a74-aa38-5d7e4a672f38.jpg"
                  alt="Автор блога"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 space-y-6 pt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold">Александр Волков</h3>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    <Icon name="Verified" size={14} className="mr-1" />
                    Автор
                  </Badge>
                </div>
                <p className="text-xl text-muted-foreground">
                  Fullstack разработчик & технический писатель
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  Привет! 👋 Я — разработчик с 8-летним опытом создания веб-приложений. 
                  Люблю делиться знаниями и помогать другим расти в профессии.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  В своём блоге я рассказываю о современных технологиях, лучших практиках разработки 
                  и делюсь опытом решения реальных задач. Моя цель — сделать сложное простым и понятным.
                </p>
              </div>

              <div className="space-y-3">
                <p className="font-semibold flex items-center gap-2">
                  <Icon name="Code" size={18} className="text-primary" />
                  Специализация:
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <Icon name={social.icon as any} size={16} className="mr-2" />
                    {social.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="MessageCircle" size={32} className="text-white" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left space-y-2">
            <h3 className="text-2xl font-bold">Есть вопросы или предложения?</h3>
            <p className="text-muted-foreground">
              Буду рад обсудить интересные темы или помочь с вашим проектом
            </p>
          </div>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            <Icon name="Send" size={18} className="mr-2" />
            Написать мне
          </Button>
        </div>
      </Card>
    </div>
  );
}
