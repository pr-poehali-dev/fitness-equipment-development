import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const equipmentTypes = [
    {
      icon: "Dumbbell",
      title: "Фитнес оборудование",
      description: "Профессиональные тренажеры для силовых и кардио тренировок"
    },
    {
      icon: "Waves",
      title: "Оборудование для бассейнов",
      description: "Системы очистки, насосы, фильтры и аксессуары для бассейнов"
    },
    {
      icon: "Thermometer",
      title: "Терм оборудование",
      description: "Сауны, парные, климатические системы для wellness зон"
    }
  ];

  const features = [
    {
      icon: "Shield",
      title: "Надежность",
      description: "15+ лет на рынке профессионального оборудования"
    },
    {
      icon: "Users",
      title: "Экспертиза",
      description: "Команда инженеров с глубоким пониманием индустрии"
    },
    {
      icon: "Wrench",
      title: "Сервис",
      description: "Полный цикл: от проектирования до технического обслуживания"
    }
  ];

  const stats = [
    { number: "500+", label: "Проектов" },
    { number: "15+", label: "Лет опыта" },
    { number: "24/7", label: "Поддержка" },
    { number: "100%", label: "Качество" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Settings" className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold text-slate-800">EQUIPMENT SOLUTIONS</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-slate-600 hover:text-primary transition-colors">Главная</a>
            <a href="#products" className="text-slate-600 hover:text-primary transition-colors">Продукция</a>
            <a href="#about" className="text-slate-600 hover:text-primary transition-colors">О компании</a>
          </nav>
          <Button className="hidden md:block">Связаться</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Профессиональное<br />
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                оборудование
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Инновационные решения для терм, фитнес-клубов и бассейнов. 
              Превращаем ваши идеи в современные wellness-пространства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                <Icon name="ArrowRight" className="ml-2" size={20} />
                Каталог продукции
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Наша продукция
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Широкий спектр профессионального оборудования для создания современных wellness-комплексов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {equipmentTypes.map((equipment, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in bg-white" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={equipment.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl text-slate-800">{equipment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center leading-relaxed">
                    {equipment.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full mt-6">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                О компании
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Мы — ведущий производитель профессионального оборудования для wellness-индустрии. 
                Наша миссия — создавать инновационные решения, которые помогают нашим клиентам 
                строить успешные и современные фитнес-центры, термальные комплексы и бассейны.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name={feature.icon as any} className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <Button size="lg">
                <Icon name="Users" className="mr-2" size={20} />
                Узнать больше
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="/img/2e2c45e7-a2de-4c6f-89c8-a4f2b14e750b.jpg" 
                alt="Современное фитнес оборудование"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нашими экспертами для консультации по оборудованию 
            и индивидуального решения для вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать письмо
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Settings" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">EQUIPMENT SOLUTIONS</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Профессиональные решения для wellness-индустрии
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Фитнес оборудование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оборудование для бассейнов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Терм оборудование</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Проекты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сертификаты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@equipment-solutions.ru
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            © 2024 Equipment Solutions. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}