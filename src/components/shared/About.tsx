"use client";

import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { resumeUrl } from "@/data/resume";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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
      id="about"
      ref={ref}
      className="w-full bg-slate-900 py-20 md:py-32"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-5 md:gap-16">
        {/* Image Column */}
        <motion.div
          className="col-span-1 flex items-center justify-center md:col-span-2"
          variants={itemVariants}
        >
          <div className="relative h-[280px] w-[280px] md:h-[500px] md:w-[400px] rounded-lg overflow-hidden bg-slate-800 shadow-2xl shadow-violet-500/10">
            <Image
              src="/profile.jpg"
              alt="Professional headshot of Amaechi"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="transition-transform duration-500 ease-in-out hover:scale-105 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          className="col-span-1 flex flex-col justify-center md:col-span-3"
          variants={containerVariants} // Stagger children within this column
        >
          <motion.h2
            className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.div variants={itemVariants}>
            <blockquote className="mt-6 border-l-4 border-violet-500 pl-4 text-xl italic text-slate-300">
              &quot;I believe the best software comes from a deep understanding
              of both the technical challenges and the human needs they
              serve.&quot;
            </blockquote>
          </motion.div>
          <motion.p
            className="mt-6 text-lg text-slate-400"
            variants={itemVariants}
          >
            For over 1+ years, I&apos;ve been building robust and scalable
            software solutions. My journey began not just with a fascination for
            code, but with a desire to solve real-world problems. I thrive on
            the challenge of architecting systems that are not only powerful and
            efficient but also clean, maintainable, and above all, solves
            business problems and drive growth.
          </motion.p>
          <motion.p
            className="mt-4 text-lg text-slate-400"
            variants={itemVariants}
          >
            Currently, I&apos;m focused on leveraging{" "}
            <span className="text-violet-400 font-medium">
              serverless architectures
            </span>{" "}
            and{" "}
            <span className="text-violet-400 font-medium">
              modern frontend frameworks
            </span>{" "}
            to deliver exceptional user experiences. I also mentor aspiring
            developers at{" "}
            <span className="text-violet-400 font-medium">Ice Hub</span>,
            sharing knowledge and helping others grow in their web development
            journey. When I&apos;m not coding or mentoring, you can find me
            diving into{" "}
            <span className="text-violet-400 font-medium">documentaries</span>,
            catching up on sports, or enjoying a good series while planning my
            next reading adventure.
          </motion.p>
          <motion.div className="mt-8" variants={itemVariants}>
            <Button
              asChild
              className="bg-transparent border border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300"
            >
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Resume
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
