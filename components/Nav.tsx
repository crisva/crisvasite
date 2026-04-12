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
            padding: '1.5rem 0',
            gap: '2rem',
          }}
        >
          <motion.a href="/" className="nav-logo" variants={fadeUp} style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <img
              src="/images/LOGO/LOGO-CRISVA.png"
              alt="Crisva Logo"
              style={{ height: '56px', width: 'auto' }}
            />
          </motion.a>

          <motion.ul className="nav-links" variants={fadeUp} style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            fontFamily: 'var(--font-body)',
          }}>
            <li>
              <motion.a
                href="/#proceso"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="nav-link-hover"
                style={{ fontSize: '.9rem', color: 'var(--muted)', fontWeight: 500, display: 'inline-block' }}
              >
                Proceso
              </motion.a>
            </li>
            <li>
              <motion.a
                href="/#servicios"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="nav-link-hover"
                style={{ fontSize: '.9rem', color: 'var(--muted)', fontWeight: 500, display: 'inline-block' }}
              >
                Servicios
              </motion.a>
            </li>
            <li>
              <motion.a
                href="/#casos"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="nav-link-hover"
                style={{ fontSize: '.9rem', color: 'var(--muted)', fontWeight: 500, display: 'inline-block' }}
              >
                Casos
              </motion.a>
            </li>
            <li>
              <motion.a
                href="/#equipo"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="nav-link-hover"
                style={{ fontSize: '.9rem', color: 'var(--muted)', fontWeight: 500, display: 'inline-block' }}
              >
                Equipo
              </motion.a>
            </li>
          </motion.ul>

          <motion.div className="nav-cta" variants={fadeUp} style={{
            display: 'flex',
            gap: '.75rem',
            alignItems: 'center',
          }}>
            <a href="/#contacto" className="btn btn-primary" style={{ padding: '.75rem 1.5rem', fontSize: '.88rem', lineHeight: '1' }}>
              Conversemos
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