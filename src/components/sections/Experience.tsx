'use client';

import { Wave } from '@/components/ui/Wave';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { experiences } from '@/data/portfolio';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { motion } from 'framer-motion';
import { Icon } from '@iconify-icon/react';

export function Experience() {
  return (
    <section id="experience" className="relative bg-base-200 py-16">
      <Wave className="-mt-24" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4"
      >
        <SectionHeader
          title="Work Experience"
          subtitle="My professional journey and achievements in the tech industry"
        />

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up')}
              className="mb-12 relative pl-8 border-l-2 border-primary/30 last:mb-0"
            >
              <div className="absolute -left-3 top-0">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg" />
              </div>
              
              <Card className="bg-base-100">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {experience.title}
                    </h3>
                    <p className="text-lg font-semibold mt-1">
                      {experience.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-base-content/70">
                    <span className="flex items-center gap-2 bg-base-200 px-3 py-1 rounded-full">
                      <Icon icon="mdi:map-marker" className="text-primary" />
                      {experience.location}
                    </span>
                    <span className="flex items-center gap-2 bg-base-200 px-3 py-1 rounded-full">
                      <Icon icon="mdi:calendar" className="text-primary" />
                      {experience.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <Icon 
                          icon="mdi:check-circle" 
                          className="flex-shrink-0 mt-1 text-lg text-primary"
                        />
                        <span className="text-base-content/80">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <Wave className="-mb-24 rotate-180" />
    </section>
  );
}