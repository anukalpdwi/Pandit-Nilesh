import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../translations';
import { PRICING_DATA, FAQS, IMAGES, PHONE_NUMBER } from '../constants';
import { ChevronRight, CheckCircle2, HelpCircle, Clock, Calendar, Star, ChevronDown, IndianRupee, MessageCircle, Phone } from 'lucide-react';

interface ServicesProps {
  lang: 'en' | 'hi';
  setActivePage: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ lang, setActivePage }) => {
  const t = translations[lang];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const allPujas = [
    {
      id: "kaal-sarp-dosh-puja",
      ...t.services.kalsarp,
      icon: "🐍",
      image: IMAGES.kalsarp,
      price: "₹2,100 - ₹5,100",
      includes: lang === 'en'
        ? ['Complete Samagri', 'Temple Fees', 'Brahmin Dakshina', 'Prasad', 'Kundali Analysis']
        : ['पूर्ण सामग्री', 'मंदिर शुल्क', 'ब्राह्मण दक्षिणा', 'प्रसाद', 'कुंडली विश्लेषण']
    },
    {
      id: "pitra-dosh-puja",
      ...t.services.pitra,
      icon: "🙏",
      image: IMAGES.pitra,
      price: "₹2,500 - ₹4,500",
      includes: lang === 'en'
        ? ['Complete Samagri', 'Temple Fees', 'Brahmin Dakshina', 'Prasad', 'Pind Daan Materials']
        : ['पूर्ण सामग्री', 'मंदिर शुल्क', 'ब्राह्मण दक्षिणा', 'प्रसाद', 'पिंड दान सामग्री']
    },
    {
      id: "narayan-nagbali-puja",
      ...t.services.nagbali,
      icon: "🔱",
      image: IMAGES.nagbali,
      price: "₹7,500 - ₹11,000",
      includes: lang === 'en'
        ? ['3-Day Ceremony', 'All Materials', 'Multiple Brahmins', 'Temple Fees', 'Sacred Rituals']
        : ['3-दिवसीय समारोह', 'सभी सामग्री', 'कई ब्राह्मण', 'मंदिर शुल्क', 'पवित्र अनुष्ठान']
    },
    {
      id: "tripindi-shradh",
      ...t.services.tripindi,
      icon: "🪔",
      image: IMAGES.tripindi,
      price: "₹3,100 - ₹5,100",
      includes: lang === 'en'
        ? ['Complete Samagri', 'Temple Fees', 'Brahmin Dakshina', 'Prasad', 'Tarpan Materials']
        : ['पूर्ण सामग्री', 'मंदिर शुल्क', 'ब्राह्मण दक्षिणा', 'प्रसाद', 'तर्पण सामग्री']
    },
    {
      id: "maha-mrityunjay-jaap",
      ...t.services.mahamrityunjay,
      icon: "🕉️",
      image: IMAGES.mahamrityunjay,
      price: "₹5,100+",
      includes: lang === 'en'
        ? ['1.25 Lakh Jaap', 'Multiple Pandits', 'Havan', 'Complete Samagri', 'Temple Prasad']
        : ['1.25 लाख जाप', 'कई पंडित', 'हवन', 'पूर्ण सामग्री', 'मंदिर प्रसाद']
    },
    {
      id: "kumbh-vivah",
      ...t.services.kumbhVivah,
      icon: "💍",
      image: IMAGES.devotees,
      price: "₹5,100 - ₹7,500",
      includes: lang === 'en'
        ? ['Kumbh (Pot)', 'Wedding Materials', 'Temple Fees', 'Brahmin Dakshina', 'Sacred Rituals']
        : ['कुंभ (घड़ा)', 'विवाह सामग्री', 'मंदिर शुल्क', 'ब्राह्मण दक्षिणा', 'पवित्र अनुष्ठान']
    }
  ];

  const handleBookPuja = (pujaName: string) => {
    const message = lang === 'en'
      ? `Namaste Pandit Ji, I want to book ${pujaName}. Please share the details and available dates.`
      : `नमस्ते पंडित जी, मैं ${pujaName} बुक करना चाहता हूं। कृपया विवरण और उपलब्ध तिथियां साझा करें।`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 bg-spiritual">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-orange-600 font-bold uppercase tracking-widest">ॐ {t.services.title} ॐ</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 text-gray-900">{t.services.subtitle}</h1>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            {lang === 'en'
              ? 'Trimbakeshwar is the only place where all these sacred rituals can be performed according to Vedic traditions.'
              : 'त्र्यंबकेश्वर एकमात्र स्थान है जहां ये सभी पवित्र अनुष्ठान वैदिक परंपराओं के अनुसार किए जा सकते हैं।'}
          </p>
        </div>

        {/* Quick Booking Banner */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-6 md:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
              {lang === 'en' ? 'Quick Booking via WhatsApp' : 'व्हाट्सएप से त्वरित बुकिंग'}
            </h3>
            <p className="text-green-100 text-sm">
              {lang === 'en' ? 'Get instant response and book your puja in minutes' : 'तुरंत प्रतिक्रिया प्राप्त करें और मिनटों में अपनी पूजा बुक करें'}
            </p>
          </div>
          <a
            href={`https://wa.me/${PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg"
          >
            <MessageCircle size={24} />
            <span>{lang === 'en' ? 'Chat Now' : 'अभी चैट करें'}</span>
          </a>
        </div>

        {/* Detailed Services Grid */}
        <div className="space-y-24">
          {allPujas.map((puja, idx) => (
            <div
              key={idx}
              id={puja.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <img
                  src={puja.image}
                  alt={puja.name}
                  className="rounded-3xl shadow-2xl h-[450px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-2xl mr-2">{puja.icon}</span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-red-900">{puja.name}</h2>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {puja.desc}
                </p>

                {/* Duration & Muhurat */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
                    <Clock size={18} className="text-orange-600" />
                    <span className="text-sm font-medium text-gray-700">{puja.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
                    <Calendar size={18} className="text-orange-600" />
                    <span className="text-sm font-medium text-gray-700">{puja.muhurat}</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <CheckCircle2 size={20} className="text-green-600" />
                    <span>{lang === 'en' ? 'Benefits of this Puja:' : 'इस पूजा के लाभ:'}</span>
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {puja.benefits}
                  </p>
                </div>

                {/* What's Included */}
                <div className="grid grid-cols-2 gap-3">
                  {puja.includes.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-orange-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex-1 w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-bold hover:from-green-700 hover:to-green-800 shadow-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <Phone size={20} />
                    <span>{lang === 'en' ? 'Call to Book' : 'बुकिंग के लिए कॉल करें'}</span>
                  </a>
                  <button
                    onClick={() => handleBookPuja(puja.name)}
                    className="flex-1 w-full sm:w-auto bg-gradient-to-r from-red-800 to-orange-600 text-white px-8 py-4 rounded-full font-bold hover:from-red-900 hover:to-orange-700 shadow-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <span>{t.services.bookThis}</span>
                    <MessageCircle size={20} />
                  </button>
                  <Link
                    to={`/services/${puja.id}`}
                    className="flex-1 w-full sm:w-auto bg-white border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>{lang === 'en' ? 'Read Details' : 'विवरण पढ़ें'}</span>
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <IndianRupee className="text-orange-600" size={28} />
              <span className="text-orange-600 font-bold uppercase tracking-widest">{t.pricing.title}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">{t.pricing.subtitle}</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-red-800 to-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-5 text-left font-bold">{lang === 'en' ? 'Puja Name' : 'पूजा का नाम'}</th>
                    <th className="px-6 py-5 text-left font-bold">{lang === 'en' ? 'Duration' : 'अवधि'}</th>
                    <th className="px-6 py-5 text-center font-bold">{lang === 'en' ? 'Book Now' : 'अभी बुक करें'}</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING_DATA.map((item, idx) => (
                    <tr key={idx} className={`border-b border-gray-100 hover:bg-orange-50/50 transition-colors ${idx % 2 === 0 ? 'bg-gray-50/50' : ''}`}>
                      <td className="px-6 py-5 font-bold text-gray-900">{item.puja}</td>
                      <td className="px-6 py-5 text-gray-600">{item.duration}</td>
                      <td className="px-6 py-5 text-center">
                        <button
                          onClick={() => handleBookPuja(item.puja)}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors"
                        >
                          <MessageCircle size={16} className="inline mr-1" />
                          WhatsApp
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-orange-50 text-center">
              <p className="text-gray-600 text-sm">{t.pricing.includes}</p>
              <p className="text-gray-500 text-xs mt-2 italic">{t.pricing.note}</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <HelpCircle className="text-orange-600" size={28} />
              <span className="text-orange-600 font-bold uppercase tracking-widest">{t.faq.title}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">{t.faq.subtitle}</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all ${openFaq === idx ? 'ring-2 ring-orange-500' : 'hover:border-orange-200'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={24} />
                    <h3 className="text-lg font-bold text-gray-900">{faq.q}</h3>
                  </div>
                  <ChevronDown
                    className={`text-orange-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>
                <div className={`px-8 overflow-hidden transition-all ${openFaq === idx ? 'pb-6 max-h-96' : 'max-h-0'}`}>
                  <p className="text-gray-600 leading-relaxed pl-10">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-24 bg-gradient-to-r from-red-900 to-orange-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik00MCAwQzE3LjkgMCAwIDE3LjkgMCA0MHMxNy45IDQwIDQwIDQwIDQwLTE3LjkgNDAtNDBTNjIuMSAwIDQwIDB6bTAgNzBjLTE2LjUgMC0zMC0xMy41LTMwLTMwczEzLjUtMzAgMzAtMzAgMzAgMTMuNSAzMCAzMC0xMy41IDMwLTMwIDMweiIvPjwvZz48L2c+PC9zdmc+')]"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {lang === 'en' ? 'Not Sure Which Puja You Need?' : 'सुनिश्चित नहीं हैं कि आपको कौन सी पूजा चाहिए?'}
            </h3>
            <p className="text-orange-200 text-lg mb-8 max-w-2xl mx-auto">
              {lang === 'en'
                ? 'Send us your birth details and we\'ll analyze your kundali to recommend the right puja for you. Free consultation!'
                : 'हमें अपने जन्म विवरण भेजें और हम आपके लिए सही पूजा की सिफारिश करने के लिए आपकी कुंडली का विश्लेषण करेंगे। मुफ्त परामर्श!'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(lang === 'en' ? 'Namaste! I need help identifying which puja is right for me. My birth details are:' : 'नमस्ते! मुझे यह पहचानने में मदद चाहिए कि मेरे लिए कौन सी पूजा सही है। मेरे जन्म विवरण हैं:')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-900 px-8 py-4 rounded-full font-bold hover:bg-orange-100 transition-colors shadow-xl flex items-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>{lang === 'en' ? 'Get Free Kundali Analysis' : 'मुफ्त कुंडली विश्लेषण प्राप्त करें'}</span>
              </a>
              <button
                onClick={() => setActivePage('contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-red-900 transition-colors flex items-center space-x-2"
              >
                <span>{lang === 'en' ? 'View Booking Form' : 'बुकिंग फॉर्म देखें'}</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Note on Pricing */}
        <p className="text-center mt-16 text-gray-500 text-sm italic">
          {t.pricing.note}
        </p>
      </div>
    </div>
  );
};

export default Services;
