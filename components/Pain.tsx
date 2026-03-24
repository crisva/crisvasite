'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import TypingHeading from './TypingHeading';

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

const ZapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

const PAIN_POINTS = [
  {
    icon: <SearchIcon />,
    title: "Sobrecarga",
    desc: "Las herramientas actuales obligan a escanear manualmente miles de señales, perdiendo de vista los cambios culturales clave."
  },
  {
    icon: <ZapIcon />,
    title: "Fricción",
    desc: "La brecha entre los datos culturales puros y una estrategia creativa accionable es demasiado amplia hoy en día."
  },
  {
    icon: <ClockIcon />,
    title: "Atraso",
    desc: "La investigación tradicional tarda semanas. La cultura se mueve en segundos. Siempre llegas un paso tarde."
  },
  {
    icon: <TargetIcon />,
    title: "Ruido",
    desc: "Los algoritmos priorizan el engagement vacío sobre la relevancia, enterrando el verdadero potencial narrativo."
  }
];

export default function Pain() {
  return (
    <section id="problema" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        <header style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="label"
            style={{ 
              color: 'var(--red)', 
              display: 'block', 
              marginBottom: '1rem', 
              textAlign: 'center'
            }}
          >
            ¿Por qué tu producto no está donde debería estar?
          </motion.span>
          <TypingHeading 
            text="EL PROBLEMA" 
            className="display"
            style={{ 
              margin: '0 auto 1.5rem', 
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em'
            }}
          />
          <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            style={{ 
              color: 'var(--muted)', 
              fontSize: '1.2rem', 
              lineHeight: 1.6, 
              maxWidth: '800px', 
              margin: '0 auto' 
            }}
          >
            La mayoría de empresas diseñan bien una pieza <br /> pero pierden coherencia en el sistema. <br className="hide-mobile" />
            El resultado: usuarios confundidos, conversiones bajas y una marca que no transmite lo que vale.
          </motion.p>
        </header>

        <div style={{
          overflow: 'hidden',
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          padding: '2rem 0'
        }}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{
              display: 'flex',
              gap: '2rem',
              width: 'max-content',
            }}
          >
            {[...PAIN_POINTS, ...PAIN_POINTS].map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  width: '400px',
                  flexShrink: 0,
                  padding: '3rem 2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  cursor: 'default',
                  borderRadius: '24px',
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                }}
              >
                <div style={{ 
                  color: 'var(--red)',
                  background: 'rgba(229, 48, 42, 0.08)',
                  width: 'fit-content',
                  padding: '0.9rem',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '1.4rem', 
                    fontWeight: 600, 
                    color: 'var(--white)',
                    margin: 0 
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--muted)', 
                    margin: 0, 
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    fontWeight: 300
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .card:hover {
          border-color: rgba(240, 237, 232, 0.25);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </section>
  );
}
