"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Github, Linkedin, Twitter, MoveDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "C#",
  "Dotnet",
  "Python",
  "Tailwind CSS",
  "Framer Motion",
  "Docker",
  "PostgreSQL",
  "Azure",
  "gRPC",
  ".NET"
];

interface SkillPoint {
  x: number;
  y: number;
  z: number;
}

interface AnimatedSkillProps {
  skill: string;
  point: SkillPoint;
  angle: number;
}

const AnimatedSkill = ({ skill, point, angle }: AnimatedSkillProps) => {
  const { x, y, z } = point;

  // Rotate around Y-axis
  const rotatedX = x * Math.cos(angle) - z * Math.sin(angle);
  const rotatedZ = x * Math.sin(angle) + z * Math.cos(angle);

  const radius = Math.sqrt(x * x + y * y + z * z);
  const scale = (rotatedZ + radius) / (2 * radius);
  const opacity = scale * 0.7 + 0.3;

  return (
    <motion.div
      key={skill}
      className="absolute flex items-center gap-2 rounded-full bg-slate-800/50 px-3 py-1.5 text-sm font-medium text-violet-300 shadow-md"
      style={{
        x: rotatedX,
        y: y,
        scale,
        opacity,
        zIndex: Math.round(scale * 100),
      }}
      // By passing the dynamic values directly to `style`,
      // framer-motion can optimize updates without re-rendering the whole component.
      // For even more optimization, you could use `useMotionValue` and `useTransform`.
    >
      {skill}
    </motion.div>
  );
};


const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const [angle, setAngle] = useState(0);
  const [radius, setRadius] = useState(150);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle + 0.002);
    }, 50); // Adjust speed of rotation

    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(100); // sm breakpoint
      } else if (window.innerWidth < 768) {
        setRadius(120); // md breakpoint
      } else {
        setRadius(150); // lg breakpoint and up
      }
    };

    updateRadius(); // Set initial radius
    window.addEventListener("resize", updateRadius);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  const numSkills = skills.length;

  const skillPoints = useMemo(() => {
    return skills.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / numSkills);
      const theta = Math.sqrt(numSkills * Math.PI) * phi;

      return {
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
      };
    });
  }, [radius, numSkills]);


  return (
    <motion.section
      className="relative flex min-h-[calc(100vh-64px)] w-full items-center justify-center bg-slate-900 text-slate-300"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 z-0 overflow-hidden w-full">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-[#1a233a] w-full"></div>
        {/* Abstract shapes */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>
      </div>

      <div className="container z-10 mx-auto flex max-w-6xl flex-col-reverse items-center px-4 text-center md:flex-row md:text-left">
        {/* Text Content (60%) */}
        <motion.div className="flex w-full flex-col items-center md:w-3/5 md:items-start">
          <motion.h2
            className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-violet-400"
            variants={itemVariants}
          >
            Software Engineer
          </motion.h2>
          <motion.h1
            className="mt-2 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600 md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Amaechi Ugwu
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-lg text-slate-400 md:text-xl"
            variants={itemVariants}
          >
            Building scalable, high-performance web applications with modern
            technologies and a passion for clean code.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            variants={itemVariants}
          >
            <Button
              asChild
              size="lg"
              className="bg-violet-600 text-white hover:bg-violet-700 hover:scale-105 transition-transform duration-200 ease-in-out shadow-lg shadow-violet-600/20"
            >
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>
          <motion.div className="mt-8 flex space-x-6" variants={itemVariants}>
            <Link
              href="https://github.com/amaechijude"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6 text-slate-400 hover:text-violet-400 transition-colors duration-200 hover:scale-110" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/amaechi-ugwu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 text-slate-400 hover:text-violet-400 transition-colors duration-200 hover:scale-110" />
            </Link>
            <Link
              href="https://x.com/amaechi_1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-6 w-6 text-slate-400 hover:text-violet-400 transition-colors duration-200 hover:scale-110" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual Element (40%) - Responsive */}
        <motion.div
          className="mt-16 flex w-full items-center justify-center px-4 sm:w-full md:mt-0 md:w-2/5"
          variants={itemVariants}
        >
          <div className="relative flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
            {skillPoints.map((point, i) => (
              <AnimatedSkill key={skills[i]} skill={skills[i]} point={point} angle={angle} />
            ))}
          </div>
        </motion.div>
        
      </div>

      <motion.div
        className="absolute bottom-8"
        variants={itemVariants}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <MoveDown className="h-6 w-6 text-slate-500" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
