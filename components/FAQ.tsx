'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

import TypingHeading from './TypingHeading';

const FAQS = [
  {
    q: "¿Cuánto tiempo toma un proyecto típico?",
    a: "Un proceso end-to-end completo (Branding + UX + UI) toma entre 8 y 12 semanas. Un UX Audit toma 2–3 semanas. Un branding sin producto digital, 4–6 semanas. Todo depende del alcance acordado desde el día 1."
  },
  {
    q: "¿Trabajan con startups en etapa temprana?",
    a: "Sí, es nuestro cliente más común. Tenemos paquetes adaptados a startups con presupuesto ajustado: priorizamos lo esencial para que tu MVP sea coherente y pueda validarse con usuarios reales sin gastar en lo que todavía no necesitas."
  },
  {
    q: "¿Solo trabajan con empresas peruanas?",
    a: "No. Trabajamos en modo remoto con empresas de toda LATAM y también con organizaciones internacionales (como ABA-ROLI) y corporaciones globales (como HP). El proceso funciona igual de bien en remoto."
  },
  {
    q: "¿Entregan código o solo diseño?",
    a: "Entregamos diseño completo listo para desarrollo: design system, assets exportados, guías de estilo y specs técnicas para el equipo de desarrollo. Podemos recomendar partners de desarrollo de confianza si los necesitas."
  },
  {
    q: "¿Cómo es el proceso de trabajo día a día?",
    a: "Trabajamos en sprints de diseño con check-ins semanales. Usamos Figma para diseño, Notion para gestión del proyecto y Slack o WhatsApp para comunicación ágil. El cliente siempre tiene visibilidad total del avance."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="section" style={{ background: 'var(--surf1)' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <motion.div
          className="faq-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto 5rem' }}
        >
          <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: '1.5rem' }}>
            Las objeciones más comunes, respondidas con honestidad.
          </span>
          <TypingHeading 
            text={"Preguntas\nfrecuentes"} 
            className="display"
            style={{ 
              margin: '0 auto 1.5rem', 
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: 'var(--white)',
              whiteSpace: 'pre-line'
            }}
          />
        </motion.div>

        <motion.div
          className="faq-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              className="faq-item"
              variants={fadeUp}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.75rem',
              }}
            >
              <h4 style={{ fontFamily: 'var(--font-h)', fontSize: '1rem', fontWeight: 700, marginBottom: '.75rem', display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                <div className="faq-q-icon" style={{
                  width: '24px',
                  height: '24px',
                  background: 'var(--red-dim)',
                  color: 'var(--red)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '.75rem',
                  fontWeight: 700,
                  flexShrink: 0,
                  marginTop: '.05rem'
                }}>?</div>
                {faq.q}
              </h4>
              <p style={{ fontSize: '.9rem', color: 'var(--muted)', lineHeight: 1.7, paddingLeft: '2.25rem' }}>{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .faq-grid { 
            grid-template-columns: 1fr; 
          }
        }
      `}</style>
    </section>
  );
}
