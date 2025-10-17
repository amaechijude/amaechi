import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Experience from "@/components/shared/Experience";
import Hero from "@/components/shared/Hero";
import Projects from "@/components/shared/Projects";
import Services from "@/components/shared/Services";
import Skills from "@/components/shared/Skills";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}

