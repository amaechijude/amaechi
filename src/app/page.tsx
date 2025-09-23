import About from "@/components/shared/About";
import Experience from "@/components/shared/Experience";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import Projects from "@/components/shared/Projects";
import Skills from "@/components/shared/Skills";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}

