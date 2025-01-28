'use client';

import { projects } from '@/data/portfolio';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { motion } from 'framer-motion';
import { Icon } from '@iconify-icon/react';
import Image from 'next/image';

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
        <motion.h2
          variants={fadeIn('up')}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up')}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <figure className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="text-base-content/70">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="badge badge-primary badge-outline"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <Icon icon="mdi:star" className="text-warning" />
                      <span>{project.metrics.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon icon="mdi:source-fork" />
                      <span>{project.metrics.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon icon="mdi:alert-circle" />
                      <span>{project.metrics.issues}</span>
                    </div>
                  </div>
                  
                  <div className="card-actions">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-ghost"
                      >
                        <Icon icon="mdi:github" className="text-xl" />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-ghost"
                      >
                        <Icon icon="mdi:open-in-new" className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}