'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export default function MidCTA() {
  return (
    <section className="mid-cta" style={{
      background: 'linear-gradient(135deg, #0f1020 0%, #1a0a14 100%)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '5rem 0',
    }}>
      <div className="container">
        <motion.div
          className="mid-cta-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}
        >
          <h2 className="h2" style={{ fontFamily: 'var(--font-h)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>
            ¿Cómo sé si Crisva es el equipo correcto para mi proyecto?
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
            Agenda una llamada de 30 minutos. Sin compromiso, sin pitch agresivo. Te decimos con honestidad si podemos ayudarte — y cómo.
          </p>
          <div className="actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contacto" className="btn btn-primary">Conversemos</a>
            <a href="#casos" className="btn btn-ghost">Ver qué hemos construido</a>
          </div>
          <div className="availability" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', fontSize: '.82rem', color: 'var(--muted)', marginTop: '1.25rem' }}>
            <div className="avail-dot" style={{ width: '8px', height: '8px', background: '#2eb450', borderRadius: '50%' }} />
            <span>Disponibles para 2 proyectos nuevos · Inicio en abril 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
