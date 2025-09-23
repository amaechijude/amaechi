"use client";

import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";


interface ProjectDataProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveLink: string;
  codeLink: string;
}

const projectsData: ProjectDataProps[] = [
  {
    title: "QuantumLeap AI",
    description: "A high-performance computing platform for AI model training, reducing processing times by 40% through distributed GPU scheduling and a custom data pipeline architecture.",
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "Kubernetes", "gRPC"],
    imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "FinTrack Analytics",
    description: "A B2B financial analytics dashboard that provides real-time insights into market trends, increasing user data-driven decision-making by 60%. My role focused on the backend and data visualization components.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "D3.js"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "ConnectSphere",
    description: "A full-stack social networking application built from scratch, featuring real-time chat, a dynamic news feed, and user authentication. This project showcases a wide range of skills from UI design to database management.",
    techStack: ["Vue.js", "Firebase", "Tailwind CSS", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "DevPortfolio",
    description: "An open-source, highly customizable portfolio template for developers, built with Next.js and Framer Motion. Designed for easy setup and deployment on Vercel.",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveLink: "#",
    codeLink: "#",
  },
];

const ProjectCard = ({ project, variants }: { project: ProjectDataProps, variants: Variants }) => (
  <motion.div
    variants={variants}
    className="group relative flex flex-col overflow-hidden rounded-lg bg-slate-800 border border-slate-700 shadow-lg transition-all duration-300 ease-in-out hover:shadow-violet-500/20 hover:-translate-y-2"
  >
    <div className="relative h-60 w-full overflow-hidden">
      <Image
        src={project.imageUrl}
        alt={`${project.title} mockup`}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 ease-in-out group-hover:scale-105"
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
        <Button asChild size="sm" className="bg-violet-600 text-white hover:bg-violet-700">
          <Link href={project.liveLink} target="_blank">
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Link href={project.codeLink} target="_blank" className="flex items-center text-slate-400 hover:text-violet-400 transition-colors">
          <Github className="mr-2 h-5 w-5" />
          Code
        </Link>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" },
    },
  };

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="w-full bg-slate-900 py-20 md:py-32"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            A selection of my work, showcasing solutions to complex challenges.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12"
          variants={containerVariants}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} variants={itemVariants} />
          ))}
        </motion.div>

        <motion.div className="mt-16 text-center" variants={itemVariants}>
            <Button asChild size="lg" variant="outline" className="border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300">
                <Link href="#">
                    View All Projects
                </Link>
            </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
