import About from "@/components/shared/About";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import Projects from "@/components/shared/Projects";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}

