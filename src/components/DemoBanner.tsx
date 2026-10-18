import React, { useState } from 'react';
import { brandConfig, BRAND_PLACEHOLDERS } from '../config/brandConfig';
import { AlertCircle, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DemoBanner: React.FC = () => {
  const [visible, setVisible] = useState(brandConfig.isDemoMode);

  if (!visible) return null;

  return (
    <aside className="demo-banner" aria-label="Demonstration Notice">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0 }}>
        <div className="demo-banner-content">
          <AlertCircle size={16} aria-hidden="true" style={{ flexShrink: 0, color: 'var(--color-accent)' }} />
          <span>
            <strong>DEMONSTRATION PROTOTYPE:</strong> Configured with standardized placeholders{' '}
            <code style={{ background: 'rgba(255,255,255,0.1)', padding: '1px 5px', borderRadius: '3px', fontSize: '0.75rem' }}>
              {BRAND_PLACEHOLDERS.COMPANY_NAME}
            </code>
            . Personalize in <code style={{ color: '#fff' }}>src/config/brandConfig.ts</code>.
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link
            to="/contact"
            style={{ fontSize: '0.75rem', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '2px', textDecoration: 'underline' }}
          >
            Client Checklist <ExternalLink size={12} />
          </Link>
          <button
            onClick={() => setVisible(false)}
            className="demo-banner-close"
            aria-label="Dismiss demonstration notice"
            title="Dismiss notice"
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </aside>
  );
};
