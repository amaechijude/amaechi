"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Star, Users } from "lucide-react";

interface TimelineItem {
  type: "professional" | "mentoring";
  date: string;
  title: string;
  subtitle: string;
  description: string[];
  icon: React.ReactNode;
}

const timelineData: TimelineItem[]= [
  {
    type: "professional",
    date: "2022 - Present",
    title: "Senior Software Engineer",
    subtitle: "Innovate Corp",
    description: [
      "Led architecture redesign of the main platform, reducing page load times by 60%.",
      "Mentored 5 junior developers, fostering a culture of code quality and continuous learning.",
      "Shipped 20+ features for a product serving over 100k daily active users.",
    ],
    icon: <Briefcase />,
  },
  {
    type: "mentoring",
    date: "2021",
    title: "Launched 'React Fundamentals' Course",
    subtitle: "Online Workshop",
    description: [
      "Created a comprehensive curriculum used by over 200 students to date.",
      "Achieved a 95% completion rate through engaging, project-based learning.",
    ],
    icon: <GraduationCap />,
  },
  {
    type: "professional",
    date: "2019 - 2022",
    title: "Mid-Level Software Engineer",
    subtitle: "Data Solutions Inc.",
    description: [
      "Developed key features for a data analytics SaaS platform, increasing user engagement by 30%.",
      "Contributed to a 50% improvement in API response times by optimizing database queries.",
    ],
    icon: <Briefcase />,
  },
  {
    type: "mentoring",
    date: "2020",
    title: "Community Tech Mentor",
    subtitle: "Dev Community Hub",
    description: [
      "Guided 50+ aspiring developers through career transitions with an 85% job placement rate.",
      "Hosted weekly Q&A sessions and code review workshops.",
    ],
    icon: <Users />,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = (fromLeft = true) => ({
    hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100 } },
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
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">Experience & Impact</h2>
          <p className="mt-4 text-lg text-slate-400">Building software and empowering developers.</p>
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
                  style={{ justifyContent: isPro ? 'flex-start' : 'flex-end' }}
                  variants={itemVariants(fromLeft)}
                >
                  {/* Mobile Spine */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-slate-700 md:hidden"></div>
                  
                  {/* Timeline Card */}
                  <div className={`relative w-full md:w-1/2 ${isPro ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="relative rounded-lg border border-slate-700 bg-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-violet-500/50 hover:shadow-violet-500/10">
                      <div className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 transform rounded-full bg-violet-500 border-4 border-slate-900 ${isPro ? 'md:-right-2' : 'md:-left-2'} left-[-2px] md:left-auto`}></div>
                      <div className="flex items-center space-x-3">
                        <div className="text-violet-400">{item.icon}</div>
                        <div>
                          <p className="text-xs text-slate-400">{item.date}</p>
                          <h3 className="font-bold text-slate-200">{item.title}</h3>
                          <p className="text-sm font-medium text-slate-300">{item.subtitle}</p>
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
