import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Experience from "@/components/shared/Experience";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import Projects from "@/components/shared/Projects";
import Skills from "@/components/shared/Skills";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

