"use client";

import dynamic from "next/dynamic";
import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Experience from "@/components/shared/Experience";
import Projects from "@/components/shared/Projects";
import Skills from "@/components/shared/Skills";
import Testimonials from "@/components/shared/Testimonials";
import Services from "@/components/shared/Services";

export default function Home() {
  const Hero = dynamic(() => import("@/components/shared/Hero"), {
    ssr: false,
  });

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

