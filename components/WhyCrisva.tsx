'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import TypingHeading from './TypingHeading';

type Score = 'yes' | 'no' | 'partial';
type ColKey = 'estudio' | 'consultora' | 'crisva';

const COLUMNS: { key: ColKey; name: string; short: string; tagline: string }[] = [
  { key: 'estudio', name: 'Estudio de diseño', short: 'Estudio', tagline: 'Ejecutan lo que se les pide' },
  { key: 'consultora', name: 'Consultora digital', short: 'Consultora', tagline: 'Recomiendan, no construyen' },
  { key: 'crisva', name: 'Crisva Design Lab', short: 'Crisva', tagline: 'Estrategia, ejecución y responsabilidad' },
];

const ROWS: { criterio: string; estudio: Score; consultora: Score; crisva: Score }[] = [
  { criterio: 'Estrategia antes del diseño', estudio: 'no', consultora: 'yes', crisva: 'yes' },
  { criterio: 'Ejecución real del producto', estudio: 'yes', consultora: 'no', crisva: 'yes' },
  { criterio: 'UX Research en cada decisión', estudio: 'no', consultora: 'partial', crisva: 'yes' },
  { criterio: 'Equipo senior sin subcontratar', estudio: 'partial', consultora: 'no', crisva: 'yes' },
  { criterio: 'Branding, UX, UI y dev en un equipo', estudio: 'no', consultora: 'no', crisva: 'yes' },
  { criterio: 'Acompañamiento post lanzamiento', estudio: 'no', consultora: 'no', crisva: 'yes' },
];

const OUTCOME: Record<ColKey, string> = {
  estudio: 'Entregables',
  consultora: 'Recomendaciones',
  crisva: 'Impacto de negocio',
};

