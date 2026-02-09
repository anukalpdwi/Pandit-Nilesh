
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { translations } from '../translations';

interface BackToTopProps {
    lang: 'en' | 'hi';
}

const BackToTop: React.FC<BackToTopProps> = ({ lang }) => {
    const [isVisible, setIsVisible] = useState(false);
    const t = translations[lang];

    useEffect(() => {
        const toggleVisibility = () => {
            // Show after scrolling 500px
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed left-6 bottom-24 md:bottom-8 z-30 group"
            aria-label={t.common.backToTop}
            title={t.common.backToTop}
        >
            {/* Button with subtle design - positioned on LEFT side to avoid conflict */}
            <div className="relative bg-white text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <ArrowUp size={20} />
            </div>

            {/* Tooltip */}
            <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {t.common.backToTop}
            </div>
        </button>
    );
};

export default BackToTop;
