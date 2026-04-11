'use client';

import { motion, Variants } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import TypingHeading from './TypingHeading';

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
  image?: string;
  index: number;
}

function CompareCard({ title, subtitle, items, isFeatured, isNegative, image, index }: CompareCardProps) {
  return (
    <motion.div
      className={`compare-card ${isFeatured ? 'featured' : ''}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      style={{
        backgroundColor: isFeatured ? 'var(--bg3)' : 'var(--bg2)',
        backgroundImage: isFeatured
          ? 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(229, 48, 42, 0.1) 100%)'
          : 'none',
        border: '1px solid var(--border)',
        borderRadius: '24px',
        padding: '0',
        overflow: 'hidden',
        position: 'sticky',
        top: `calc(10vh + ${index * 20}px)`,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isFeatured
          ? '0 0 50px -12px rgba(229, 48, 42, 0.35), 0 30px 60px -20px rgba(0, 0, 0, 0.6)'
          : '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        borderColor: isFeatured ? 'rgba(229, 48, 42, 0.5)' : 'var(--border)',
        zIndex: 10 + index,
      }}
    >
      <div className="compare-card-inner">
        {/* Text Content */}
        <div className="compare-card-text" style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center', textAlign: 'center' }}>
          <motion.div className="card-header" variants={itemFade} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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

          <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
            {items.map((text, i) => (
              <motion.div
                key={i}
                className="compare-row"
                variants={itemFade}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  gap: '1rem',
                  textAlign: 'left'
                }}
              >
                <div className="icon-wrapper" style={{
                  color: isNegative ? 'var(--red)' : '#2eb450',
                  marginTop: '4px',
                  opacity: 0.9,
                  flexShrink: 0
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
        </div>

        {/* Image */}
        {image && (
          <div className="compare-card-image">
            <img
              src={image}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        )}
      </div>

      <style jsx>{`
        .compare-card-inner {
          display: flex;
          flex-direction: row;
          align-items: stretch;
        }
        .compare-card-text {
          flex: 1;
          min-width: 0;
        }
        .compare-card-image {
          flex: 0 0 320px;
          min-height: 300px;
        }
        @media (max-width: 768px) {
          .compare-card-inner {
            flex-direction: column-reverse;
          }
          .compare-card-image {
            flex: none;
            height: 220px;
          }
        }
      `}</style>
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
            Hay estudios que entregan. Consultoras que recomiendan. Nosotros hacemos las dos cosas.
          </span>
          <TypingHeading
            text={"¿Por qué\nCrisva?"}
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
            No somos un proveedor más en tu lista. Somos el equipo que entra al problema contigo,  ejecuta con criterio y responde por los resultados.
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
          }}
        >
          <CompareCard
            index={0}
            title="Estudio de diseño"
            subtitle="Ejecutan lo que se les pide. Nada más."
            isNegative
            image="/images/Servicios/ Estudio de diseño.png"
            items={[
              "Diseño sin estrategia: entregan lo que pides, no lo que necesitas.",
              "Se desconectan al cerrar el proyecto. Sin seguimiento real.",
              "Priorizan la estética sobre el impacto en el usuario.",
              "Miden éxito en archivos entregados, no en resultados de negocio.",
              "Silos entre branding, UX y UI que generan inconsistencia."
            ]}
          />

          <CompareCard
            index={1}
            title="Consultora digital"
            subtitle="Estrategia brillante. Ejecución, ninguna."
            isNegative
            image="/images/Servicios/Consultora digital.png"
            items={[
              "Cobran por hora sin garantía de entregable real.",
              "Subcontratan el diseño: pierdes control y coherencia.",
              "Generalistas que cobran como especialistas senior.",
              "Decks detallados que nadie sabe cómo implementar.",
              "Sin piel en el juego: si no funciona, no es su problema."
            ]}
          />

          <CompareCard
            index={2}
            title="Socio estratégico"
            subtitle="Estrategia + ejecución + responsabilidad."
            isFeatured
            image="/images/Servicios/Socio estratégico.png"
            items={[
              "Proceso end-to-end: estrategia, branding, UX y UI en un solo equipo.",
              "Acompañamos desde el diagnóstico hasta que el producto ve la luz.",
              "UX Research integrado como base de cada decisión de diseño.",
              "Co-creación real: tú defines el rumbo, nosotros lo hacemos posible.",
              "Medimos éxito en impacto de negocio, no en entregables."
            ]}
          />
        </motion.div>
      </div>

      <style jsx>{`
        .compare-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        @media (max-width: 1024px) {
          .hide-mobile { display: none; }
        }
      `}</style>
    </section>
  );
}