'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import TypingHeading from './TypingHeading';

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const ZapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);

const PAIN_POINTS = [
  {
    icon: <SearchIcon />,
    title: "Silos",
    desc: "Diseño por un lado, desarrollo por otro, estrategia por ninguno. El resultado: un producto fragmentado que nadie reconoce como coherente.",
    number: "01"
  },
  {
    icon: <ZapIcon />,
    title: "Velocidad",
    desc: "Mientras coordinas tres proveedores distintos, tu competencia ya lanzó, iteró y creció. El mercado no espera a que todos se pongan de acuerdo.",
    number: "02"
  },
  {
    icon: <ClockIcon />,
    title: "Ruido sin foco",
    desc: "Muchas opiniones, pocas decisiones. Sin criterio estratégico claro, cada revisión aleja el producto de lo que realmente necesita el usuario.",
    number: "03"
  },
  {
    icon: <TargetIcon />,
    title: "Sin impacto",
    desc: "Bonito no es suficiente. Un producto que no convierte ni retiene es solo un gasto. El diseño tiene que mover métricas, no solo impresionar en presentaciones.",
    number: "04"
  }
];

const itemFade: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

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
            style={{ color: 'var(--red)', display: 'block', marginBottom: '1rem' }}
          >
            La mayoría invierte en diseño. Pocos invierten en el sistema que lo sostiene.
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
            Tu producto puede verse bien y aun así no generar ventas, usuarios o cumplir tus objetivos. Porque el diseño aislado no funciona.
            Lo que falla no es el logo ni la UI: es la falta de coherencia entre estrategia, experiencia y tecnología.
          </motion.p>
        </header>

        <div className="pain-grid">
          {PAIN_POINTS.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                borderRadius: '24px',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
                cursor: 'default',
              }}
            >
              <span style={{
                position: 'absolute',
                top: '1.5rem',
                right: '2rem',
                fontFamily: 'var(--font-display)',
                fontSize: '5rem',
                fontWeight: 800,
                color: 'rgba(229, 48, 42, 0.06)',
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
              }}>
                {item.number}
              </span>

              <div style={{
                color: 'var(--red)',
                background: 'rgba(229, 48, 42, 0.08)',
                width: 'fit-content',
                padding: '0.9rem',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {item.icon}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--white)',
                  margin: 0,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: 'var(--muted)',
                  margin: 0,
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pain-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .pain-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .pain-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}