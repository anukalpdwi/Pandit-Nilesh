
import React, { useState } from 'react';
import { translations } from '../translations';
import { GALLERY_DATA, GALLERY_VIDEOS } from '../constants';
import { Play, ZoomIn, X, Image, Video, Building2 } from 'lucide-react';

interface GalleryProps {
  lang: 'en' | 'hi';
}

type FilterType = 'all' | 'temple' | 'rituals' | 'videos';

const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // Combine all gallery items
  const allImages = [
    ...GALLERY_DATA.temple,
    ...GALLERY_DATA.rituals,
    ...GALLERY_DATA.devotees
  ];

  // Filter images based on category
  const getFilteredImages = () => {
    switch (activeFilter) {
      case 'temple':
        return GALLERY_DATA.temple;
      case 'rituals':
        return [...GALLERY_DATA.rituals, ...GALLERY_DATA.devotees];
      case 'videos':
        return [];
      default:
        return allImages;
    }
  };

  const filteredImages = getFilteredImages();

  const filters: { key: FilterType; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: t.gallery.filterAll, icon: <Image size={18} /> },
    { key: 'temple', label: t.gallery.filterTemple, icon: <Building2 size={18} /> },
    { key: 'rituals', label: t.gallery.filterRituals, icon: <ZoomIn size={18} /> },
    { key: 'videos', label: t.gallery.filterVideos, icon: <Video size={18} /> }
  ];

  return (
    <div className="pt-32 pb-24 bg-spiritual min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-widest">{t.gallery.title}</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 text-gray-900">{t.gallery.subtitle}</h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg ${activeFilter === filter.key
                  ? 'bg-gradient-to-r from-red-800 to-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-50'
                }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        {activeFilter !== 'videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredImages.map((item, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-3xl shadow-xl cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
                onClick={() => setSelectedImg(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-6">
                  <ZoomIn className="text-white mb-4" size={40} />
                  <h3 className="text-white font-bold text-lg text-center">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Video Section */}
        {(activeFilter === 'all' || activeFilter === 'videos') && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              {lang === 'en' ? '📹 Sacred Ritual Videos' : '📹 पवित्र अनुष्ठान वीडियो'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {GALLERY_VIDEOS.map((video) => (
                <div
                  key={video.id}
                  className="relative group overflow-hidden rounded-3xl shadow-xl cursor-pointer"
                  onClick={() => setPlayingVideo(video.id)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform animate-pulse">
                      <Play size={36} fill="white" className="text-white ml-1" />
                    </div>
                    <h3 className="text-white font-bold text-lg mt-6 text-center px-4">{video.title}</h3>
                    <span className="text-white/70 text-sm mt-2">{video.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Temple Info Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-6">
                {lang === 'en' ? 'About Trimbakeshwar Temple' : 'त्र्यंबकेश्वर मंदिर के बारे में'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Trimbakeshwar is one of the twelve Jyotirlingas, sacred shrines dedicated to Lord Shiva. Located near Nashik in Maharashtra, it is the source of the sacred Godavari river. The temple is known for its unique lingam with three faces representing Brahma, Vishnu, and Shiva.'
                  : 'त्र्यंबकेश्वर बारह ज्योतिर्लिंगों में से एक है, जो भगवान शिव को समर्पित पवित्र मंदिर है। महाराष्ट्र में नासिक के पास स्थित, यह पवित्र गोदावरी नदी का उद्गम स्थल है। मंदिर अपने अद्वितीय लिंगम के लिए जाना जाता है जिसमें ब्रह्मा, विष्णु और शिव का प्रतिनिधित्व करने वाले तीन मुख हैं।'}
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <span className="text-orange-600">✓</span>
                  <span>{lang === 'en' ? 'One of 12 Sacred Jyotirlingas' : '12 पवित्र ज्योतिर्लिंगों में से एक'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-orange-600">✓</span>
                  <span>{lang === 'en' ? 'Only place for Narayan Nagbali & Kaal Sarp Puja' : 'नारायण नागबली और काल सर्प पूजा के लिए एकमात्र स्थान'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-orange-600">✓</span>
                  <span>{lang === 'en' ? 'Source of River Godavari' : 'गोदावरी नदी का उद्गम'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-orange-600">✓</span>
                  <span>{lang === 'en' ? 'Ancient temple with Hemadpanthi architecture' : 'हेमाडपंथी वास्तुकला वाला प्राचीन मंदिर'}</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src={GALLERY_DATA.temple[0]?.src || '/images/temple.png'}
                alt="Trimbakeshwar Temple"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-800 to-orange-600 text-white p-6 rounded-2xl shadow-xl">
                <span className="block text-3xl font-black">12th</span>
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">Jyotirlinga</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors z-10"
            onClick={() => setSelectedImg(null)}
          >
            <X size={40} />
          </button>
          <img
            src={selectedImg}
            alt="Fullscreen"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Video Modal */}
      {playingVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors z-10"
            onClick={() => setPlayingVideo(null)}
          >
            <X size={40} />
          </button>
          <div className="w-full max-w-4xl aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <Play size={64} className="mx-auto mb-4 opacity-50" />
              <p className="text-gray-400">
                {lang === 'en' ? 'Video playback placeholder' : 'वीडियो प्लेबैक प्लेसहोल्डर'}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {lang === 'en' ? 'Replace with actual YouTube embed' : 'वास्तविक YouTube एम्बेड से बदलें'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
