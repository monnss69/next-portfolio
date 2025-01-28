import { Hero } from '@/components/sections/Hero';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Technologies } from '@/components/sections/Technologies';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
}
