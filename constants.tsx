
import React from 'react';
import { ShieldCheck, Calendar, BookOpen, UserCheck } from 'lucide-react';

export const PHONE_NUMBER = "8956270196";
export const EMAIL = "panditnileshguruji@gmail.com";
export const ADDRESS = "Trimbakeshwar Temple, Nashik, Maharashtra, India - 422212";
export const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}`;

// Image paths
export const IMAGES = {
  temple: "/Trimbakeswar.jpeg",
  panditPuja: "/puja.jpeg",
  kalsarp: "/kaalsarp.jpeg",
  nagbali: "/puja6.jpeg",
  pitra: "/puja5.jpeg",
  pandit: "/puja2.jpeg",
  interior: "/Thaal.jpeg",
  mahamrityunjay: "/Shivling2.jpeg",
  tripindi: "/puja3.jpeg",
  devotees: "/ganpati.jpeg"
};

export const PRICING_DATA = [
  { puja: "Kaal Sarp Dosh Nivaran", price: "Dakshina on Request", duration: "3-4 hours", image: IMAGES.kalsarp },
  { puja: "Pitra Dosh Puja", price: "Dakshina on Request", duration: "2-3 hours", image: IMAGES.pitra },
  { puja: "Narayan Nagbali", price: "Dakshina on Request", duration: "3 days", image: IMAGES.nagbali },
  { puja: "Tripindi Shradh", price: "Dakshina on Request", duration: "1 day", image: IMAGES.tripindi },
  { puja: "Kumbh Vivah", price: "Dakshina on Request", duration: "2-3 hours", image: "/puja4.jpeg" }, // Using specific image
  { puja: "Maha Mrityunjay Jaap", price: "Dakshina on Request", duration: "1.25 lakh jaap", image: IMAGES.mahamrityunjay }
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    location: "Mumbai",
    text: "Pandit Nilesh Guruji performed the Kaal Sarp Puja very authentically. I felt immediate relief in my professional life. Within 3 months, I got a promotion that I was waiting for 2 years!",
    rating: 5,
    puja: "Kaal Sarp Dosh Nivaran"
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad",
    text: "Excellent arrangements and very knowledgeable Pandit ji. The Trimbakeshwar ceremony was a life-changing experience. He explained every mantra's significance.",
    rating: 5,
    puja: "Narayan Nagbali"
  },
  {
    name: "Sneha Gupta",
    location: "Delhi",
    text: "We performed Narayan Nagbali under Guruji's guidance. He explained every ritual's meaning. Our family has seen immense peace and prosperity since then. Highly recommended.",
    rating: 5,
    puja: "Narayan Nagbali"
  },
  {
    name: "Priya Sharma",
    location: "Pune",
    text: "After 5 years of marriage without children, we did Pitra Dosh Puja. Blessed with a baby boy within a year! Guruji's guidance was invaluable.",
    rating: 5,
    puja: "Pitra Dosh Puja"
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    text: "Business was struggling for years. After Kaal Sarp Puja, obstacles cleared magically. Now running 3 successful stores. Eternal gratitude to Pandit Ji.",
    rating: 5,
    puja: "Kaal Sarp Dosh Nivaran"
  },
  {
    name: "Meera Krishnan",
    location: "Bangalore",
    text: "Tripindi Shradh for our ancestors was performed with complete Vedic rituals. The entire family felt a spiritual upliftment. Very professional service.",
    rating: 5,
    puja: "Tripindi Shradh"
  }
];

export const GALLERY_DATA = {
  temple: [
    { src: IMAGES.temple, title: "Trimbakeshwar Temple", category: "temple" },
    { src: "/Shivling2.jpeg", title: "Sacred Shivling", category: "temple" },
    { src: "/ganpati.jpeg", title: "Ganesh Puja", category: "temple" },
    { src: "/shivling.jpeg", title: "Jyotirlinga Darshan", category: "temple" },
  ],
  rituals: [
    { src: "/puja.jpeg", title: "Vedic Rituals", category: "rituals" },
    { src: "/kaalsarp.jpeg", title: "Kaal Sarp Dosh Nivaran", category: "rituals" },
    { src: "/puja2.jpeg", title: "Havan Ceremony", category: "rituals" },
    { src: "/puja3.jpeg", title: "Pitra Shanti", category: "rituals" },
    { src: "/Thaal.jpeg", title: "Pitra Dosh Thali", category: "rituals" },
    { src: "/puja4.jpeg", title: "Abhishekam", category: "rituals" },
    { src: "/puja5.jpeg", title: "Pind Daan", category: "rituals" },
    { src: "/puja6.jpeg", title: "Narayan Nagbali", category: "rituals" },
    { src: "/puja7.jpeg", title: "Group Puja", category: "rituals" },
    { src: "/puja8.jpeg", title: "Temple Rituals", category: "rituals" },
    { src: "/puja9.jpeg", title: "Devotee Blessings", category: "rituals" },
  ],
  devotees: [
    { src: "/puja7.jpeg", title: "Devotees Performing Puja", category: "devotees" },
    { src: "/puja9.jpeg", title: "Spiritual Atmosphere", category: "devotees" },
    { src: "/puja6.jpeg", title: "Ritual Blessings", category: "devotees" },
  ]
};

export const GALLERY_VIDEOS = [
  {
    id: "1",
    thumbnail: IMAGES.panditPuja,
    title: "Complete Kaal Sarp Puja Ritual",
    duration: "15:30",
    youtubeId: "dQw4w9WgXcQ" // Placeholder - replace with actual
  },
  {
    id: "2",
    thumbnail: IMAGES.nagbali,
    title: "Narayan Nagbali - Day 1",
    duration: "22:45",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "3",
    thumbnail: IMAGES.temple,
    title: "Trimbakeshwar Temple Tour",
    duration: "8:15",
    youtubeId: "dQw4w9WgXcQ"
  }
];

export const FAQS = [
  {
    q: "What is the best time for Kaal Sarp Puja?",
    a: "Kaal Sarp Puja can be performed on any auspicious day or Amavasya. Pandit Ji will check your Kundali to suggest the best muhurat. Most auspicious days include Nag Panchami, Shravan month, and during eclipse periods.",
    category: "timing"
  },
  {
    q: "Do I need to stay in Trimbakeshwar overnight?",
    a: "Most pujas take 3-6 hours. However, Narayan Nagbali is a 3-day process, so an overnight stay is required. We can help arrange comfortable accommodation near the temple.",
    category: "logistics"
  },
  {
    q: "Can the puja be performed online?",
    a: "While physical presence is highly recommended at Trimbakeshwar, we can perform remote pujas with Sankalp for those unable to travel. A video call will be arranged during the ceremony.",
    category: "service"
  },
  {
    q: "What documents/items should I bring?",
    a: "Please bring your Kundali (horoscope), ID proof, and 4-5 passport photos. All puja samagri (materials) will be arranged by us. Wear clean, preferably traditional clothes.",
    category: "preparation"
  },
  {
    q: "How do I know if I have Kaal Sarp Dosh?",
    a: "Kaal Sarp Dosh occurs when all planets are positioned between Rahu and Ketu. Signs include career obstacles, delayed marriage, health issues, and financial instability. Send us your birth details for free kundali analysis.",
    category: "doshas"
  },
  {
    q: "Is Tripindi Shradh same as Narayan Nagbali?",
    a: "No, they are different. Tripindi Shradh is for satisfying 3 generations of ancestors. Narayan Nagbali is specifically for souls who died untimely deaths or whose final rites weren't performed properly.",
    category: "rituals"
  },
  {
    q: "What is included in the puja price?",
    a: "The price includes complete puja samagri (materials), Brahmin dakshina, temple fees, and prasad. Travel, accommodation, and any special personal requests are separate.",
    category: "pricing"
  },
  {
    q: "Can NRIs book pujas from abroad?",
    a: "Absolutely! Many NRIs book pujas with us. We arrange everything and can perform the puja on your behalf or schedule it for your India visit. WhatsApp consultation available 24/7.",
    category: "booking"
  }
];

export const BOOKING_STEPS = [
  {
    step: 1,
    title: "Contact & Consultation",
    description: "Call or WhatsApp us with your birth details. We'll analyze your kundali and recommend the appropriate puja.",
    icon: "📞"
  },
  {
    step: 2,
    title: "Date & Muhurat Selection",
    description: "Based on your horoscope and planetary positions, we select the most auspicious date and time for your puja.",
    icon: "📅"
  },
  {
    step: 3,
    title: "Confirmation & Advance",
    description: "Confirm your booking with a small advance. We'll make all arrangements including samagri and temple coordination.",
    icon: "✅"
  },
  {
    step: 4,
    title: "Arrival & Puja",
    description: "Arrive at Trimbakeshwar on the scheduled date. We'll guide you through the complete ceremony with full Vedic rituals.",
    icon: "🕉️"
  }
];

export const BLOG_ARTICLES = [
  {
    id: "kaal-sarp-dosh-complete-guide",
    title: "Complete Guide to Kaal Sarp Dosh: Symptoms, Effects & Remedies",
    excerpt: "Learn everything about Kaal Sarp Dosh - its types, effects on life, and how Trimbakeshwar puja can provide relief.",
    image: IMAGES.kalsarp,
    date: "2026-01-15",
    readTime: "8 min read",
    category: "Doshas"
  },
  {
    id: "importance-of-pitra-dosh-puja",
    title: "Why Pitra Dosh Puja is Essential for Family Prosperity",
    excerpt: "Understand the significance of ancestral worship and how satisfying your ancestors can bring peace and prosperity.",
    image: IMAGES.pitra,
    date: "2026-01-10",
    readTime: "6 min read",
    category: "Rituals"
  },
  {
    id: "trimbakeshwar-jyotirlinga-significance",
    title: "The Sacred Significance of Trimbakeshwar Jyotirlinga",
    excerpt: "Discover why Trimbakeshwar is one of the 12 Jyotirlingas and its unique spiritual importance for doshas nivaran.",
    image: IMAGES.temple,
    date: "2026-01-05",
    readTime: "5 min read",
    category: "Temple"
  },
  {
    id: "narayan-nagbali-when-needed",
    title: "When is Narayan Nagbali Puja Necessary? Signs & Symptoms",
    excerpt: "Learn about the specific situations that require Narayan Nagbali and how this powerful ritual brings liberation.",
    image: IMAGES.nagbali,
    date: "2025-12-28",
    readTime: "7 min read",
    category: "Rituals"
  }
];
