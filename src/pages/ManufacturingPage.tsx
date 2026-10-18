import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { MANUFACTURING_STEPS } from '../data/manufacturingSteps';
import { 
  Flame, 
  ShieldCheck, 
  ThermometerSnowflake, 
  TreeDeciduous, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Factory
} from 'lucide-react';

export const ManufacturingPage: React.FC = () => {
  return (
    <div className="manufacturing-page">
      {/* Page Header */}
      <section style={{ 
        backgroundColor: 'var(--color-carbon-900)', 
        borderBottom: '1px solid var(--color-carbon-700)',
        padding: '3rem 0 2.5rem' 
      }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Manufacturing Capabilities' }]} />

          <div style={{ maxWidth: '850px', marginTop: '1.25rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="badge badge-accent">Industrial Kiln Pyrolysis</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>• FSC® Wood Concessions</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
              Precision Carbonization & Kiln Infrastructure
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-300)', lineHeight: 1.6 }}>
              Our manufacturing methodology blends centuries-old thermal mastery with modern laboratory quality control. From slow 22-day brick dome kiln firings to automated de-dusting screening lines, every ton is engineered for high caloric density, low ash, and zero maritime self-heating risk.
            </p>
          </div>
        </div>
      </section>

      {/* Industrial Facilities Overview Metrics */}
      <section style={{ 
        backgroundColor: 'var(--color-carbon-850)', 
        borderBottom: '1px solid var(--color-carbon-700)',
        padding: '2.5rem 0' 
      }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '1.5rem' 
          }}>
            <div style={{ backgroundColor: 'var(--color-carbon-900)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-carbon-700)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}><Factory size={24} /></div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>50+ Kilns</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', marginTop: '0.25rem' }}>Brick Dome & Tunnel Units</div>
            </div>

            <div style={{ backgroundColor: 'var(--color-carbon-900)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-carbon-700)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}><Clock size={24} /></div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>18–22 Days</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', marginTop: '0.25rem' }}>Controlled Carbonization Cycle</div>
            </div>

            <div style={{ backgroundColor: 'var(--color-carbon-900)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-carbon-700)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}><Flame size={24} /></div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>Up to 1,200°C</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', marginTop: '0.25rem' }}>High-Temp Pyrolysis Threshold</div>
            </div>

            <div style={{ backgroundColor: 'var(--color-carbon-900)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-carbon-700)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}><ShieldCheck size={24} /></div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>UN 1361</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', marginTop: '0.25rem' }}>Class 4.2 Non-Self-Heating</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Stage Process Walkthrough */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--color-carbon-950)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
            <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>Step-by-Step Operations</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', color: '#FFFFFF', marginBottom: '0.75rem' }}>
              The 6 Stages of Industrial Pyrolysis & Export
            </h2>
            <p style={{ color: 'var(--color-gray-400)', fontSize: '1rem', lineHeight: 1.6 }}>
              From initial raw timber intake to container loading, every step follows documented standard operating procedures (SOPs) to ensure consistent fixed carbon, high calorific heat, and flawless maritime safety.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {MANUFACTURING_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div 
                  key={step.stepNumber}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    alignItems: 'center',
                    backgroundColor: 'var(--color-carbon-900)',
                    border: '1px solid var(--color-carbon-700)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    padding: '2.5rem'
                  }}
                >
                  {/* Text details */}
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '1.25rem', 
                        fontWeight: 800, 
                        color: 'var(--color-accent)', 
                        backgroundColor: 'var(--color-carbon-800)',
                        border: '1px solid var(--color-carbon-700)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)'
                      }}>
                        {step.stepNumber}
                      </span>
                      <span className="badge badge-dark">{step.duration}</span>
                    </div>

                    <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                      {step.title}
                    </h3>

                    <p style={{ color: 'var(--color-accent-light)', fontWeight: 500, fontSize: '0.95rem', marginBottom: '1rem' }}>
                      {step.shortDesc}
                    </p>

                    <p style={{ color: 'var(--color-gray-300)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                      {step.detailedDesc}
                    </p>

                    <div style={{
                      backgroundColor: 'var(--color-carbon-800)',
                      border: '1px solid var(--color-carbon-700)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                      <div style={{ fontSize: '0.85rem' }}>
                        <span style={{ color: 'var(--color-gray-400)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                          Quality Verification Standard
                        </span>
                        <strong style={{ color: '#FFFFFF' }}>{step.qualityStandard}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Image showcase */}
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div style={{
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      aspectRatio: '16/10',
                      border: '1px solid var(--color-carbon-700)'
                    }}>
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainable Forestry & Emission Control */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--color-carbon-900)', borderTop: '1px solid var(--color-carbon-700)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>Environmental Stewardship</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', color: '#FFFFFF', marginBottom: '1rem' }}>
                Responsible Sourcing & Zero Deforestation Policy
              </h2>
              <p style={{ color: 'var(--color-gray-300)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                We believe premium charcoal export must coexist with sustainable resource management. We never purchase timber from unauthorized logging or protected conservation reserves.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <TreeDeciduous size={20} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.95rem' }}>FSC® Chain-of-Custody Compliant</strong>
                    <span style={{ color: 'var(--color-gray-400)', fontSize: '0.875rem' }}>Documented timber provenance and legal cutting permits for all incoming raw hardwood.</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <ThermometerSnowflake size={20} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.95rem' }}>Smoke Condensation & Bio-Oil Recovery</strong>
                    <span style={{ color: 'var(--color-gray-400)', fontSize: '0.875rem' }}>Kiln chimneys incorporate condensation capture pipes that harvest wood vinegar for agriculture, reducing atmospheric particulate emissions.</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to="/quality" className="btn btn-primary">
                  Review Quality Standards <ArrowRight size={16} />
                </Link>
                <Link to="/request-quote" className="btn btn-secondary">
                  Discuss Factory Supply
                </Link>
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--color-carbon-800)',
              border: '1px solid var(--color-carbon-700)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Factory size={20} style={{ color: 'var(--color-accent)' }} /> Production Capacity Summary
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-carbon-700)' }}>
                  <span style={{ color: 'var(--color-gray-400)' }}>Hardwood Lump Charcoal:</span>
                  <strong style={{ color: '#FFFFFF' }}>450 MT / Month</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-carbon-700)' }}>
                  <span style={{ color: 'var(--color-gray-400)' }}>Extruded Sawdust Briquettes:</span>
                  <strong style={{ color: '#FFFFFF' }}>350 MT / Month</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-carbon-700)' }}>
                  <span style={{ color: 'var(--color-gray-400)' }}>Coconut Shell Shisha Cubes:</span>
                  <strong style={{ color: '#FFFFFF' }}>150 MT / Month</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-carbon-700)' }}>
                  <span style={{ color: 'var(--color-gray-400)' }}>White Charcoal (Binchotan):</span>
                  <strong style={{ color: '#FFFFFF' }}>60 MT / Month (Allocation)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--color-gray-400)' }}>Total Monthly Export Capacity:</span>
                  <strong style={{ color: 'var(--color-accent)', fontWeight: 800 }}>Approx. 1,000+ Metric Tons</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingPage;
