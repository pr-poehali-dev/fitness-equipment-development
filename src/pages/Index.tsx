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
      <header className="border-b bg-black/10 backdrop-blur-md relative overflow-hidden">
        {/* Matrix background effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-600 animate-matrix" style={{backgroundSize: '200% 200%'}}></div>
        </div>
        
        {/* Holographic data streams */}
        <div className="absolute top-0 left-0 w-full h-1">
          <div className="h-full w-20 bg-gradient-to-r from-transparent via-primary to-transparent animate-data-flow"></div>
        </div>
        
        <div className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center animate-hologram shadow-lg">
              <Icon name="Cpu" className="text-white" size={24} />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-primary bg-clip-text text-transparent">NEXTECH</span>
              <div className="text-xs text-slate-500 font-mono">v2.1.0 // AI-POWERED</div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="relative text-slate-600 hover:text-primary transition-all duration-300 group">
              Главная
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#products" className="relative text-slate-600 hover:text-primary transition-all duration-300 group">
              Продукция
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#about" className="relative text-slate-600 hover:text-primary transition-all duration-300 group">
              О компании
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-xs font-mono text-slate-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              ONLINE
            </div>
            <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transition-all duration-300 animate-glow">
              <Icon name="Zap" className="mr-2" size={16} />
              Коннект
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary to-blue-600 rounded-full blur-3xl animate-glow"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium mb-6 animate-glow">
              <Icon name="Zap" className="mr-2" size={16} />
              Инновационные технологии 2024
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              <span className="relative inline-block">
                Будущее
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-primary opacity-30 blur animate-glow rounded-lg"></div>
                <span className="relative">Будущее</span>
              </span><br />
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                wellness-индустрии
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              Революционные решения с ИИ-управлением для терм, фитнес-клубов и бассейнов. 
              Создаем умные wellness-экосистемы нового поколения.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-left" style={{animationDelay: '0.4s'}}>
              <Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-2xl animate-glow">
                <Icon name="Rocket" className="mr-2" size={20} />
                Исследовать технологии
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 hover:bg-primary/5 backdrop-blur-sm">
                <Icon name="Play" className="mr-2" size={20} />
                AR-демонстрация
              </Button>
            </div>
            
            {/* Floating tech elements */}
            <div className="mt-16 relative">
              <div className="flex justify-center space-x-12 opacity-60">
                <div className="flex flex-col items-center animate-float">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-2 shadow-lg">
                    <Icon name="Cpu" className="text-white" size={24} />
                  </div>
                  <span className="text-sm text-slate-600 font-medium">ИИ Контроль</span>
                </div>
                <div className="flex flex-col items-center animate-float" style={{animationDelay: '0.5s'}}>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-2 shadow-lg">
                    <Icon name="Wifi" className="text-white" size={24} />
                  </div>
                  <span className="text-sm text-slate-600 font-medium">IoT Сенсоры</span>
                </div>
                <div className="flex flex-col items-center animate-float" style={{animationDelay: '1s'}}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-2 shadow-lg">
                    <Icon name="Smartphone" className="text-white" size={24} />
                  </div>
                  <span className="text-sm text-slate-600 font-medium">Мобильное Управление</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-900 relative overflow-hidden">
        {/* Holographic grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(37,99,235,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        </div>
        
        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-data-flow" style={{animationDuration: '4s'}}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Holographic container */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-primary/20 animate-hologram group-hover:scale-105 transition-transform duration-300">
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary opacity-60"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary opacity-60"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary opacity-60"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary opacity-60"></div>
                  
                  {/* Glitch effect on hover */}
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:animate-glitch font-mono">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 font-mono text-sm tracking-wider">{stat.label}</div>
                  
                  {/* Status indicator */}
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Status bar */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-4 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-primary/20">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-slate-400">SYSTEM STATUS: OPTIMAL</span>
              </div>
              <div className="w-px h-4 bg-slate-600"></div>
              <div className="flex items-center space-x-2">
                <Icon name="Wifi" size={12} className="text-primary" />
                <span className="text-xs font-mono text-slate-400">IoT NETWORK: ACTIVE</span>
              </div>
            </div>
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
              <Card key={index} className="group relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in bg-white/80 backdrop-blur-sm hover:bg-white overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" style={{padding: '1px'}}>
                  <div className="h-full w-full bg-white rounded-lg"></div>
                </div>
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-2xl animate-glow">
                    <Icon name={equipment.icon as any} className="text-white" size={36} />
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-primary transition-colors duration-300">{equipment.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-slate-600 text-center leading-relaxed mb-6">
                    {equipment.description}
                  </CardDescription>
                  
                  {/* Tech specs preview */}
                  <div className="flex justify-center space-x-4 mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-xs text-slate-500">
                      <Icon name="Zap" size={12} className="mr-1" />
                      ИИ-управление
                    </div>
                    <div className="flex items-center text-xs text-slate-500">
                      <Icon name="Shield" size={12} className="mr-1" />
                      Сертификат EU
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 hover:shadow-lg">
                    Технические характеристики
                    <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                  </Button>
                </CardContent>
                
                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-ping" style={{animationDelay: '0.5s'}}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Futuristic grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(37,99,235,0.3) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium mb-6 animate-hologram">
                <Icon name="Building2" className="mr-2" size={16} />
                Компания будущего
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-800 via-primary to-blue-600 bg-clip-text text-transparent">
                  НАМ ДОВЕРЯЮТ
                </span><br/>
                <span className="text-slate-800">ЛИДЕРЫ ОТРАСЛИ</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Пионеры в сфере интеллектуальных wellness-систем. Наши решения с ИИ-управлением и IoT-интеграцией 
                преобразуют фитнес-клубы в самообучающиеся экосистемы.
              </p>
              
              {/* Enhanced feature cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="group relative p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 animate-hologram">
                        <Icon name={feature.icon as any} className="text-white" size={20} />
                      </div>
                      <h3 className="font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-xs text-slate-600">{feature.description}</p>
                      
                      {/* Tech indicator */}
                      <div className="mt-2 flex justify-center">
                        <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transition-all duration-300">
                  <Icon name="Database" className="mr-2" size={20} />
                  Дата-центр компании
                </Button>
                <Button variant="outline" size="lg" className="border-2 hover:bg-primary/5">
                  <Icon name="Globe" className="mr-2" size={20} />
                  Мировая сеть
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              {/* Holographic frame */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-glow"></div>
                
                <div className="relative bg-slate-900 p-6 rounded-2xl overflow-hidden animate-hologram">
                  {/* Matrix-style data streams */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-data-flow"></div>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-data-flow" style={{animationDelay: '1s', animationDirection: 'reverse'}}></div>
                  
                  <img 
                    src="/img/2e2c45e7-a2de-4c6f-89c8-a4f2b14e750b.jpg" 
                    alt="Современное фитнес оборудование"
                    className="w-full aspect-square object-cover rounded-xl opacity-80"
                  />
                  
                  {/* Holographic overlay */}
                  <div className="absolute inset-6 border border-primary/30 rounded-xl">
                    {/* Corner brackets */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary"></div>
                    
                    {/* Status info overlay */}
                    <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs font-mono text-green-400">FACILITY_STATUS: ONLINE</span>
                      </div>
                      <div className="text-xs font-mono text-slate-400 mt-1">AI_MONITORING: ACTIVE</div>
                    </div>
                  </div>
                </div>
              </div>
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