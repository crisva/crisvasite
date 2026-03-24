'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BoxIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
    <path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
  </svg>
);

const PaletteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1s-.5-.8-.5-1.2c0-.9.7-1.6 1.6-1.6H17c2.8 0 5-2.2 5-5 0-5.5-4.5-10-10-10Z"/>
  </svg>
);

const CompassIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);

const BarChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

const SERVICES = [
  {
    icon: <BoxIcon />,
    label: "Diseño de\nProducto",
    title: "Product\nDesign",
    image: "/images/services/product-design.png",
    desc: "UX, UI e investigación integrados para crear productos que las personas usan y que los negocios escalan.",
    includes: [
      "UX Research y User Flows",
      "Wireframes y Prototipado",
      "Design System Completo",
      "UI Final Pixel-Perfect"
    ]
  },
  {
    icon: <PaletteIcon />,
    label: "Identidad\nVisual",
    title: "Branding",
    image: "/images/services/branding.png",
    desc: "Identidades que van más allá del logo. Marcas que posicionan, conectan y convierten en cada touchpoint.",
    includes: [
      "Estrategia de Marca",
      "Logotipo y Tipografía",
      "Manual de Identidad",
      "Brand Book Digital"
    ]
  },
  {
    icon: <CompassIcon />,    label: "Visión\nEstratégica",
    title: "Design\nStrategy",
    image: "/images/services/strategy.png",
    desc: "Claridad antes de ejecutar. Estrategia de diseño alineada al negocio, optimizando cada decisión táctica.",
    includes: [
      "Diagnóstico de Producto",
      "Mapa de Oportunidades",
      "KPIs de Diseño",
      "Product Roadmap"
    ]
  },
  {
    icon: <BarChartIcon />,
    label: "Optimización",
    title: "Growth\nDesign",
    image: "/images/services/growth.png",
    desc: "Diseño orientado a resultados: más conversión, más retención e impacto medible en los números.",
    includes: [
      "Auditoría UX con Datos",
      "A/B Testing de Interfaces",
      "Optimización Onboarding",
      "Métricas de Impacto"
    ]
  },
  {
    icon: <CodeIcon />,
    label: "Producto\nVivo",
    title: "Desarrollo\nWeb",
    image: "/images/services/development.png",
    desc: "Del diseño al código real. Implementamos interfaces pixel-perfect sin pérdida de calidad técnica.",
    includes: [
      "Front-end Pixel-Perfect",
      "Landing Pages de Impacto",
      "React / Next.js Stack",
      "SEO y Performance"
    ]
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="servicios" className="section" style={{ background: 'var(--bg)', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1600px' }}>
        <header style={{ marginBottom: '6rem', textAlign: 'center' }}>
          <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: '1.5rem' }}>
            Modelos de ejecución a medida.
          </span>
          <h2 className="display" style={{ margin: 0, textTransform: 'uppercase' }}>Nuestros Servicios</h2>
        </header>

        <div className="accordion-wrapper" style={{
          display: 'flex',
          gap: '2rem',
          height: '750px',
          width: '100%',
        }}>
          {SERVICES.map((service, idx) => (
            <ServiceCard 
              key={idx}
              service={service}
              isActive={activeIndex === idx}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>

        <p style={{ color: 'var(--muted)', fontSize: '15px', textAlign: 'center', marginTop: '4rem' }}>
          ¿Necesitas varias disciplinas? Consulta por nuestro <em>Retainer Mensual</em> con equipo senior a demanda.
        </p>
      </div>

      <style jsx>{`
        .service-card-header {
          flex-direction: column;
        }
        .service-accordion-card.active .service-card-header {
          flex-direction: row;
        }
        @media (max-width: 1024px) {
          .accordion-wrapper {
            flex-direction: column !important;
            height: auto !important;
            gap: 1.5rem !important;
          }
          :global(.service-accordion-card) {
            flex: none !important;
            width: 100% !important;
            min-height: 120px !important;
            height: auto !important;
            padding: 2.5rem 1.5rem !important;
            overflow: visible !important;
          }
          :global(.service-accordion-card > div) {
            height: auto !important;
          }
          :global(.service-accordion-card.active) {
            padding: 3rem 1.5rem 6rem !important;
          }
          .service-card-header,
          .service-accordion-card.active .service-card-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }
          :global(.service-accordion-card h3) {
            font-size: clamp(2rem, 8vw, 2.5rem) !important;
            line-height: 1.1 !important;
          }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service, isActive, onClick }: any) {
  return (
    <motion.div
      onClick={onClick}
      layout
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        flex: isActive ? '4 0 0' : '1 0 0',
        background: isActive ? 'var(--bg2)' : 'var(--bg)',
        border: isActive ? '1px solid rgba(229, 48, 42, 0.4)' : '1px solid var(--border)',
        borderRadius: '32px',
        padding: isActive ? '5rem' : '3rem',
        cursor: isActive ? 'default' : 'pointer',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
      }}
      className="service-accordion-card"
    >
      {/* Background Image Wrapper (Visible when active) */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
            }}
          >
            <img 
              src={service.image} 
              alt={service.title} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%)',
                opacity: 0.35,
              }}
            />
            {/* Red Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'var(--red)',
              opacity: 0.25,
              mixBlendMode: 'multiply',
            }} />
            {/* Dark Gradient Overlay for text readability */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(12, 12, 12, 0.4) 0%, rgba(12, 12, 12, 0.9) 100%)',
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {/* Collapsed/Header View */}
        <div 
          className="service-card-header"
          style={{
            display: 'flex',
            flexDirection: isActive ? 'row' : 'column',
            alignItems: isActive ? 'center' : 'center',
            gap: isActive ? '2rem' : '3rem',
            width: '100%',
          }}
        >
          <div style={{
            background: isActive ? 'var(--red)' : 'rgba(255,255,255,0.05)',
            color: isActive ? '#fff' : 'var(--red)',
            padding: '1rem',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            flexShrink: 0
          }}>
            {service.icon}
          </div>

          <div style={{ 
            flex: 1,
            display: 'flex',
            flexDirection: isActive ? 'column' : 'column',
            alignItems: isActive ? 'flex-start' : 'center',
            justifyContent: isActive ? 'flex-start' : 'flex-end',
            gap: isActive ? '0.5rem' : '1.5rem',
            writingMode: isActive ? 'horizontal-tb' : 'vertical-lr',
            transform: isActive ? 'none' : 'rotate(180deg)',
            transition: 'all 0.6s ease'
          }}>
            <span className="label" style={{ 
              fontSize: isActive ? '12px' : '14px', 
              color: isActive ? 'rgba(255,255,255,0.6)' : 'var(--muted)', 
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              whiteSpace: 'pre-line'
            }}>
              {service.label}
            </span>
            <h3 className="h2" style={{ 
              margin: 0, 
              whiteSpace: 'pre-line',
              fontSize: isActive ? '2.8rem' : '2rem',
              fontWeight: 600,
              lineHeight: 1.1,
              color: isActive ? 'var(--white)' : 'var(--text)'
            }}>
              {service.title}
            </h3>
          </div>
        </div>

        {/* Expanded Detail View */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '3rem',
                height: '100%',
                justifyContent: 'flex-start'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <p style={{ color: 'var(--white)', opacity: 0.9, fontSize: '18px', lineHeight: 1.6, maxWidth: '600px' }}>
                  {service.desc}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {service.includes.map((item: string, i: number) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '16px', color: 'var(--white)' }}>
                      <div style={{ width: '8px', height: '8px', background: 'var(--red)', borderRadius: '50%' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .service-accordion-card:hover {
          border-color: ${isActive ? 'rgba(229, 48, 42, 0.6)' : 'rgba(240, 237, 232, 0.3)'};
        }
      `}</style>
    </motion.div>
  );
}
