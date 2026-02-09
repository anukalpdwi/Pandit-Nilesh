import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Youtube, Instagram, Clock, ChevronRight } from 'lucide-react';
import { translations } from '../translations';
import { PHONE_NUMBER, EMAIL, ADDRESS, IMAGES } from '../constants';

interface FooterProps {
  lang: 'en' | 'hi';
  setActivePage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ lang, setActivePage }) => {
  const t = translations[lang];

  const services = [
    { id: 'kalsarp', label: lang === 'en' ? 'Kaal Sarp Dosh Nivaran' : 'काल सर्प दोष निवारण' },
    { id: 'pitra', label: lang === 'en' ? 'Pitra Dosh Puja' : 'पितृ दोष पूजा' },
    { id: 'nagbali', label: lang === 'en' ? 'Narayan Nagbali' : 'नारायण नागबली' },
    { id: 'tripindi', label: lang === 'en' ? 'Tripindi Shradh' : 'त्रिपिंडी श्राद्ध' },
    { id: 'mahamrityunjay', label: lang === 'en' ? 'Maha Mrityunjay Jaap' : 'महा मृत्युंजय जाप' },
  ];

  return (
    <footer className="bg-maroon-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      {/* Top Section with CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-saffron-600 to-maroon-700 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 border border-gold-500/20 shadow-2xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {lang === 'en' ? 'Ready to Book Your Puja?' : 'अपनी पूजा बुक करने के लिए तैयार हैं?'}
            </h3>
            <p className="text-saffron-100">
              {lang === 'en' ? 'Get instant consultation via WhatsApp' : 'व्हाट्सएप के माध्यम से तुरंत परामर्श प्राप्त करें'}
            </p>
          </div>
          <a
            href={`https://wa.me/${PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white text-maroon-800 px-8 py-4 rounded-full font-bold hover:bg-saffron-50 transition-colors shadow-lg shrink-0"
          >
            <MessageCircle size={24} />
            <span>{lang === 'en' ? 'Chat on WhatsApp' : 'व्हाट्सएप पर चैट करें'}</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-saffron-500 to-maroon-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3 shadow-lg border border-gold-500/30">
              ॐ
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-gold-400">{t.hero.name}</h2>
              <p className="text-xs text-saffron-400 font-medium uppercase tracking-wider">Trimbakeshwar</p>
            </div>
          </div>
          <p className="text-cream-200/60 text-sm leading-relaxed">
            {t.footer.tagline}
          </p>
          <div className="flex items-center space-x-2 text-gold-400 text-sm">
            <Clock size={16} />
            <span>{lang === 'en' ? 'Available: 6 AM - 10 PM' : 'उपलब्ध: 6 AM - 10 PM'}</span>
          </div>
          <div className="flex space-x-3">
            <a href="#" className="p-3 bg-maroon-800/50 rounded-full hover:bg-saffron-600 transition-colors border border-maroon-700">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-3 bg-maroon-800/50 rounded-full hover:bg-red-600 transition-colors border border-maroon-700">
              <Youtube size={18} />
            </a>
            <a
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-maroon-800/50 rounded-full hover:bg-green-600 transition-colors border border-maroon-700"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-serif font-bold mb-6 border-b border-saffron-600/30 pb-2 text-gold-300">{t.footer.quickLinks}</h3>
          <ul className="space-y-3">
            {['home', 'about', 'services', 'gallery', 'blog', 'contact'].map((page) => (
              <li key={page}>
                <Link to={page === 'home' ? '/' : `/${page}`} className="text-cream-200/70 hover:text-saffron-400 transition-colors flex items-center space-x-2 capitalize">
                  <ChevronRight size={14} />
                  <span>{page}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-serif font-bold mb-6 border-b border-saffron-600/30 pb-2 text-gold-300">{t.footer.services}</h3>
          <ul className="space-y-3">
            {[
              { label: 'Kaal Sarp Dosh Puja', link: '/services/kaal-sarp-dosh-puja' },
              { label: 'Narayan Nagbali', link: '/services/narayan-nagbali-puja' },
              { label: 'Pitra Dosh Puja', link: '/services/pitra-dosh-puja' },
              { label: 'Tripindi Shradh', link: '/services/tripindi-shradh' },
              { label: 'Maha Mrityunjay', link: '/services/maha-mrityunjay-jaap' },
              { label: 'Kumbh Vivah', link: '/services/kumbh-vivah' },
            ].map((service, idx) => (
              <li key={idx}>
                <Link
                  to={service.link}
                  className="text-cream-200/70 hover:text-saffron-400 transition-colors flex items-center space-x-2 text-sm"
                >
                  <span className="text-saffron-600">🕉️</span>
                  <span>{service.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-serif font-bold mb-6 border-b border-saffron-600/30 pb-2 text-gold-300">{t.footer.contact}</h3>
          <ul className="space-y-4">
            <li>
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-start space-x-3 group">
                <div className="p-2 bg-maroon-800/50 rounded-lg group-hover:bg-saffron-600 transition-colors border border-maroon-700">
                  <Phone className="text-gold-400 group-hover:text-white" size={16} />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">{t.contact.callUs}</span>
                  <span className="text-cream-100 font-medium">+{PHONE_NUMBER}</span>
                </div>
              </a>
            </li>
            <li className="flex items-start space-x-3">
              <div className="p-2 bg-maroon-800/50 rounded-lg border border-maroon-700">
                <MapPin className="text-gold-400" size={16} />
              </div>
              <div>
                <span className="text-xs text-gray-500 block">{t.contact.location}</span>
                <span className="text-gray-400 text-sm">{ADDRESS}</span>
              </div>
            </li>
          </ul>

          {/* Mini Map */}
          <div className="mt-6 rounded-xl overflow-hidden h-32">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.8893858892676!2d73.53039987526486!3d19.932483681467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddefa055555555%3A0x5ae29463f4e9e32d!2sTrimbakeshwar%20Shiva%20Temple!5e0!3m2!1sen!2sin!4v1706889234567"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all"
            ></iframe>
          </div>
        </div>
      </div>

      {/* SEO Popular Searches Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Popular Searches</p>
        <div className="flex flex-wrap gap-2 text-xs text-gray-600">
          {[
            'Trimbakeshwar kalsarp pooja booking',
            'Best Pandit for Kaal Sarp Puja in Trimbakeshwar',
            'Kaal sarp puja in Trimbakeshwar cost',
            'Narayan Nagbali Puja Trimbakeshwar',
            'Pitra Dosh Puja Trimbakeshwar cost',
            'Best Pandit Trimbakeshwar',
            'Trimbakeshwar Guruji',
            'Nashik Pandit',
            'Kalsarp pooja Nashik',
            'Trimbakeshwar Purohit Sangh',
            'Trimbakeshwar Temple Puja Booking',
            'Kaal Sarp Dosh Nivaran',
            'Tripindi Shradh Cost',
            'Maha Mrityunjay Jaap Trimbakeshwar',
            'Trimbakeshwar Pooja Cost',
            'Trambakeshwar Pandit',
            'Narayan Nagbali Puja Dates'
          ].map((keyword, i) => (
            <Link key={i} to="/services" className="hover:text-orange-500 hover:underline transition-colors">
              {keyword} {i < 16 && '•'}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            {t.footer.copyright}
          </p>
          <p className="text-gray-600 text-xs text-center md:text-right">
            {t.footer.designedBy}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
