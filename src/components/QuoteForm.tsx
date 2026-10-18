import React, { useState } from 'react';
import { brandConfig } from '../config/brandConfig';
import { PRODUCTS_DATA } from '../data/productsData';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface QuoteFormProps {
  initialProduct?: string;
  preselectedProduct?: string;
  sourcePage?: string;
}

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  quantity: string;
  packaging: string;
  incoterm: string;
  destinationPort: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  country?: string;
  product?: string;
  quantity?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ 
  initialProduct = '', 
  preselectedProduct, 
  sourcePage = 'General' 
}) => {
  const defaultProd = preselectedProduct || initialProduct || '';
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    product: defaultProd,
    quantity: 'Full Truckload (FTL - ~10–16 MT)',
    packaging: '25 kg Heavy-Duty PP Sacks',
    incoterm: 'Doorstep Delivery (All Indian States)',
    destinationPort: '',
    notes: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full contact name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company / business legal entity is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid corporate email format';
    }

    if (!formData.phone.trim()) newErrors.phone = 'Phone or WhatsApp contact with country code is required';
    if (!formData.country.trim()) newErrors.country = 'Destination country is required';
    if (!formData.product) newErrors.product = 'Please select a charcoal product of interest';
    if (!formData.quantity.trim()) newErrors.quantity = 'Estimated volume is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (brandConfig.formEndpoint) {
        // Live production API integration
        const response = await fetch(brandConfig.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, sourcePage, submittedAt: new Date().toISOString() })
        });
        if (!response.ok) throw new Error('Server returned an error status.');
      } else {
        // Simulated B2B enquiry queue for demo environment
        await new Promise(resolve => setTimeout(resolve, 1200));

        // Save locally to localStorage so it can be inspected
        const existingQuotes = JSON.parse(localStorage.getItem('coalluxe_demo_quotes') || '[]');
        const refId = `INQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
        existingQuotes.push({ refId, ...formData, sourcePage, timestamp: new Date().toISOString() });
        localStorage.setItem('coalluxe_demo_quotes', JSON.stringify(existingQuotes));
        setSubmittedReference(refId);
      }
    } catch (err: any) {
      setSubmissionError(err?.message || 'Failed to submit enquiry. Please contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedReference) {
    return (
      <div 
        className="b2b-card text-center" 
        style={{ 
          padding: '3rem 2rem', 
          borderColor: 'var(--color-success)',
          backgroundColor: 'rgba(16, 185, 129, 0.04)' 
        }}
        role="alert"
      >
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-success-subtle)',
          border: '1px solid var(--color-success)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem auto'
        }}>
          <CheckCircle size={32} color="var(--color-success)" />
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#FFFFFF' }}>
          Quotation Request Logged
        </h3>

        <p style={{ color: 'var(--color-gray-300)', maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
          Thank you, <strong>{formData.fullName}</strong>. Your container-load enquiry for <strong>{formData.product}</strong> has been assigned reference ID:
        </p>

        <div style={{
          display: 'inline-block',
          backgroundColor: 'var(--color-carbon-900)',
          border: '1px dashed var(--color-accent)',
          padding: '0.65rem 1.5rem',
          borderRadius: 'var(--radius-sm)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: '1.25rem',
          color: 'var(--color-accent-light)',
          marginBottom: '1.75rem'
        }}>
          {submittedReference}
        </div>

        <div style={{
          backgroundColor: 'var(--color-carbon-850)',
          border: '1px solid var(--color-carbon-700)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem',
          maxWidth: '540px',
          margin: '0 auto 2rem auto',
          textAlign: 'left',
          fontSize: '0.85rem'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', color: 'var(--color-gray-300)' }}>
            <div><strong>Company:</strong> {formData.companyName}</div>
            <div><strong>Quantity:</strong> {formData.quantity}</div>
            <div><strong>Incoterm:</strong> {formData.incoterm.split(' ')[0]}</div>
            <div><strong>Port:</strong> {formData.destinationPort || 'Not specified'}</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            type="button"
            onClick={() => {
              setSubmittedReference(null);
              setFormData({
                fullName: '',
                companyName: '',
                email: '',
                phone: '',
                country: '',
                product: '',
                quantity: '1 x 40ft High Cube Container (~22 MT)',
                packaging: '10 kg Export Corrugated Cartons',
                incoterm: 'CIF (Cost, Insurance & Freight to Port)',
                destinationPort: '',
                notes: ''
              });
            }}
            className="btn btn-secondary btn-sm"
          >
            Submit Another Enquiry
          </button>
          <a 
            href={`https://wa.me/${brandConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello, following up on Quote Ref: ${submittedReference} for ${formData.product}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Fast-Track on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="b2b-card" style={{ borderColor: 'var(--color-carbon-700)' }}>
      <div style={{ marginBottom: '1.75rem', borderBottom: '1px solid var(--color-carbon-700)', paddingBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.35rem' }}>
          Request a Bulk Commercial Quotation
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-400)', margin: 0 }}>
          Specify your volume, packaging preferences, and delivery city in India. Commercial sales desk responds within 24 hours.
        </p>
      </div>

      {submissionError && (
        <div style={{
          backgroundColor: 'var(--color-danger-subtle)',
          border: '1px solid var(--color-danger)',
          borderRadius: 'var(--radius-sm)',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#FFFFFF',
          fontSize: '0.9rem',
          marginBottom: '1.5rem'
        }}>
          <AlertCircle size={18} color="var(--color-danger)" style={{ flexShrink: 0 }} />
          <span>{submissionError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Row 1: Contact Name & Company */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="fullName">
              Full Name <span className="required">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              className="form-input"
              placeholder="e.g. Michael Vance"
              value={formData.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
              aria-invalid={!!errors.fullName}
              disabled={isSubmitting}
            />
            {errors.fullName && <div className="form-error">{errors.fullName}</div>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="companyName">
              Company / Entity Name <span className="required">*</span>
            </label>
            <input
              id="companyName"
              type="text"
              className="form-input"
              placeholder="e.g. Gulf Trading LLC"
              value={formData.companyName}
              onChange={e => setFormData({ ...formData, companyName: e.target.value })}
              aria-invalid={!!errors.companyName}
              disabled={isSubmitting}
            />
            {errors.companyName && <div className="form-error">{errors.companyName}</div>}
          </div>
        </div>

        {/* Row 2: Corporate Email & Phone/WhatsApp */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Corporate Email <span className="required">*</span>
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="procurement@company.com"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              aria-invalid={!!errors.email}
              disabled={isSubmitting}
            />
            {errors.email && <div className="form-error">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Phone / WhatsApp (with country code) <span className="required">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              className="form-input"
              placeholder="+971 50 123 4567"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              aria-invalid={!!errors.phone}
              disabled={isSubmitting}
            />
            {errors.phone && <div className="form-error">{errors.phone}</div>}
          </div>
        </div>

        {/* Row 3: Product of Interest & Destination Country */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="product">
              Charcoal Variety <span className="required">*</span>
            </label>
            <select
              id="product"
              className="form-select"
              value={formData.product}
              onChange={e => setFormData({ ...formData, product: e.target.value })}
              aria-invalid={!!errors.product}
              disabled={isSubmitting}
            >
              <option value="">Select Charcoal Grade...</option>
              {PRODUCTS_DATA.map(p => (
                <option key={p.id} value={p.name}>
                  {p.name} ({p.categoryLabel})
                </option>
              ))}
              <option value="Multiple Products / Mixed Container">Mixed Products (Combined Container)</option>
              <option value="Custom Sourcing / OEM Advice">Consultation / Custom Wood Species</option>
            </select>
            {errors.product && <div className="form-error">{errors.product}</div>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="country">
              Delivery State / City (India) <span className="required">*</span>
            </label>
            <input
              id="country"
              type="text"
              className="form-input"
              placeholder="e.g. Maharashtra (Mumbai/Pune), Delhi NCR, Gujarat, Karnataka..."
              value={formData.country}
              onChange={e => setFormData({ ...formData, country: e.target.value })}
              aria-invalid={!!errors.country}
              disabled={isSubmitting}
            />
            {errors.country && <div className="form-error">{errors.country}</div>}
          </div>
        </div>

        {/* Row 4: Volume & Packaging */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="quantity">
              Estimated Order Quantity <span className="required">*</span>
            </label>
            <select
              id="quantity"
              className="form-select"
              value={formData.quantity}
              onChange={e => setFormData({ ...formData, quantity: e.target.value })}
              disabled={isSubmitting}
            >
              <option value="500 kg - 1 Ton (Trial Order)">500 kg – 1 Ton (Trial / Sample Order)</option>
              <option value="2 - 5 Tons (Commercial Supply)">2 – 5 Tons (Commercial Supply)</option>
              <option value="Full Truckload (FTL - ~10–16 MT)">10 – 16 Tons (Full Truckload / FTL)</option>
              <option value="20+ Tons Monthly Contract">20+ Tons / Month (Regular Commercial Supply)</option>
              <option value="Retail Pack Distribution">Retail Pack Distribution / FMCG Supply</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="packaging">
              Preferred Packaging Format
            </label>
            <select
              id="packaging"
              className="form-select"
              value={formData.packaging}
              onChange={e => setFormData({ ...formData, packaging: e.target.value })}
              disabled={isSubmitting}
            >
              <option value="10 kg Export Corrugated Cartons">10 kg Heavy-Duty Export Cartons</option>
              <option value="15 kg Export Corrugated Cartons">15 kg Heavy-Duty Export Cartons</option>
              <option value="20 kg Reinforced PP Bags">20 kg Woven Polypropylene (PP) Sacks</option>
              <option value="Custom OEM Brand Printed Cartons">Custom Private-Label Printed Boxes (OEM)</option>
              <option value="Palletized & Shrink Wrapped">Palletized with Corner Protectors</option>
            </select>
          </div>
        </div>

        {/* Row 5: Delivery Terms & Destination City */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="incoterm">
              Preferred Delivery Terms
            </label>
            <select
              id="incoterm"
              className="form-select"
              value={formData.incoterm}
              onChange={e => setFormData({ ...formData, incoterm: e.target.value })}
              disabled={isSubmitting}
            >
              <option value="Doorstep Delivery (All Indian States)">Doorstep FTL Delivery (All Indian States)</option>
              <option value="Ex-Factory / Yard Gate Pickup">Ex-Factory / Yard Gate Pickup</option>
              <option value="FOR (Free On Rail / Road Transport)">FOR (Free On Rail / Road Transport)</option>
              <option value="FOB / Port Delivery">FOB / Port Delivery</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="destinationPort">
              Destination City / Pincode
            </label>
            <input
              id="destinationPort"
              type="text"
              className="form-input"
              placeholder="e.g. Pune, Bhiwandi, Surat, Gurugram, Bengaluru..."
              value={formData.destinationPort}
              onChange={e => setFormData({ ...formData, destinationPort: e.target.value })}
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Row 6: Additional Technical Specs / Notes */}
        <div className="form-group">
          <label className="form-label" htmlFor="notes">
            Additional Specifications & Target Timelines
          </label>
          <textarea
            id="notes"
            className="form-textarea"
            placeholder="Specify any strict requirements: target ash %, lump size range, moisture thresholds, private label artwork status, or target shipping window..."
            value={formData.notes}
            onChange={e => setFormData({ ...formData, notes: e.target.value })}
            disabled={isSubmitting}
          />
        </div>

        {/* Submit Action */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>
            🔒 Commercial confidentiality protected. We do not share inquiries.
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={isSubmitting}
            style={{ minWidth: '220px', justifyContent: 'center' }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="spin-animation" /> Processing Enquiry...
              </>
            ) : (
              <>
                <Send size={18} /> Send Quotation Request
              </>
            )}
          </button>
        </div>
      </form>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-animation {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};
