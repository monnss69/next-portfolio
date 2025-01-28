'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/utils/animations';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeIn('up')}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-base-content/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}