'use client';

import { Wave } from '@/components/ui/Wave';
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
        <motion.h2
          variants={fadeIn('up')}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up')}
              className="mb-8 relative pl-8 border-l-2 border-primary"
            >
              <div className="absolute -left-3 top-0">
                <div className="w-4 h-4 rounded-full bg-primary" />
              </div>
              
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl font-bold">
                    {experience.title}
                  </h3>
                  <p className="text-lg font-semibold text-primary">
                    {experience.company}
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm text-base-content/70">
                    <span className="flex items-center gap-1">
                      <Icon icon="mdi:map-marker" />
                      {experience.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon icon="mdi:calendar" />
                      {experience.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <Icon icon="mdi:chevron-right" className="flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="badge badge-primary badge-outline"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <Wave className="-mb-24 rotate-180" />
    </section>
  );
}