import { Variants } from 'framer-motion';

// Easing principal del proyecto — NO sustituir
export const EASE = [0.25, 0, 0, 1] as const;

// ── Animación base fadeUp — usada en TODAS las secciones al hacer scroll
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

// ── Stagger container — agrupa múltiples fadeUp con delay entre hijos
export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0 } }
};
