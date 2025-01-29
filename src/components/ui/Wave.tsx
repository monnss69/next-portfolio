'use client';

import { motion } from 'framer-motion';

interface WaveProps {
  className?: string;
  flip?: boolean;
}

export function Wave({ className = '', flip = false }: WaveProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <motion.svg
        className={`w-full h-auto ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1440 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <path
          d="M1440 51.409C1296 51.409 1224 20 1080 20S864 51.409 720 51.409 504 20 360 20 144 51.409 0 51.409V0h1440v51.409z"
          className="fill-base-100"
        />
      </motion.svg>
    </div>
  );
}