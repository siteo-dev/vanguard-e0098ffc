import { useState, useEffect, useRef } from 'react';
import { 
  Car, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  CheckCircle, 
  Shield, 
  Clock, 
  CreditCard,
  Award,
  Users,
  Zap,
  ChevronRight,
  Menu,
  X,
  Instagram
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import { cn } from '@/lib/utils';
import DemoBanner from './DemoBanner';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 100, suffix: '+', label: 'Vehicles' },
    { value: 50000, suffix: '+', label: 'Km Saved' },
    { value: 2015, suffix: '', label: 'Founded' },
    { value: 98, suffix: '%', label: 'Satisfaction' }
  ];

  const services = [
    {
      title: 'BMW M5',
      description: 'Premium luxury sedan with exceptional performance',
      price: '500000 RON',
      icon: <Car className="h-6 w-6 text-indigo-400" />
    },
    {
      title: 'Audi A6',
      description: 'Elegant executive sedan with cutting-edge technology',
      price: '330000 RON',
      icon: <Car className="h-6 w-6 text-indigo-400" />
    },
    {
      title: 'Mercedes CLA',
      description: 'Sleek compact luxury with premium comfort',
      price: '300000 RON',
      icon: <Car className="h-6 w-6 text-indigo-400" />
    }
  ];

  const whyUs = [
    {
      title: 'Low Mileage Guarantee',
      description: 'All vehicles come with verified low mileage records'
    },
    {
      title: 'Certified Pre-Owned',
      description: 'Each car undergoes extensive inspection before sale'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise costs'
    },
    {
      title: 'Financing Options',
      description: 'Flexible payment plans for your dream car'
    }
  ];

  const reviews = [
    {
      name: 'Maria L.',
      text: 'Bought a BMW M5 and couldn\'t be happier with the quality and service.',
      avatar: '/assets/people/girl_1.jpg'
    },
    {
      name: 'John D.',
      text: 'The Audi A6 exceeded my expectations in every way. Fast delivery!',
      avatar: '/assets/people/boy_1.jpg'
    },
    {
      name: 'Sophia R.',
      text: 'The Mercedes CLA is a joy to drive. Excellent value for money.',
      avatar: '/assets/people/girl_1.jpg'
    }
  ];

  const faqs = [
    {
      question: 'How do you ensure low mileage on vehicles?',
      answer: 'All cars undergo detailed inspection and mileage verification before listing.'
    },
    {
      question: 'Do you offer financing options?',
      answer: 'Yes, we partner with multiple financial institutions for flexible payment plans.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day satisfaction guarantee on all purchases.'
    },
    {
      question: 'How often do you update your inventory?',
      answer: 'Our inventory refreshes monthly with new arrivals.'
    }
  ];

  const galleryItems = [
    'BMW M5 Interior',
    'Audi A6 Exterior',
    'Mercedes CLA Dashboard',
    'Low Mileage Display',
    'Service Records'
  ];

  return (
    <>
      <DemoBanner />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-5xl mx-auto mt-4 px-4 sm:px-6 h-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
          <div className="flex items-center justify-between h-full">
            <div className="text-base font-semibold tracking-tight">Vanguard</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-1">
              {['About', 'Services', 'Why Us', 'Gallery', 'Reviews', 'FAQ', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-2 text-sm rounded-full transition-colors hover:bg-white/5"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-full hover:bg-white/5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 pt-20">
          <div className="max-w-md mx-auto p-6">
            <nav className="flex flex-col gap-2">
              {['About', 'Services', 'Why Us', 'Gallery', 'Reviews', 'FAQ', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-3 text-base rounded-xl transition-colors hover:bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-hidden">
          <DotPattern className="absolute inset-0 opacity-10" />
          
          <div className="container mx-auto px-6 sm:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm mb-6 animate-on-scroll hero-blur hero-delay-1">
                <AnimatedShinyText className="text-sm font-medium">Premium German Vehicles</AnimatedShinyText>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-on-scroll hero-blur hero-delay-2">
                <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                  German Precision, Low Mileage Quality
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 animate-on-scroll hero-blur hero-delay-3">
                Premium used German vehicles with exceptional reliability and minimal wear. Your next dream car awaits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-on-scroll hero-blur hero-delay-4">
                <ShimmerButton className="shadow-2xl" background="rgba(99,102,241,1)">
                  <span className="text-sm font-medium text-white">Book Appointment</span>
                </ShimmerButton>
                
                <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 animate-on-scroll hero-blur hero-delay-5">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
              
              {/* Hero Stats */}
              <div className="flex items-center justify-center gap-8 sm:gap-12 pt-8 border-t border-white/5">
                {stats.map((stat, i) => (
                  <div key={i} className={cn("text-center", i > 0 && "border-l border-white/10 pl-8 sm:pl-12")}>
                    <NumberTicker 
                      value={stat.value} 
                      suffix={stat.suffix} 
                      className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(99,102,241,0.6)]" 
                    />
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 sm:py-32 lg:py-40 bg-zinc-900/30">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                10+ Years Crafting Exceptional Automotive Experiences
              </h2>
              <p className="text-lg text-muted-foreground">
                Vanguard specializes in premium German second-hand vehicles with low mileage, delivering quality and reliability you can trust.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <Award className="h-6 w-6 text-indigo-400" />, title: 'Quality Guarantee', description: 'All vehicles undergo rigorous inspection' },
                { icon: <Shield className="h-6 w-6 text-indigo-400" />, title: 'Certified Pre-Owned', description: 'Verified by our expert team' },
                { icon: <Users className="h-6 w-6 text-indigo-400" />, title: 'Expert Team', description: '10+ years in automotive excellence' },
                { icon: <Zap className="h-6 w-6 text-indigo-400" />, title: 'Fast Service', description: 'Quick delivery and setup' }
              ].map((item, i) => (
                <Card key={i} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm p-6 text-center animate-on-scroll delay-1 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10">
                      {item.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{item.description}</CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 sm:py-32 lg:py-40">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Premium German Vehicles Tailored to Your Needs
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Explore our curated selection of top-tier used German cars at competitive prices.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((service, i) => (
                <Card key={i} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm p-6 text-center animate-on-scroll delay-1 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-4">{service.description}</CardDescription>
                  <p className="text-base font-bold text-indigo-400">{service.price}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-24 sm:py-32 lg:py-40 bg-zinc-900/30">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Why Choose Vanguard Auto Dealer?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                We deliver unmatched value and service in the used German car market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyUs.map((item, i) => (
                <Card key={i} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm p-6 text-center animate-on-scroll delay-1 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start justify-center mb-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10">
                      <CheckCircle className="h-6 w-6 text-indigo-400" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{item.description}</CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 sm:py-32 lg:py-40">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Premium Vehicle Showcase
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {galleryItems.map((item, i) => (
                <Card key={i} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm overflow-hidden animate-on-scroll delay-1 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-zinc-900/30 flex items-center justify-center">
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-semibold text-center">{item}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 sm:py-32 lg:py-40 bg-zinc-900/30">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Trusted by Our Valued Customers
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Real experiences from satisfied buyers who found their perfect car with us.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Marquee pauseOnHover className="[--duration:30s]">
                {reviews.map((review, i) => (
                  <Card key={i} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm p-6 text-center mx-4 animate-on-scroll delay-1 transition-all duration-300 hover:scale-105">
                    <div className="flex justify-center mb-4">
                      <Avatar>
                        <AvatarImage src={review.avatar} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <CardDescription className="text-sm text-muted-foreground italic mb-4">
                      "{review.text}"
                    </CardDescription>
                    <CardTitle className="text-base font-semibold">{review.name}</CardTitle>
                  </Card>
                ))}
              </Marquee>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 sm:py-32 lg:py-40">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Everything You Need to Know About Our Services
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto animate-on-scroll">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => {
                  const [question, answer] = faq.question.split(' | ');
                  return (
                    <AccordionItem key={i} value={`item-${i}`} className="border-white/10 mb-4 rounded-xl">
                      <AccordionTrigger className="text-left p-6 hover:bg-white/[0.02] rounded-xl">
                        <span className="font-medium">{question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="p-6 pt-0 border-t border-white/5">
                        <p className="text-muted-foreground">{answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-zinc-900/30">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Contact Us Anytime
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Ready to find your dream car? Reach out to us today for a personalized consultation.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6 animate-on-scroll">
                {[
                  { icon: <Phone className="h-5 w-5" />, label: 'Call', value: '+40767289372' },
                  { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'vanguard@gmail.com' },
                  { icon: <MapPin className="h-5 w-5" />, label: 'Address', value: 'str. artarului 22, bragadiru, ilfov' }
                ].map((item, i) => (
                  <Card key={i} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm p-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-xl bg-indigo-500/10 mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-1">{item.label}</h3>
                        <p className="text-white">{item.value}</p>
                      </div>
                    </div>
                  </Card>
                ))}
                
                <div className="pt-6">
                  <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
              
              <div className="animate-on-scroll">
                <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Get in Touch</h3>
                    <Badge className="bg-indigo-500/10 text-indigo-400">Available</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 w-full justify-start">
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </Button>
                    <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 w-full justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 w-full justify-start">
                      <Clock className="h-4 w-4 mr-2" />
                      Schedule Visit
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white font-medium mb-4 md:mb-0">
              Vanguard Auto Dealer © {new Date().getFullYear()}
            </div>
            <div className="flex gap-3">
              <a href="https://instagram.com/vanguard" className="p-2 rounded-full bg-white/[0.05] hover:bg-white/10 transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Progressive Blur */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50">
        <ProgressiveBlur position="bottom" height="250px" />
      </div>
    </>
  );
}
