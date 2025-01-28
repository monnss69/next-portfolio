'use client';

import { Hero } from './Hero';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Technologies } from './Technologies';
import { Contact } from './Contact';
import { Footer } from '@/components/ui/Footer';
import { Suspense } from 'react';

export function HomeContent() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}