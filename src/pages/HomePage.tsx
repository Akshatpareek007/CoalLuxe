import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { brandConfig } from '../config/brandConfig';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES } from '../data/productsData';
import { MANUFACTURING_STEPS } from '../data/manufacturingSteps';
import { GALLERY_DATA } from '../data/galleryData';
import { ARTICLES_DATA } from '../data/articlesData';
import { FAQ_DATA } from '../data/faqData';
import { ProductCard } from '../components/ProductCard';
import { Lightbox } from '../components/Lightbox';
import { 
  Flame, 
  ShieldCheck, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  Layers, 
  Package, 
  ChevronDown,
  Award
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedLightboxImg, setSelectedLightboxImg] = useState<{ src: string; alt: string; caption: string } | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-oem-packaging');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === activeCategory);

  return (
    <>
      {/* SECTION 2: HERO BANNER */}
      <section 
        className="hero-section"
        style={{
          position: 'relative',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `linear-gradient(to right, rgba(11, 12, 14, 0.94) 30%, rgba(11, 12, 14, 0.75) 70%, rgba(11, 12, 14, 0.85)), url('/images/hero_bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '1px solid var(--color-carbon-700)',
          padding: '5rem 0'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '780px' }}>
            
            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(1.85rem, 3vw, 2.65rem)',
              lineHeight: 1.22,
              marginBottom: '1.25rem',
              fontWeight: 800,
              color: '#FFFFFF'
            }}>
              Premium Charcoal, Made from Carefully Selected Wood
            </h1>

            {/* Supporting Copy */}
            <p style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
              color: 'var(--color-gray-200)',
              lineHeight: 1.55,
              marginBottom: '2.5rem',
              maxWidth: '680px'
            }}>
              Direct manufacturer and bulk supplier of high-quality wood charcoal, lumpwood, and briquettes. Consistent quality, reliable supply, and delivery across India for commercial and industrial requirements.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Link to="/request-quote" className="btn btn-primary btn-lg" style={{ boxShadow: 'var(--shadow-accent)' }}>
                <FileText size={18} /> Request for Order/Supply
              </Link>
              <Link to="/products" className="btn btn-secondary btn-lg">
                Explore Product Range <ArrowRight size={18} />
              </Link>
            </div>

            {/* Quick Metrics Under Hero */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)'
            }}>
              <div>
                <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
                  &gt; 7,500
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  kcal/kg Calorific Value
                </div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.12)', paddingLeft: '2rem' }}>
                <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
                  &lt; 2.5%
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Ultra-Low Ash Residue
                </div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.12)', paddingLeft: '2rem' }}>
                <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--color-accent-light)', fontFamily: 'var(--font-mono)' }}>
                  {brandConfig.satisfiedCustomersCount}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Satisfied Customers
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: COMPANY CREDIBILITY & KEY NUMBERS */}
      <section className="section-darker" style={{ padding: '2.5rem 0', borderBottom: '1px solid var(--color-carbon-700)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            textAlign: 'center'
          }}>
            <div className="b2b-card" style={{ padding: '1.5rem 1rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-accent-light)', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                100%
              </div>
              <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.95rem' }}>Natural & Chemical-Free</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', marginTop: '0.2rem' }}>Zero chemical binders or nitrates</div>
            </div>

            <div className="b2b-card" style={{ padding: '1.5rem 1rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-accent-light)', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                100%
              </div>
              <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.95rem' }}>Legal Firewood</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', marginTop: '0.2rem' }}>Made from 100% legal firewood</div>
            </div>

            <div className="b2b-card" style={{ padding: '1.5rem 1rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                4+
              </div>
              <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.95rem' }}>States Across India</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', marginTop: '0.2rem' }}>Prompt logistics & regional delivery</div>
            </div>

            <div className="b2b-card" style={{ padding: '1.5rem 1rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                400+
              </div>
              <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.95rem' }}>Tons / Month Capacity</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', marginTop: '0.2rem' }}>Scalable bulk commercial supply</div>
            </div>

            <div className="b2b-card" style={{ padding: '1.5rem 1rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-success)', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                {brandConfig.repeatCustomerRate}
              </div>
              <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.95rem' }}>Repeat B2B Order Rate</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', marginTop: '0.2rem' }}>Trusted by commercial buyers across India</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 & 5: PRODUCT CATALOGUE SHOWCASE WITH CATEGORY TABS */}
      <section className="section section-dark" id="products-catalogue">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-eyebrow">
              <Layers size={14} /> Commercial Product Catalogue
            </span>
            <h2>Premium Commercial Charcoal Solutions</h2>
            <p className="section-subtitle">
              Sourced from selected timber, slowly carbonized in monitored kilns, and sorted into uniform size fractions with certified batch specifications.
            </p>

            {/* Category Filter Pills (Smoothly Scrollable) */}
            <div 
              className="hide-scrollbar"
              onWheel={(e) => {
                if (e.deltaY !== 0) {
                  e.currentTarget.scrollLeft += e.deltaY;
                }
              }}
              style={{
                display: 'flex',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch',
                justifyContent: 'center',
                gap: '0.6rem',
                marginTop: '2rem',
                padding: '0.35rem 0.5rem',
                maxWidth: '100%'
              }}
            >
              {PRODUCT_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`btn btn-sm ${activeCategory === cat.id ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ 
                    borderRadius: 'var(--radius-full)', 
                    padding: '0.45rem 1.1rem',
                    flexShrink: 0,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/products" className="btn btn-secondary btn-lg">
              Explore Full Technical Catalogue & Specifications <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE US / VALUE PROPOSITION */}
      <section className="section section-darker">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-eyebrow">
              <Award size={14} /> Operational Advantages
            </span>
            <h2>Engineered for Commercial & Industrial Buyers Across India</h2>
            <p className="section-subtitle">
              Direct manufacturer supply eliminating middlemen — consistent batch quality, guaranteed calorific values, and prompt delivery across all Indian states.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}>
            <div className="b2b-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'var(--color-accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', border: '1px solid var(--color-accent-border)' }}>
                <Flame size={24} color="var(--color-accent)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem', color: '#FFFFFF' }}>High Fixed Carbon Purity</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-400)', lineHeight: 1.6 }}>
                Our carbonization cycles strictly reach 78% to 92%+ fixed carbon, guaranteeing an extended, spark-free burn with maximum heat output and minimal ash cleanup.
              </p>
            </div>

            <div className="b2b-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'var(--color-success-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <ShieldCheck size={24} color="var(--color-success)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem', color: '#FFFFFF' }}>Certified Lab Quality & Safety</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-400)', lineHeight: 1.6 }}>
                Every batch is lab-tested for moisture, ash residue, and calorific value, accompanied by comprehensive test reports and safety documentation for commercial peace of mind.
              </p>
            </div>

            <div className="b2b-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(59, 130, 246, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                <Package size={24} color="#60A5FA" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem', color: '#FFFFFF' }}>Turn-Key OEM Private Label</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-400)', lineHeight: 1.6 }}>
                Full-service custom packaging: 3kg to 20kg retail boxes, reinforced PP bags, barcode printing, and moisture-resistant liners tailored to your brand identity.
              </p>
            </div>

            <div className="b2b-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(217, 119, 6, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', border: '1px solid var(--color-accent-border)' }}>
                <Truck size={24} color="var(--color-accent)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem', color: '#FFFFFF' }}>Direct Pan-India Dispatch</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-400)', lineHeight: 1.6 }}>
                Dedicated freight and full-truckload (FTL) transport coordination with photographic weight slips, verified vehicle dispatch, and live transit updates directly to your facility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: MANUFACTURING PROCESS PREVIEW */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="section-title-eyebrow">
                <Flame size={14} /> Production Integrity
              </span>
              <h2>The 6-Stage Kiln Carbonization Protocol</h2>
              <p style={{ color: 'var(--color-gray-300)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                High-quality charcoal is not made rapidly. It requires 18 to 22 days of controlled oxygen-starvation in traditional brick kilns, followed by a mandatory 10-day stabilization period to eliminate internal thermal pockets.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {MANUFACTURING_STEPS.slice(0, 3).map(step => (
                  <div key={step.stepNumber} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-carbon-800)',
                      border: '1px solid var(--color-accent-border)',
                      color: 'var(--color-accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>
                      {step.stepNumber}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '0.25rem' }}>{step.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', margin: 0 }}>{step.shortDesc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2.25rem' }}>
                <Link to="/manufacturing" className="btn btn-primary btn-md">
                  Explore Full Manufacturing Lifecycle &rarr;
                </Link>
              </div>
            </div>

            <div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-carbon-700)', boxShadow: 'var(--shadow-xl)' }}>
                <img 
                  src="/images/factory_kilns.jpg" 
                  alt="Industrial Brick Dome Kilns in operation" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  insetInline: 0,
                  background: 'linear-gradient(to top, rgba(11, 12, 14, 0.95), transparent)',
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem' }}>Kiln Battery Alpha</div>
                    <div style={{ color: 'var(--color-gray-400)', fontSize: '0.8rem' }}>Controlled slow-burn carbonization</div>
                  </div>
                  <span className="badge badge-amber">18–22 Days Cycle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 & 9: QUALITY ASSURANCE & PACKAGING EXPORT */}
      <section className="section section-darker">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}>
            {/* Left Card: Lab Testing */}
            <div className="b2b-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.5rem', paddingTop: '55%' }}>
                <img 
                  src="/images/quality_lab.jpg" 
                  alt="Laboratory Quality Assurance and Moisture Testing" 
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span className="section-title-eyebrow">
                <CheckCircle2 size={14} /> Laboratory Verification
              </span>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#FFFFFF' }}>
                Batch Testing & Chemical Certification
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-300)', lineHeight: 1.6, flexGrow: 1 }}>
                Every production lot is sampled by certified technicians using digital moisture balances, bomb calorimeters, and muffle furnaces to ensure specifications strictly adhere to international B2B contracts.
              </p>
              <div style={{ marginTop: '1.25rem' }}>
                <Link to="/quality" className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                  Review Quality Standards & Lab Criteria
                </Link>
              </div>
            </div>

            {/* Right Card: Container Logistics */}
            <div className="b2b-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.5rem', paddingTop: '55%' }}>
                <img 
                  src="/images/container_shipping.jpg" 
                  alt="40ft Container Stuffing & Freight Logistics" 
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span className="section-title-eyebrow">
                <Truck size={14} /> Pan-India Logistics
              </span>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#FFFFFF' }}>
                Bulk Truckload & Commercial Distribution
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-300)', lineHeight: 1.6, flexGrow: 1 }}>
                From moisture-barrier kraft paper bags to 5-ply cartons and bulk PP sacks, our distribution network ensures prompt dispatch by road transport to restaurants, warehouses, and industrial plants across all Indian states.
              </p>
              <div style={{ marginTop: '1.25rem' }}>
                <Link to="/packaging-export" className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                  Explore Packaging & Delivery Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: GALLERY PREVIEW */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', marginBottom: '2.5rem' }}>
            <div>
              <span className="section-title-eyebrow">
                <Sparkles size={14} /> Facility & Operations
              </span>
              <h2>Factory & Production Gallery</h2>
              <p className="section-subtitle">A visual record of our kilns, raw timber sorting, laboratory tests, and container dispatch.</p>
            </div>
            <Link to="/gallery" className="btn btn-secondary btn-sm">
              View All Photos ({GALLERY_DATA.length}) &rarr;
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem'
          }}>
            {GALLERY_DATA.slice(0, 4).map(item => (
              <div 
                key={item.id}
                onClick={() => setSelectedLightboxImg({ src: item.image, alt: item.title, caption: item.caption })}
                style={{
                  position: 'relative',
                  paddingTop: '75%',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid var(--color-carbon-700)',
                  backgroundColor: 'var(--color-carbon-850)'
                }}
                className="gallery-thumb-card"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-normal)'
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 12, 14, 0.9) 10%, transparent 60%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1rem'
                }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase' }}>
                      {item.categoryLabel}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 600 }}>
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: RESOURCES & FAQ PREVIEW */}
      <section className="section section-darker">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem' }}>
            
            {/* FAQ Accordion Side */}
            <div>
              <span className="section-title-eyebrow">
                Frequently Answered
              </span>
              <h2 style={{ marginBottom: '1.5rem' }}>B2B Procurement FAQs</h2>
              <div className="accordion">
                {FAQ_DATA.slice(0, 4).map(faq => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div key={faq.id} className={`accordion-item ${isOpen ? 'active' : ''}`}>
                      <button
                        type="button"
                        onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                        className="accordion-header"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown size={18} className="accordion-icon" />
                      </button>
                      {isOpen && (
                        <div className="accordion-body">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/faq" style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                  View All FAQs & Buyer Policies &rarr;
                </Link>
              </div>
            </div>

            {/* Articles / Insights Side */}
            <div>
              <span className="section-title-eyebrow">
                Technical Knowledge
              </span>
              <h2 style={{ marginBottom: '1.5rem' }}>Industry Insights</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {ARTICLES_DATA.map(article => (
                  <article 
                    key={article.id}
                    className="b2b-card"
                    style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}
                  >
                    <img 
                      src={article.image} 
                      alt="" 
                      style={{ width: '85px', height: '85px', borderRadius: 'var(--radius-sm)', objectFit: 'cover', flexShrink: 0 }}
                    />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase' }}>
                        {article.category}
                      </div>
                      <h4 style={{ fontSize: '1rem', color: '#FFFFFF', margin: '0.25rem 0' }}>
                        <Link to={`/resources/${article.slug}`} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                          {article.title}
                        </Link>
                      </h4>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-400)' }}>
                        {article.publishDate} &bull; {article.readTime}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/resources" style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                  Read More Technical Guides &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 12: FINAL CALL TO ACTION */}
      <section 
        className="section"
        style={{
          backgroundColor: 'var(--color-carbon-900)',
          borderTop: '1px solid var(--color-carbon-700)',
          borderBottom: '1px solid var(--color-carbon-700)',
          position: 'relative'
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '760px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-accent-subtle)',
            border: '1px solid var(--color-accent-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto'
          }}>
            <Flame size={28} color="var(--color-accent)" />
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', marginBottom: '1rem' }}>
            Ready to Secure Your Commercial Charcoal Supply Across India?
          </h2>

          <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-300)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Speak directly with our Indian commercial distribution team for bulk truckload pricing, sample evaluation bags, or scheduled commercial supply contracts anywhere in India.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/request-quote" className="btn btn-primary btn-lg">
              <FileText size={18} /> Request Bulk Quotation
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Contact Sales Desk
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox for Gallery Photos */}
      {selectedLightboxImg && (
        <Lightbox 
          isOpen={!!selectedLightboxImg}
          imageSrc={selectedLightboxImg.src}
          imageAlt={selectedLightboxImg.alt}
          caption={selectedLightboxImg.caption}
          onClose={() => setSelectedLightboxImg(null)}
        />
      )}

      {/* In-page styling */}
      <style>{`
        .gallery-thumb-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
};
