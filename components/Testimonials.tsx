'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

import TypingHeading from './TypingHeading';

const TESTIMONIALS = [
  {
    text: "CRISVA sería más que un proveedor, y al final fue así, se convirtió en nuestro socio. Fue muy empático de principio a fin. CRISVA tiene mucho talento humano. 100% Recomendado.",
    author: "Oliver Leandro",
    role: "CEO — Dynamo Perú",
    avatar: "OL"
  },
  {
    text: "Trabajé con Crisva para remodelar todo el look and feel de nuestra marca. Realizaron un prototipado y ejecutaron una auditoría UX&UI que puso nuestra plataforma lista para salir al mercado.",
    author: "José Duarte",
    role: "CEO — Firbid.com",
    avatar: "JD"
  },
  {
    text: "Trabajar con Crisva ha sido una experiencia muy enriquecedora. Siempre nos daba alternativas para mejorar la propuesta. Si quieres diseñar la mejor experiencia son los indicados.",
    author: "Ronald Barzola",
    role: "CMO — Turismo Lab",
    avatar: "RB"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="section" style={{ background: 'var(--surf1)' }}>
      <div className="container">
        <motion.div
          className="test-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto 5rem' }}
        >
          <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: '1.5rem' }}>
            Lo que dicen quienes trascendieron
          </span>
          <TypingHeading 
            text="Testimonios" 
            className="display"
            style={{ 
              margin: '0 auto 1.5rem', 
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: 'var(--white)'
            }}
          />
        </motion.div>

        <motion.div
          className="test-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="test-card"
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color .25s',
              }}
            >
              <div>
                <div className="test-stars" style={{ display: 'flex', gap: '.25rem', marginBottom: '1rem' }}>
                  {[1, 2, 3, 4, 5].map(s => <span key={s} style={{ color: '#f59e0b', fontSize: '.9rem' }}>★</span>)}
                </div>
                <p className="test-text" style={{ fontSize: '.92rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic', position: 'relative' }}>
                  <span style={{ fontFamily: 'var(--font-h)', fontSize: '2rem', color: 'var(--red)', opacity: .5, fontWeight: 800, verticalAlign: '-.5rem', marginRight: '.1rem' }}>"</span>
                  {t.text}
                </p>
              </div>

              <div className="test-author" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                <div className="test-avatar" style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--red-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-h)',
                  fontSize: '.85rem',
                  fontWeight: 700,
                  color: 'var(--red)',
                  flexShrink: 0
                }}>{t.avatar}</div>
                <div className="test-info">
                  <strong style={{ fontSize: '.9rem', fontWeight: 600, display: 'block' }}>{t.author}</strong>
                  <span style={{ fontSize: '.78rem', color: 'var(--muted)', display: 'block' }}>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .test-grid { grid-template-columns: 1fr !important; }
        }
        :global(.test-card:hover) {
          border-color: var(--border2) !important;
        }
      `}</style>
    </section>
  );
}
