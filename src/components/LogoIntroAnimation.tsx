import React, { useState, useEffect, useCallback } from 'react';

interface LogoIntroAnimationProps {
  onComplete: () => void;
}

export const LogoIntroAnimation: React.FC<LogoIntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'initial' | 'animating' | 'completed'>('initial');
  const [coords, setCoords] = useState<{
    targetX: number;
    targetY: number;
    targetHeight: number;
  } | null>(null);

  // Measure target position of the header logo
  const calculateTarget = useCallback(() => {
    const el = document.getElementById('header-site-logo-img');
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        return {
          targetX: rect.left + rect.width / 2,
          targetY: rect.top + rect.height / 2,
          targetHeight: rect.height,
        };
      }
    }

    // High-accuracy fallback based on layout metrics
    const isMobile = window.innerWidth < 768;
    const fallbackHeight = isMobile ? 38 : 48;
    const bannerEl = document.querySelector('.demo-banner');
    const bannerHeight = bannerEl ? bannerEl.getBoundingClientRect().height : 0;
    const headerTopPadding = isMobile ? 8 : 13.6;
    const linkPadding = 3.2;

    return {
      targetX: window.innerWidth / 2,
      targetY: bannerHeight + headerTopPadding + linkPadding + fallbackHeight / 2,
      targetHeight: fallbackHeight,
    };
  }, []);

  const finishIntro = useCallback(() => {
    setPhase('completed');
    document.body.style.overflow = '';
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Ensure initial scroll position is at the very top
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    // Pre-calculate target coordinates
    const initialTarget = calculateTarget();
    setCoords(initialTarget);

    // Initial display at center: let user appreciate the prominent luxury logo for 1200ms
    const startFlightTimer = setTimeout(() => {
      // Re-measure right before flight to guarantee exact pixel alignment
      const preciseTarget = calculateTarget();
      setCoords(preciseTarget);
      setPhase('animating');
    }, 1200);

    // After animation flight completes (1200ms display + 1250ms flight = 2450ms)
    const completionTimer = setTimeout(() => {
      finishIntro();
    }, 2500);

    return () => {
      clearTimeout(startFlightTimer);
      clearTimeout(completionTimer);
      document.body.style.overflow = '';
    };
  }, [calculateTarget, finishIntro]);

  if (phase === 'completed') {
    return null;
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isInitial = phase === 'initial';

  // Target positioning values
  const currentTop = isInitial ? '50%' : `${coords?.targetY ?? 45}px`;
  const currentLeft = isInitial ? '50%' : `${coords?.targetX ?? (window.innerWidth / 2)}px`;
  const currentHeight = isInitial ? (isMobile ? '58px' : '76px') : `${coords?.targetHeight ?? (isMobile ? 38 : 48)}px`;

  return (
    <div
      className="logo-intro-root"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        pointerEvents: 'auto',
        overflow: 'hidden'
      }}
    >
      <style>{`
        @keyframes cinematicBreathe {
          0% {
            opacity: 0;
            transform: scale(0.93);
          }
          22% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: scale(1.025);
          }
        }
      `}</style>

      {/* 1. Sleek Flat Charcoal Luxury Backdrop */}
      <div
        onClick={finishIntro}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#090A0D',
          opacity: isInitial ? 1 : 0,
          transition: 'opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
          cursor: 'pointer'
        }}
      />

      {/* 2. Traveling Brand Logo Element */}
      <div
        onClick={finishIntro}
        style={{
          position: 'absolute',
          top: currentTop,
          left: currentLeft,
          transform: 'translate(-50%, -50%)',
          transition: 'top 1.25s cubic-bezier(0.16, 1, 0.3, 1), left 1.25s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          willChange: 'top, left'
        }}
      >
        {/* Cinematic Breathe & Zoom Container */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: isInitial ? 'cinematicBreathe 1.25s cubic-bezier(0.22, 1, 0.36, 1) forwards' : 'none',
            transform: isInitial ? undefined : 'scale(1)',
            transition: 'transform 1.25s cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform, opacity'
          }}
        >
          <img
            src="/images/logo_transparent.png"
            alt="CoalLuxe - The Essence of Fire"
            style={{
              height: currentHeight,
              width: 'auto',
              maxWidth: '85vw',
              objectFit: 'contain',
              display: 'block',
              filter: 'none',
              transition: 'height 1.25s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'height'
            }}
          />
        </div>
      </div>

      {/* 3. Subtle Luxury Skip Control */}
      {isInitial && (
        <button
          onClick={finishIntro}
          aria-label="Skip intro animation"
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.35)',
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-sans)',
            cursor: 'pointer',
            padding: '0.4rem 0.8rem',
            borderRadius: '4px',
            transition: 'color 0.2s ease, opacity 0.3s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.35)'; }}
        >
          Skip
        </button>
      )}
    </div>
  );
};
export default LogoIntroAnimation;
