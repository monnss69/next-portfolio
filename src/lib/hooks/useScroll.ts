'use client';

import { useEffect, useState } from 'react';

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setDirection('down');
      } else {
        setDirection('up');
      }

      setLastScrollY(currentScrollY);
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return {
    scrollY,
    direction,
    isAtTop: scrollY === 0,
  };
}