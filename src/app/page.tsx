import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Experience from "@/components/shared/Experience";
import Hero from "@/components/shared/Hero";
import Projects from "@/components/shared/Projects";
import Skills from "@/components/shared/Skills";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}

