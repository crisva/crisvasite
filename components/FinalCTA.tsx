'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import GlobeBackground from './GlobeBackground';

export default function FinalCTA() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xvgzogvq', { // Usar ID real de Formspree si se tiene
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="final-cta" style={{ backgroundColor: '#0c0c0c', position: 'relative', overflow: 'hidden' }}>
      {/* 3D Globe Background */}
      <GlobeBackground />

      {/* Dark Overlay for Contrast (Mismas propiedades que el Hero) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(12, 12, 12, 0.85)',
        zIndex: 5,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          className="final-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ position: 'relative', textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}
        >
          <span className="label">¿Listo para trascender?</span>
          <h2 className="h2" style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em', margin: '1rem 0 1.5rem' }}>
            Convierte tu producto en algo que <em style={{ fontStyle: 'normal', color: 'var(--red)' }}>importa.</em>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: '540px', marginLeft: 'auto', marginRight: 'auto' }}>
            Agenda una llamada de 30 minutos. Te escuchamos, entendemos tu reto y te decimos con honestidad cómo podemos ayudarte a trascender.
          </p>

          <div className="contact-form" style={{ background: '#000', border: '1px solid var(--border)', borderRadius: '16px', padding: 'clamp(2rem,4vw,3rem)', maxWidth: '540px', margin: '0 auto', textAlign: 'left', position: 'relative', zIndex: 10 }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h3 style={{ color: '#2eb450', marginBottom: '1rem' }}>¡Gracias! Mensaje recibido.</h3>
                <p style={{ color: 'var(--muted)' }}>Nos pondremos en contacto contigo en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '.4rem', marginBottom: '1rem' }}>
                  <label htmlFor="nombre" style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--muted)' }}>Nombre</label>
                  <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
                </div>
                
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '.4rem', marginBottom: '1rem' }}>
                  <label htmlFor="empresa" style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--muted)' }}>Empresa</label>
                  <input type="text" id="empresa" name="empresa" placeholder="Tu empresa o proyecto" required />
                </div>

                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '.4rem', marginBottom: '1rem' }}>
                  <label htmlFor="email" style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--muted)' }}>Email de trabajo</label>
                  <input type="email" id="email" name="email" placeholder="tu@empresa.com" required />
                </div>

                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '.4rem', marginBottom: '1rem' }}>
                  <label htmlFor="tipo" style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--muted)' }}>¿Qué tipo de proyecto tienes?</label>
                  <select id="tipo" name="tipo" defaultValue="" required>
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="branding">Branding completo (nueva marca o rebrand)</option>
                    <option value="product">Product Design end-to-end</option>
                    <option value="audit">UX Audit de producto existente</option>
                    <option value="retainer">Retainer mensual de diseño</option>
                    <option value="orientation">No sé todavía, necesito orientación</option>
                  </select>
                </div>

                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '.4rem', marginBottom: '1rem' }}>
                  <label htmlFor="mensaje" style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--muted)' }}>Cuéntanos brevemente tu reto</label>
                  <textarea id="mensaje" name="mensaje" placeholder="¿Cuál es el problema de diseño que necesitas resolver? ¿Qué quieres lograr con tu producto?" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit" disabled={status === 'loading'} style={{ width: '100%', padding: '1rem', fontSize: '1rem', fontWeight: 700, letterSpacing: '.02em', marginTop: '.5rem', justifyContent: 'center' }}>
                  {status === 'loading' ? 'Enviando...' : 'Enviar y agendar llamada →'}
                </button>
                
                {status === 'error' && <p style={{ color: 'var(--red)', fontSize: '.85rem', marginTop: '1rem', textAlign: 'center' }}>Hubo un error. Por favor intenta de nuevo.</p>}
                
                <p className="form-note" style={{ textAlign: 'center', fontSize: '.78rem', color: 'var(--muted)', marginTop: '.75rem' }}>
                  🔒 Sin spam. Sin pitch agresivo. Respondemos en menos de 24h.
                </p>
              </form>
            )}
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.5rem', fontSize: '.88rem', color: 'var(--muted)' }}>
            <div className="avail-dot" style={{ width: '8px', height: '8px', background: '#2eb450', borderRadius: '50%' }} />
            <span>Disponibles para nuevos proyectos · Lima, Perú · Remoto LATAM · c@crisva.com</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .final-cta { position: relative; overflow: hidden; padding: clamp(5rem, 10vw, 9rem) 0; }
        .form-group input, .form-group select, .form-group textarea {
          background: var(--surf2); border: 1px solid var(--border); border-radius: 8px;
          padding: .75rem 1rem; font-family: var(--font-b); font-size: .9rem;
          color: var(--text); outline: none; transition: border-color .2s;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--red); }
        .form-group textarea { resize: vertical; min-height: 100px; }
        .form-group select {
          cursor: pointer; appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238b8ea6' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 1rem center;
        }
        @media (max-width: 500px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