function Mark({ score }: { score: Score }) {
  if (score === 'yes') {
    return (
      <span className="dot yes">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-label="Sí">
          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (score === 'no') {
    return (
      <span className="dot no">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-label="No">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  return <span className="partial">Parcial</span>;
}

export default function WhyCrisva() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 860);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const header = (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 4rem' }}
    >
      <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: '1.5rem' }}>
        Estrategia sin ejecución es un deck. Ejecución sin estrategia es un archivo.
      </span>
      <TypingHeading
        text={"¿Por qué\nCrisva?"}
        className="display"
        style={{
          margin: '0 auto 1.5rem',
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          color: 'var(--white)',
        }}
      />
      <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto' }}>
        No somos un proveedor más en tu lista. Somos el equipo que entra al problema contigo, ejecuta con criterio y responde por los resultados.
      </p>
    </motion.div>
  );

  const cta = (
    <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
      <a
        href="#contacto"
        className="btn-hero-primary bg-gradient"
        style={{
          padding: '16px 42px',
          borderRadius: '100px',
          fontSize: '17px',
          fontWeight: 600,
          letterSpacing: '0.01em',
          textDecoration: 'none',
          color: '#fff',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 10px 40px -10px rgba(253, 118, 0, 0.4)',
        }}
      >
        Conversemos sobre tu producto
      </a>
    </div>
  );

  return (
    <section id="por-que" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1150px' }}>
        {header}

        {isMobile ? (
          /* ---------- MOBILE: 3 columnas siempre visibles, sin scroll ---------- */
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="m-wrap"
          >
            <div className="m-legend">
              {COLUMNS.map((c) => (
                <span key={c.key} className={`m-leg-cell ${c.key === 'crisva' ? 'hero' : ''}`}>
                  {c.key === 'crisva' && <span className="m-star">★</span>}
                  {c.short}
                </span>
              ))}
            </div>

            {ROWS.map((row, i) => (
              <div key={i} className="m-block">
                <p className="m-crit">{row.criterio}</p>
                <div className="m-marks">
                  <span className="m-cell"><Mark score={row.estudio} /></span>
                  <span className="m-cell"><Mark score={row.consultora} /></span>
                  <span className="m-cell hero"><Mark score={row.crisva} /></span>
                </div>
              </div>
            ))}

            <div className="m-block m-block-out">
              <p className="m-crit"><strong>Miden el éxito en</strong></p>
              <div className="m-marks">
                <span className="m-cell m-out">{OUTCOME.estudio}</span>
                <span className="m-cell m-out">{OUTCOME.consultora}</span>
                <span className="m-cell hero m-out m-win">{OUTCOME.crisva}</span>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ---------- DESKTOP: tabla ---------- */
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="d-wrap"
          >
            <table>
              <thead>
                <tr>
                  <th className="corner" />
                  {COLUMNS.map((c) => (
                    <th key={c.key} className={c.key === 'crisva' ? 'hero' : ''}>
                      {c.key === 'crisva' && <span className="badge">Nuestro modelo</span>}
                      <span className="name">{c.name}</span>
                      <span className="tag">{c.tagline}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={i}>
                    <td className="crit">{row.criterio}</td>
                    <td><Mark score={row.estudio} /></td>
                    <td><Mark score={row.consultora} /></td>
                    <td className="hero"><Mark score={row.crisva} /></td>
                  </tr>
                ))}
                <tr className="last">
                  <td className="crit"><strong>Miden el éxito en</strong></td>
                  <td className="out">{OUTCOME.estudio}</td>
                  <td className="out">{OUTCOME.consultora}</td>
                  <td className="hero out win">{OUTCOME.crisva}</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        )}

        {cta}
      </div>

      <style jsx>{`
        /* ================= DESKTOP ================= */
        .d-wrap {
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          background: var(--bg2);
        }
        table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
        }
        th,
        td {
          padding: 1.35rem 1rem;
          text-align: center;
          vertical-align: middle;
          border-bottom: 1px solid var(--border);
        }
        thead th {
          padding: 2.2rem 1rem 1.7rem;
          vertical-align: bottom;
        }
        .corner {
          width: 36%;
        }
        tbody tr {
          transition: background 0.2s;
        }
        tbody tr:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        th.hero,
        td.hero {
          background: rgba(229, 48, 42, 0.06);
          border-left: 1px solid rgba(229, 48, 42, 0.22);
          border-right: 1px solid rgba(229, 48, 42, 0.22);
        }
        th.hero {
          border-top: 2px solid var(--red);
        }
        .name {
          display: block;
          font-family: var(--font-h);
          font-size: 1rem;
          font-weight: 700;
          color: var(--white);
          line-height: 1.3;
          margin-bottom: 0.4rem;
        }
        .tag {
          display: block;
          font-size: 0.72rem;
          color: var(--muted);
          line-height: 1.45;
          font-weight: 400;
        }
        .crit {
          text-align: left;
          font-size: 0.9rem;
          color: var(--muted);
          line-height: 1.5;
          padding-left: 1.85rem;
        }
        .crit strong {
          color: var(--white);
          font-weight: 700;
        }
        tr.last td {
          border-bottom: none;
          padding-top: 1.8rem;
          padding-bottom: 1.8rem;
        }
        .out {
          font-size: 0.8rem;
          color: var(--muted);
          font-weight: 600;
          line-height: 1.4;
        }
        .win {
          color: var(--red);
          font-size: 0.92rem;
          font-weight: 800;
        }

        /* ================= MOBILE ================= */
        .m-wrap {
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          background: var(--bg2);
        }
        .m-wrap * {
          box-sizing: border-box;
        }
        .m-legend,
        .m-marks {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .m-legend {
          border-bottom: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.02);
        }
        .m-leg-cell {
          padding: 0.9rem 0.35rem;
          text-align: center;
          font-size: 0.66rem;
          font-weight: 700;
          color: var(--muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 1.25;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.2rem;
          min-width: 0;
        }
        .m-leg-cell.hero,
        .m-cell.hero {
          background: rgba(229, 48, 42, 0.07);
          box-shadow: inset 1px 0 0 rgba(229, 48, 42, 0.22);
        }
        .m-leg-cell.hero {
          color: var(--red);
          box-shadow: inset 1px 0 0 rgba(229, 48, 42, 0.22), inset 0 2px 0 var(--red);
        }
        .m-star {
          font-size: 0.55rem;
          line-height: 1;
        }
        .m-block {
          border-bottom: 1px solid var(--border);
        }
        .m-block:last-child {
          border-bottom: none;
        }
        .m-crit {
          padding: 1.05rem 1.25rem 0.7rem;
          font-size: 0.86rem;
          color: var(--muted);
          line-height: 1.45;
          margin: 0;
          text-align: left;
        }
        .m-crit strong {
          color: var(--white);
          font-weight: 700;
        }
        .m-cell {
          padding: 0.35rem 0.3rem 1.05rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }
        .m-block-out .m-crit {
          padding-top: 1.35rem;
        }
        .m-block-out .m-cell {
          padding-bottom: 1.5rem;
          align-items: flex-start;
        }
        .m-out {
          font-size: 0.68rem;
          color: var(--muted);
          font-weight: 600;
          text-align: center;
          line-height: 1.3;
          word-break: break-word;
        }
        .m-win {
          color: var(--red);
          font-weight: 800;
          font-size: 0.72rem;
        }

        /* ================= COMPARTIDO ================= */
        .badge {
          display: inline-block;
          background: var(--red);
          color: #fff;
          font-size: 0.56rem;
          font-weight: 800;
          padding: 0.3rem 0.7rem;
          border-radius: 100px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.85rem;
          white-space: nowrap;
        }
        .dot {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .dot.yes {
          background: rgba(46, 180, 80, 0.14);
          color: #2eb450;
        }
        .dot.no {
          background: rgba(255, 255, 255, 0.035);
          color: rgba(255, 255, 255, 0.2);
        }
        .partial {
          display: inline-block;
          font-size: 0.52rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #e0a63a;
          background: rgba(224, 166, 58, 0.1);
          border: 1px solid rgba(224, 166, 58, 0.28);
          border-radius: 100px;
          padding: 0.32rem 0.55rem;
          text-transform: uppercase;
          white-space: nowrap;
          max-width: 100%;
        }
      `}</style>
    </section>
  );
}