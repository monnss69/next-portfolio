'use client';

import { TypingAnimation } from '@/components/ui/TypingAnimation';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { Icon } from '@iconify-icon/react';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-base-200/50 to-transparent" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto text-center relative z-10"
      >
        <motion.div
          variants={fadeIn('up')}
          className="mb-8 inline-block"
        >
          <span className="px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={fadeIn('up')}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x bg-clip-text text-transparent">
            <TypingAnimation
              sequence={[
                'Pham Hai Minh',
                2000,
                'a all-rounded Developer',
                2000,
                'a Quantitative Researcher',
                2000,
              ]}
            />
          </span>
        </motion.h1>

        <motion.p
          variants={fadeIn('up')}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-base-content/80"
        >
          I build modern web applications with a focus on user experience and
          performance. Let&apos;s create something amazing together!
        </motion.p>

        <motion.div variants={fadeIn('up')} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="btn btn-primary btn-lg gap-2 min-w-[200px] shadow-lg shadow-primary/20"
          >
            <Icon icon="mdi:message" className="text-xl" />
            Contact Me
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            className="btn btn-outline btn-lg gap-2 min-w-[200px] hover:shadow-lg"
          >
            <Icon icon="mdi:file-document" className="text-xl" />
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
          <span className="text-sm font-medium mb-2">Explore More</span>
          <Icon icon="mdi:chevron-down" className="text-2xl" />
        </a>
      </motion.div>
    </section>
  );
}