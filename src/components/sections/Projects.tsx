'use client';

import { projects } from '@/data/portfolio';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { motion } from 'framer-motion';
import { Icon } from '@iconify-icon/react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4"
      >
        <SectionHeader
          title="Featured Projects"
          subtitle="A showcase of my recent work and contributions to open-source"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up')}
            >
              <Card className="group h-full bg-base-100">
                <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-base-content/70 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-base-200">
                    <div className="flex gap-4 text-base-content/70">
                      <div className="flex items-center gap-1.5">
                        <Icon icon="mdi:star" className="text-warning text-lg" />
                        <span>{project.metrics.stars}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Icon icon="mdi:source-fork" className="text-lg" />
                        <span>{project.metrics.forks}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Icon icon="mdi:alert-circle" className="text-lg" />
                        <span>{project.metrics.issues}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-circle btn-sm btn-ghost hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          <Icon icon="mdi:github" className="text-xl" />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-circle btn-sm btn-ghost hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          <Icon icon="mdi:open-in-new" className="text-xl" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}