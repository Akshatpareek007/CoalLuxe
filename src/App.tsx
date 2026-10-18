import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DemoBanner } from './components/DemoBanner';
import { FloatingActions } from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import { LogoIntroAnimation } from './components/LogoIntroAnimation';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ManufacturingPage from './pages/ManufacturingPage';
import QualityPage from './pages/QualityPage';
import PackagingExportPage from './pages/PackagingExportPage';
import GalleryPage from './pages/GalleryPage';
import ResourcesPage from './pages/ResourcesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import RequestQuotePage from './pages/RequestQuotePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

export function App() {
  const [introActive, setIntroActive] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {introActive && (
        <LogoIntroAnimation onComplete={() => setIntroActive(false)} />
      )}
      <div className="app-layout">
        {/* Top Configurable Client Demo Banner */}
        <DemoBanner />

        {/* Primary Navigation Header */}
        <Header hideLogoUntilIntroDone={introActive} />

        {/* Main Routed Content */}
        <main id="main-content" style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/packaging-export" element={<PackagingExportPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:slug" element={<ArticleDetailPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Comprehensive B2B Footer */}
        <Footer />

        {/* Floating Quick Action Controls */}
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;
