import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/productsData';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Extract key metrics from specs
  const fixedCarbon = product.specifications.find(s => s.parameter.toLowerCase().includes('carbon'))?.value || '78%+';
  const burnTime = product.specifications.find(s => s.parameter.toLowerCase().includes('burn'))?.value || '4-5 Hours';
  const calorific = product.specifications.find(s => s.parameter.toLowerCase().includes('calorific'))?.value || '>7,200 kcal/kg';

  return (
    <article className="product-card" aria-labelledby={`prod-title-${product.id}`}>
      {/* Image Container */}
      <div className="product-card-img-wrapper">
        <img 
          src={product.image} 
          alt={product.name} 
        />
        <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2 }}>
          <span className="badge badge-dark">
            {product.categoryLabel}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="product-card-body">
        <h3 id={`prod-title-${product.id}`} style={{ fontSize: '1.2rem', marginBottom: '0.45rem', lineHeight: 1.3 }}>
          <Link to={`/products/${product.slug}`} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
            {product.name}
          </Link>
        </h3>

        <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-400)', marginBottom: '1.25rem', lineHeight: 1.5, flexGrow: 1 }}>
          {product.tagline}
        </p>

        {/* Technical Highlights Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem',
          backgroundColor: 'var(--color-carbon-800)',
          border: '1px solid var(--color-carbon-700)',
          borderRadius: 'var(--radius-sm)',
          padding: '0.65rem 0.5rem',
          marginBottom: '1.25rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-gray-400)', fontWeight: 600 }}>Fixed Carbon</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-accent-light)', fontFamily: 'var(--font-mono)' }}>{fixedCarbon.split(' ')[0]}</div>
          </div>
          <div style={{ borderLeft: '1px solid var(--color-carbon-700)', borderRight: '1px solid var(--color-carbon-700)' }}>
            <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-gray-400)', fontWeight: 600 }}>Burn Time</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>{burnTime.split(' ')[0]}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-gray-400)', fontWeight: 600 }}>Calorific</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-success)', fontFamily: 'var(--font-mono)' }}>{calorific.replace(' kcal / kg', '').replace(' kcal/kg', '')}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          <Link 
            to={`/products/${product.slug}`} 
            className="btn btn-secondary btn-sm"
            style={{ fontSize: '0.825rem', padding: '0.6rem 0.5rem' }}
          >
            Full Specs
          </Link>
          <Link 
            to={`/request-quote?product=${encodeURIComponent(product.name)}`} 
            className="btn btn-primary btn-sm"
            style={{ fontSize: '0.825rem', padding: '0.6rem 0.5rem' }}
          >
            Get Quote <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
};
