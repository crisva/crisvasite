'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, EASE } from '@/lib/animations';

import TypingHeading from './TypingHeading';

const TEAM = [
  { initials: "SQ", name: "Sebastian Quintanilla", role: "UX Expert", dept: "Experience Design", image: "/images/Team/Sebastian Quintanilla UX Expert.png" },
  { initials: "MC", name: "Miguel Corahua", role: "Product Designer Expert", dept: "Product Design", image: "/images/Team/Miguel Corahua Product Designer Expert.png" },
  { initials: "CF", name: "Christian Fujiki", role: "Brand Expert", dept: "Branding & Strategy", image: "/images/Team/Christian Fujiki Brand Expert.png" },
  { initials: "BD", name: "Belén Diaz", role: "Research Expert", dept: "User Research", image: "/images/Team/Belén Diaz Research Expert.png" },
  { initials: "TP", name: "Tata Portal", role: "Art Experience Designer", dept: "Art Direction", image: "/images/Team/Tata Portal Art Experience Designer.png" },
  { initials: "GV", name: "Geomar Ventura", role: "UI Expert", dept: "Interface Design", image: "/images/Team/Geomar Ventura UI Expert.png" },
  { initials: "BC", name: "Brenda Campos", role: "Design Strategist", dept: "Design Strategy", image: "/images/Team/Brenda Campos Design Strategist.png" },
  { initials: "LP", name: "Lucas Patanó", role: "Growth Expert", dept: "Growth & Product", image: "/images/Team/Lucas Patanó Growth Expert.png" },
  { initials: "DC", name: "Diana Coronado", role: "UX & UI Designer", dept: "Product Design", image: "/images/Team/Diana Coronado UX & UI Designer.png" },
  { initials: "JM", name: "Jamil Mori", role: "UX Designer", dept: "Interaction Design", image: "/images/Team/Jamil Mori UX Designer.png" },
  { initials: "IV", name: "Israel Valencia", role: "Design Entry", dept: "Design Operations", image: "/images/Team/Israel Valencia Design Entry.png" }
];

const cardAnimation = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: EASE }
  }
};

export default function Team() {
  return (
    <section id="equipo" className="section">
      <div className="container" style={{ maxWidth: '1400px' }}>
        <motion.div
          className="team-header"
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

        {/* Founder Card */}
        <motion.div
          className="team-founder"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '3rem',
            alignItems: 'center',
            background: 'var(--surf1)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '2.5rem',
            marginBottom: '2rem',
          }}
        >
          <div className="founder-avatar" style={{
            aspectRatio: '1',
            background: 'var(--surf2)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            border: '1px solid var(--border)',
          }}>
            <img 
              src="/images/Team/Cristhian Valle CEO & Founder Principal Product Designer.png" 
              alt="Cristhian Valle" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          <div className="founder-content">
            <div className="founder-label" style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--red)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.5rem' }}>Founder & Principal Designer</div>
            <h3 className="founder-name" style={{ fontFamily: 'var(--font-h)', fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-.02em', marginBottom: '.25rem' }}>Cristhian Valle</h3>
            <div className="founder-role" style={{ fontSize: '.9rem', color: 'var(--muted)', marginBottom: '1rem' }}>CEO · Product Designer · Entrepreneur · Podcaster</div>
            <p className="founder-bio" style={{ fontSize: '.92rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              +10 años diseñando y construyendo productos digitales de la estrategia a la ejecución. He trabajado con startups y empresas en fintech, educación y e-commerce. Me mueve una idea simple: el diseño tiene que mejorar la vida de las personas y sostenerse como producto escalable.
            </p>
            <div className="founder-roles" style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
              {['Builder', 'Mentor (Hub Udep)', 'Podcaster (Hackeando Productos)', '10+ años'].map((role, i) => (
                <span key={i} className="role-badge" style={{ background: 'var(--surf2)', border: '1px solid var(--border)', borderRadius: '6px', padding: '.3em .75em', fontSize: '.78rem', fontWeight: 600, color: 'var(--text)' }}>{role}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
           className="team-grid"
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.05 }}
           style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}
         >
           {TEAM.map((m, i) => (
            <motion.div
              key={i}
              variants={cardAnimation}
              className="team-member"
              style={{
                flex: '0 1 calc(25% - 1rem)',
                minWidth: '220px',
                background: 'var(--surf1)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1rem',
                textAlign: 'center',
                transition: 'border-color .25s, transform .2s',
              }}
            >
              <div className="member-image" style={{
                width: '100%',
                aspectRatio: '1',
                borderRadius: '12px',
                background: 'var(--surf2)',
                overflow: 'hidden',
                marginBottom: '1rem',
                border: '1px solid var(--border)'
              }}>
                <img 
                  src={m.image} 
                  alt={m.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div className="member-name" style={{ fontSize: '.95rem', fontWeight: 700, marginBottom: '.2rem' }}>{m.name}</div>
              <div className="member-role" style={{ fontSize: '.8rem', color: 'var(--red)', fontWeight: 600 }}>{m.role}</div>
              <div className="member-dept" style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: '.15rem' }}>{m.dept}</div>
            </motion.div>
           ))}
        </motion.div>
      </div>

      <style jsx>{`
        .team-member {
          flex: 0 1 calc(25% - 1rem);
        }
        @media (max-width: 1000px) {
          .team-member { flex: 0 1 calc(33.33% - 1rem) !important; }
        }
        @media (max-width: 800px) {
          .team-member { flex: 0 1 calc(50% - 1rem) !important; }
        }
        @media (max-width: 900px) {
          .team-founder { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 500px) {
          .team-member { flex: 1 1 100% !important; }
        }
        :global(.team-member:hover) {
          border-color: var(--border2) !important;
        }
      `}</style>
    </section>
  );
}
