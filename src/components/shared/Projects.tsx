import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { ProjectDataProps, projectsData } from "@/data/projectsData";

const ProjectCard = ({
  project,
}: {
  project: ProjectDataProps;
}) => (
  <div
    className="group relative flex flex-col overflow-hidden rounded-lg bg-slate-800 border border-slate-700 shadow-lg"
  >
    <div className="relative h-60 w-full overflow-hidden">
      <Image
        src={project.imageUrl}
        alt={`${project.title} mockup`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/60 to-transparent"></div>
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-xl font-bold text-slate-200">{project.title}</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-400"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="mt-4 flex-1 text-slate-400">{project.description}</p>
      <div className="mt-6 flex items-center justify-between">
        <Button
          asChild
          size="sm"
          className="bg-violet-600 text-white hover:bg-violet-700"
        >
          <Link href={project.liveLink} target="_blank">
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Link
          href={project.codeLink}
          target="_blank"
          className="flex items-center text-slate-400 hover:text-violet-400"
        >
          <Github className="mr-2 h-5 w-5" />
          Code
        </Link>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-slate-900 py-20 md:py-32 min-h-full"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            A selection of my work, showcasing solutions to complex challenges.
          </p>
        </div>

        <div
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
            <Button asChild size="lg" variant="outline" className="border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300">
                <Link href="mailto:amaechijude178@gmail.com">
                    Request a custom project <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;