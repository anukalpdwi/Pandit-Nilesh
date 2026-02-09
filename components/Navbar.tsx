
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
      {/* Top Bar with Contact Info */}
      <div className="bg-gradient-to-r from-red-900 to-orange-800 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center space-x-2 hover:text-orange-200 transition-colors">
              <Phone size={14} />
              <span className="font-medium">+91 9767-443-308</span>
            </a>
            <span className="text-orange-300">|</span>
            <span className="text-orange-200">
              {lang === 'en' ? '📍 Trimbakeshwar, Nashik' : '📍 त्र्यंबकेश्वर, नासिक'}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              <span className="text-xs">{lang === 'en' ? 'Available Now' : 'अभी उपलब्ध'}</span>
            </span>
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="flex items-center space-x-1 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
            >
              <Languages size={14} />
              <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'top-0 bg-white/95 backdrop-blur-lg shadow-xl'
        : 'top-0 md:top-9 bg-white/80 backdrop-blur-sm md:bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => setActivePage('home')}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-3 shadow-lg group-hover:scale-105 transition-transform">
                ॐ
              </div>
              <div>
                <h1 className={`text-lg md:text-xl font-bold leading-tight transition-colors ${(scrolled || activePage !== 'home') ? 'text-red-900' : 'text-red-900 md:text-white'
                  }`}>
                  {lang === 'en' ? 'Pandit Shivnarayan' : 'पंडित शिवनारायण'}
                </h1>
                <p className={`text-xs uppercase tracking-widest font-bold ${(scrolled || activePage !== 'home') ? 'text-orange-600' : 'text-orange-600 md:text-orange-200'
                  }`}>
                  {lang === 'en' ? 'Trimbakeshwar Purohit' : 'त्र्यंबकेश्वर पुरोहित'}
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${activePage === item.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : (scrolled || activePage !== 'home')
                      ? 'text-gray-700 hover:bg-orange-100 hover:text-orange-700'
                      : 'text-gray-700 hover:bg-white/20 hover:text-gray-900 md:text-gray-200 md:hover:text-white'
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
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg animate-pulse"
              >
                <Phone size={18} className="animate-bounce" />
                <span>{t.nav.bookNow}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg"
              >
                <Phone size={20} />
              </a>
              <button
                onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                className="p-2 text-orange-600 bg-orange-50 rounded-full"
              >
                <Languages size={20} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-orange-600 p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-orange-100 shadow-2xl animate-slide-down">
            <div className="p-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-5 py-4 rounded-xl text-lg font-medium transition-all ${activePage === item.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-orange-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile CTAs */}
              <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
                >
                  <Phone size={24} />
                  <span>{lang === 'en' ? 'Call: +91 9767443308' : 'कॉल करें: +91 9767443308'}</span>
                </a>
                <a
                  href={`https://wa.me/${PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
                >
                  <MessageCircle size={24} />
                  <span>WhatsApp</span>
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
