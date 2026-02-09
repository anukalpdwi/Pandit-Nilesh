
import React, { useState } from 'react';
import { translations } from '../translations';
import { BLOG_ARTICLES } from '../constants';
import { Calendar, Clock, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

interface BlogProps {
    lang: 'en' | 'hi';
}

// Blog article content (expanded)
const ARTICLE_CONTENT: { [key: string]: { en: string; hi: string } } = {
    "kaal-sarp-dosh-complete-guide": {
        en: `
## What is Kaal Sarp Dosh?

Kaal Sarp Dosh is a significant astrological condition that occurs when all seven planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, and Saturn) are positioned between Rahu and Ketu in a person's horoscope. This planetary alignment is believed to bring various challenges and obstacles in life.

## Types of Kaal Sarp Dosh

There are 12 types of Kaal Sarp Dosha, each named after a different serpent:

1. **Anant Kaal Sarp Dosh** - Affects career and marital life
2. **Kulik Kaal Sarp Dosh** - Impacts finances and health
3. **Vasuki Kaal Sarp Dosh** - Causes family disputes
4. **Shankhpal Kaal Sarp Dosh** - Brings professional setbacks
5. **Padam Kaal Sarp Dosh** - Creates obstacles in education
6. **Mahapadam Kaal Sarp Dosh** - Affects property matters
7. **Takshak Kaal Sarp Dosh** - Causes sudden losses
8. **Karkotak Kaal Sarp Dosh** - Impacts mental peace
9. **Shankhchud Kaal Sarp Dosh** - Creates legal issues
10. **Ghatak Kaal Sarp Dosh** - Causes accidents
11. **Vishdhar Kaal Sarp Dosh** - Affects relationships
12. **Sheshnag Kaal Sarp Dosh** - Creates spiritual obstacles

## Symptoms of Kaal Sarp Dosh

- Continuous obstacles in career despite hard work
- Delayed marriage or marital discord
- Financial instability and unexpected losses
- Health issues without clear diagnosis
- Recurring bad dreams about snakes
- Feeling of being stuck in life
- Relationship problems with family members

## Remedy: Kaal Sarp Dosh Nivaran Puja

The most effective remedy for Kaal Sarp Dosh is performing the Kaal Sarp Dosh Nivaran Puja at **Trimbakeshwar Temple**, one of the 12 Jyotirlingas. This sacred temple is the only authorized place where this specific puja can be performed with complete Vedic rituals.

### Why Trimbakeshwar?

- One of the 12 sacred Jyotirlingas
- Divine presence of Lord Shiva
- Authorized priests with generations of experience
- Complete adherence to Vedic procedures
- Presence of Kushavarta Kund for sacred rituals

## Benefits of the Puja

After performing Kaal Sarp Dosh Nivaran Puja:

- Career obstacles are removed
- Marriage-related issues get resolved
- Financial stability improves
- Mental peace is achieved
- Health issues get addressed
- Overall life becomes smoother

Contact Pandit Nilesh Guruji to get your horoscope analyzed and book your puja at an auspicious muhurat.
    `,
        hi: `
## काल सर्प दोष क्या है?

काल सर्प दोष एक महत्वपूर्ण ज्योतिषीय स्थिति है जो तब होती है जब सभी सात ग्रह (सूर्य, चंद्रमा, मंगल, बुध, बृहस्पति, शुक्र और शनि) किसी व्यक्ति की कुंडली में राहु और केतु के बीच स्थित होते हैं। माना जाता है कि यह ग्रहीय संरेखण जीवन में विभिन्न चुनौतियां और बाधाएं लाता है।

## काल सर्प दोष के प्रकार

काल सर्प दोष के 12 प्रकार हैं, प्रत्येक का नाम एक अलग सर्प के नाम पर रखा गया है:

1. **अनंत काल सर्प दोष** - करियर और वैवाहिक जीवन को प्रभावित करता है
2. **कुलिक काल सर्प दोष** - वित्त और स्वास्थ्य पर प्रभाव डालता है
3. **वासुकि काल सर्प दोष** - पारिवारिक विवाद का कारण बनता है

## लक्षण

- कड़ी मेहनत के बावजूद करियर में लगातार बाधाएं
- विलंबित विवाह या वैवाहिक कलह
- वित्तीय अस्थिरता और अप्रत्याशित नुकसान
- बिना स्पष्ट निदान के स्वास्थ्य समस्याएं
- सांपों के बारे में बार-बार बुरे सपने आना

## उपाय: काल सर्प दोष निवारण पूजा

काल सर्प दोष का सबसे प्रभावी उपाय **त्र्यंबकेश्वर मंदिर** में काल सर्प दोष निवारण पूजा करना है। यह पवित्र मंदिर एकमात्र अधिकृत स्थान है जहां यह विशिष्ट पूजा पूर्ण वैदिक अनुष्ठानों के साथ की जा सकती है।

पंडित नीलेश गुरुजी से संपर्क करें और अपनी कुंडली का विश्लेषण कराएं।
    `
    }
};

const Blog: React.FC<BlogProps> = ({ lang }) => {
    const t = translations[lang];
    const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Article detail view
    if (selectedArticle) {
        const article = BLOG_ARTICLES.find(a => a.id === selectedArticle);
        if (!article) return null;

        const content = ARTICLE_CONTENT[selectedArticle]?.[lang] || ARTICLE_CONTENT[selectedArticle]?.en || '';

        return (
            <div className="bg-spiritual min-h-screen">
                {/* Article Header Hero */}
                <div className="bg-maroon-900 pt-32 pb-16 relative">
                    <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>
                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => setSelectedArticle(null)}
                            className="flex items-center space-x-2 text-gold-400 hover:text-white font-medium mb-8 group transition-colors"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            <span>{t.blog.backToList}</span>
                        </button>

                        <span className="inline-block px-4 py-1 bg-white/10 text-gold-300 backdrop-blur-sm border border-gold-500/20 rounded-full text-sm font-bold mb-4">
                            {article.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-serif font-black text-white mb-6 leading-tight">
                            {article.title}
                        </h1>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Article content wrapper */}
                    <article>
                        <div className="mb-8">
                            <div className="flex items-center space-x-6 text-gray-500 text-sm">
                                <span className="flex items-center space-x-2">
                                    <Calendar size={16} />
                                    <span>{formatDate(article.date)}</span>
                                </span>
                                <span className="flex items-center space-x-2">
                                    <Clock size={16} />
                                    <span>{article.readTime}</span>
                                </span>
                            </div>
                        </div>

                        {/* Featured image */}
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-80 object-cover rounded-3xl shadow-xl mb-12"
                        />

                        {/* Article content */}
                        <div className="prose prose-lg max-w-none prose-headings:text-maroon-900 prose-headings:font-serif prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-maroon-900">
                            {content.split('\n').map((line, idx) => {
                                if (line.startsWith('## ')) {
                                    return <h2 key={idx} className="text-2xl md:text-3xl font-serif font-bold text-maroon-900 mt-12 mb-6">{line.replace('## ', '')}</h2>;
                                } else if (line.startsWith('### ')) {
                                    return <h3 key={idx} className="text-xl md:text-2xl font-serif font-bold text-maroon-800 mt-8 mb-4">{line.replace('### ', '')}</h3>;
                                } else if (line.startsWith('- ')) {
                                    return <li key={idx} className="ml-6 text-gray-700 mb-2">{line.replace('- ', '')}</li>;
                                } else if (line.match(/^\d+\. \*\*/)) {
                                    const match = line.match(/^(\d+\. \*\*.*?\*\*) - (.*)$/);
                                    if (match) {
                                        return (
                                            <p key={idx} className="text-gray-700 mb-2">
                                                <strong className="text-maroon-900">{match[1].replace(/\*\*/g, '')}</strong> - {match[2]}
                                            </p>
                                        );
                                    }
                                    return <p key={idx} className="text-gray-700 mb-2">{line}</p>;
                                } else if (line.trim()) {
                                    return <p key={idx} className="text-gray-700 leading-relaxed mb-4">{line}</p>;
                                }
                                return null;
                            })}
                        </div>

                        {/* CTA */}
                        <div className="mt-16 bg-gradient-to-r from-maroon-900 to-saffron-700 p-8 md:p-12 rounded-3xl text-white text-center">
                            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                                {lang === 'en' ? 'Ready to Remove This Dosh?' : 'क्या आप इस दोष को दूर करने के लिए तैयार हैं?'}
                            </h3>
                            <p className="text-saffron-100 mb-8 max-w-2xl mx-auto">
                                {lang === 'en'
                                    ? 'Contact Pandit Nilesh Guruji for a free kundali analysis and book your puja at the sacred Trimbakeshwar Temple.'
                                    : 'मुफ्त कुंडली विश्लेषण के लिए पंडित नीलेश गुरुजी से संपर्क करें और पवित्र त्र्यंबकेश्वर मंदिर में अपनी पूजा बुक करें।'}
                            </p>
                            <a
                                href="https://wa.me/918956270196"
                                className="inline-flex items-center space-x-2 bg-white text-maroon-900 px-8 py-4 rounded-full font-bold hover:bg-saffron-100 transition-colors shadow-xl"
                            >
                                <span>{lang === 'en' ? 'Book Your Puja Now' : 'अभी पूजा बुक करें'}</span>
                                <ChevronRight size={20} />
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        );
    }

    // Blog list view
    return (
        <div className="bg-spiritual min-h-screen">
            {/* Hero Header */}
            <div className="bg-maroon-900 pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>
                <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
                    <div className="inline-flex items-center justify-center space-x-2 mb-4">
                        <BookOpen className="text-gold-400" size={28} />
                        <span className="text-gold-400 font-bold uppercase tracking-widest text-sm">{t.blog.title}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-black text-white mt-4">{t.blog.subtitle}</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Articles grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_ARTICLES.map((article) => (
                        <article
                            key={article.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                            onClick={() => setSelectedArticle(article.id)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1 bg-white/95 backdrop-blur-sm text-maroon-800 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                                    <span className="flex items-center space-x-1">
                                        <Calendar size={14} />
                                        <span>{formatDate(article.date)}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                        <Clock size={14} />
                                        <span>{article.readTime}</span>
                                    </span>
                                </div>

                                <h2 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-maroon-700 transition-colors leading-tight">
                                    {article.title}
                                </h2>

                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    {article.excerpt}
                                </p>

                                <button className="flex items-center space-x-2 text-saffron-600 font-bold group-hover:text-maroon-700 transition-colors">
                                    <span>{t.blog.readMore}</span>
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {lang === 'en' ? 'Get Spiritual Guidance' : 'आध्यात्मिक मार्गदर्शन प्राप्त करें'}
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        {lang === 'en'
                            ? 'Have questions about doshas, pujas, or spiritual matters? Contact us for personalized guidance from Pandit Nilesh Guruji.'
                            : 'क्या आपके पास दोषों, पूजाओं, या आध्यात्मिक मामलों के बारे में प्रश्न हैं? पंडित नीलेश गुरुजी से व्यक्तिगत मार्गदर्शन के लिए संपर्क करें।'}
                    </p>
                    <a
                        href="https://wa.me/918956270196"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-maroon-800 to-saffron-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all"
                    >
                        <span>{lang === 'en' ? 'Ask Your Question' : 'अपना प्रश्न पूछें'}</span>
                        <ChevronRight size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Blog;
