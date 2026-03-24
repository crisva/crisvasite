'use client';

import { motion, Variants } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import TypingHeading from './TypingHeading';

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const itemFade: any = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

interface CompareCardProps {
  title: string;
  subtitle: string;
  items: string[];
  isFeatured?: boolean;
  isNegative?: boolean;
}

function CompareCard({ title, subtitle, items, isFeatured, isNegative }: CompareCardProps) {
  return (
    <motion.div
      className={`compare-card ${isFeatured ? 'featured' : ''}`}
      variants={isFeatured ? staggerContainer : {}}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      style={{
        background: isFeatured 
          ? 'linear-gradient(180deg, var(--bg3) 0%, rgba(229, 48, 42, 0.03) 100%)' 
          : 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: '24px',
        padding: '3rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
        position: 'relative',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isFeatured 
          ? '0 0 50px -12px rgba(229, 48, 42, 0.35), 0 30px 60px -20px rgba(0, 0, 0, 0.6)' 
          : 'none',
        borderColor: isFeatured ? 'rgba(229, 48, 42, 0.5)' : 'var(--border)',
        zIndex: isFeatured ? 2 : 1,
      }}
    >
      <motion.div className="card-header" variants={isFeatured ? itemFade : {}}>
        {isFeatured && (
          <span className="badge" style={{ 
            display: 'inline-block', 
            background: 'var(--red)', 
            color: '#fff', 
            fontSize: '10px', 
            fontWeight: 800, 
            padding: '4px 10px', 
            borderRadius: '6px', 
            marginBottom: '1rem', 
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            CRISVA DESIGN LAB
          </span>
        )}
        <h4 style={{ 
          fontFamily: 'var(--font-display)', 
          fontSize: '1.4rem', 
          fontWeight: 600, 
          color: 'var(--white)',
          lineHeight: 1.2
        }}>
          {title}
        </h4>
        <p style={{ 
          fontSize: '0.9rem', 
          color: 'var(--muted)', 
          marginTop: '0.75rem',
          fontWeight: 400
        }}>
          {subtitle}
        </p>
      </motion.div>

      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {items.map((text, i) => (
          <motion.div 
            key={i} 
            className="compare-row" 
            variants={isFeatured ? itemFade : {}}
            style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '1rem',
            }}
          >
            <div className="icon-wrapper" style={{ 
              color: isNegative ? 'var(--red)' : '#2eb450',
              marginTop: '4px',
              opacity: 0.9
            }}>
              {isNegative ? <XIcon /> : <CheckIcon />}
            </div>
            <p style={{ 
              fontSize: '0.95rem', 
              color: 'var(--muted)', 
              lineHeight: 1.5,
              fontWeight: 300
            }}>
              {text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function WhyCrisva() {
  return (
    <section id="por-que" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        <motion.div
          className="why-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto 5rem' }}
        >
          <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: '1.5rem' }}>
            No somos un estudio. Tampoco una consultora.
          </span>
          <TypingHeading 
            text="¿Por qué Crisva?" 
            className="display"
            style={{ 
              margin: '0 auto 1.5rem', 
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: 'var(--white)'
            }}
          />
          <p className="body-lg" style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
            Somos el equipo que tus clientes recuerdan como socios estratégicos. <br className="hide-mobile" />
            Esto es lo que nos hace diferentes del resto.
          </p>
        </motion.div>

        <motion.div
          className="compare-grid"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.5rem',
          }}
        >
          <CompareCard 
            title="Estudio de diseño"
            subtitle="Ejecutan solo lo que se les pide."
            isNegative
            items={[
              "Branding, UX y UI como silos separados.",
              "Entregan y se desvinculan del proyecto pronto.",
              "Diseñan sin investigar a los usuarios reales.",
              "Sin verdadera responsabilidad sobre el éxito.",
              "KPI enfocado en archivos entregados."
            ]}
          />

          <CompareCard 
            title="Socio estratégico"
            subtitle="Co-creamos desde el primer momento."
            isFeatured
            items={[
              "Proceso end-to-end: Branding, UX y UI coherente.",
              "Acompañamos el proyecto hasta que ve la luz.",
              "UX Research integrado como pilar fundamental.",
              "Co-creación humana: eres parte del proceso.",
              "KPI enfocado en el impacto medible del negocio."
            ]}
          />

          <CompareCard 
            title="Consultora digital"
            subtitle="Estrategia sin capacidad de ejecución."
            isNegative
            items={[
              "Cobran por hora sin garantía de entregable.",
              "Subcontratan el diseño a terceros externos.",
              "Consultores generalistas, no especialistas UX.",
              "Decks y recomendaciones, no productos reales.",
              "Sin identidad profunda ni voz de marca propia."
            ]}
          />
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .compare-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .hide-mobile { display: none; }
        }
      `}</style>
    </section>
  );
}
