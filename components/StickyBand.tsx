'use client';

import { useScrollBand } from '@/hooks/useScrollBand';

export default function StickyBand() {
  const isVisible = useScrollBand();

  return (
    <div
      className="sticky-band"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 99,
        background: 'var(--surf2)',
        border: '1px solid var(--border2)',
        borderRadius: '100px',
        padding: '.6rem .6rem .6rem 1.25rem',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 32px rgba(0,0,0,.5)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'all' : 'none',
        transition: 'opacity .3s ease',
      }}
    >
      <p style={{ fontSize: '.85rem', fontWeight: 500, whiteSpace: 'nowrap' }} className="band-text">
        ¿Listo para trascender?
      </p>
      <a
        href="#contacto"
        className="btn btn-primary"
        style={{ padding: '.6rem 1.4rem', fontSize: '.85rem', borderRadius: '100px' }}
      >
        Conversemos
      </a>

      <style jsx>{`
        @media (max-width: 600px) {
          .band-text { display: none; }
          .sticky-band { padding: .6rem; }
        }
      `}</style>
    </div>
  );
}
