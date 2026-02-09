
import React, { useEffect, useState } from 'react';
import { translations } from '../translations';
import { PHONE_NUMBER, TESTIMONIALS, IMAGES, FAQS, PRICING_DATA, GALLERY_DATA } from '../constants';
import { ShieldCheck, UserCheck, Calendar, BookOpen, ChevronRight, Star, Phone, MessageCircle, Users, Award, HelpCircle, ArrowRight, CheckCircle, Clock, MapPin, Play, Zap, Heart, TrendingUp, ChevronDown, Sparkles, Shield, BadgeCheck, Image } from 'lucide-react';

interface HomeProps {
  lang: 'en' | 'hi';
  setActivePage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ lang, setActivePage }) => {
  const t = translations[lang];
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [countersAnimated, setCountersAnimated] = useState(false);
  const [galleryScrollProgress, setGalleryScrollProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const heroSlides = [
    { src: IMAGES.temple, alt: "Trimbakeshwar Temple" },
    { src: "/kaalsarp.jpeg", alt: "Kaal Sarp Puja" },
    { src: "/Shivling2.jpeg", alt: "Jyotirlinga Darshan" },
    { src: "/puja.jpeg", alt: "Vedic Rituals" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleGalleryScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setGalleryScrollProgress(progress);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && !countersAnimated) {
          setCountersAnimated(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [countersAnimated]);

  const whyChooseUs = lang === 'en' ? [
    { icon: <BadgeCheck size={28} />, title: 'Authorized Temple Pandit', desc: 'Registered Purohit at Trimbakeshwar Temple with official certification' },
    { icon: <BookOpen size={28} />, title: 'Pure Vedic Rituals', desc: 'Every puja performed exactly as prescribed in ancient scriptures' },
    { icon: <Calendar size={28} />, title: 'Accurate Muhurat', desc: 'Precise planetary calculations for the most auspicious timing' },
    { icon: <Heart size={28} />, title: 'Personal Attention', desc: 'Dedicated guidance throughout the entire puja process' },
    { icon: <ShieldCheck size={28} />, title: 'Complete Transparency', desc: 'No hidden charges, all costs discussed upfront' },
    { icon: <Sparkles size={28} />, title: '100% Authentic Samagri', desc: 'Premium quality puja materials included in all packages' },
  ] : [
    { icon: <BadgeCheck size={28} />, title: 'अधिकृत मंदिर पंडित', desc: 'आधिकारिक प्रमाणन के साथ त्र्यंबकेश्वर मंदिर में पंजीकृत पुरोहित' },
    { icon: <BookOpen size={28} />, title: 'शुद्ध वैदिक अनुष्ठान', desc: 'प्राचीन शास्त्रों में निर्धारित अनुसार हर पूजा' },
    { icon: <Calendar size={28} />, title: 'सटीक मुहूर्त', desc: 'सबसे शुभ समय के लिए सटीक ग्रह गणना' },
    { icon: <Heart size={28} />, title: 'व्यक्तिगत ध्यान', desc: 'संपूर्ण पूजा प्रक्रिया में समर्पित मार्गदर्शन' },
    { icon: <ShieldCheck size={28} />, title: 'पूर्ण पारदर्शिता', desc: 'कोई छिपी हुई फीस नहीं, सभी लागत पहले से चर्चा' },
    { icon: <Sparkles size={28} />, title: '100% प्रामाणिक सामग्री', desc: 'सभी पैकेज में प्रीमियम गुणवत्ता की पूजा सामग्री शामिल' },
  ];

  return (
    <>
      <div className="pt-0">
        {/* Hero Section - Stunning Full Screen Design */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Slideshow with Ken Burns Effect */}
          <div className="absolute inset-0 z-0">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${currentSlide === index
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-110'
                  }`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${currentSlide === index ? 'scale-110' : 'scale-100'
                    }`}
                />
              </div>
            ))}

            {/* Premium Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-orange-900/20 z-10"></div>
          </div>

          {/* Animated Decorative Elements */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] animate-pulse z-5"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-[80px] animate-pulse z-5" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-orange-500/10 rounded-full z-5 animate-spin" style={{ animationDuration: '30s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full z-5 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}></div>

          {/* Floating Sacred Symbols */}
          <div className="hidden md:block absolute top-20 right-20 text-8xl text-white/5 font-serif animate-float z-5">ॐ</div>
          <div className="hidden md:block absolute bottom-32 right-40 text-6xl text-orange-500/10 font-serif animate-float z-5" style={{ animationDelay: '2s' }}>☸</div>

          {/* Main Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center py-24 md:py-32">

              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 space-y-6 md:space-y-8 text-center lg:text-left">

                {/* Animated Badge */}
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-orange-400/30 animate-shimmer">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-yellow-400" fill="currentColor" />)}
                  </div>
                  <span className="text-orange-200 font-semibold text-xs md:text-sm">
                    {lang === 'en' ? '4.9 ★ | 50,000+ Devotees Served' : '4.9 ★ | 50,000+ श्रद्धालु'}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-orange-300">
                  <MapPin size={16} className="animate-bounce" />
                  <span className="text-sm md:text-base font-medium tracking-wide">
                    {lang === 'en' ? '📍 Trimbakeshwar Jyotirlinga, Nashik' : '📍 त्र्यंबकेश्वर ज्योतिर्लिंग, नासिक'}
                  </span>
                </div>

                {/* Main Heading - Animated */}
                <div className="space-y-2 md:space-y-4">
                  <h1 className="text-white">
                    <span className="block text-lg md:text-2xl font-medium text-orange-300 tracking-widest uppercase mb-2 md:mb-4 animate-fadeInUp">
                      {lang === 'en' ? 'India\'s Most Trusted' : 'भारत के सबसे विश्वसनीय'}
                    </span>
                    <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                      <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                        {lang === 'en' ? 'Kaal Sarp' : 'काल सर्प'}
                      </span>
                    </span>
                    <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none text-white animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                      {lang === 'en' ? 'Puja Pandit' : 'पूजा पंडित'}
                    </span>
                  </h1>

                  <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                    {lang === 'en'
                      ? 'Experience authentic Vedic ritual by Pandit Shivnarayan Guruji - 15+ years of expertise at the sacred 12th Jyotirlinga temple.'
                      : 'पंडित शिवनारायण गुरुजी द्वारा प्रामाणिक वैदिक अनुष्ठान - पवित्र 12वें ज्योतिर्लिंग मंदिर में 15+ वर्षों की विशेषज्ञता।'}
                  </p>
                </div>

                {/* Trust Indicators - Pills */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                  {[
                    { icon: '🕉️', text: lang === 'en' ? '100% Vedic' : 'वैदिक विधि' },
                    { icon: '🏛️', text: lang === 'en' ? 'Temple Certified' : 'मंदिर प्रमाणित' },
                    { icon: '⭐', text: lang === 'en' ? '15+ Years Expert' : '15+ वर्ष' },
                    { icon: '✨', text: lang === 'en' ? 'Guaranteed Results' : 'परिणाम गारंटी' },
                  ].map((item, idx) => (
                    <span key={idx} className="flex items-center space-x-1 md:space-x-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium border border-white/20 hover:bg-white/20 transition-all cursor-default">
                      <span>{item.icon}</span>
                      <span className="text-white">{item.text}</span>
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: '1s' }}>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="group relative flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Phone size={22} className="animate-pulse" />
                    <span>{lang === 'en' ? 'Call Now' : 'कॉल करें'}</span>
                    <span className="hidden sm:inline text-green-200">+91 9767443308</span>
                  </a>
                  <a
                    href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(lang === 'en' ? 'Namaste! I want to book Kaal Sarp Puja at Trimbakeshwar.' : 'नमस्ते! मैं त्र्यंबकेश्वर पर काल सर्प पूजा बुक करना चाहता हूं।')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all border border-white/30 hover:border-white/50 hover:scale-105"
                  >
                    <MessageCircle size={22} />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Live Availability */}
                <div className="flex items-center justify-center lg:justify-start space-x-3 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-green-400 font-medium text-sm md:text-base">
                    {lang === 'en' ? '🟢 Available Now - Instant Response' : '🟢 अभी उपलब्ध - तुरंत जवाब'}
                  </span>
                </div>
              </div>

              {/* Right Side - Premium Booking Card (Desktop) */}
              <div className="hidden lg:block lg:col-span-2">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 rounded-[2rem] blur-xl"></div>

                  <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-6 xl:p-8 border border-white/20 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="relative inline-block">
                        <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-50"></div>
                        <div className="relative w-16 h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
                          <span className="text-3xl xl:text-4xl text-white">ॐ</span>
                        </div>
                      </div>
                      <h3 className="text-xl xl:text-2xl font-bold text-white mt-4">{lang === 'en' ? 'Book Your Puja' : 'पूजा बुक करें'}</h3>
                      <p className="text-gray-400 text-sm mt-1">{lang === 'en' ? 'Free Kundali Analysis' : 'मुफ्त कुंडली विश्लेषण'}</p>
                    </div>

                    {/* Puja Options */}
                    <div className="space-y-3 mb-6">
                      {[
                        { name: lang === 'en' ? 'Kaal Sarp Dosh Nivaran' : 'काल सर्प दोष निवारण', popular: true, icon: '🐍' },
                        { name: lang === 'en' ? 'Pitra Dosh Puja' : 'पितृ दोष पूजा', popular: false, icon: '🙏' },
                        { name: lang === 'en' ? 'Narayan Nagbali' : 'नारायण नागबली', popular: false, icon: '🕉️' },
                        { name: lang === 'en' ? 'Tripindi Shradh' : 'त्रिपिंडी श्राद्ध', popular: false, icon: '🪷' },
                      ].map((puja, idx) => (
                        <div
                          key={idx}
                          className={`group flex items-center justify-between p-3 xl:p-4 rounded-xl cursor-pointer transition-all hover:scale-[1.02] ${puja.popular
                              ? 'bg-gradient-to-r from-orange-500/30 to-red-500/30 border border-orange-400/50'
                              : 'bg-white/5 hover:bg-white/10 border border-transparent'
                            }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-lg xl:text-xl">{puja.icon}</span>
                            <div>
                              <span className="font-medium text-white text-sm xl:text-base">{puja.name}</span>
                              {puja.popular && <span className="ml-2 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Most Popular</span>}
                            </div>
                          </div>
                          <ChevronRight size={18} className="text-orange-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02]"
                    >
                      <Phone size={20} className="animate-pulse" />
                      <span>{lang === 'en' ? 'Get Free Consultation' : 'मुफ्त परामर्श प्राप्त करें'}</span>
                    </a>

                    {/* Trust Badge */}
                    <div className="mt-4 flex items-center justify-center space-x-2 text-gray-400 text-xs">
                      <Shield size={14} />
                      <span>{lang === 'en' ? '100% Authentic • Temple Verified' : '100% प्रामाणिक • मंदिर सत्यापित'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Progress Indicators */}
          <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
            {heroSlides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`group flex items-center transition-all duration-500 ${currentSlide === index ? 'scale-100' : 'scale-90 opacity-60 hover:opacity-100'
                  }`}
              >
                <div className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === index
                    ? 'w-12 bg-gradient-to-r from-orange-400 to-red-500'
                    : 'w-3 bg-white/40 group-hover:bg-white/70'
                  }`}>
                  {currentSlide === index && (
                    <div className="h-full bg-white/30 rounded-full animate-progress"></div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2 text-white/40 animate-bounce">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em]">{lang === 'en' ? 'Explore' : 'देखें'}</span>
            <ChevronDown size={20} />
          </div>
        </section>

        {/* Stats Counter Section */}
        <section id="stats-section" className="py-16 bg-gradient-to-r from-red-900 via-red-800 to-orange-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZ2c+PC9nPg==')]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {[
                { value: '15+', label: lang === 'en' ? 'Years Experience' : 'वर्षों का अनुभव', icon: <Award size={32} /> },
                { value: '10K+', label: lang === 'en' ? 'Pujas Performed' : 'पूजाएं संपन्न', icon: <Sparkles size={32} /> },
                { value: '50K+', label: lang === 'en' ? 'Happy Devotees' : 'संतुष्ट श्रद्धालु', icon: <Users size={32} /> },
                { value: '4.9★', label: lang === 'en' ? 'Google Rating' : 'गूगल रेटिंग', icon: <Star size={32} /> },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-black">{countersAnimated ? stat.value : '0'}</div>
                  <div className="text-orange-200 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section with SEO Keywords */}
        <section className="py-24 bg-gradient-to-b from-white to-orange-50" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm">
                <Sparkles size={16} />
                <span>{lang === 'en' ? 'Our Sacred Services' : 'हमारी पवित्र सेवाएं'}</span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">
                {lang === 'en' ? 'Authentic Puja Services at Trimbakeshwar' : 'त्र्यंबकेश्वर में प्रामाणिक पूजा सेवाएं'}
              </h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
                {lang === 'en'
                  ? 'Experience the power of Vedic rituals at the sacred 12th Jyotirlinga. Pandit Shivnarayan Guruji performs all pujas with complete Shastrik vidhi.'
                  : 'पवित्र 12वें ज्योतिर्लिंग पर वैदिक अनुष्ठानों की शक्ति का अनुभव करें। पंडित शिवनारायण गुरुजी सभी पूजाएं पूर्ण शास्त्रीय विधि से करते हैं।'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: lang === 'en' ? 'Kaal Sarp Dosh Nivaran Puja' : 'काल सर्प दोष निवारण पूजा',
                  desc: lang === 'en' ? 'Remove obstacles from career, relationships & health caused by Rahu-Ketu positioning in your kundali.' : 'अपनी कुंडली में राहु-केतु की स्थिति के कारण करियर, रिश्तों और स्वास्थ्य में बाधाएं दूर करें।',
                  duration: '3-4 Hours',
                  image: IMAGES.kalsarp,
                  popular: true,
                  keywords: 'Kaal Sarp Puja Nashik, Kaal Sarp Dosh Puja Trimbakeshwar'
                },
                {
                  name: lang === 'en' ? 'Pitra Dosh Puja' : 'पितृ दोष पूजा',
                  desc: lang === 'en' ? 'Seek blessings from ancestors and remove Pitra Dosh effects blocking success in life.' : 'पूर्वजों का आशीर्वाद प्राप्त करें और जीवन में सफलता को अवरुद्ध करने वाले पितृ दोष प्रभावों को दूर करें।',
                  duration: '4-5 Hours',
                  image: IMAGES.pitra,
                  popular: false,
                  keywords: 'Pitra Dosh Puja Trimbakeshwar, Pitra Dosh Nashik'
                },
                {
                  name: lang === 'en' ? 'Narayan Nagbali Puja' : 'नारायण नागबली पूजा',
                  desc: lang === 'en' ? 'A powerful 3-day ritual to liberate ancestral souls. Only performed at Trimbakeshwar.' : 'पूर्वजों की आत्माओं को मुक्त करने के लिए 3 दिन का शक्तिशाली अनुष्ठान। केवल त्र्यंबकेश्वर में किया जाता है।',
                  duration: '3 Days',
                  image: IMAGES.nagbali,
                  popular: false,
                  keywords: 'Narayan Nagbali Puja Trimbakeshwar, Nagbali Puja Nashik'
                },
                {
                  name: lang === 'en' ? 'Tripindi Shradh' : 'त्रिपिंडी श्राद्ध',
                  desc: lang === 'en' ? 'Perform shradh for 3 generations of ancestors to receive their divine blessings.' : 'अपने दिव्य आशीर्वाद प्राप्त करने के लिए पूर्वजों की 3 पीढ़ियों के लिए श्राद्ध करें।',
                  duration: '1 Day',
                  image: IMAGES.tripindi,
                  popular: false,
                  keywords: 'Tripindi Shradh Trimbakeshwar'
                },
                {
                  name: lang === 'en' ? 'Maha Mrityunjay Jaap' : 'महा मृत्युंजय जाप',
                  desc: lang === 'en' ? '1.25 Lakh mantra chanting for health, longevity and protection from dangers.' : 'स्वास्थ्य, दीर्घायु और खतरों से सुरक्षा के लिए 1.25 लाख मंत्र जाप।',
                  duration: '1 Day',
                  image: IMAGES.mahamrityunjay,
                  popular: false,
                  keywords: 'Maha Mrityunjay Jaap Trimbakeshwar'
                },
                {
                  name: lang === 'en' ? 'Kumbh Vivah (Manglik Dosh)' : 'कुंभ विवाह (मांगलिक दोष)',
                  desc: lang === 'en' ? 'Sacred ritual for Manglik individuals before marriage to nullify Mangal Dosh effects.' : 'मंगल दोष प्रभावों को निष्प्रभावी करने के लिए विवाह से पहले मांगलिक व्यक्तियों के लिए पवित्र अनुष्ठान।',
                  duration: '1 Day',
                  image: IMAGES.devotees,
                  popular: false,
                  keywords: 'Kumbh Vivah Trimbakeshwar, Manglik Dosh Puja'
                },
              ].map((service, idx) => (
                <div key={idx} className="card-premium bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={`${service.name} at Trimbakeshwar by Pandit Shivnarayan Guruji`}
                      className="w-full h-56 object-cover"
                    />
                    {service.popular && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full font-bold text-sm flex items-center space-x-1">
                        <Zap size={14} />
                        <span>{lang === 'en' ? 'Most Popular' : 'सबसे लोकप्रिय'}</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-orange-600 font-bold text-xs">{lang === 'en' ? 'Vedic Vidhi' : 'वैदिक विधि'}</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{service.desc}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{service.duration}</span>
                      </span>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-bold text-sm hover:from-green-600 hover:to-green-700 transition-all"
                      >
                        <Phone size={16} />
                        <span>{lang === 'en' ? 'Call' : 'कॉल'}</span>
                      </a>
                      <a
                        href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Namaste! I want to book ${service.name} at Trimbakeshwar.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-bold text-sm hover:from-orange-600 hover:to-red-600 transition-all"
                      >
                        <MessageCircle size={16} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setActivePage('services')}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-800 to-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-red-900 hover:to-orange-700 transition-all shadow-xl"
              >
                <span>{lang === 'en' ? 'View All Services & Pricing' : 'सभी सेवाएं और मूल्य देखें'}</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img src={IMAGES.temple} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center space-x-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm border border-orange-500/30">
                <Shield size={16} />
                <span>{lang === 'en' ? 'Why Trust Us' : 'हम पर भरोसा क्यों करें'}</span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-6">
                {lang === 'en' ? 'Why Choose Pandit Shivnarayan Guruji?' : 'पंडित शिवनारायण गुरुजी को क्यों चुनें?'}
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
                {lang === 'en'
                  ? "With 15+ years of experience and 50,000+ satisfied devotees, we're the most trusted name for Vedic pujas in Trimbakeshwar."
                  : '15+ वर्षों के अनुभव और 50,000+ संतुष्ट श्रद्धालुओं के साथ, हम त्र्यंबकेश्वर में वैदिक पूजाओं के लिए सबसे विश्वसनीय नाम हैं।'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA in this section */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-xl call-pulse"
                >
                  <Phone size={24} />
                  <span>{lang === 'en' ? 'Call: +91 9767443308' : 'कॉल करें: +91 9767443308'}</span>
                </a>
                <a
                  href={`https://wa.me/${PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
                >
                  <MessageCircle size={24} className="text-green-600" />
                  <span>{lang === 'en' ? 'WhatsApp Us' : 'व्हाट्सएप करें'}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Premium Mobile Carousel & Desktop Bento */}
        <section className="py-20 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm">
                <Image size={16} />
                <span>{lang === 'en' ? 'Photo Gallery' : 'फोटो गैलरी'}</span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900 leading-tight">
                {lang === 'en' ? 'Glimpses of Trimbakeshwar' : 'त्र्यंबकेश्वर की एक झलक'}
              </h2>
            </div>

            {/* Mobile: Cinematic Scroll with Progress */}
            <div className="md:hidden relative">
              <div
                ref={scrollRef}
                onScroll={handleGalleryScroll}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 scrollbar-hide pt-4"
              >
                {[...GALLERY_DATA.rituals.slice(0, 4), ...GALLERY_DATA.temple.slice(0, 3)].map((img, idx) => (
                  <div
                    key={idx}
                    className="flex-none w-[85vw] h-96 relative rounded-3xl overflow-hidden shadow-2xl snap-center border border-white/20 transform transition-transform"
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                        <p className="text-white font-bold text-lg leading-tight">{img.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* View All Card Mobile */}
                <div
                  onClick={() => setActivePage('gallery')}
                  className="flex-none w-[40vw] h-96 relative rounded-3xl overflow-hidden shadow-inner snap-center bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 flex flex-col items-center justify-center text-orange-600 gap-3 shrink-0 active:scale-95 transition-transform"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-orange-50">
                    <ArrowRight size={28} className="text-orange-600" />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-wider">View All</span>
                </div>
              </div>

              {/* Scroll Progress Indicator */}
              <div className="flex flex-col items-center justify-center space-y-2 mt-2">
                <div className="w-32 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-300 rounded-full"
                    style={{ width: `${Math.max(15, galleryScrollProgress)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400 font-medium">
                  {lang === 'en' ? 'Swipe to explore' : 'एक्सप्लोर करने के लिए स्वाइप करें'}
                </p>
              </div>
            </div>

            {/* Desktop: Bento Grid */}
            <div className="hidden md:grid grid-cols-4 gap-4 mb-12">
              {[...GALLERY_DATA.rituals.slice(0, 2), ...GALLERY_DATA.temple.slice(0, 1), ...GALLERY_DATA.rituals.slice(2, 3)].map((img, idx) => (
                <div key={idx} className={`relative group overflow-hidden rounded-3xl shadow-lg cursor-pointer ${idx === 0 || idx === 3 ? 'col-span-2 row-span-2 h-96' : 'h-44'}`}>
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white font-bold text-lg">{img.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block text-center">
              <button
                onClick={() => setActivePage('gallery')}
                className="inline-flex items-center space-x-2 border-2 border-orange-600 text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 hover:text-white transition-all shadow-md hover:shadow-xl"
              >
                <span>{lang === 'en' ? 'View Full Gallery' : 'पूरी गैलरी देखें'}</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm">
                <Users size={16} />
                <span>{t.testimonials.title}</span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">{t.testimonials.subtitle}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TESTIMONIALS.slice(0, 6).map((testi, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all relative">
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 rounded-full">
                    <Star size={16} fill="currentColor" />
                  </div>
                  <div className="flex text-orange-500 mb-4">
                    {[...Array(testi.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{testi.text}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center font-bold text-white">
                      {testi.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testi.name}</h4>
                      <p className="text-sm text-gray-500">{testi.location} • {testi.puja}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* FAQ Section with Schema */}
        <section className="py-24 bg-white" id="faq">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm">
                <HelpCircle size={16} />
                <span>{t.faq.title}</span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">{t.faq.subtitle}</h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border-2 transition-all overflow-hidden ${openFaq === idx ? 'border-orange-500 shadow-xl' : 'border-gray-100 hover:border-orange-200'}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.q}</h3>
                    <ChevronDown className={`text-orange-600 transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} size={24} />
                  </button>
                  <div className={`px-6 transition-all ${openFaq === idx ? 'pb-6 max-h-96' : 'max-h-0 overflow-hidden'}`}>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-r from-red-900 via-red-800 to-orange-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={IMAGES.temple} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-5xl om-symbol">ॐ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {lang === 'en' ? 'Book Your Puja Today' : 'आज ही अपनी पूजा बुक करें'}
            </h2>
            <p className="text-orange-200 text-xl mb-10 max-w-2xl mx-auto">
              {lang === 'en'
                ? 'Get rid of Kaal Sarp Dosh, Pitra Dosh and other problems. Consult Pandit Shivnarayan Guruji for a free kundali analysis.'
                : 'काल सर्प दोष, पितृ दोष और अन्य समस्याओं से छुटकारा पाएं। मुफ्त कुंडली विश्लेषण के लिए पंडित शिवनारायण गुरुजी से परामर्श करें।'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all shadow-2xl call-pulse"
              >
                <Phone size={28} />
                <span>+91 9767443308</span>
              </a>
              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white text-red-900 px-12 py-6 rounded-2xl font-bold text-xl transition-all shadow-2xl hover:bg-orange-50"
              >
                <MessageCircle size={28} />
                <span>WhatsApp</span>
              </a>
            </div>
            <p className="mt-8 text-orange-300 text-sm">
              {lang === 'en' ? '⚡ Available Now • Instant Response • Free Consultation' : '⚡ अभी उपलब्ध • तुरंत प्रतिक्रिया • मुफ्त परामर्श'}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
