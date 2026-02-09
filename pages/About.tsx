
import React from 'react';
import { translations } from '../translations';
import { IMAGES, PHONE_NUMBER, TESTIMONIALS } from '../constants';
import { CheckCircle, Award, Users, Star, MessageCircle, Phone, ChevronRight, BookOpen, ShieldCheck, Calendar, Sparkles } from 'lucide-react';

interface AboutProps {
  lang: 'en' | 'hi';
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang];

  const achievements = [
    { icon: <Award size={28} />, value: '15+', label: lang === 'en' ? 'Years Experience' : 'वर्षों का अनुभव' },
    { icon: <Users size={28} />, value: '10,000+', label: lang === 'en' ? 'Pujas Performed' : 'पूजाएं संपन्न' },
    { icon: <Star size={28} />, value: '50,000+', label: lang === 'en' ? 'Happy Devotees' : 'संतुष्ट श्रद्धालु' },
    { icon: <Sparkles size={28} />, value: '4.9', label: lang === 'en' ? 'Rating' : 'रेटिंग' },
  ];

  const specializations = lang === 'en' ? [
    'Kaal Sarp Dosh Nivaran Puja',
    'Narayan Nagbali (3-day ceremony)',
    'Pitra Dosh Shanti',
    'Tripindi Shradh',
    'Maha Mrityunjay Jaap (1.25 Lakh)',
    'Kumbh Vivah for Manglik',
    'Rudrabhishek',
    'All 16 Sanskars'
  ] : [
    'काल सर्प दोष निवारण पूजा',
    'नारायण नागबली (3-दिवसीय समारोह)',
    'पितृ दोष शांति',
    'त्रिपिंडी श्राद्ध',
    'महा मृत्युंजय जाप (1.25 लाख)',
    'मांगलिक के लिए कुंभ विवाह',
    'रुद्राभिषेक',
    'सभी 16 संस्कार'
  ];

  return (
    <div className="bg-spiritual">
      {/* Hero Header - Dark for navbar visibility */}
      <div className="bg-maroon-900 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold-400 font-bold uppercase tracking-widest text-sm">{t.about.title}</span>
          <h1 className="text-4xl md:text-6xl font-serif font-black mt-4 text-white">
            {lang === 'en' ? 'About Pandit Nilesh Guruji' : 'पंडित नीलेश गुरुजी के बारे में'}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Image Section */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src={IMAGES.pandit}
                alt="Pandit Nilesh Guruji"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-maroon-800 to-saffron-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <span className="block text-3xl font-black">15+</span>
                <span className="text-sm font-bold opacity-80">{lang === 'en' ? 'Years Exp.' : 'वर्ष अनुभव'}</span>
              </div>
            </div>

            {/* Quote Box */}
            <div className="bg-gradient-to-br from-saffron-50 to-white p-8 rounded-3xl border border-saffron-100 relative">
              <div className="absolute -top-4 left-8 text-6xl text-saffron-300 font-serif">"</div>
              <p className="text-gray-700 text-lg leading-relaxed italic pt-4">
                {lang === 'en'
                  ? "Our family has been the custodian of Vedic traditions in Trimbakeshwar for centuries. My mission is to help people resolve their life challenges through authentic Shastrik rituals and pure devotion."
                  : "हमारा परिवार सदियों से त्र्यंबकेश्वर में वैदिक परंपराओं का संरक्षक रहा है। मेरा मिशन प्रामाणिक शास्त्रीय अनुष्ठानों और शुद्ध भक्ति के माध्यम से लोगों को उनकी जीवन चुनौतियों को हल करने में मदद करना है।"}
              </p>
              <p className="text-saffron-600 font-bold mt-4">— Pandit Nilesh Guruji</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-maroon-900 border-b-2 border-saffron-100 pb-4 mb-6">
                {lang === 'en' ? 'Ancestral Lineage & Education' : 'पैतृक वंशावली और शिक्षा'}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                {lang === 'en'
                  ? 'Pandit Nilesh Guruji was born into a prestigious family of Tamrapatradhari Purohits in Trimbakeshwar. From a young age, he was trained in the Rigveda and Shukla Yajurveda by his elders.'
                  : 'पंडित नीलेश गुरुजी का जन्म त्र्यंबकेश्वर में ताम्रपत्रधारी पुरोहितों के एक प्रतिष्ठित परिवार में हुआ था। छोटी उम्र से ही उन्हें उनके बड़ों द्वारा ऋग्वेद और शुक्ल यजुर्वेद की शिक्षा दी गई।'}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {lang === 'en'
                  ? 'He holds deep knowledge of various Smriti texts, Puranas, and specialized scriptures dealing with Dosha Nivaran. His expertise is not just in performing the ritual but in explaining the spiritual significance to the devotee.'
                  : 'उन्हें विभिन्न स्मृति ग्रंथों, पुराणों और दोष निवारण से संबंधित विशेष शास्त्रों का गहन ज्ञान है। उनकी विशेषज्ञता केवल अनुष्ठान करने में नहीं बल्कि भक्त को आध्यात्मिक महत्व समझाने में भी है।'}
              </p>
            </div>

            {/* Specializations */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <BookOpen className="text-saffron-600" size={24} />
                <span>{lang === 'en' ? 'Specializations' : 'विशेषज्ञताएं'}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specializations.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-maroon-50 to-white p-6 rounded-2xl border border-maroon-100">
                <ShieldCheck className="text-maroon-600 mb-3" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">{t.about.feat_authorized}</h4>
                <p className="text-sm text-gray-600">
                  {lang === 'en' ? 'Registered Purohit at Trimbakeshwar Temple' : 'त्र्यंबकेश्वर मंदिर में पंजीकृत पुरोहित'}
                </p>
              </div>
              <div className="bg-gradient-to-br from-saffron-50 to-white p-6 rounded-2xl border border-saffron-100">
                <Calendar className="text-saffron-600 mb-3" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">{t.about.feat_muhurat}</h4>
                <p className="text-sm text-gray-600">
                  {lang === 'en' ? 'Precise planetary calculations for optimal timing' : 'इष्टतम समय के लिए सटीक ग्रह गणना'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-maroon-900 to-saffron-700 rounded-3xl p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white relative z-10">
            {achievements.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black">{item.value}</div>
                <div className="text-saffron-200 font-medium text-sm uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trimbakeshwar Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-saffron-600 font-bold uppercase tracking-widest text-sm">
              {lang === 'en' ? 'Sacred Location' : 'पवित्र स्थान'}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mt-4 mb-6">
              {lang === 'en' ? 'Significance of Trimbakeshwar' : 'त्र्यंबकेश्वर का महत्व'}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {lang === 'en'
                ? 'Trimbakeshwar is one of the 12 Jyotirlingas of Lord Shiva. It is uniquely known because the Linga here has three faces representing Lord Brahma, Lord Vishnu, and Lord Maheshwar. This makes it the most powerful site in the world for Pitra Dosh and Kaal Sarp Dosh Nivaran.'
                : 'त्र्यंबकेश्वर भगवान शिव के 12 ज्योतिर्लिंगों में से एक है। यह विशेष रूप से जाना जाता है क्योंकि यहां के लिंग में तीन मुख हैं जो भगवान ब्रह्मा, भगवान विष्णु और भगवान महेश्वर का प्रतिनिधित्व करते हैं। यह पितृ दोष और काल सर्प दोष निवारण के लिए दुनिया का सबसे शक्तिशाली स्थान है।'}
            </p>
            <ul className="space-y-3 mb-8">
              {[
                lang === 'en' ? 'Source of River Godavari' : 'गोदावरी नदी का उद्गम',
                lang === 'en' ? 'Only place for Narayan Nagbali Puja' : 'नारायण नागबली पूजा का एकमात्र स्थान',
                lang === 'en' ? 'Kushavarta Kund for sacred rituals' : 'पवित्र अनुष्ठानों के लिए कुशावर्त कुंड',
                lang === 'en' ? 'Ancient Hemadpanthi architecture' : 'प्राचीन हेमाडपंथी वास्तुकला',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src={IMAGES.temple}
              alt="Trimbakeshwar Temple"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <span className="block text-saffron-600 font-bold text-lg">12th</span>
              <span className="text-sm text-gray-600">Jyotirlinga</span>
            </div>
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold text-maroon-900">{t.testimonials.title}</h3>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} className="text-gold-400" fill="currentColor" />)}
            </div>
            <p className="text-xl text-gray-700 italic leading-relaxed mb-6">
              "{TESTIMONIALS[0].text}"
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-saffron-400 to-maroon-500 rounded-full flex items-center justify-center font-bold text-white">
                {TESTIMONIALS[0].name[0]}
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900">{TESTIMONIALS[0].name}</h4>
                <p className="text-sm text-saffron-600">{TESTIMONIALS[0].location} • {TESTIMONIALS[0].puja}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-maroon-900 mb-6">
            {lang === 'en' ? 'Ready to Consult Pandit Ji?' : 'पंडित जी से परामर्श करने के लिए तैयार हैं?'}
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Get your horoscope analyzed and receive personalized guidance for the right puja. Free initial consultation!'
              : 'अपनी कुंडली का विश्लेषण करवाएं और सही पूजा के लिए व्यक्तिगत मार्गदर्शन प्राप्त करें। मुफ्त प्रारंभिक परामर्श!'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold transition-colors shadow-xl"
            >
              <MessageCircle size={24} />
              <span>{lang === 'en' ? 'WhatsApp Consultation' : 'व्हाट्सएप परामर्श'}</span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center space-x-2 bg-gradient-to-r from-maroon-800 to-saffron-600 text-white px-8 py-4 rounded-full font-bold hover:from-maroon-900 hover:to-saffron-700 transition-colors shadow-xl"
            >
              <Phone size={24} />
              <span>{lang === 'en' ? 'Call Now' : 'अभी कॉल करें'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
