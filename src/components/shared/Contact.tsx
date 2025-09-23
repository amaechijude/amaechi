"use client";

import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: any = (fromLeft = true) => ({
    hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-full bg-slate-900 py-20 md:py-32"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div className="text-center" variants={itemVariants()}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Whether you need a senior developer or want to become one.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Professional Track */}
          <motion.div
            variants={itemVariants(true)}
            className="flex flex-col rounded-lg border border-slate-700 bg-slate-800 p-8 shadow-lg transition-all duration-300 hover:border-violet-500/50 hover:shadow-violet-500/10"
          >
            <div className="flex items-center space-x-4">
              <Briefcase className="h-8 w-8 text-violet-400" />
              <h3 className="text-2xl font-bold text-slate-200">
                Let&apos;s Work Together
              </h3>
            </div>
            <p className="mt-4 flex-1 text-slate-400">
              Have a challenging project that needs senior expertise? I
              specialize in scalable architecture and building high-performance
              web applications.
            </p>
            <div className="mt-6 space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-violet-600 text-white hover:bg-violet-700"
              >
                <a href="mailto:amaechijude178@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Project Inquiry
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                <Link
                  href="https://www.linkedin.com/in/amaechi-ugwu/"
                  target="_blank"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Mentoring Track */}
          <motion.div
            variants={itemVariants(false)}
            className="flex flex-col rounded-lg border border-slate-700 bg-slate-800 p-8 shadow-lg transition-all duration-300 hover:border-violet-500/50 hover:shadow-violet-500/10"
          >
            <div className="flex items-center space-x-4">
              <GraduationCap className="h-8 w-8 text-violet-400" />
              <h3 className="text-2xl font-bold text-slate-200">
                Start Your Journey
              </h3>
            </div>
            <p className="mt-4 flex-1 text-slate-400">
              Ready to accelerate your development career? Join the 50+
              developers I&apos;ve helped transition into high-paying tech
              roles.
            </p>
            <div className="mt-6 space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-transparent border border-violet-500 text-violet-400 hover:bg-violet-500/10"
              >
                <a href="mailto:amaechijude178@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Mentoring Request
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
