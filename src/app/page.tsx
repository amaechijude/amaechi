"use client";

import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/shared/About"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/shared/Contact"), {
  ssr: false,
});
const Experience = dynamic(() => import("@/components/shared/Experience"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/components/shared/Projects"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/shared/Skills"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/components/shared/Testimonials"), {
  ssr: false,
});
const Services = dynamic(() => import("@/components/shared/Services"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/shared/Hero"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}

