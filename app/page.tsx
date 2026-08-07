import type { Metadata } from 'next';
import Home from './section/Home';
import About from './section/About';
import Skills from './section/Skills';
import Projects from './section/Projects';
import Experience from './section/Experience';
import Education from './section/Education';
import Contact from './section/Contact';
import LazySection from './components/ui/LazySection';
import { siteDescription, siteTitle } from './lib/site';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
};

export default function Page() {
  return (
    <>
      <Home />
      <LazySection id="about">
        <About />
      </LazySection>
      <LazySection id="skills">
        <Skills />
      </LazySection>
      <LazySection id="projects">
        <Projects />
      </LazySection>
      <LazySection id="education">
        <Education />
      </LazySection>
      <LazySection id="experience">
        <Experience />
      </LazySection>
      <LazySection id="contact">
        <Contact />
      </LazySection>
    </>
  );
}
