
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Languages, MessageCircle, ChevronDown } from 'lucide-react';
import { translations } from '../translations';
import { PHONE_NUMBER } from '../constants';

interface NavbarProps {
  lang: 'en' | 'hi';
  setLang: (lang: 'en' | 'hi') => void;
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'blog', label: t.nav.blog },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Top Bar with Contact Info - Re-designed to be darker/premium */}
      <div className="bg-temple-maroon text-temple-cream text-sm py-2 hidden md:block border-b border-temple-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center space-x-2 hover:text-saffron-300 transition-colors font-serif tracking-wide">
              <Phone size={14} />
              <span className="font-medium">+91 8956-270-196</span>
            </a>
            <span className="text-temple-gold/50">|</span>
            <span className="text-temple-gold">
              {lang === 'en' ? '📍 Trimbakeshwar, Nashik' : '📍 त्र्यंबकेश्वर, नासिक'}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              <span className="text-xs uppercase tracking-wider">{lang === 'en' ? 'Live Darshan Available' : 'लाइव दर्शन उपलब्ध'}</span>
            </span>
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="flex items-center space-x-1 bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full transition-colors border border-white/10"
            >
              <Languages size={14} />
              <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed left-0 w-full z-50 transition-all duration-500 border-b border-transparent ${scrolled
        ? 'top-0 bg-white/95 backdrop-blur-xl shadow-2xl border-temple-gold/10 py-2'
        : 'top-0 md:top-9 bg-transparent py-4'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div
              className={`flex items-center cursor-pointer group space-x-3`}
              onClick={() => setActivePage('home')}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:rotate-12 transition-all duration-300 border-2 border-temple-gold ${scrolled ? 'bg-gradient-to-br from-saffron-600 to-temple-maroon' : 'bg-white/10 backdrop-blur-md'}`}>
                <span className={scrolled ? 'text-white' : 'text-temple-gold'}>ॐ</span>
              </div>
              <div className="flex flex-col">
                <h1 className={`text-lg md:text-2xl font-serif font-black leading-none transition-colors ${scrolled ? 'text-temple-maroon' : 'text-white'
                  }`}>
                  {lang === 'en' ? 'Pandit Nilesh' : 'पंडित नीलेश'}
                </h1>
                <p className={`text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mt-1 ${scrolled ? 'text-saffron-600' : 'text-temple-gold'
                  }`}>
                  {lang === 'en' ? 'Guruji Trimbakeshwar' : 'गुरुजी त्र्यंबकेश्वर'}
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center space-x-1 px-6 py-2 rounded-full transition-all duration-500 ${scrolled ? 'bg-transparent' : 'bg-black/20 backdrop-blur-md border border-white/10'}`}>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${activePage === item.id
                    ? 'bg-temple-gold text-temple-maroon shadow-lg font-bold'
                    : scrolled
                      ? 'text-gray-600 hover:text-saffron-700 font-medium'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all shadow-lg hover:scale-110 ${scrolled ? 'bg-green-600 text-white' : 'bg-white/10 text-white border border-white/20 hover:bg-green-600 hover:border-green-600'}`}
              >
                <MessageCircle size={20} />
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center space-x-2 bg-gradient-to-r from-saffron-600 to-temple-maroon hover:from-saffron-500 hover:to-temple-maroon text-white px-6 py-3 rounded-full font-serif font-bold text-sm transition-all shadow-lg hover:shadow-saffron-500/50 hover:-translate-y-0.5"
              >
                <Phone size={16} />
                <span>{t.nav.bookNow}</span>
              </a>
            </div>

            {/* Mobile Menu Button - Fixed Visibility */}
            <div className="lg:hidden flex items-center space-x-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full shadow-lg"
              >
                <Phone size={18} />
              </a>
              <button
                onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                className={`p-2 rounded-full border ${scrolled ? 'border-gray-200 text-gray-600' : 'border-white/20 text-white bg-white/10'}`}
              >
                <Languages size={20} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 transition-colors ${scrolled ? 'text-temple-maroon' : 'text-white'}`}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-temple-maroon/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 animate-fade-in-up h-screen">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white p-2"
            >
              <X size={32} />
            </button>

            <div className="space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-4 rounded-2xl text-xl font-serif font-medium transition-all ${activePage === item.id
                    ? 'bg-gradient-to-r from-saffron-600 to-temple-maroon text-white shadow-xl border border-saffron-400/30'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    {activePage === item.id && <ChevronDown className="-rotate-90" size={20} />}
                  </span>
                </button>
              ))}

              {/* Mobile CTAs */}
              <div className="pt-8 space-y-4 border-t border-white/10 mt-8">
                <p className="text-white/40 text-xs uppercase tracking-widest text-center font-bold mb-2">Get in Touch</p>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center space-x-3 w-full bg-white text-temple-maroon py-4 rounded-2xl font-bold text-lg shadow-lg"
                >
                  <Phone size={24} />
                  <span>Call Pandit Ji</span>
                </a>
                <a
                  href={`https://wa.me/${PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg border border-green-500/50"
                >
                  <MessageCircle size={24} />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
