'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import VideoBackground from './VideoBackground';

const WORDS = ["Product Design", "Growth", "Branding", "Design Strategy", "Desarrollo"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-new" style={{
      height: '100vh',
      width: '100%',
      backgroundColor: '#0c0c0c',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      padding: '0 1.5rem',
    }}>
      <VideoBackground isPlaying={isPlaying} />

      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(12, 12, 12, 0.85)',
        zIndex: 5,
        pointerEvents: 'none',
      }} />

      <div className="hero-content" style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '1000px',
        marginTop: '-5vh',
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="display"
          style={{
            margin: 0,
            maxWidth: '22ch',
            marginInline: 'auto',
          }}
        >
          Trasciende hasta <em>10x</em> a través del{' '}
          <div style={{ display: 'inline-flex', verticalAlign: 'bottom' }}>
            <AnimatePresence mode="wait">
              <motion.em
                key={WORDS[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-gradient"
                style={{ display: 'inline-block', fontStyle: 'italic' }}
              >
                {WORDS[index]}
              </motion.em>
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h1"
          style={{ maxWidth: '32ch', margin: '2rem auto 2.5rem' }}
        >
          Creamos <em>soluciones de diseño</em> innovadoras que impulsan el <em>crecimiento</em> de tu startup.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}
        >
          <p style={{
            color: 'var(--white)',
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: 500,
            opacity: 0.9,
            letterSpacing: '-0.02em',
          }}>
            ¿Listo para trascender?
          </p>

          <a href="#contacto" className="btn-hero-primary bg-gradient" style={{
            padding: '16px 42px',
            borderRadius: '100px',
            fontSize: '18px',
            fontWeight: 600,
            letterSpacing: '0.01em',
            textDecoration: 'none',
            color: '#fff',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 10px 40px -10px rgba(253, 118, 0, 0.4)'
          }}>
            Conversemos
          </a>
        </motion.div>
      </div>

      {/* Botón pause/play — accesibilidad WCAG 2.2.2 */}
      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        aria-label={isPlaying ? 'Pausar video de fondo' : 'Reproducir video de fondo'}
        title={isPlaying ? 'Pausar video de fondo' : 'Reproducir video de fondo'}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          zIndex: 20,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.25)',
          backgroundColor: 'rgba(12,12,12,0.6)',
          backdropFilter: 'blur(8px)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'border-color 0.2s, background-color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
      >
        {isPlaying ? (
          // Ícono pause
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <rect x="2" y="1" width="4" height="12" rx="1" fill="white" />
            <rect x="8" y="1" width="4" height="12" rx="1" fill="white" />
          </svg>
        ) : (
          // Ícono play
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 1.5L12 7L3 12.5V1.5Z" fill="white" />
          </svg>
        )}
      </button>

    </section>
  );
}