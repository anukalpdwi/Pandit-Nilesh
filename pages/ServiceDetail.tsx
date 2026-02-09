
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, ArrowLeft, CheckCircle, Calendar, Clock, MapPin, ChevronDown, User, ShieldCheck } from 'lucide-react';
import { SERVICES_CONTENT } from '../data/servicesData';
import { PHONE_NUMBER } from '../constants';
import SEO from '../components/SEO';

interface ServiceDetailProps {
    lang: 'en' | 'hi';
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ lang }) => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const service = SERVICES_CONTENT[slug as keyof typeof SERVICES_CONTENT];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-saffron-50 p-4">
                <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-4">Service Not Found</h2>
                <Link to="/services" className="px-6 py-3 bg-saffron-600 text-white rounded-full">Back to Services</Link>
            </div>
        );
    }

    // Schema Markup Construction
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faq?.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        })) || []
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Pandit Nilesh Guruji",
            "telephone": PHONE_NUMBER,
            "priceRange": "₹₹",
            "image": "https://trimbakeshwarpujari.in/images/pandit.png",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Trimbakeshwar Temple",
                "addressLocality": "Trimbakeshwar",
                "addressRegion": "Maharashtra",
                "postalCode": "422212",
                "addressCountry": "IN"
            }
        },
        "description": service.description,
        "areaServed": {
            "@type": "City",
            "name": "Trimbakeshwar"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Puja Packages",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Group Puja"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Personal Puja"
                    }
                }
            ]
        }
    };

    return (
        <>
            <SEO
                title={service.title}
                description={service.description}
                keywords={service.keyword + ", Trimbakeshwar Puja, Pandit Nilesh Guruji"}
                image={service.heroImage}
                url={`https://trimbakeshwarpujari.in/services/${slug}`}
                schema={JSON.stringify([faqSchema, serviceSchema])}
            />

            <div className="min-h-screen bg-spiritual pt-20">
                {/* Breadcrumb - Helpful for SEO */}
                <div className="bg-white border-b border-gray-100 py-3">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500">
                        <Link to="/" className="hover:text-saffron-600">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to="/services" className="hover:text-saffron-600">Services</Link>
                        <span className="mx-2">/</span>
                        <span className="text-saffron-600 font-medium">{service.content.heading}</span>
                    </div>
                </div>

                {/* Hero Banner */}
                <div className="relative h-[400px] md:h-[500px]">
                    <img
                        src={service.heroImage}
                        alt={service.keyword}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
                            <span className="bg-saffron-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block shadow-lg">
                                Premium Vedic Service
                            </span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white mb-4 leading-tight drop-shadow-md">
                                {service.content.heading}
                            </h1>
                            <div className="flex flex-wrap gap-4 text-white/90 text-sm md:text-base font-medium">
                                <span className="flex items-center gap-2"><MapPin size={18} className="text-saffron-400" /> Trimbakeshwar Temple</span>
                                <span className="flex items-center gap-2"><Clock size={18} className="text-saffron-400" /> 3-4 Hours Ritual</span>
                                <span className="flex items-center gap-2"><User size={18} className="text-saffron-400" /> By Pandit Nilesh Guruji</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Main Content (Left) */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Introduction - Keyword Rich */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="w-10 h-1 bg-saffron-500 rounded-full"></span>
                                    Significance of the Puja
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {service.content.intro}
                                </p>
                            </div>

                            {/* Benefits */}
                            <div className="bg-gradient-to-br from-saffron-50 to-white p-8 rounded-3xl border border-saffron-100">
                                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Key Benefits</h3>
                                <div className="grid gap-4">
                                    {service.content.significance.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                                                <CheckCircle size={18} />
                                            </div>
                                            <p className="text-gray-700 font-medium">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Ritual Process */}
                            <div>
                                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Puja Vidhi (Process)</h3>
                                <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-saffron-500">
                                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                                        {service.content.process}
                                    </p>
                                </div>
                            </div>

                            {/* FAQs */}
                            {service.faq && service.faq.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                                    <div className="space-y-4">
                                        {service.faq.map((f, i) => (
                                            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                                                <h4 className="font-bold text-gray-900 mb-2 flex justify-between items-center">
                                                    {f.question}
                                                    <ChevronDown size={18} className="text-gray-400" />
                                                </h4>
                                                <p className="text-gray-600">{f.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Sidebar (Right) - Stickly Booking Form */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">

                                {/* Booking Card */}
                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-saffron-500 to-maroon-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg border border-gold-400/30">
                                        ॐ
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Book This Puja</h3>
                                    <p className="text-gray-500 mb-6">Get expert guidance & muhurat</p>

                                    <div className="space-y-3">
                                        <a
                                            href={`tel:${PHONE_NUMBER}`}
                                            className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-saffron-600 to-maroon-700 text-white py-4 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all"
                                        >
                                            <Phone size={20} className="animate-pulse" />
                                            <span>Call Now</span>
                                        </a>
                                        <a
                                            href={`https://wa.me/${PHONE_NUMBER}?text=I want to book ${service.title}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all"
                                        >
                                            <MessageCircle size={20} />
                                            <span>WhatsApp</span>
                                        </a>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                                            <ShieldCheck size={16} className="text-green-500" />
                                            <span>Authorized Temple Purohit</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Why Choose Us Minimal */}
                                <div className="bg-saffron-50 p-6 rounded-2xl border border-saffron-100">
                                    <h4 className="font-bold text-gray-800 mb-4">Why Pandit Nilesh?</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2"><CheckCircle size={16} className="text-saffron-500" /> 15+ Years Experience</li>
                                        <li className="flex gap-2"><CheckCircle size={16} className="text-saffron-500" /> Pure Vedic Rituals</li>
                                        <li className="flex gap-2"><CheckCircle size={16} className="text-saffron-500" /> Transparent Dakshina</li>
                                        <li className="flex gap-2"><CheckCircle size={16} className="text-saffron-500" /> Complete Satisfaction</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetail;
