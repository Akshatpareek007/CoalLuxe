import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxProps {
  isOpen?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  caption?: string;
  images?: string[];
  initialIndex?: number;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ 
  isOpen = true, 
  imageSrc, 
  imageAlt = 'Product or facility preview', 
  caption,
  images,
  initialIndex = 0,
  onClose 
}) => {
  const imageList = images && images.length > 0 ? images : (imageSrc ? [imageSrc] : []);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && imageList.length > 1) {
        setCurrentIndex(prev => (prev + 1) % imageList.length);
      }
      if (e.key === 'ArrowLeft' && imageList.length > 1) {
        setCurrentIndex(prev => (prev - 1 + imageList.length) % imageList.length);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, imageList.length]);

  if (!isOpen || imageList.length === 0) return null;

  const currentImage = imageList[currentIndex] || imageSrc;

  return (
    <div 
      className="lightbox-overlay" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-label="Image Lightbox"
    >
      <div className="lightbox-content" onClick={e => e.stopPropagation()} style={{ position: 'relative' }}>
        <button 
          onClick={onClose} 
          className="lightbox-close" 
          aria-label="Close image viewer"
        >
          <X size={28} />
        </button>

        {imageList.length > 1 && (
          <>
            <button
              onClick={() => setCurrentIndex(prev => (prev - 1 + imageList.length) % imageList.length)}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid var(--color-carbon-600)',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => setCurrentIndex(prev => (prev + 1) % imageList.length)}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid var(--color-carbon-600)',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <img src={currentImage} alt={imageAlt} style={{ maxHeight: '80vh', objectFit: 'contain' }} />

        {caption && <div className="lightbox-caption">{caption}</div>}
        {imageList.length > 1 && (
          <div style={{ textAlign: 'center', color: 'var(--color-gray-400)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            {currentIndex + 1} of {imageList.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
