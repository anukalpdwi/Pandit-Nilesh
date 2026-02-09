
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ServiceDetail from './pages/ServiceDetail';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

// Main App Content with navigation
const AppContent: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const location = useLocation();
  const navigate = useNavigate();

  // Get active page from pathname
  const getActivePage = () => {
    const path = location.pathname.slice(1) || 'home';
    return path;
  };

  // Navigation handler for components
  const setActivePage = (page: string) => {
    const path = page === 'home' ? '/' : `/${page}`;
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar
        lang={lang}
        setLang={setLang}
        activePage={getActivePage()}
        setActivePage={setActivePage}
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home lang={lang} setActivePage={setActivePage} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/services" element={<Services lang={lang} setActivePage={setActivePage} />} />
          <Route path="/services/:slug" element={<ServiceDetail lang={lang} />} />
          <Route path="/gallery" element={<Gallery lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route path="/blog" element={<Blog lang={lang} />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home lang={lang} setActivePage={setActivePage} />} />
        </Routes>
      </main>

      <Footer lang={lang} setActivePage={setActivePage} />

      <WhatsAppButton lang={lang} />
      <BackToTop lang={lang} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
