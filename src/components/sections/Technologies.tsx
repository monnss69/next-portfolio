'use client';

import { Wave } from '@/components/ui/Wave';
import { technologies } from '@/data/portfolio';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { motion } from 'framer-motion';
import { Icon } from '@iconify-icon/react';

export function Technologies() {
  const categories = Array.from(new Set(technologies.map(tech => tech.category)));

  return (
    <section id="technologies" className="relative bg-base-200 py-16">
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
          Technologies & Skills
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              variants={fadeIn('up')}
              className="card bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <h3 className="card-title capitalize mb-4">
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {technologies
                    .filter(tech => tech.category === category)
                    .map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-base-200 transition-colors"
                      >
                        <Icon icon={tech.icon} className="text-2xl" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
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