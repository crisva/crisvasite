'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

export default function Nav() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(8,9,16,.88)',
      backdropFilter: 'blur(18px) saturate(1.4)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container">
        <motion.div
          className="nav-inner"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
            gap: '2rem',
          }}
        >
          <motion.a href="#" className="nav-logo" variants={fadeUp} style={{
            fontFamily: 'var(--font-h)',
            fontSize: '1.15rem',
            fontWeight: 800,
            letterSpacing: '-.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
          }}>
            CRISVA<span style={{ color: 'var(--red)' }}>.</span>
          </motion.a>

          <motion.ul className="nav-links" variants={fadeUp} style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
          }}>
            <li><a href="#proceso" style={{ fontSize: '.9rem', color: 'var(--muted)', transition: 'color .2s' }}>Proceso</a></li>
            <li><a href="#servicios" style={{ fontSize: '.9rem', color: 'var(--muted)', transition: 'color .2s' }}>Servicios</a></li>
            <li><a href="#casos" style={{ fontSize: '.9rem', color: 'var(--muted)', transition: 'color .2s' }}>Casos</a></li>
            <li><a href="#equipo" style={{ fontSize: '.9rem', color: 'var(--muted)', transition: 'color .2s' }}>Equipo</a></li>
          </motion.ul>

          <motion.div className="nav-cta" variants={fadeUp} style={{
            display: 'flex',
            gap: '.75rem',
            alignItems: 'center',
          }}>
            <span className="nav-badge" style={{
              background: 'var(--red-dim)',
              color: 'var(--red)',
              fontSize: '.7rem',
              fontWeight: 700,
              padding: '.15em .55em',
              borderRadius: '4px',
              letterSpacing: '.04em',
            }}>2 spots disponibles</span>
            <a href="#contacto" className="btn btn-primary" style={{ padding: '.55rem 1.25rem', fontSize: '.88rem' }}>
              Conversemos →
            </a>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.nav-links) { display: none !important; }
        }
        .nav-inner a:hover { color: var(--text) !important; }
      `}</style>
    </nav>
  );
}
