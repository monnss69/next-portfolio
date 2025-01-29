// src/components/sections/Projects.tsx
'use client';

import { projects } from '@/data/portfolio';
import { fadeIn, staggerContainer } from '@/lib/utils/animations';
import { motion } from 'framer-motion';
import { Icon } from '@iconify-icon/react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Projects() {
  const renderMetrics = (project: typeof projects[0]) => {
    const metrics = [];

    if ('performance' in project.metrics && project.metrics.performance) {
      metrics.push(
        <div key="performance" className="flex items-center gap-1.5">
          <Icon icon="lucide:gauge" className="text-primary text-lg" />
          <span>{project.metrics.performance}+ Score</span>
        </div>
      );
    }

    if ('uptime' in project.metrics && project.metrics.uptime) {
      metrics.push(
        <div key="uptime" className="flex items-center gap-1.5">
          <Icon icon="lucide:activity" className="text-success text-lg" />
          <span>{project.metrics.uptime}% Uptime</span>
        </div>
      );
    }

    if ('coverage' in project.metrics && project.metrics.coverage) {
      metrics.push(
        <div key="coverage" className="flex items-center gap-1.5">
          <Icon icon="lucide:check-circle" className="text-info text-lg" />
          <span>{project.metrics.coverage}% Coverage</span>
        </div>
      );
    }

    if ('completed' in project.metrics && project.metrics.completed) {
      metrics.push(
        <div key="completed" className="flex items-center gap-1.5">
          <Icon icon="lucide:award" className="text-primary text-lg" />
          <span>Completed</span>
        </div>
      );
    }

    return metrics;
  };

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
          title="Projects & Certifications"
          subtitle="A showcase of my technical projects and professional certifications"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <p className="mt-2 text-base-content/70">
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
                      {renderMetrics(project)}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-circle btn-sm btn-ghost hover:bg-primary/10 hover:text-primary transition-colors"
                          aria-label="View GitHub Repository"
                        >
                          <Icon icon="lucide:github" className="text-xl" />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-circle btn-sm btn-ghost hover:bg-primary/10 hover:text-primary transition-colors"
                          aria-label="View Live Demo"
                        >
                          <Icon icon="lucide:external-link" className="text-xl" />
                        </a>
                      )}
                      {project.links.certificate && (
                        <a
                          href={project.links.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-circle btn-sm btn-ghost hover:bg-primary/10 hover:text-primary transition-colors"
                          aria-label="View Certificate"
                        >
                          <Icon icon="lucide:award" className="text-xl" />
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