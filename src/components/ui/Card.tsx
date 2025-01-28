'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/utils/animations';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      variants={fadeIn('up')}
      className={`
        bg-base-200 rounded-xl p-6
        ${hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}