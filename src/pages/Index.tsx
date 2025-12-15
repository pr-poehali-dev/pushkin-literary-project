import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Work {
  id: string;
  title: string;
  year: string;
  category: 'poetry' | 'prose' | 'drama';
  excerpt: string;
}

interface BiographyEvent {
  year: string;
  title: string;
  description: string;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const works: Work[] = [
    {
      id: '1',
      title: 'Евгений Онегин',
      year: '1823-1831',
      category: 'poetry',
      excerpt: 'Роман в стихах, вершина творчества Пушкина. История Онегина и Татьяны — одно из величайших произведений русской литературы.'
    },
    {
      id: '2',
      title: 'Капитанская дочка',
      year: '1836',
      category: 'prose',
      excerpt: 'Исторический роман о любви и чести во времена Пугачёвского восстания.'
    },
    {
      id: '3',
      title: 'Борис Годунов',
      year: '1825',
      category: 'drama',
      excerpt: 'Историческая драма о власти, совести и народной судьбе.'
    },
    {
      id: '4',
      title: 'Медный всадник',
      year: '1833',
      category: 'poetry',
      excerpt: 'Поэма о Петербурге, наводнении и маленьком человеке перед лицом истории.'
    },
    {
      id: '5',
      title: 'Пиковая дама',
      year: '1834',
      category: 'prose',
      excerpt: 'Мистическая повесть о страсти к игре и роковой тайне трёх карт.'
    },
    {
      id: '6',
      title: 'Руслан и Людмила',
      year: '1820',
      category: 'poetry',
      excerpt: 'Сказочная поэма, прославившая молодого Пушкина. "У лукоморья дуб зелёный..."'
    }
  ];

  const biography: BiographyEvent[] = [
    {
      year: '1799',
      title: 'Рождение',
      description: 'Александр Сергеевич Пушкин родился в Москве в дворянской семье.'
    },
    {
      year: '1811-1817',
      title: 'Царскосельский лицей',
      description: 'Учёба в привилегированном учебном заведении, где сформировался его поэтический дар.'
    },
    {
      year: '1820',
      title: 'Южная ссылка',
      description: 'За вольнолюбивые стихи отправлен в ссылку на юг России.'
    },
    {
      year: '1824-1826',
      title: 'Михайловское',
      description: 'Ссылка в родовое имение, период интенсивного творчества.'
    },
    {
      year: '1831',
      title: 'Женитьба',
      description: 'Брак с Натальей Гончаровой, первой красавицей Москвы.'
    },
    {
      year: '1837',
      title: 'Дуэль и смерть',
      description: 'Смертельное ранение на дуэли с Дантесом. Пушкину было 37 лет.'
    }
  ];

  const filteredWorks = works.filter(
    (work) =>
      work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredBiography = biography.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryLabel = (category: string) => {
    const labels = {
      poetry: 'Поэзия',
      prose: 'Проза',
      drama: 'Драматургия'
    };
    return labels[category as keyof typeof labels];
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      poetry: 'bg-accent text-accent-foreground',
      prose: 'bg-primary text-primary-foreground',
      drama: 'bg-secondary text-secondary-foreground'
    };
    return colors[category as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="BookOpen" size={32} className="text-accent" />
              <h1 className="text-3xl font-bold text-foreground">Александр Пушкин</h1>
            </div>
            <p className="text-muted-foreground hidden md:block">Литературный портал</p>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Солнце русской поэзии
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Александр Сергеевич Пушкин (1799–1837) — великий русский поэт, драматург и прозаик, 
                создатель современного русского литературного языка.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Badge variant="outline" className="text-base px-4 py-2">
                  <Icon name="Feather" size={16} className="mr-2" />
                  Поэт
                </Badge>
                <Badge variant="outline" className="text-base px-4 py-2">
                  <Icon name="BookText" size={16} className="mr-2" />
                  Прозаик
                </Badge>
                <Badge variant="outline" className="text-base px-4 py-2">
                  <Icon name="Theater" size={16} className="mr-2" />
                  Драматург
                </Badge>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-accent/20 rounded-lg blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/3f458288-dad2-43c5-999c-4c38212c3865/files/6888f2a6-ce58-445f-8957-6059d3be1d73.jpg"
                alt="Александр Пушкин"
                className="relative rounded-lg shadow-2xl w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto mb-12 animate-fade-in">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск по произведениям и биографии..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-base"
              />
            </div>
          </div>

          <Tabs defaultValue="works" className="animate-fade-in">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="works" className="text-base">
                <Icon name="Library" size={18} className="mr-2" />
                Произведения
              </TabsTrigger>
              <TabsTrigger value="biography" className="text-base">
                <Icon name="Clock" size={18} className="mr-2" />
                Биография
              </TabsTrigger>
              <TabsTrigger value="video" className="text-base">
                <Icon name="Play" size={18} className="mr-2" />
                Видео
              </TabsTrigger>
            </TabsList>

            <TabsContent value="works" className="space-y-6">
              {filteredWorks.length === 0 ? (
                <Card className="text-center py-12">
                  <CardContent>
                    <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Произведения не найдены</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredWorks.map((work, index) => (
                    <Card 
                      key={work.id} 
                      className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <CardTitle className="text-2xl">{work.title}</CardTitle>
                          <Badge className={getCategoryColor(work.category)}>
                            {getCategoryLabel(work.category)}
                          </Badge>
                        </div>
                        <CardDescription className="text-muted-foreground">
                          {work.year}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 leading-relaxed">{work.excerpt}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="biography" className="space-y-6">
              {filteredBiography.length === 0 ? (
                <Card className="text-center py-12">
                  <CardContent>
                    <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">События не найдены</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="max-w-4xl mx-auto">
                  <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
                    <div className="space-y-8">
                      {filteredBiography.map((event, index) => (
                        <div 
                          key={index} 
                          className="relative pl-20 animate-fade-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="absolute left-0 w-16 h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold shadow-lg">
                            {event.year}
                          </div>
                          <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                              <CardTitle className="text-2xl">{event.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-foreground/80 leading-relaxed">{event.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="video" className="space-y-6">
              <div className="max-w-4xl mx-auto">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-3xl">О жизни и творчестве Пушкина</CardTitle>
                    <CardDescription className="text-base">
                      Документальный фильм о великом поэте
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src="https://rutube.ru/play/embed/b71f2d7f6a9c67a26264233ede86014c"
                        frameBorder="0"
                        allow="clipboard-write; autoplay"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="border-t border-border py-8 bg-card/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Icon name="Heart" size={16} className="text-accent" />
            Литературный портал о творчестве А.С. Пушкина
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;