'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, EASE } from '@/lib/animations';
import TypingHeading from './TypingHeading';

const TEAM = [
  { name: "Cristhian Valle", role: "Founder & Principal Designer", image: "/images/Team/Cristhian Valle CEO & Founder Principal Product Designer.png" },
  { name: "Sebastian Quintanilla", role: "UX Expert", image: "/images/Team/Sebastian Quintanilla UX Expert.png" },
  { name: "Miguel Corahua", role: "Product Designer Expert", image: "/images/Team/Miguel Corahua Product Designer Expert.png" },
  { name: "Christian Fujiki", role: "Brand Expert", image: "/images/Team/Christian Fujiki Brand Expert.png" },
  { name: "Belén Diaz", role: "Research Expert", image: "/images/Team/Belén Diaz Research Expert.png" },
  { name: "Tata Portal", role: "Art Experience Designer", image: "/images/Team/Tata Portal Art Experience Designer.png" },
  { name: "Geomar Ventura", role: "UI Expert", image: "/images/Team/Geomar Ventura UI Expert.png" },
  { name: "Brenda Campos", role: "Design Strategist", image: "/images/Team/Brenda Campos Design Strategist.png" },
  { name: "The crack", role: "Growth Expert", image: "" },
  { name: "Diana Coronado", role: "UX & UI Designer", image: "/images/Team/Diana Coronado UX & UI Designer.png" },
  { name: "Jamil Mori", role: "UX Designer", image: "/images/Team/Jamil Mori UX Designer.png" },
  { name: "Israel Valencia", role: "Design Entry", image: "/images/Team/Israel Valencia Design Entry.png" }
];

const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
};

export default function Team() {
  return (
    <section id="equipo" className="section">
      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .team-card {
          background: var(--surf1);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }
        .team-img-wrap {
          width: 100%;
          aspect-ratio: 1 / 1;
          background: var(--surf2);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .team-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .team-placeholder {
          font-size: 3rem;
          color: var(--red);
          font-weight: 800;
          opacity: 0.8;
        }
        .team-info {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .team-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--white);
          line-height: 1.3;
        }
        .team-role {
          font-size: 0.75rem;
          color: var(--red);
          font-weight: 600;
        }
        @media (max-width: 1024px) {
          .team-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 600px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.75rem; }
          .team-info { padding: 0.6rem; }
          .team-name { font-size: 0.75rem; }
          .team-role { font-size: 0.65rem; }
        }
      `}</style>

      <div className="container" style={{ maxWidth: '1400px' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto 5rem' }}
        >
          <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: '1.5rem' }}>
            Las personas que los hacen posible
          </span>
          <TypingHeading
            text="El equipo"
            className="display"
            style={{
              margin: '0 auto 1.5rem',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: 'var(--white)'
            }}
          />
          <p className="body-lg" style={{ color: 'var(--muted)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            11 especialistas senior. Cada uno con un rol definido dentro del pipeline de producto. Sin subcontratar, sin freelancers de relleno.
          </p>
        </motion.div>

        <motion.div
          className="team-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {TEAM.map((m, i) => (
            <motion.div key={i} variants={cardAnimation} className="team-card">
              <div className="team-img-wrap">
                {m.image ? (
                  <img src={m.image} alt={m.name} className="team-img" />
                ) : (
                  <span className="team-placeholder">?</span>
                )}
              </div>
              <div className="team-info">
                <span className="team-name">{m.name}</span>
                <span className="team-role">{m.role}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}