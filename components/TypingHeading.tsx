'use client';

import { motion } from 'framer-motion';

export default function TypingHeading({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const characters = Array.from(text);

  const container: any = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 },
    },
  };

  const child: any = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1 },
    },
  };

  return (
    <motion.h2
      className={`${className || ''} typing-heading`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      style={style}
    >
      {characters.map((char, index) => (
        char === "\n" ? <br key={index} /> :
          <motion.span key={index} variants={child}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
      ))}
      <style>{`
        @media (max-width: 768px) {
          .typing-heading {
            font-size: clamp(2rem, 9vw, 3rem) !important;
            text-align: center !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </motion.h2>
  );
}