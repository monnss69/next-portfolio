'use client';

import { TypingAnimation } from '@/components/ui/TypingAnimation';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { Icon } from '@iconify-icon/react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/ui/Scene').then(mod => mod.Scene), {
  ssr: false,
});

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 px-4"
    >
      <Scene />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto text-center relative z-10"
      >
        <motion.h1
          variants={fadeIn('up')}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">
            <TypingAnimation
              sequence={[
                'John Doe',
                2000,
                'a Developer',
                2000,
                'a Designer',
                2000,
              ]}
            />
          </span>
        </motion.h1>

        <motion.p
          variants={fadeIn('up')}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          I build modern web applications with a focus on user experience and
          performance. Let&apos;s create something amazing together!
        </motion.p>

        <motion.div variants={fadeIn('up')} className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="btn btn-primary gap-2"
          >
            <Icon icon="mdi:message" />
            Contact Me
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            className="btn btn-outline gap-2"
          >
            <Icon icon="mdi:file-document" />
            Download CV
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full">
        <div className="w-full h-24 bg-gradient-to-b from-transparent to-base-100" />
      </div>

      <motion.div
        variants={fadeIn('up')}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#experience"
          className="animate-bounce flex flex-col items-center text-base-content/50 hover:text-base-content transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <Icon icon="mdi:chevron-down" className="text-2xl" />
        </a>
      </motion.div>
    </section>
  );
}