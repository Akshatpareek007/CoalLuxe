import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { QuoteForm } from '../components/QuoteForm';
import { BRAND_CONFIG } from '../config/brandConfig';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Factory, 
  ShieldCheck 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello CoalLuxe Commercial Desk, I would like to inquire about container export pricing.')}`;

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section style={{ 
        backgroundColor: 'var(--color-carbon-900)', 
        borderBottom: '1px solid var(--color-carbon-700)',
        padding: '3rem 0 2.5rem' 
      }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact & Commercial Enquiries' }]} />

          <div style={{ maxWidth: '850px', marginTop: '1.25rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="badge badge-accent">Export Sales & Logistics Desk</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>• Direct Factory Communication</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
              Get in Touch with Our Commercial Export Team
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-300)', lineHeight: 1.6 }}>
              Whether you are an international importer sourcing full container loads (FCL), a restaurant chain seeking customized briquette specs, or a distributor requesting private label quotes, our trade managers are ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info Cards & Form */}
      <section style={{ padding: '4rem 0 5rem', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Left: Contact Information Cards */}
            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                Corporate & Facility Directory
              </h2>

              {/* Head Office Card */}
              <div style={{
                backgroundColor: 'var(--color-carbon-900)',
                border: '1px solid var(--color-carbon-700)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
                  <Building2 size={20} />
                  <span style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Commercial Export Office
                  </span>
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  {BRAND_CONFIG.companyName} Headquarters
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-gray-300)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <MapPin size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{BRAND_CONFIG.companyAddress}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    <a href={`mailto:${BRAND_CONFIG.companyEmail}`} style={{ color: 'var(--color-accent-light)', textDecoration: 'none' }}>
                      {BRAND_CONFIG.companyEmail}
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    <a href={`tel:${(BRAND_CONFIG.companyPhone || '').replace(/[^0-9+]/g, '')}`} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                      {BRAND_CONFIG.companyPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Manufacturing Facility Card */}
              <div style={{
                backgroundColor: 'var(--color-carbon-900)',
                border: '1px solid var(--color-carbon-700)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
                  <Factory size={20} />
                  <span style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Kiln & Processing Complex
                  </span>
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  Industrial Pyrolysis & Stuffing Facility
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-gray-300)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <MapPin size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{BRAND_CONFIG.factoryAddress}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Clock size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    <span>Operations: Mon – Sat, 08:00 – 18:00 (UTC+7)</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div style={{
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <MessageCircle size={24} style={{ color: '#22c55e' }} />
                  <h4 style={{ color: '#FFFFFF', margin: 0, fontSize: '1.1rem' }}>Instant WhatsApp Trade Desk</h4>
                </div>
                <p style={{ color: 'var(--color-gray-300)', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                  For urgent container booking confirmation, real-time kiln video verification, or instant proforma quotes:
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    backgroundColor: '#22c55e',
                    color: '#000000',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    width: '100%',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <MessageCircle size={16} /> Chat on WhatsApp ({BRAND_CONFIG.whatsappNumber})
                </a>
              </div>

              {/* Export Compliance Tag */}
              <div style={{
                backgroundColor: 'var(--color-carbon-900)',
                border: '1px solid var(--color-carbon-700)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <ShieldCheck size={24} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-300)', lineHeight: 1.4 }}>
                  <strong style={{ color: '#FFFFFF', display: 'block' }}>Verified B2B Supplier</strong>
                  Incoterms 2020 (FOB, CIF, CFR) supported with full Dangerous Goods UN 1361 certification.
                </div>
              </div>
            </div>

            {/* Right: Comprehensive Inquiry & RFQ Form */}
            <div>
              <div style={{
                backgroundColor: 'var(--color-carbon-900)',
                border: '1px solid var(--color-carbon-700)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem 2rem'
              }}>
                <div style={{ marginBottom: '1.75rem' }}>
                  <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>Direct Dispatch</span>
                  <h2 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    Send Commercial Enquiry
                  </h2>
                  <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Fill out the fields below. Our international export director will evaluate your inquiry and provide a detailed proforma quotation or response within 12 business hours.
                  </p>
                </div>

                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
