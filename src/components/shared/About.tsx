import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { resumeUrl } from "@/data/resume";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-slate-900 py-20 md:py-32 min-h-full"
    >
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-5 md:gap-16">
        {/* Image Column */}
        <div
          className="col-span-1 flex items-center justify-center md:col-span-2"
        >
          <div className="relative h-[280px] w-[280px] md:h-[500px] md:w-[400px] rounded-lg overflow-hidden bg-slate-800 shadow-2xl shadow-violet-500/10">
            <Image
              src="/profile.jpg"
              alt="Professional headshot of Amaechi"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          </div>
        </div>

        {/* Content Column */}
        <div
          className="col-span-1 flex flex-col justify-center md:col-span-3"
        >
          <h2
            className="text-3xl font-bold tracking-tight text-violet-400 sm:text-4xl"
          >
            About Me
          </h2>
          <div>
            <blockquote className="mt-6 border-l-4 border-violet-500 pl-4 text-xl italic text-slate-300">
              &quot;Great software starts with solid backend architecture. I build
              robust systems that scale, perform, and deliver exceptional user experiences.&quot;
            </blockquote>
          </div>
          <p
            className="mt-6 text-lg text-slate-400"
          >
            As a backend-focused Full-Stack Developer with 1+ years of experience,
            I specialize in building scalable APIs, microservices, and robust system
            architectures. My passion lies in creating high-performance backend solutions
            using C#, .NET, and Python, while seamlessly integrating with modern frontend
            technologies to deliver complete, end-to-end applications.
          </p>
          <p
            className="mt-4 text-lg text-slate-400"
          >
            My expertise spans{" "}
            <span className="text-violet-400 font-medium">
              RESTful APIs, microservices architecture, and database design
            </span>{" "}
            using technologies like{" "}
            <span className="text-violet-400 font-medium">
              PostgreSQL, Docker, and Azure cloud services
            </span>{" "}
            . I also mentor aspiring developers at{" "}
            <Link href="https://www.icehub-ng.com/index.html" target="_blank" rel="noopener noreferrer">
            <span className="text-violet-400 font-medium">Ice Hub</span>,</Link>
            sharing backend development best practices and system design principles.
            When I&apos;m not architecting systems or mentoring, you can find me
            exploring{" "}
            <span className="text-violet-400 font-medium">new backend technologies</span>,
            contributing to open-source projects, or diving into technical documentation
            to stay ahead of the curve.
          </p>
          <div className="mt-8">
            <Button
              asChild
              className="bg-transparent border border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300"
            >
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;