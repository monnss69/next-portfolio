'use client';

import { Wave } from '@/components/ui/Wave';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { technologies, techCategories } from '@/data/portfolio';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { motion } from 'framer-motion';
import { Icon } from '@iconify-icon/react';

export function Technologies() {
  const categories = Object.keys(techCategories) as Array<keyof typeof techCategories>;

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
        <SectionHeader
          title="Technologies & Skills"
          subtitle="The technologies and tools I use to bring ideas to life"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {categories.map((category) => {
            const categoryTechs = technologies.filter(tech => tech.category === category);
            if (categoryTechs.length === 0) return null;
            
            return (
              <motion.div
                key={category}
                variants={fadeIn('up')}
              >
                <Card className="bg-base-100">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {techCategories[category]}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {categoryTechs.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors group cursor-default"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon icon={tech.icon} className="text-2xl text-primary" />
                        </div>
                        <span className="font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      
      <Wave className="-mb-24 rotate-180" />
    </section>
  );
}