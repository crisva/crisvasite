'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const LOGOS = [
  '/images/Brands/image 6.png',
  '/images/Brands/image 7.png',
  '/images/Brands/image 8.png',
  '/images/Brands/image 9.png',
  '/images/Brands/image 10.png',
  '/images/Brands/image 11.png',
  '/images/Brands/image 12.png',
  '/images/Brands/image 14.png',
  '/images/Brands/image 15.png',
  '/images/Brands/image 16.png',
  '/images/Brands/image 17.png',
];

export default function LogosBar() {
  return (
    <section className="logos-bar" style={{
      padding: '5rem 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'rgba(255, 255, 255, 0.01)',
      overflow: 'hidden'
    }}>
      <div style={{ width: '100%', maxWidth: '1800px', margin: '0 auto' }}>
        <motion.p
          className="logos-label"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 500,
            color: 'var(--muted)',
            marginBottom: '4.5rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-body)'
          }}
        >
          Empresas que eligieron trascender a través del diseño
        </motion.p>
        
        <div style={{
          overflow: 'hidden',
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        }}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{
              display: 'flex',
              gap: '3rem',
              width: 'max-content',
              alignItems: 'center'
            }}
          >
            {[...LOGOS, ...LOGOS].map((src, i) => (
              <div
                key={i}
                className="logo-item"
                style={{
                  opacity: 0.6,
                  transition: 'opacity .3s, transform .3s',
                  cursor: 'default',
                  flexShrink: 0
                }}
              >
                <img 
                  src={src} 
                  alt="Brand logo" 
                  style={{ 
                    height: '96px', 
                    width: 'auto', 
                    display: 'block',
                    filter: 'brightness(1.5)' 
                  }} 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        :global(.logo-item:hover) {
          opacity: 1 !important;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
