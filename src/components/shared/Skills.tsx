"use client";

import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Code, Cloud, Database, GitMerge, TestTube, Users, BrainCircuit, FileText, HardDrive, Server, Boxes, Globe, Settings, Radio, Network, Terminal, Layers, MousePointer, Palette } from "lucide-react";


// Data for the component
const philosophyData: { text: string; id: number }[]= [
  { text: "I build for scale from day one, but optimize for clarity over cleverness.", id: 1 },
  { text: "Every technical decision is a business decision in disguise; understanding the 'why' is paramount.", id: 2 },
  { text: "Code quality isn't a feature, it's the foundation of sustainable velocity.", id: 3 },
];

const technologiesData = {
  backend: [
    {
      name: "C# & .NET",
      context: "Built scalable microservices and APIs",
      icon: <Terminal />,
    },
    {
      name: "Python & Django/DRF",
      context: "Developed robust REST APIs and business logic",
      icon: <Code />,
    },
    {
      name: "WebSocket",
      context: "Real-time communication and event-driven APIs",
      icon: <Radio />,
    },
    {
      name: "gRPC",
      context: "Typesafe, high-performance RPC APIs",
      icon: <Network />,
    },
  ],
  devops_cloud: [
    {
      name: "GitHub Actions",
      context: "Automated CI/CD pipelines",
      icon: <Settings />,
    },
    {
      name: "Docker",
      context: "Containerizing applications for consistency",
      icon: <Boxes />,
    },
    {
      name: "Docker Compose",
      context: "Managing multi-container applications",
      icon: <Boxes />,
    },
    {
      name: "Kubernetes",
      context: "Orchestrating containerized applications at scale",
      icon: <Globe />,
    },
    {
      name: "Azure",
      context: "Leveraging cloud-native infrastructure and services",
      icon: <Cloud />,
    },
    {
      name: "Nginx",
      context: "High-performance reverse proxy and load balancing",
      icon: <Server />,
    },
  ],
  frontend: [
    {
      name: "React & Next.js",
      context: "Building fast, scalable, and interactive UIs",
      icon: <Layers />,
    },
    {
      name: "TypeScript",
      context: "Type-safe, maintainable, and scalable code",
      icon: <Code />,
    },
    {
      name: "Tailwind CSS",
      context: "Designing responsive and modern interfaces",
      icon: <Palette />,
    },
    {
      name: "Framer Motion",
      context: "Crafting smooth, engaging animations",
      icon: <MousePointer />,
    },
  ],
  data: [
    {
      name: "PostgreSQL",
      context: "Reliable relational data modeling",
      icon: <Database />,
    },
    {
      name: "efCore ORM",
      context: "Type-safe data access and modeling in .NET",
      icon: <FileText />,
    },
    {
      name: "Redis",
      context: "High-speed caching, queuing, and session management",
      icon: <HardDrive />,
    },
    {
      name: "Azure Blob Storage",
      context: "Scalable storage for static files and media",
      icon: <Cloud />,
    },
    {
      name: "Docker Volumes",
      context: "Persistent containerized data management",
      icon: <Server />,
    },
    {
      name: "Prisma ORM",
      context: "Type-safe data access and modeling in Next.js",
      icon: <FileText />,
    },
  ],
};

const practicesData = [
  { title: "Testing Strategy", description: "TDD with a focus on integration tests that mirror real-world user behavior.", icon: <TestTube /> },
  { title: "CI/CD", description: "Automated pipelines with GitHub Actions for consistent, reliable deployments.", icon: <GitMerge /> },
  { title: "Code Quality", description: "Every PR is a teaching moment. I champion thorough reviews that elevate the entire team.", icon: <CheckCircle /> },
  { title: "Team Collaboration", description: "Clear communication and a shared vision are key. I use tools like Linear and Slack to keep everyone in sync.", icon: <Users /> },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
};

// Main Component
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.02 });

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="w-full bg-slate-900 py-20 md:py-32"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">Skills & Approach</h2>
          <p className="mt-4 text-lg text-slate-400">Engineering philosophy meets modern technology.</p>
        </motion.div>

        {/* Part 1: Philosophy */}
        <motion.div className="mx-auto mt-12 max-w-3xl space-y-6" variants={containerVariants}>
          {philosophyData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="rounded-lg border border-slate-800 bg-slate-800/50 p-6 text-center text-lg italic text-slate-300 shadow-md"
            >
              <BrainCircuit className="mx-auto mb-2 h-6 w-6 text-violet-400" />
              {item.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="mx-auto my-16 h-px w-2/3 bg-slate-700"></motion.div>

        {/* Parts 2 & 3: Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Part 2: Core Technologies */}
          <motion.div variants={containerVariants}>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-slate-200 mb-6">Core Technologies</motion.h3>
            <div className="space-y-8">
              {Object.entries(technologiesData).map(([category, techs]) => (
                <motion.div key={category} variants={itemVariants}>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-4">{category.replace('-', ' & ')}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {techs.map((tech) => (
                      <div key={tech.name} className="group flex items-center space-x-4 rounded-lg border border-slate-800 bg-slate-800/50 p-4 transition-all hover:bg-slate-700/50 hover:border-violet-500/50">
                        <div className="text-violet-400">{tech.icon}</div>
                        <div>
                          <p className="font-semibold text-slate-200">{tech.name}</p>
                          <p className="text-sm text-slate-400">{tech.context}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Part 3: Engineering Practices */}
          <motion.div variants={containerVariants}>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-slate-200 mb-6">Engineering Practices</motion.h3>
            <div className="space-y-6">
              {practicesData.map((practice) => (
                <motion.div key={practice.title} variants={itemVariants} className="flex items-start space-x-4 rounded-lg border border-transparent p-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
                    {practice.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">{practice.title}</p>
                    <p className="text-slate-400">{practice.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
