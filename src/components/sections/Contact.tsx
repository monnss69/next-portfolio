'use client';

import { socialLinks } from '@/data/portfolio';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { motion } from 'framer-motion';
import { Icon } from '@iconify-icon/react';

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={fadeIn('up')}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          variants={fadeIn('up')}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg mb-8">
            I&apos;m always open to new opportunities and collaborations.
            Feel free to reach out through any of the following channels:
          </p>

          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-lg btn-primary"
                aria-label={link.name}
              >
                <Icon icon={link.icon} className="text-2xl" />
              </a>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/cv.pdf"
              target="_blank"
              className="btn btn-outline btn-lg gap-2"
            >
              <Icon icon="mdi:file-document" />
              Download CV
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}