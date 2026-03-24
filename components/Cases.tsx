'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

import TypingHeading from './TypingHeading';

const CASES = [
  {
    large: true,
    label: "FIRBID",
    type: "UX & UI",
    sector: "Fintech · Plataforma de subastas",
    title: "Firbid — De idea a producto listo para el mercado",
    desc: "Crisva tomó la plataforma de Firbid desde el prototipado hasta la auditoría UX&UI completa, poniéndola lista para salir al mercado por primera vez. Proceso end-to-end que cubrió flujo de registro, onboarding, sistema de pujas y transacción final.",
    quote: "'Realizaron una auditoría UX&UI que puso nuestra plataforma lista para salir al mercado. ¡Excelente trabajo!' — José Duarte, CEO Firbid",
    metrics: [
      { num: "0 → 1", label: "MVP listo para mercado" },
      { num: "100%", label: "Proceso end-to-end cubierto" },
      { num: "8 sem", label: "De discovery a entrega final" }
    ]
  },
  {
    label: "DYNAMO",
    type: "Branding",
    sector: "Startup B2B",
    title: "Dynamo — Branding que se convirtió en sociedad",
    desc: "Construcción de identidad estratégica para una empresa con muchas ganas de destacar. El resultado no fue solo una marca — fue una alianza que Dynamo describe como su mejor decisión.",
    metrics: [
      { num: "Socio", label: "No proveedor, aliado" },
      { num: "Sistema", label: "Marca coherente en todos los touchpoints" }
    ]
  },
  {
    label: "FLUYEZ",
    type: "Branding",
    sector: "Startup Digital",
    title: "Fluyez — Identidad que convierte",
    desc: "Branding completo para startup digital en crecimiento. Desde el research emocional hasta el sistema visual y el content kit listo para lanzamiento.",
    metrics: [
      { num: "+35%", label: "Conversión primeros 3 meses" },
      { num: "Brand Kit", label: "Completo para lanzamiento" }
    ]
  }
];

export default function Cases() {
  return (
    <section id="casos" className="section">
      <div className="container">
        <motion.div
          className="cases-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto 5rem' }}
        >
          <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: '1.5rem' }}>
            Productos que trascendieron
          </span>
          <TypingHeading 
            text="Casos de éxito" 
            className="display"
            style={{ 
              margin: '0 auto 1.5rem', 
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: 'var(--white)'
            }}
          />
          <p style={{ color: 'var(--muted)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            Proceso humano de co-creación aplicado a retos reales de negocio.
          </p>
        </motion.div>

        <motion.div
          className="cases-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
        >
          {CASES.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`case-card ${c.large ? 'case-large' : ''}`}
              style={{
                background: 'var(--surf1)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                transition: 'border-color .25s, transform .25s',
                gridColumn: c.large ? '1 / -1' : 'auto',
              }}
            >
              <div className="case-thumb" style={{
                height: c.large ? '240px' : '160px',
                background: 'var(--surf2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div className="case-thumb-pattern" style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: .12,
                  backgroundImage: 'repeating-linear-gradient(45deg, var(--red) 0, var(--red) 1px, transparent 0, transparent 50%)',
                  backgroundSize: '12px 12px',
                }} />
                <div className="case-thumb-label" style={{
                  position: 'relative',
                  zIndex: 1,
                  fontFamily: 'var(--font-h)',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'rgba(255,255,255,.15)',
                  letterSpacing: '-.02em',
                }}>{c.label}</div>
              </div>

              <div className="case-body" style={{ padding: '1.75rem' }}>
                <div className="case-meta" style={{ display: 'flex', gap: '.5rem', marginBottom: '.75rem', flexWrap: 'wrap' }}>
                  <span className="case-type" style={{ fontSize: '.72rem', fontWeight: 700, background: 'var(--red-dim)', color: 'var(--red)', padding: '.2em .65em', borderRadius: '4px', letterSpacing: '.04em', textTransform: 'uppercase' }}>{c.type}</span>
                  <span className="case-sector" style={{ fontSize: '.72rem', background: 'var(--surf2)', color: 'var(--muted)', padding: '.2em .65em', borderRadius: '4px', letterSpacing: '.04em', textTransform: 'uppercase' }}>{c.sector}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-h)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '.5rem' }}>{c.title}</h3>
                <p style={{ fontSize: '.88rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{c.desc}</p>
                
                {c.quote && (
                  <div style={{ display: 'flex', gap: '.6rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--red-dim)', color: 'var(--red)', fontSize: '.65rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>JD</div>
                    <p style={{ fontSize: '.82rem', color: 'var(--muted)', fontStyle: 'italic' }}>{c.quote}</p>
                  </div>
                )}

                <div className="case-metrics" style={{ display: 'flex', gap: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                  {c.metrics.map((m, j) => (
                    <div key={j} className="case-metric">
                      <strong style={{ fontFamily: 'var(--font-h)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--red)', display: 'block', lineHeight: 1 }}>{m.num}</strong>
                      <span style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: '.2rem', display: 'block' }}>{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 760px) {
          .cases-grid { grid-template-columns: 1fr !important; }
          .case-card { grid-column: auto !important; }
          .case-thumb { height: 160px !important; }
          :global(.cases-header p) { text-align: left !important; max-width: 100% !important; }
        }
        :global(.case-card:hover) {
          border-color: var(--border2) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
}
