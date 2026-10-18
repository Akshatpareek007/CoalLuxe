import React, { useState, useMemo } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { FAQ_DATA } from '../data/faqData';
import { ChevronDown, Search, HelpCircle, MessageSquare, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-oem-packaging', 'faq-dangerous-goods-dg']);

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const catMatch = selectedCategory === 'all' || item.category === selectedCategory;
      if (!catMatch) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
    });
  }, [selectedCategory, searchQuery]);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'ordering', label: 'Ordering & Capacity' },
    { id: 'packaging', label: 'Packaging & Private Label' },
    { id: 'shipping', label: 'Shipping & Compliance' },
    { id: 'quality', label: 'Quality & Testing' }
  ];

  return (
    <div className="faq-page">
      {/* Page Header */}
      <section style={{ 
        backgroundColor: 'var(--color-carbon-900)', 
        borderBottom: '1px solid var(--color-carbon-700)',
        padding: '3rem 0 2.5rem' 
      }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

          <div style={{ maxWidth: '850px', marginTop: '1.25rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="badge badge-accent">B2B Procurement Knowledge Base</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>• Export & Compliance Answers</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
              Frequently Asked Questions & B2B Policies
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-300)', lineHeight: 1.6 }}>
              Find comprehensive answers regarding container MOQ, private label plate printing, Dangerous Goods UN 1361 ocean transport, Incoterms, and payment security.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Accordions */}
      <section style={{ padding: '3.5rem 0 5rem', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', marginBottom: '2rem' }}>
            <Search 
              size={18} 
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-gray-400)' }} 
            />
            <input
              type="text"
              placeholder="Search by keyword (e.g., MOQ, packaging, DG 4.2, moisture, samples)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 2.5rem 0.85rem 2.75rem',
                backgroundColor: 'var(--color-carbon-900)',
                border: '1px solid var(--color-carbon-700)',
                borderRadius: 'var(--radius-md)',
                color: '#FFFFFF',
                fontSize: '1rem'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-gray-400)',
                  cursor: 'pointer'
                }}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div style={{ 
            display: 'flex', 
            gap: '0.5rem', 
            flexWrap: 'wrap', 
            marginBottom: '2.5rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid var(--color-carbon-800)' 
          }}>
            {categories.map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.5rem 1.15rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-carbon-850)',
                    color: isActive ? '#000000' : 'var(--color-gray-300)',
                    border: isActive ? '1px solid var(--color-accent)' : '1px solid var(--color-carbon-700)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Accordion List */}
          {filteredFAQs.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem' }}>
              {filteredFAQs.map(item => {
                const isOpen = openIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    style={{
                      backgroundColor: 'var(--color-carbon-900)',
                      border: '1px solid var(--color-carbon-700)',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      transition: 'border-color var(--transition-fast)'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={isOpen}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1.25rem 1.5rem',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        color: '#FFFFFF',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        gap: '1rem'
                      }}
                    >
                      <span>{item.question}</span>
                      <ChevronDown 
                        size={20} 
                        style={{
                          color: 'var(--color-accent)',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform var(--transition-fast)',
                          flexShrink: 0
                        }} 
                      />
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: '0 1.5rem 1.5rem',
                        color: 'var(--color-gray-300)',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        borderTop: '1px solid var(--color-carbon-800)',
                        paddingTop: '1rem'
                      }}>
                        <div style={{ marginBottom: '0.5rem' }}>
                          <span className="badge badge-dark" style={{ fontSize: '0.7rem' }}>
                            {item.categoryLabel}
                          </span>
                        </div>
                        <p style={{ margin: 0 }}>
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              backgroundColor: 'var(--color-carbon-900)',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--color-carbon-700)',
              marginBottom: '4rem'
            }}>
              <HelpCircle size={36} style={{ color: 'var(--color-gray-500)', marginBottom: '0.75rem' }} />
              <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '0.5rem' }}>No answers found</h3>
              <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                We couldn't locate an answer matching "{searchQuery}". Please reach out to our commercial team directly.
              </p>
              <button 
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="btn btn-primary"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* Contact Support Box */}
          <div style={{
            backgroundColor: 'var(--color-carbon-900)',
            border: '1px solid var(--color-carbon-700)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <div style={{ maxWidth: '550px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <MessageSquare size={18} style={{ color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: 700 }}>
                  Direct Procurement Assistance
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Need Custom Terms or Immediate Port Consultation?
              </h3>
              <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                Our export managers can verify shipping lane space, calculate estimated freight rates to your port, or arrange physical product testing samples.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-secondary">
                Contact Desk
              </Link>
              <Link to="/request-quote" className="btn btn-primary">
                Submit RFQ <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
