
import React, { useState } from 'react';
import { translations } from '../translations';
import { PHONE_NUMBER, EMAIL, ADDRESS, PRICING_DATA, BOOKING_STEPS } from '../constants';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Calendar, CheckCircle, IndianRupee, ChevronRight } from 'lucide-react';

interface ContactProps {
  lang: 'en' | 'hi';
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang];
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    puja: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMsg = `🙏 Namaste Pandit Ji,

*New Puja Booking Request*

👤 Name: ${formState.name}
📧 Email: ${formState.email}
📱 Phone: ${formState.phone}
🕉️ Puja: ${formState.puja}
📅 Preferred Date: ${formState.date}

💬 Message:
${formState.message || 'No additional message'}

Please confirm the availability and muhurat.`;

    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    setIsSubmitting(false);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Puja Booking Request - ${formState.puja}`;
    const body = `Namaste Pandit Ji,

I would like to book a puja with the following details:

Name: ${formState.name}
Email: ${formState.email}
Phone: ${formState.phone}
Puja Type: ${formState.puja}
Preferred Date: ${formState.date}

Message:
${formState.message || 'No additional message'}

Please confirm the availability and muhurat.

Dhanyawad`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const pujaOptions = [
    { value: "", label: lang === 'en' ? '-- Select Puja Type --' : '-- पूजा का प्रकार चुनें --' },
    { value: "Kaal Sarp Dosh Nivaran", label: lang === 'en' ? 'Kaal Sarp Dosh Nivaran' : 'काल सर्प दोष निवारण' },
    { value: "Pitra Dosh Puja", label: lang === 'en' ? 'Pitra Dosh Puja' : 'पितृ दोष पूजा' },
    { value: "Narayan Nagbali", label: lang === 'en' ? 'Narayan Nagbali' : 'नारायण नागबली' },
    { value: "Tripindi Shradh", label: lang === 'en' ? 'Tripindi Shradh' : 'त्रिपिंडी श्राद्ध' },
    { value: "Kumbh Vivah", label: lang === 'en' ? 'Kumbh Vivah' : 'कुंभ विवाह' },
    { value: "Maha Mrityunjay Jaap", label: lang === 'en' ? 'Maha Mrityunjay Jaap' : 'महा मृत्युंजय जाप' },
    { value: "Kundali Consultation", label: lang === 'en' ? 'Kundali Consultation' : 'कुंडली परामर्श' },
    { value: "Other", label: lang === 'en' ? 'Other Consultation' : 'अन्य परामर्श' }
  ];

  return (
    <div className="pt-32 pb-24 bg-spiritual">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <span className="text-orange-600 font-bold uppercase tracking-widest">{t.contact.title}</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 text-gray-900">{t.contact.subtitle}</h1>
        </div>
      </div>

      {/* Booking Process Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            {t.booking.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BOOKING_STEPS.map((step, idx) => (
              <div key={idx} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <div className="absolute top-10 left-[60%] w-[80%] h-0.5 bg-orange-200 hidden lg:block last:hidden"></div>
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full mb-3">
                  {lang === 'en' ? `Step ${step.step}` : `चरण ${step.step}`}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-orange-50 p-8 rounded-3xl space-y-8">
              <h2 className="text-2xl font-bold text-red-900">{t.contact.info}</h2>

              <a href={`tel:${PHONE_NUMBER}`} className="flex items-start space-x-4 group">
                <div className="p-3 bg-white rounded-xl text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.contact.callUs}</h4>
                  <p className="text-lg text-orange-600 font-bold">+{PHONE_NUMBER}</p>
                  <p className="text-xs text-gray-500 mt-1">{lang === 'en' ? 'Available 6 AM - 10 PM' : 'उपलब्ध 6 AM - 10 PM'}</p>
                </div>
              </a>

              <a href={`mailto:${EMAIL}`} className="flex items-start space-x-4 group">
                <div className="p-3 bg-white rounded-xl text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600 break-all text-sm">{EMAIL}</p>
                </div>
              </a>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl text-orange-600 shadow-sm"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.contact.location}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl text-orange-600 shadow-sm"><Clock size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">{lang === 'en' ? 'Temple Timings' : 'मंदिर का समय'}</h4>
                  <p className="text-gray-600 text-sm">5:30 AM - 9:00 PM</p>
                  <p className="text-xs text-orange-600 font-medium mt-1">{lang === 'en' ? 'Puja timings may vary' : 'पूजा का समय भिन्न हो सकता है'}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-3xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                <MessageSquare size={100} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.contact.directChat}</h3>
              <p className="text-green-100 text-sm mb-6 leading-relaxed">
                {t.contact.directChatDesc}
              </p>
              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-green-700 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors shadow-lg"
              >
                {t.contact.chatNow}
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.8893858892676!2d73.53039987526486!3d19.932483681467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddefa055555555%3A0x5ae29463f4e9e32d!2sTrimbakeshwar%20Shiva%20Temple!5e0!3m2!1sen!2sin!4v1706889234567"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
              <Calendar className="text-orange-600" />
              <span>{lang === 'en' ? 'Online Puja Booking Form' : 'ऑनलाइन पूजा बुकिंग फॉर्म'}</span>
            </h2>

            <form onSubmit={handleWhatsAppSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">{t.contact.name} *</label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'en' ? "E.g. Rajesh Sharma" : "जैसे: राजेश शर्मा"}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">{t.contact.email}</label>
                <input
                  type="email"
                  placeholder={lang === 'en' ? "your@email.com" : "आपका@ईमेल.com"}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">{t.contact.phone} *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">{t.contact.puja} *</label>
                <select
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                  value={formState.puja}
                  onChange={(e) => setFormState({ ...formState, puja: e.target.value })}
                >
                  {pujaOptions.map((option, idx) => (
                    <option key={idx} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">{t.contact.date}</label>
                <input
                  type="date"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                  value={formState.date}
                  onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  {lang === 'en' ? 'Birth Details (Optional)' : 'जन्म विवरण (वैकल्पिक)'}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'en' ? "Date, Time, Place of Birth" : "जन्म तिथि, समय, स्थान"}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">{t.contact.message}</label>
                <textarea
                  rows={4}
                  placeholder={lang === 'en' ? "Tell us about your requirements or problems you're facing..." : "अपनी आवश्यकताओं या समस्याओं के बारे में बताएं..."}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <div className="md:col-span-2 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-5 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-800 shadow-xl transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
                  >
                    <MessageSquare size={24} />
                    <span>{t.contact.submit}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="w-full bg-gradient-to-r from-red-800 to-orange-600 text-white py-5 rounded-xl font-bold text-lg hover:from-red-900 hover:to-orange-700 shadow-xl transition-all flex items-center justify-center space-x-3"
                  >
                    <Send size={24} />
                    <span>{t.contact.submitEmail}</span>
                  </button>
                </div>
                <p className="text-center text-xs text-gray-400">
                  {t.contact.bookingNote}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-bold uppercase tracking-widest flex items-center justify-center space-x-2">
              <IndianRupee size={20} />
              <span>{t.pricing.title}</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">{t.pricing.subtitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRICING_DATA.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100 hover:shadow-lg transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{item.puja}</h3>
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                </div>
                <div className="text-2xl font-black text-orange-600 mb-2">{item.price}</div>
                <p className="text-sm text-gray-500">
                  <Clock size={14} className="inline mr-1" />
                  {lang === 'en' ? 'Duration: ' : 'अवधि: '}{item.duration}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-orange-50 rounded-2xl">
            <p className="text-center text-gray-600 text-sm mb-2">{t.pricing.includes}</p>
            <p className="text-center text-gray-500 text-xs italic">{t.pricing.note}</p>
          </div>

          <div className="text-center mt-8">
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(lang === 'en' ? 'Namaste! I want to know about puja pricing and availability.' : 'नमस्ते! मैं पूजा की कीमत और उपलब्धता के बारे में जानना चाहता हूं।')}`}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-800 to-orange-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all"
            >
              <span>{lang === 'en' ? 'Get Exact Quote' : 'सटीक कीमत जानें'}</span>
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
