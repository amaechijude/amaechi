import About from "@/components/shared/About";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center bg-slate-900">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

