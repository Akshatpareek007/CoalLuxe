import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/productsData';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
