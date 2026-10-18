import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PRODUCTS_DATA } from '../data/productsData';
import Breadcrumbs from '../components/Breadcrumbs';
import { QuoteForm } from '../components/QuoteForm';
import { Lightbox } from '../components/Lightbox';
import { ProductCard } from '../components/ProductCard';
import { 
  ShieldCheck, 
  Package, 
  CheckCircle2, 
  Maximize2, 
  ArrowRight
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS_DATA.find(p => p.slug === slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const galleryImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const activeImage = galleryImages[activeImageIndex] || product.image;

  // Related products from same or other categories
  const relatedProducts = PRODUCTS_DATA.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="product-detail-page">
      {/* Top Breadcrumb & Title Section */}
      <section style={{ 
        backgroundColor: 'var(--color-carbon-900)', 
        borderBottom: '1px solid var(--color-carbon-700)',
        padding: '2.5rem 0 2rem' 
      }}>
        <div className="container">
          <Breadcrumbs 
            items={[
              { label: 'Products', path: '/products' },
              { label: product.name }
            ]} 
          />

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginTop: '1rem', marginBottom: '0.75rem' }}>
            <span className="badge badge-accent">{product.categoryLabel}</span>
            <span className="badge badge-dark">MOQ: {product.moq.split('(')[0]}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-success)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
              <CheckCircle2 size={14} /> Ready for Ocean Dispatch
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.2, marginBottom: '0.75rem' }}>
            {product.name}
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-accent-light)', maxWidth: '850px', lineHeight: 1.5 }}>
            {product.tagline}
          </p>
        </div>
      </section>

      {/* Main Details Grid: Gallery & Technical Highlights */}
      <section style={{ padding: '3.5rem 0 4rem', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '3rem',
            alignItems: 'start',
            marginBottom: '4rem'
          }}>
            {/* Left: Gallery & Image Previews */}
            <div>
              {/* Active Large Image */}
              <div 
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-carbon-900)',
                  border: '1px solid var(--color-carbon-700)',
                  aspectRatio: '4/3',
                  cursor: 'pointer'
                }}
                onClick={() => setLightboxOpen(true)}
              >
                <img 
                  src={activeImage} 
                  alt={product.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform var(--transition-normal)'
                  }}
                />
                <button
                  type="button"
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFFFFF',
                    border: '1px solid var(--color-carbon-600)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.4rem 0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    cursor: 'pointer'
                  }}
                  aria-label="Enlarge image"
                >
                  <Maximize2 size={14} /> Full View
                </button>
              </div>

              {/* Thumbnails row */}
              {galleryImages.length > 1 && (
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      style={{
                        width: '80px',
                        height: '60px',
                        borderRadius: 'var(--radius-sm)',
                        overflow: 'hidden',
                        padding: 0,
                        border: activeImageIndex === idx ? '2px solid var(--color-accent)' : '1px solid var(--color-carbon-700)',
                        backgroundColor: 'var(--color-carbon-900)',
                        cursor: 'pointer',
                        opacity: activeImageIndex === idx ? 1 : 0.6,
                        transition: 'opacity var(--transition-fast)'
                      }}
                      aria-label={`Select photo ${idx + 1}`}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} thumb ${idx + 1}`} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Commercial Highlights Box */}
              <div style={{
                marginTop: '1.75rem',
                backgroundColor: 'var(--color-carbon-900)',
                border: '1px solid var(--color-carbon-700)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem'
              }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-accent)' }} /> Export Guarantees & Terms
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ color: 'var(--color-gray-400)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Classification</span>
                    <strong style={{ color: '#FFFFFF' }}>UN 1361 Class 4.2 DG</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-gray-400)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Available Incoterms</span>
                    <strong style={{ color: '#FFFFFF' }}>FOB, CIF, CFR, EXW</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-gray-400)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Standard Lead Time</span>
                    <strong style={{ color: '#FFFFFF' }}>{product.leadTime}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-gray-400)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Documentation</span>
                    <strong style={{ color: '#FFFFFF' }}>COA, MSDS, Vanning, BL</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Product Narrative, Key Features & Quick Actions */}
            <div>
              <div style={{ marginBottom: '1.75rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#FFFFFF' }}>
                  Product Overview
                </h2>
                <p style={{ color: 'var(--color-gray-300)', lineHeight: 1.7, fontSize: '1rem' }}>
                  {product.description}
                </p>
              </div>

              {/* Key Features Bullet List */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.85rem', color: '#FFFFFF' }}>
                  Performance Characteristics
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {product.keyFeatures.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'var(--color-gray-200)', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications Badges */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#FFFFFF' }}>
                  Recommended Applications
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {product.applications.map((app, idx) => (
                    <span 
                      key={idx} 
                      style={{
                        backgroundColor: 'var(--color-carbon-800)',
                        border: '1px solid var(--color-carbon-700)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.4rem 0.85rem',
                        fontSize: '0.85rem',
                        color: 'var(--color-gray-200)'
                      }}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <a href="#quote-section" className="btn btn-primary btn-lg">
                  Request Container Quote <ArrowRight size={18} />
                </a>
                <Link to="/packaging-export" className="btn btn-secondary btn-lg">
                  <Package size={18} /> Packaging Specs
                </Link>
              </div>
            </div>
          </div>

          {/* Full Technical Specifications Table */}
          <div style={{ marginBottom: '4.5rem' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'baseline', 
              borderBottom: '2px solid var(--color-carbon-700)', 
              paddingBottom: '0.75rem',
              marginBottom: '1.5rem' 
            }}>
              <div>
                <h2 style={{ fontSize: '1.6rem', color: '#FFFFFF', margin: 0 }}>
                  Certified Technical Specifications
                </h2>
                <p style={{ color: 'var(--color-gray-400)', fontSize: '0.875rem', margin: '0.25rem 0 0' }}>
                  Laboratory verified metrics based on ASTM / ISO test standards.
                </p>
              </div>
              <span className="badge badge-accent">ASTM Tested</span>
            </div>

            <div style={{ overflowX: 'auto', backgroundColor: 'var(--color-carbon-900)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-carbon-700)' }}>
              <table className="table" style={{ margin: 0 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-carbon-800)' }}>
                    <th style={{ width: '40%' }}>Technical Parameter</th>
                    <th style={{ width: '60%' }}>Verified Export Standard / Value</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.map((spec, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--color-carbon-800)' }}>
                      <td style={{ fontWeight: 600, color: 'var(--color-gray-300)' }}>
                        {spec.parameter}
                      </td>
                      <td style={{ color: '#FFFFFF', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Export Packaging & Logistics Section */}
          <div style={{ marginBottom: '4.5rem' }}>
            <h2 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Standard Packaging & Stuffing Options
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {product.packagingOptions.map((pack, idx) => (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-carbon-900)',
                    border: '1px solid var(--color-carbon-700)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-carbon-800)',
                    border: '1px solid var(--color-carbon-600)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--color-accent)'
                  }}>
                    <Package size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gray-400)', fontWeight: 600, marginBottom: '0.2rem' }}>
                      Option {idx + 1}
                    </div>
                    <div style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.4 }}>
                      {pack}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded Quotation Workflow */}
          <div id="quote-section" style={{
            backgroundColor: 'var(--color-carbon-900)',
            border: '1px solid var(--color-carbon-700)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem 2rem',
            marginBottom: '5rem'
          }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>B2B Commercial RFQ</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                Request Official Quotation for {product.name}
              </h2>
              <p style={{ color: 'var(--color-gray-300)', fontSize: '1rem', lineHeight: 1.6 }}>
                Submit container requirements, destination seaport, and packaging specifications. Our commercial export department typically responds with formal CIF / FOB proforma quotation within 12 business hours.
              </p>
            </div>

            <div style={{ maxWidth: '850px', margin: '0 auto' }}>
              <QuoteForm preselectedProduct={product.name} />
            </div>
          </div>

          {/* Related Charcoal Products */}
          {relatedProducts.length > 0 && (
            <div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '1.75rem' 
              }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem', color: '#FFFFFF', margin: 0 }}>
                    Complementary Commercial Grades
                  </h2>
                  <p style={{ color: 'var(--color-gray-400)', fontSize: '0.875rem', margin: '0.25rem 0 0' }}>
                    Compare thermal outputs, sizes, and applications.
                  </p>
                </div>
                <Link to="/products" className="btn btn-secondary btn-sm">
                  View Full Catalogue <ArrowRight size={14} />
                </Link>
              </div>

              <div className="product-grid">
                {relatedProducts.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          initialIndex={activeImageIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductDetailPage;
