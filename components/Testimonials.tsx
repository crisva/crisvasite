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
    text: "Crisva es un excelente profesional. Gracias a él, logramos rediseñar y lanzar con éxito la nueva plataforma web de turismolab.com, obteniendo un resultado estupendo que cumple plenamente con los objetivos estratégicos de nuestra empresa.",
    author: "Erick Coronado Soncco",
    role: "CEO — Turismo Lab",
    avatar: "EC",
    link: { label: "www.turismolab.com", url: "https://www.turismolab.com" }
  },
  {
    text: "Es simplemente un privilegio trabajar con Cristhian y Crisva Design Lab. Ya van más de 6 meses que empezamos este camino de desarrollo de branding, website, diseño, y además del impresionante trabajo y perspectiva que tiene, su calidad de ser humano genuino y honesto es lo que más respeto. Definitivamente recomendado si realmente quieres alguien con visión y corazón.",
    author: "Dr. Oscar Cornelio",
    role: "Founder — droscarcornelio.com",
    avatar: "OC"
  },
  {
    text: "Excelente profesional. Muy dedicado, responsable y comprometido con los proyectos en los cuales participa. Lo recomiendo 100%.",
    author: "David Lastra",
    role: "CEO — Infocheck",
    avatar: "DL"
  },
  {
    text: "Crisva, es un profesional que tiene habilidades fuertes en el entendimiento de propósito de marca; además de acompañar en el proceso creativo para quedar conforme con los entregables pactados; además puedo valorar el manejo de expectativas de sus clientes. Crack Crisva.",
    author: "Carlos Ordinola",
    role: "CEO — TecniYA!",
    avatar: "CO"
  },
  {
    text: "Excelente profesionales, me tocó trabajar con ellos un proyecto para remodelar toda una página y plataforma web de una Fintech en términos de UX/UI y quedó excelente. Rescato su forma de trabajo de manera individual para prototipar de forma inmediata y a la vez su trabajo en equipo también. Es una persona que se adapta a cualquier ambiente laboral y congenia rápidamente con su entorno.",
    author: "José Antonio Duarte",
    role: "CEO — Firbid",
    avatar: "JD",
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
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
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
                  {'link' in t && t.link && (
                    <>
                      {' '}
                      <a
                        href={t.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--red)', textDecoration: 'underline', fontStyle: 'normal' }}
                      >
                        {t.link.label}
                      </a>
                    </>
                  )}
                </p>
              </div>

              <div className="test-author" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                {'linkedin' in t && t.linkedin ? (
                  <a href={t.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${t.author}`} style={{ flexShrink: 0 }}>
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
                    }}>{t.avatar}</div>
                  </a>
                ) : (
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
                )}
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