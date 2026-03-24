'use client';

import { useInView as useInViewFramer } from 'framer-motion';
import { useRef } from 'react';

export function useInView(options = { once: true, amount: 0.2 }) {
  const ref = useRef(null);
  const isInView = useInViewFramer(ref, options);
  return { ref, isInView };
}
