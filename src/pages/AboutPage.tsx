import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { brandConfig } from '../config/brandConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  ShieldCheck, 
  FileDown, 
  Award, 
  Flame, 
  ChevronDown
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<number | null>(0);

  const milestones = [
    {
      title: 'Foundation & Order-Driven Sourcing',
      period: 'Initial Phase',
      description: 'Founded with a clear mandate: bridge the gap between abundant sustainable timber forestry and the rigorous technical demands of international buyers. Rather than relying on speculative spot-market stocks, our supply chain was designed as order-driven, tailoring every batch to buyer specifications.'
    },
    {
      title: 'Partner Kiln Network & Regional Expansion',
      period: 'Growth Phase',
      description: 'Built a verified network of 20+ partner production facilities and masonry dome kilns. Each facility is vetted for raw wood legality, controlled carbonization standards, and moisture-controlled warehouse storage, allowing us to supply across Mangrove, Acacia, Khaya, and coconut biomass.'
    },
    {
      title: 'International Compliance & Dangerous Goods Certification',
      period: 'Global Integration',
      description: 'Achieved full international compliance under UN 1361 Class 4.2 for ocean container transit. Sourced independently verified testing reports from accredited testing agencies (SGS / Vilas) and implemented 16-section multilingual MSDS documentation in English, Japanese, and Arabic.'
    },
    {
      title: 'Long-Term Strategic Alliances & Supply Stability',
      period: 'Current & Future Growth',
      description: 'Serving international distributors, commercial restaurant franchises, and importers with long-term quarterly and annual fixed-price supply contracts. Expanding automated packaging lines and real-time container loading verification.'
    }
  ];

  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <div className="container">
        
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center', marginBottom: '5rem' }}>
          <div>
            <span className="section-title-eyebrow">
              <Award size={14} /> Corporate Profile
            </span>
            <h1 style={{ marginBottom: '1.5rem', lineHeight: 1.15 }}>
              International Charcoal Manufacturing & Supply Chain Partner
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-gray-200)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              <strong>{brandConfig.companyName}</strong> operates as an integrated B2B charcoal producer and international trade aggregator, dedicated exclusively to the commercial fuels sector.
            </p>
            <p style={{ color: 'var(--color-gray-400)', lineHeight: 1.6, marginBottom: '2rem' }}>
              We combine traditional kiln carbonization mastery with modern supply chain precision. From legal forestry harvesting to temperature-monitored warehouse stabilization, our output provides international buyers with guaranteed fixed carbon content, reliable combustion times, and seamless Dangerous Goods ocean logistics.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/request-quote" className="btn btn-primary">
                Discuss Supply Requirements
              </Link>
              <Link to="/products" className="btn btn-secondary">
                View Product Specifications
              </Link>
            </div>
          </div>

          <div>
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--color-carbon-700)',
              boxShadow: 'var(--shadow-xl)'
            }}>
              <img 
                src="/images/factory_kilns.jpg" 
                alt="Production Kilns Facility"
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                insetInline: 0,
                background: 'linear-gradient(to top, rgba(11, 12, 14, 0.95), transparent)',
                padding: '1.5rem',
                color: '#FFFFFF'
              }}>
                <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>Certified Production Capacity</div>
                <div style={{ color: 'var(--color-gray-400)', fontSize: '0.85rem' }}>{brandConfig.productionCapacity}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones & Evolution Accordion */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-header text-center">
            <span className="section-title-eyebrow">
              <Flame size={14} /> Evolution & Operational Foundation
            </span>
            <h2>Milestones & Supply Chain Maturity</h2>
            <p className="section-subtitle">
              How our order-driven sourcing model evolved into an international export operation.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div className="accordion">
              {milestones.map((milestone, idx) => {
                const isOpen = activeMilestone === idx;
                return (
                  <div key={idx} className={`accordion-item ${isOpen ? 'active' : ''}`}>
                    <button
                      type="button"
                      className="accordion-header"
                      onClick={() => setActiveMilestone(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--color-accent-light)',
                          backgroundColor: 'var(--color-carbon-800)',
                          padding: '2px 8px',
                          borderRadius: '4px'
                        }}>
                          {milestone.period}
                        </span>
                        <span style={{ fontSize: '1.05rem' }}>{milestone.title}</span>
                      </div>
                      <ChevronDown size={18} className="accordion-icon" />
                    </button>
                    {isOpen && (
                      <div className="accordion-body">
                        {milestone.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance & Documentation Section */}
        <section style={{
          backgroundColor: 'var(--color-carbon-900)',
          border: '1px solid var(--color-carbon-700)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem 2.5rem',
          marginBottom: '5rem'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <span className="section-title-eyebrow">
              <ShieldCheck size={14} /> Global Trade Compliance
            </span>
            <h2>International Documentation & Safety Standards</h2>
            <p style={{ color: 'var(--color-gray-300)', marginTop: '0.75rem' }}>
              We provide comprehensive, certified export dossiers for every commercial container load, ensuring 100% acceptance at customs clearance hubs worldwide.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}>
            {brandConfig.certificationsList.map((cert, index) => (
              <div key={index} className="b2b-card" style={{ padding: '1.5rem', backgroundColor: 'var(--color-carbon-850)' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-accent-subtle)',
                  border: '1px solid var(--color-accent-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <ShieldCheck size={20} color="var(--color-accent)" />
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '0.35rem' }}>{cert.title}</h4>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-accent-light)', fontWeight: 600, marginBottom: '0.65rem' }}>
                  {cert.issuer}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', lineHeight: 1.5, margin: 0 }}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: 'var(--color-carbon-800)',
            border: '1px dashed var(--color-carbon-600)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}>
            <div>
              <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1rem' }}>Material Safety Data Sheet (MSDS) Available</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)' }}>GHS 16-section standard in English, Japanese, and Arabic</div>
            </div>
            <Link to="/request-quote?product=Documentation%20Request" className="btn btn-primary btn-sm">
              <FileDown size={16} /> Request Official MSDS Pack
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};
