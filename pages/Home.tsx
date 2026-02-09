
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  Calendar,
  MapPin,
  ChevronRight,
  Star,
  Clock,
  ShieldCheck,
  User,
  ArrowRight,
  Play
} from 'lucide-react';
import SEO from '../components/SEO';
import { translations } from '../translations';
import { IMAGES, TESTIMONIALS, FAQS, GALLERY_DATA, PHONE_NUMBER } from '../constants';
import { SERVICES_CONTENT } from '../data/servicesData';

interface HomeProps {
  lang: 'en' | 'hi';
  setActivePage?: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const t = translations[lang];
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for navbar and animations
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Convert Services object to array for mapping
  const serviceList = Object.entries(SERVICES_CONTENT).map(([slug, data]) => ({
    slug,
    ...data
  }));

  // Hero Slideshow
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    { src: IMAGES.temple, alt: "Trimbakeshwar Temple" },
    { src: IMAGES.kalsarp, alt: "Kaal Sarp Puja" },
    { src: IMAGES.nagbali, alt: "Narayan Nagbali" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SEO
        title={lang === 'en' ? "Best Pandit for Kaal Sarp Puja Trimbakeshwar" : "काल सर्प पूजा त्र्यंबकेश्वर के सर्वश्रेष्ठ पंडित"}
        description={lang === 'en' ? "Official Booking for Kaal Sarp Puja, Narayan Nagbali & Pitra Dosh Nivaran at Trimbakeshwar. 100% Vedic Rituals by Pandit Nilesh Guruji." : "त्र्यंबकेश्वर में काल सर्प पूजा, नारायण नागबली और पितृ दोष निवारण के लिए आधिकारिक बुकिंग। पंडित नीलेश गुरुजी द्वारा 100% वैदिक अनुष्ठान।"}
      />

      {/* --- HERO SECTION: FULL SCREEN IMMERSIVE --- */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

        {/* Background Slideshow with Parallax */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover transform scale-105 animate-pulse-slow"
              />
              {/* Premium Gradient Overlay - Maroon to Black */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-temple-maroon/50 to-temple-maroon/90 mix-blend-multiply" />
              <div className="absolute inset-0 bg-black/20" /> {/* Extra darken */}
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 text-center mt-20">
          <div className="animate-float mb-6">
            <span className="inline-block py-1 px-3 rounded-full bg-saffron-500/20 backdrop-blur-md border border-saffron-400 text-saffron-300 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
              {lang === 'en' ? 'Authorized Trimbakeshwar Purohit' : 'अधिकृत त्र्यंबकेश्वर पुरोहित'}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white mb-6 leading-tight drop-shadow-2xl tracking-tight">
            <span className="block text-2xl md:text-4xl font-light mb-4 text-white/80 font-sans tracking-widest uppercase">
              {lang === 'en' ? 'Vedic Rituals By' : 'वैदिक अनुष्ठान'}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-300 via-gold-300 to-saffron-300 animate-shine bg-[length:200%_auto]">
              {lang === 'en' ? 'Pandit Nilesh Guruji' : 'पंडित नीलेश गुरुजी'}
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-cream-100 max-w-3xl mx-auto mb-10 font-light leading-relaxed drop-shadow-lg">
            {lang === 'en'
              ? "Experience divine peace and remove doshas with authentic Vedic Vidhi at the holy Trimbakeshwar Jyotirlinga."
              : "पवित्र त्र्यंबकेश्वर ज्योतिर्लिंग में प्रामाणिक वैदिक विधि के साथ दिव्य शांति का अनुभव करें और दोषों को दूर करें।"}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-saffron-600 to-saffron-500 text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(239,35,60,0.4)] hover:shadow-[0_0_30px_rgba(239,35,60,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Phone className="animate-pulse" />
              <span>{t.home.hero.cta.call}</span>
            </a>
            <a
              href="#services"
              className="w-full md:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>{t.home.hero.cta.book}</span>
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 opacity-80">
            <div className="flex items-center gap-2 text-cream-200">
              <ShieldCheck size={20} className="text-gold-400" />
              <span className="text-sm font-semibold tracking-wider uppercase">Verified Pandit</span>
            </div>
            <div className="flex items-center gap-2 text-cream-200">
              <Star size={20} className="text-gold-400" />
              <span className="text-sm font-semibold tracking-wider uppercase">15+ Years Exp</span>
            </div>
            <div className="flex items-center gap-2 text-cream-200">
              <User size={20} className="text-gold-400" />
              <span className="text-sm font-semibold tracking-wider uppercase">50k+ Devotees</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gold-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <div className="bg-maroon-900 border-y border-gold-600/30 relative z-30 -mt-2">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
              { label: lang === 'en' ? 'Pujas Performed' : 'पूजा संपन्न', value: '15000+' },
              { label: lang === 'en' ? 'Years Experience' : 'वर्षों का अनुभव', value: '15+' },
              { label: lang === 'en' ? 'Happy Devotees' : 'संतुष्ट भक्त', value: '50k+' },
              { label: lang === 'en' ? 'Vedic Rating' : 'वैदिक रेटिंग', value: '5.0' },
            ].map((stat, i) => (
              <div key={i} className="p-2">
                <div className="text-3xl md:text-5xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-cream-200 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SERVICES SECTION : PREMIUM GRID --- */}
      <section id="services" className="py-24 bg-spiritual relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 text-9xl font-serif text-maroon-900">ॐ</div>
          <div className="absolute bottom-20 right-10 text-9xl font-serif text-maroon-900">श्री</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-saffron-600 font-bold tracking-[0.3em] uppercase text-sm">
              {t.home.services.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 text-maroon-900">
              {t.home.services.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-saffron-500 to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden card-premium h-full flex flex-col"
              >
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                  <img
                    src={service.heroImage || IMAGES.panditPuja}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur text-maroon-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Vedic Puja
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-1 flex flex-col relative">
                  <div className="absolute -top-10 right-8 w-16 h-16 bg-gradient-to-br from-saffron-500 to-maroon-600 rounded-full flex items-center justify-center text-white shadow-xl z-20 group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                    <span className="text-2xl">🕉️</span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-maroon-700 transition-colors">
                    {service.title.split('|')[0]}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <Clock size={16} className="text-saffron-500" />
                      <span>Book Now</span>
                    </div>
                    <Link
                      to={`/services/${service.slug}`}
                      className="flex items-center gap-2 text-maroon-700 font-bold hover:gap-3 transition-all"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION : NEW --- */}
      <section className="py-24 bg-maroon-900 text-white relative overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-gold-400 font-bold tracking-[0.3em] uppercase text-sm">Divine Glimpses</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 text-white">
                Temple & Rituals Gallery
              </h2>
            </div>
            <Link to="/gallery" className="hidden md:flex items-center gap-2 px-6 py-3 border border-gold-500/50 rounded-full text-gold-300 hover:bg-gold-500 hover:text-maroon-900 transition-all font-semibold mt-6 md:mt-0">
              <span>View All Photos</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Large Featured Item */}
            <div className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-2xl cursor-pointer">
              <img src={GALLERY_DATA.temple[0].src} alt="Temple" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">Trimbakeshwar</span>
                <h3 className="text-2xl font-serif font-bold">Ancient Temple Sanctum</h3>
              </div>
            </div>

            {/* Other Items */}
            {[...GALLERY_DATA.rituals.slice(0, 5)].map((item, idx) => (
              <div key={idx} className={`relative group overflow-hidden rounded-2xl cursor-pointer ${idx === 1 ? 'lg:col-span-2' : ''}`}>
                <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                    <Play className="text-white fill-current" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-white font-medium text-sm drop-shadow-md">{item.title}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-6 py-3 border border-gold-500/50 rounded-full text-gold-300 font-semibold">
              <span>View All Photos</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-saffron-600 font-bold tracking-[0.3em] uppercase text-sm">
              {t.home.testimonials.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 text-gray-900">
              {t.home.testimonials.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
                <div className="text-gold-400 mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-700 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOOKING CTA STRIP --- */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-900 to-maroon-800"></div>
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-6">
            {lang === 'en' ? 'Resolve Your Doshas Today' : 'आज ही अपने दोषों का निवारण करें'}
          </h2>
          <p className="text-xl text-saffron-100 mb-10 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Connect with Pandit Nilesh Guruji for a free consultation and bring peace to your life.'
              : 'मुफ्त परामर्श के लिए पंडित नीलेश गुरुजी से जुड़ें और अपने जीवन में शांति लाएं।'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="px-8 py-4 bg-white text-maroon-900 rounded-full font-bold text-lg hover:bg-cream-100 transition-colors shadow-xl w-full sm:w-auto">
              Call +91 {PHONE_NUMBER}
            </a>
            <a href="https://wa.me/918956270196" className="px-8 py-4 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-700 transition-colors shadow-xl w-full sm:w-auto flex items-center justify-center gap-2">
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              {t.home.faq.title}
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.slice(0, 5).map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:border-saffron-200 transition-colors">
                <button
                  className="w-full text-left p-6 bg-gray-50 flex justify-between items-center font-bold text-gray-900 hover:bg-saffron-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="text-lg">{faq.q}</span>
                  <ChevronRight className={`transform transition-transform duration-300 ${activeFaq === index ? 'rotate-90 text-saffron-600' : 'text-gray-400'}`} />
                </button>
                <div
                  className={`bg-white text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-48 p-6 border-t border-gray-100' : 'max-h-0'}`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
