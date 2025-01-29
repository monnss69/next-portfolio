'use client';

import { socialLinks } from '@/data/portfolio';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { motion } from 'framer-motion';
import { Icon } from '@iconify-icon/react';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';

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
        <SectionHeader
          title="Get in Touch"
          subtitle="Let's collaborate and create something amazing together"
        />

        <motion.div
          variants={fadeIn('up')}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-base-100 text-center">
            <div className="space-y-8">
              <p className="text-lg text-base-content/80">
                I&apos;m always open to new opportunities and collaborations.
                Feel free to reach out through any of the following channels:
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={link.name}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-200" />
                    <div className="relative flex items-center gap-2 px-6 py-3 bg-base-100 rounded-xl hover:bg-base-200/50 transition-colors">
                      <Icon icon={link.icon} className="text-2xl text-primary" />
                      <span className="font-medium">{link.name}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="btn btn-outline btn-lg gap-3 min-w-[200px] hover:shadow-lg"
                >
                  <Icon icon="mdi:file-document" className="text-xl" />
                  Download CV
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}