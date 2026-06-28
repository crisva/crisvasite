'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import VideoBackground from './VideoBackground';

export default function FinalCTA() {
  const waLink = "https://wa.me/51964255633?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20con%20Crisva.";

  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ['initNamespace', namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    const Cal = (window as any).Cal;
    Cal('init', '30min', { origin: 'https://app.cal.com' });
    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;
    Cal.ns['30min']('ui', {
      cssVarsPerTheme: { light: { 'cal-brand': '#0C0C0C' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }, []);

  return (
    <section
      id="contacto"
      style={{
        backgroundColor: '#0c0c0c',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(5rem, 10vw, 9rem) 0',
      }}
    >
      <VideoBackground />

      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(12, 12, 12, 0.85)',
        zIndex: 5,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}
        >
          <span className="label">Listo para trascender?</span>

          <h2
            className="h2"
            style={{
              fontFamily: 'var(--font-h)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-.02em',
              margin: '1rem 0 1.5rem',
            }}
          >
            Convierte tu producto en algo que{' '}
            <em style={{ fontStyle: 'normal' }}>importa.</em>
          </h2>

          <p style={{
            color: 'var(--muted)',
            fontSize: '1.05rem',
            maxWidth: '500px',
            margin: '0 auto 3rem',
            lineHeight: 1.7,
          }}>
            30 minutos. Te escuchamos, entendemos tu reto y te decimos con honestidad si podemos ayudarte.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            {/* Cal.com modal button */}
            <button
              data-cal-namespace="30min"
              data-cal-link="cristhian-valle-xoyiqb/30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '1rem 2.5rem',
                background: 'var(--red)',
                color: '#fff',
                borderRadius: '100px',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '.01em',
                width: '100%',
                maxWidth: '360px',
                justifyContent: 'center',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Agendar llamada de 30 min
            </button>

            {/* WhatsApp */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '1rem 2.5rem',
                background: 'transparent',
                color: '#fff',
                border: '1px solid var(--border)',
                borderRadius: '100px',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                letterSpacing: '.01em',
                width: '100%',
                maxWidth: '360px',
                justifyContent: 'center',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escribir por WhatsApp
            </a>
          </div>

          <div style={{ marginTop: '2.5rem', fontSize: '.82rem', color: 'var(--muted)' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#2eb450', borderRadius: '50%', marginRight: '.5rem', verticalAlign: 'middle', position: 'relative', top: '-1px' }} />
            Disponibles para nuevos proyectos · Lima, Peru · Remoto LATAM · c@crisva.com
          </div>
        </motion.div>
      </div>
    </section>
  );
}