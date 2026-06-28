'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0c0c0c',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-b)',
    }}>

      {/* Grid de fondo tipo wireframe */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        zIndex: 0,
      }} />

      {/* 404 gigante wireframe */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          fontSize: 'clamp(180px, 35vw, 380px)',
          fontFamily: 'var(--font-h)',
          fontWeight: 800,
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(255,255,255,0.07)',
          userSelect: 'none',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          zIndex: 1,
        }}
      >
        404
      </motion.div>

      {/* Bounding box pulsando — el 404 está "seleccionado" */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0.6, 1] }}
        transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
        style={{
          position: 'absolute',
          width: 'clamp(280px, 52vw, 580px)',
          height: 'clamp(120px, 22vw, 240px)',
          border: '1px dashed var(--red)',
          borderRadius: '4px',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        {/* Handles de selección */}
        {[
          { top: -4, left: -4 }, { top: -4, right: -4 },
          { bottom: -4, left: -4 }, { bottom: -4, right: -4 },
          { top: '50%', left: -4, transform: 'translateY(-50%)' },
          { top: '50%', right: -4, transform: 'translateY(-50%)' },
        ].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: 7,
            height: 7,
            background: 'var(--red)',
            borderRadius: '1px',
            ...pos,
          }} />
        ))}

        {/* Label del layer */}
        <div style={{
          position: 'absolute',
          top: -26,
          left: 0,
          fontSize: '11px',
          fontFamily: 'var(--font-b)',
          color: 'var(--red)',
          letterSpacing: '0.04em',
          fontWeight: 600,
          whiteSpace: 'nowrap',
        }}>
          Frame 404 — no publicado
        </div>
      </motion.div>

      {/* Contenido central */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '600px',
        }}
      >
        <span style={{
          fontSize: '0.7rem',
          letterSpacing: '0.14em',
          color: 'var(--red)',
          fontWeight: 700,
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '1.5rem',
        }}>
          Error 404
        </span>

        <h1 style={{
          fontFamily: 'var(--font-h)',
          fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
          fontWeight: 800,
          color: 'var(--white)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
        }}>
          Esta pantalla se quedó{' '}
          <span style={{ color: 'var(--red)' }}>en el wireframe</span>
          <span style={{ opacity: cursor ? 1 : 0, color: 'var(--red)', transition: 'opacity 0.1s' }}>|</span>
        </h1>

        <p style={{
          color: 'var(--muted)',
          fontSize: '1rem',
          lineHeight: 1.75,
          marginBottom: '3rem',
          maxWidth: '38ch',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          La página que buscas nunca llegó a producción. Vuelve al inicio y sigamos construyendo.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 2rem',
              background: 'var(--red)',
              color: '#fff',
              borderRadius: '100px',
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            ← Volver al inicio
          </Link>

          <a
            href="/#contacto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.85rem 2rem',
              background: 'transparent',
              color: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: '100px',
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            Hablar con el equipo
          </a>
        </div>

        {/* Firma */}
        <p style={{
          marginTop: '3rem',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: '0.06em',
        }}>
          CRISVA DESIGN LAB · crisva.com
        </p>
      </motion.div>

    </div>
  );
}
