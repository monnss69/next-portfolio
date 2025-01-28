'use client';

import { TypeAnimation } from 'react-type-animation';

interface TypingAnimationProps {
  sequence: (string | number)[];
  className?: string;
  repeat?: number;
}

export function TypingAnimation({
  sequence,
  className = '',
  repeat = Infinity,
}: TypingAnimationProps) {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      repeat={repeat}
      className={className}
    />
  );
}