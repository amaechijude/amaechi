"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Star } from "lucide-react";

interface TimelineItem {
  type: "professional" | "mentoring";
  date: string;
  title: string;
  subtitle: string;
  description: string[];
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    type: "professional",
    date: "2025 - Present",
    title: "Tech Mentor",
    subtitle: "Icehub",
    description: [
      "Mentor developers in web development, providing guidance on Django, React, and cloud deployments.",
      "Led workshops and hands-on sessions to enhance practical learning and skill application.",
      "Assisted learners in building real-world projects, reinforcing best practices and clean coding standards.",
      // "Introduced version control with Git/GitHub and guided collaborative workflows.",
      // "Provided personalized support, code reviews, and feedback to accelerate growth.",
      // "Encouraged problem-solving through coding challenges and group discussions.",
    ],
    icon: <Briefcase />,
  },
  {
    type: "mentoring",
    date: "2025 - Present",
    title: "Full-Stack Engineer",
    subtitle: "Freelance / Personal Projects",
    description: [
      "Building a multi-tenant SaaS project management platform with ASP.NET Core (Clean Architecture, CQRS) and Next.js.",
      "Implemented role-based authorization, workspace management, and advanced logging with Serilog.",
      "Integrated modern frontend stacks: Next.js, TypeScript, Tailwind, and ShadCN UI.",
    ],
    icon: <Briefcase />,
  },
  {
    type: "professional",
    date: "2024",
    title: "Backend Engineer",
    subtitle: "TailorConnect",
    description: [
      "Developed a Django-based platform connecting fashion designers with customers.",
      "Deployed on Azure VM with Docker, Redis for caching and Celery for task processing.",
      "Implemented Azure Blob Storage for media and static files.",
      "",
    ],
    icon: <Briefcase />,
  },
  {
    type: "mentoring",
    date: "2022 - 2023",
    title: "AI Training Linguist & Mentor",
    subtitle: "Translation Automation User Society (TAUS)",
    description: [
      "Translated 500k+ technical words (English to Igbo) with 100% accuracy to create training datasets for AI language models",
      "Mentored junior linguists, enhancing their skills in technical translation and quality assurance.",
      "Collaborated with cross-functional teams to refine translation processes and improve overall quality.",
    ],
    icon: <Briefcase />,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = (fromLeft = true) => ({
    hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  });

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="w-full bg-slate-900 py-20 md:py-32"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="text-center"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
            Experience & Impact
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Building software and empowering developers.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Timeline Spine */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 transform bg-slate-700 md:block"></div>

          <motion.div className="space-y-12" variants={containerVariants}>
            {timelineData.map((item, index) => {
              const isPro = item.type === "professional";
              const fromLeft = isPro;

              return (
                <motion.div
                  key={index}
                  className="relative w-full md:flex md:items-center"
                  style={{ justifyContent: isPro ? "flex-start" : "flex-end" }}
                  variants={itemVariants(fromLeft)}
                >
                  {/* Mobile Spine */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-slate-700 md:hidden"></div>

                  {/* Timeline Card */}
                  <div
                    className={`relative w-full md:w-1/2 ${
                      isPro ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="relative rounded-lg border border-slate-700 bg-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-violet-500/50 hover:shadow-violet-500/10">
                      <div
                        className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 transform rounded-full bg-violet-500 border-4 border-slate-900 ${
                          isPro ? "md:-right-2" : "md:-left-2"
                        } left-[-2px] md:left-auto`}
                      ></div>
                      <div className="flex items-center space-x-3">
                        <div className="text-violet-400">{item.icon}</div>
                        <div>
                          <p className="text-xs text-slate-400">{item.date}</p>
                          <h3 className="font-bold text-slate-200">
                            {item.title}
                          </h3>
                          <p className="text-sm font-medium text-slate-300">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2 text-slate-400">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            <Star className="mr-2 mt-1 h-3 w-3 flex-shrink-0 text-violet-500" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
