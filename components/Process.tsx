'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import TypingHeading from './TypingHeading';

const STEPS = [
    {
    num: "01",
    label: "VISIÓN\nESTRATÉGICA",
    title: "Design\nStrategy",
    desc: "Antes de diseñar una sola pantalla, entendemos tu negocio. Priorizamos lo que mueve la aguja, no lo que se ve bien en presentaciones.",
    tag: "3 a más semanas",
    icon: "🧭"
  },
    {
    num: "02",
    label: "IDENTIDAD\nVISUAL",
    title: "Branding",
    desc: "Tu marca no es tu logo. Es la impresión que dejas antes, durante y después del producto. La construimos para que dure y para que convierta.",
    tag: "3 a 6 semanas",
    icon: "🎨"
  },
  {
    num: "03",
    label: "DISEÑO DE\nPRODUCTO",
    title: "Product\nDesign",
    desc: "Convertimos tu idea en arquitectura real con impacto en el negocio: flujos, prototipos y sistemas que los equipos pueden construir y los usuarios entienden desde el primer clic.",
    tag: "4 a más semanas",
    icon: "📦"
  },
  {
    num: "04",
    label: "OPTIMIZACIÓN\nESTRATÉGICA",
    title: "Growth\nDesign",
    desc: "Lanzar es el inicio. Iteramos con datos reales para convertir más, retener mejor y crecer sin quemar presupuesto en cambios a ciegas.",
    tag: "Continuo",
    icon: "📈"
  },
  {
    num: "05",
    label: "PRODUCTO\nVIVO",
    title: "Desarrollo\nVivo",
    desc: "El código es parte del diseño. Implementamos lo que diseñamos sin pérdida de calidad entre Figma y producción. Lo que ves es lo que se construye.",
    tag: "4 a más semanas",
    icon: "⚡"
  },
  {
    num: "06",
    label: "ACOMPAÑAMIENTO\nCONTINUO",
    title: "Soporte\nContinuo",
    desc: "No desaparecemos al entregar. Somos el equipo que sigue ahí cuando el mercado cambia, los usuarios evolucionan y el producto necesita crecer.",
    tag: "Mes a mes",
    icon: "🚀"
  }
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="proceso" className="section" style={{ background: 'var(--bg)', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1800px', width: '100%' }}>
        <motion.div
          className="process-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto 5rem' }}
        >
          <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: '1.5rem' }}>
            Del problema al producto, sin perder el hilo.
          </span>
          <TypingHeading
            text="EL MÉTODO"
            className="display"
            style={{
              margin: '0 auto 1.5rem',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em'
            }}
          />
          <p className="body-lg" style={{ color: 'var(--muted)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            No trabajamos en fases que se ignoran entre sí. Cada paso construye sobre el anterior para que el producto final sea coherente, funcional y listo para crecer.
          </p>
        </motion.div>

        <motion.div
          className="process-accordion"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {STEPS.map((s, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.div
                key={i}
                layout
                onClick={() => setActiveIndex(i)}
                className={`process-card ${isActive ? 'active' : ''}`}
                variants={fadeUp}
                style={{
                  background: isActive ? 'rgba(229, 48, 42, 0.05)' : 'var(--bg2)',
                  padding: isActive ? '3rem 2.5rem' : '2.5rem 1.5rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  borderRadius: '24px',
                  border: isActive ? '1px solid rgba(229, 48, 42, 0.4)' : '1px solid var(--border)',
                  transition: 'background 0.4s ease, border 0.4s ease',
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
              >
                {/* Number Background */}
                <motion.div
                  layout="position"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: isActive ? '5rem' : '2.5rem',
                    fontWeight: 800,
                    color: isActive ? 'rgba(229, 48, 42, 0.15)' : 'rgba(229, 48, 42, 0.4)',
                    lineHeight: 1,
                    pointerEvents: 'none',
                    transition: 'font-size 0.4s ease, color 0.4s ease'
                  }}
                >
                  {s.num}
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1, justifyContent: isActive ? 'flex-start' : 'center' }}>
                  <motion.div layout="position" style={{ fontSize: isActive ? '2.5rem' : '1.8rem', transition: 'font-size 0.4s ease' }}>{s.icon}</motion.div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          style={{
                            fontSize: '0.75rem',
                            color: 'var(--red)',
                            letterSpacing: '0.15em',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            whiteSpace: 'pre-line',
                            lineHeight: 1.3
                          }}
                        >
                          {s.label}
                        </motion.span>
                      )}
                    </AnimatePresence>

                    <motion.h4
                      layout="position"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: isActive ? '3rem' : '1.1rem',
                        fontWeight: 600,
                        color: isActive ? 'var(--white)' : 'var(--muted)',
                        margin: 0,
                        writingMode: 'horizontal-tb',
                        transform: 'none',
                        whiteSpace: 'pre-line',
                        lineHeight: 1.1,
                        transition: 'font-size 0.4s ease, color 0.4s ease'
                      }}
                    >
                      {s.title}
                    </motion.h4>
                  </div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                      <p style={{
                        fontSize: '1.1rem',
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.6,
                        fontWeight: 300,
                        margin: 0,
                        maxWidth: '500px'
                      }}>
                        {s.desc}
                      </p>
                      <div className="step-tag" style={{
                        display: 'inline-block',
                        width: 'fit-content',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        background: 'rgba(229, 48, 42, 0.2)',
                        color: 'var(--red)',
                        padding: '6px 16px',
                        borderRadius: '8px',
                      }}>
                        {s.tag}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Glow Effect */}
                {isActive && (
                  <motion.div
                    layoutId="glow"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle at top right, rgba(229, 48, 42, 0.1), transparent 70%)',
                      pointerEvents: 'none'
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          style={{
            color: 'var(--muted)',
            fontSize: '1rem',
            textAlign: 'center',
            marginTop: '4rem',
            maxWidth: '600px',
            margin: '4rem auto 0',
            lineHeight: 1.6
          }}
        >
          De cero a lanzamiento: <strong style={{ color: 'var(--text)' }}>8 a 12 semanas</strong> <br /> Un solo equipo, cero fricción entre disciplinas.
        </motion.p>
      </div>

      <style jsx>{`
        :global(.process-accordion) {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
          margin: 0 auto;
          min-height: 520px;
          width: 100%;
        }
        :global(.process-card) {
          flex: 1;
          min-width: 150px;
        }
        :global(.process-card.active) {
          flex: 4;
          min-width: 320px;
        }
        @media (max-width: 1024px) {
          :global(.process-accordion) { 
            flex-direction: column !important; 
            min-height: auto !important;
            gap: 1rem !important;
          }
          :global(.process-card) {
            flex: none !important;
            width: 100% !important;
            min-height: 120px !important;
            height: auto !important;
            padding: 2rem 1.5rem !important;
            min-width: 0 !important;
            align-items: center !important;
            text-align: center !important;
          }
          :global(.process-card div) {
            align-items: center !important;
            text-align: center !important;
          }
          :global(.process-card.active) {
            padding: 2.5rem 1.5rem !important;
          }
          :global(.process-card h4) {
            font-size: clamp(2rem, 8vw, 2.5rem) !important;
            line-height: 1.1 !important;
          }
        }
        :global(.process-card:hover:not(.active)) {
          background: rgba(255, 255, 255, 0.05) !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>
    </section>
  );
}