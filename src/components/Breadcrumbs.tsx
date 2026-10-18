import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
      <ol style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.45rem',
        listStyle: 'none',
        fontSize: '0.85rem',
        color: 'var(--color-gray-400)'
      }}>
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'var(--color-gray-400)', display: 'flex', alignItems: 'center', gap: '3px' }}>
            <Home size={13} />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <ChevronRight size={13} color="var(--color-gray-600)" />
              {isLast || !item.path ? (
                <span aria-current="page" style={{ color: 'var(--color-accent-light)', fontWeight: 600 }}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} style={{ color: 'var(--color-gray-400)' }}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
