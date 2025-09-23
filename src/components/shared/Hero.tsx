"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, MoveDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.section
      className="relative flex min-h-[calc(100vh-64px)] w-full items-center justify-center bg-slate-900 text-slate-300"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-[#1a233a]"></div>
        {/* Abstract shapes */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>
      </div>

      <div className="container z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:flex-row md:text-left">
        {/* Text Content (60%) */}
        <motion.div className="flex w-full flex-col items-center md:w-3/5 md:items-start">
          <motion.h2
            className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            Senior Software Engineer
          </motion.h2>
          <motion.h1
            className="mt-2 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600 md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Amaechi
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
          <motion.div
            className="mt-8 flex space-x-6"
            variants={itemVariants}
          >
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-slate-400 hover:text-violet-400 transition-colors duration-200 hover:scale-110" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-slate-400 hover:text-violet-400 transition-colors duration-200 hover:scale-110" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 text-slate-400 hover:text-violet-400 transition-colors duration-200 hover:scale-110" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual Element (40%) - Hidden on mobile */}
        <motion.div
          className="hidden w-2/5 md:flex items-center justify-center"
          variants={itemVariants}
        >
          {/* Placeholder for a more complex visual like a 3D model or code animation */}
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-violet-500/20 to-slate-800/20 flex items-center justify-center border border-slate-700">
             <div className="w-64 h-64 rounded-full bg-gradient-to-bl from-slate-800/20 to-violet-500/20 flex items-center justify-center border border-slate-600">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-violet-500/20 to-slate-800/20 border border-slate-500"></div>
             </div>
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
