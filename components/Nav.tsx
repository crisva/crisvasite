'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const LINKS = [
  { href: '/#proceso', label: 'Proceso' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#casos', label: 'Casos' },
  { href: '/#equipo', label: 'Equipo' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
            {/* Logo */}
            <motion.a href="/" className="nav-logo" variants={fadeUp} style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/images/LOGO/LOGO-CRISVA.png" alt="Crisva Logo" style={{ height: '56px', width: 'auto' }} />
            </motion.a>

            {/* Links desktop */}
            <motion.ul className="nav-links" variants={fadeUp} style={{
              display: 'flex',
              gap: '2rem',
              listStyle: 'none',
              fontFamily: 'var(--font-body)',
            }}>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <motion.a
                    href={l.href}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="nav-link-hover"
                    style={{ fontSize: '.9rem', color: 'var(--muted)', fontWeight: 500, display: 'inline-block' }}
                  >
                    {l.label}
                  </motion.a>
                </li>
              ))}
            </motion.ul>

            {/* CTA desktop + mobile */}
            <motion.div className="nav-cta" variants={fadeUp} style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }}>
              <a href="/#contacto" className="btn btn-primary" style={{ padding: '.75rem 1.5rem', fontSize: '.88rem', lineHeight: '1' }}>
                Conversemos
              </a>
            </motion.div>

            {/* Hamburger mobile */}
            <button
              className="nav-hamburger"
              onClick={() => setOpen(!open)}
              aria-label="Menú"
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                zIndex: 110,
              }}
            >
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} transition={{ duration: 0.25 }} style={{ display: 'block', width: '22px', height: '2px', background: 'var(--white)', borderRadius: '2px', transformOrigin: 'center' }} />
              <motion.span animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.2 }} style={{ display: 'block', width: '22px', height: '2px', background: 'var(--white)', borderRadius: '2px' }} />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} transition={{ duration: 0.25 }} style={{ display: 'block', width: '22px', height: '2px', background: 'var(--white)', borderRadius: '2px', transformOrigin: 'center' }} />
            </button>
          </motion.div>
        </div>

        <style jsx>{`
          :global(.nav-hamburger) { display: none; }
          @media (max-width: 768px) {
            :global(.nav-links) { display: none !important; }
            :global(.nav-hamburger) { display: flex !important; }
          }
          .nav-inner a:hover { color: var(--text) !important; }
        `}</style>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(8,9,16,0.98)',
              backdropFilter: 'blur(20px)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--white)',
                  fontFamily: 'var(--font-display)',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="/#contacto"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: LINKS.length * 0.07 }}
              className="btn btn-primary"
              style={{ padding: '1rem 2.5rem', fontSize: '1rem', fontWeight: 700, marginTop: '1rem' }}
            >
              Conversemos
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}