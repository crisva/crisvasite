'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import Link from 'next/link';
import TypingHeading from './TypingHeading';

const CASES = [
  {
    label: "FIRBID",
    type: "UX & UI",
    sector: "Fintech · Plataforma de subastas",
    title: "Firbid — De idea a producto listo para el mercado",
    desc: "Crisva tomó la plataforma de Firbid desde el prototipado hasta la auditoría UX&UI completa, poniéndola lista para salir al mercado por primera vez. Proceso end-to-end que cubrió flujo de registro, onboarding, sistema de pujas y transacción final.",
    metrics: [
      { num: "0 → 1", label: "MVP listo para mercado" },
      { num: "100%", label: "Proceso end-to-end cubierto" },
      { num: "8 sem", label: "De discovery a entrega final" }
    ],
    slug: "firbid"
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
    ],
    slug: "dynamo"
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
    ],
    slug: "fluyez"
  }
];

export default function Cases() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(860);
  
  useEffect(() => {
    const handleResize = () => {
      // Set to screen width minus padding on mobile, cap at 860 for desktop
      setCardWidth(window.innerWidth < 892 ? window.innerWidth - 32 : 860);
    };
    
    // Set initial size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const nextStep = () => {
    setIndex((prev) => (prev + 1) % CASES.length);
  };

  const prevStep = () => {
    setIndex((prev) => (prev - 1 + CASES.length) % CASES.length);
  };

  const gap = 32;

  return (
    <section id="casos" className="section" style={{ overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          className="cases-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto 6rem' }}
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

        <div className="carousel-viewport" style={{ 
          position: 'relative', 
          width: '100%',
          overflow: 'visible'
        }}>
          <motion.div
            className="carousel-track"
            animate={{ x: -index * (cardWidth + gap) }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              display: 'flex',
              gap: `${gap}px`,
              cursor: 'grab',
              paddingLeft: `calc(50% - ${cardWidth / 2}px)`,
              paddingRight: `calc(50% - ${cardWidth / 2}px)`,
            }}
            drag="x"
            onDragEnd={(_, info) => {
              const threshold = 100;
              if (info.offset.x < -threshold) nextStep();
              else if (info.offset.x > threshold) prevStep();
            }}
          >
            {CASES.map((item, i) => {
              const isActive = i === index;
              return (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{ 
                    opacity: isActive ? 1 : 0.3,
                    scale: isActive ? 1 : 0.9,
                    filter: isActive ? 'blur(0px)' : 'blur(2px)'
                  }}
                  transition={{ duration: 0.4 }}
                  className="case-card"
                  style={{
                    flex: `0 0 ${cardWidth}px`,
                    background: 'var(--surf1)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    overflow: 'hidden',
                    boxShadow: isActive ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : 'none',
                    pointerEvents: isActive ? 'auto' : 'none',
                    position: 'relative',
                  }}
                >
                  <Link href={`/casos/${item.slug}`} draggable={false} style={{ display: 'block', height: '100%', textDecoration: 'none', color: 'inherit' }}>
                    <div className="case-thumb" style={{
                      height: '220px',
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
                        fontSize: '3.5rem',
                        fontWeight: 800,
                        color: 'rgba(255,255,255,.1)',
                        letterSpacing: '-.02em',
                        textTransform: 'uppercase'
                      }}>{item.label}</div>
                    </div>

                    <div className="case-body" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
                      <div className="case-meta" style={{ display: 'flex', gap: '.6rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
                        <span className="case-type" style={{ fontSize: '.8rem', fontWeight: 700, background: 'var(--red-dim)', color: 'var(--red)', padding: '.4em 1em', borderRadius: '4px', letterSpacing: '.04em', textTransform: 'uppercase' }}>{item.type}</span>
                        <span className="case-sector" style={{ fontSize: '.8rem', background: 'var(--surf2)', color: 'var(--muted)', padding: '.4em 1em', borderRadius: '4px', letterSpacing: '.04em', textTransform: 'uppercase' }}>{item.sector}</span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, marginBottom: '1.2rem', lineHeight: 1.15 }}>{item.title}</h3>
                      <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>{item.desc}</p>
                      
                      <div className="case-metrics" style={{ display: 'flex', gap: 'clamp(1.5rem, 5vw, 4rem)', paddingTop: '2rem', borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
                        {item.metrics.map((m, j) => (
                          <div key={j} className="case-metric" style={{ flex: '1 1 min-content' }}>
                            <strong style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(1.8rem, 5vw, 2rem)', fontWeight: 800, color: 'var(--red)', display: 'block', lineHeight: 1 }}>{m.num}</strong>
                            <span style={{ fontSize: '.85rem', color: 'var(--muted)', marginTop: '.5rem', display: 'block', textTransform: 'uppercase', letterSpacing: '.04em' }}>{m.label}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'flex-start' }}>
                        <span className="btn btn-primary" style={{ padding: '0.8rem 2rem', borderRadius: '30px', fontWeight: 600 }}>
                          Ver caso de estudio &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Controls - Fixed to the viewport container */}
          <div className="carousel-nav" style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            width: '100vw',
            maxWidth: '1200px',
            display: 'flex', 
            justifyContent: 'space-between', 
            pointerEvents: 'none',
            zIndex: 20
          }}>
            <button 
              onClick={prevStep}
              className="carousel-btn prev"
              style={{
                pointerEvents: 'auto',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(23, 23, 23, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border)',
                color: 'var(--white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              ←
            </button>
            <button 
              onClick={nextStep}
              className="carousel-btn next"
              style={{
                pointerEvents: 'auto',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(23, 23, 23, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border)',
                color: 'var(--white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '.8rem', marginTop: '5rem' }}>
          {CASES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: i === index ? 'var(--red)' : 'var(--border)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .carousel-btn:hover:not(:disabled) {
          border-color: var(--red) !important;
          color: var(--red) !important;
          transform: scale(1.1);
        }
        @media (max-width: 1000px) {
          .case-card { flex: 0 0 85vw !important; margin-left: -42.5vw !important; }
          .carousel-track { margin-left: 42.5vw !important; }
          .carousel-btn { width: 50px !important; height: 50px !important; }
        }
        @media (max-width: 600px) {
          .case-body { padding: 2rem !important; }
          .case-metrics { gap: 2rem !important; }
          .carousel-nav { display: none !important; }
        }
      `}</style>
    </section>
  );
}
