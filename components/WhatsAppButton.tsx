
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface WhatsAppButtonProps {
  lang?: 'en' | 'hi';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ lang = 'en' }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show popup after 8 seconds if user hasn't interacted
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowPopup(true);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  // Auto-hide popup after 10 seconds
  useEffect(() => {
    if (showPopup) {
      const hideTimer = setTimeout(() => {
        setShowPopup(false);
      }, 10000);
      return () => clearTimeout(hideTimer);
    }
  }, [showPopup]);

  const closePopup = () => {
    setShowPopup(false);
    setHasInteracted(true);
  };

  const message = lang === 'en'
    ? 'Namaste Pandit Ji! I want to book a Puja at Trimbakeshwar. Please share details.'
    : 'नमस्ते पंडित जी! मैं त्र्यंबकेश्वर में पूजा बुक करना चाहता हूं। कृपया विवरण साझा करें।';

  return (
    <>
      {/* WhatsApp Popup - Above buttons */}
      {showPopup && (
        <div className="fixed bottom-36 right-4 z-50 animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-2xl p-4 w-72 border border-gray-100 relative">
            <button
              onClick={closePopup}
              className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 transition-colors shadow-sm"
            >
              <X size={14} className="text-gray-600" />
            </button>

            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                ॐ
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Pandit Nilesh Guruji</h4>
                <p className="text-xs text-green-600 font-medium flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  <span>{lang === 'en' ? 'Online' : 'ऑनलाइन'}</span>
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-3 mb-3 border-l-4 border-green-500">
              <p className="text-xs text-gray-700">
                {lang === 'en'
                  ? '🙏 Need help with Puja booking? Chat with me directly!'
                  : '🙏 पूजा बुकिंग में मदद चाहिए? मुझसे सीधे चैट करें!'}
              </p>
            </div>

            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setHasInteracted(true)}
              className="flex items-center justify-center space-x-2 w-full bg-[#25D366] hover:bg-[#20BD5C] text-white py-2.5 rounded-xl font-bold text-sm transition-colors"
            >
              <MessageCircle size={18} />
              <span>{lang === 'en' ? 'Start Chat' : 'चैट शुरू करें'}</span>
            </a>
          </div>
          {/* Arrow pointing to button */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100"></div>
        </div>
      )}

      {/* Floating Action Buttons Container - Stacked vertically */}
      <div className="fixed bottom-28 md:bottom-8 right-4 z-40 flex flex-col-reverse items-center space-y-reverse space-y-3">
        {/* WhatsApp Button - Primary */}
        <a
          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setHasInteracted(true)}
          className="group relative"
        >
          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>

          {/* Button */}
          <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center">
            <MessageCircle size={28} />
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium pointer-events-none">
            WhatsApp
          </div>
        </a>

        {/* Call Button - Secondary (only on desktop, mobile has sticky bar) */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="group relative hidden md:flex"
        >
          <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white p-3.5 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center">
            <Phone size={24} />
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium pointer-events-none">
            {lang === 'en' ? 'Call Now' : 'कॉल करें'}
          </div>
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;
