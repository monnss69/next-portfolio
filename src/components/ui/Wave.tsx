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
          d="M1440 51.4091H1088C1088 51.4091 1085 20 968 20C851 20 832 74 748 74C664 74 640 51.4091 524 51.4091C408 51.4091 360 74 276 74C192 74 136 20 0 20V0H1440V51.4091Z"
          className="fill-base-100"
        />
      </motion.svg>
    </div>
  );
}