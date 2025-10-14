
import {
  Briefcase,
  Code,
  GraduationCap,
  Server,
  Gauge,
  Replace,
  Users,
  UserCheck,
  Rocket,
  Search,
  ClipboardCheck,
} from "lucide-react";


export const servicesData = {
  title: "How I Can Help",
  subtitle: "Professional development services and career transformation guidance",
  development: {
    title: "Development Services",
    icon: Briefcase,
    intro:
      "Building scalable, performant web applications for businesses and startups",
    services: [
      {
        icon: Code,
        name: "Web Application Development",
        description: "Full-stack React/Next.js applications from concept to launch, with APIs built in .NET/C# or Django/DRF.",

        deliverables: [
          "Custom UI/UX",
          "Responsive Design",
          "API Integration",
          "Backend API (.NET/C#, Django/DRF)",
          "Deployment",
        ],
        timeline: "project based",
        pricing: "Contact for quote",
        link: "Discuss Project",
      },
      {
        icon: Server,
        name: "Technical Consulting & Architecture",
        description:
          "System architecture review, tech stack recommendations, scalability planning.",
        deliverables: [
          "Architecture Documentation",
          "Technology Roadmap",
          "Implementation Plan",
        ],
        timeline: "Project-based",
        pricing: "Contact for quote",
        link: "Get a Quote",
      },
      {
        icon: Gauge,
        name: "Performance Optimization",
        description:
          "Core Web Vitals improvement, speed optimization, SEO enhancement.",
        deliverables: [
          "Performance Audit",
          "Optimization Implementation",
          "Monitoring Setup",
        ],
        timeline: "project based",
        pricing: "Starting at $2,500",
        link: "Book a Call",
      },
      {
        icon: Replace,
        name: "Legacy System Migration",
        description:
          "Modernize outdated applications, framework migrations, code refactoring.",
        deliverables: [
          "Migration Plan",
          "Incremental Updates",
          "Testing & Deployment",
        ],
        timeline: "project based",
        pricing: "Contact for quote",
        link: "Plan Migration",
      },
      {
        icon: Users,
        name: "Team Augmentation",
        description:
          "Seamlessly integrating with your team to elevate code quality, accelerate project velocity, and foster a culture of shared knowledge.",
        deliverables: [
          "High-impact feature development",
          "Collaborative code reviews and pairing",
          "Mentorship and team skill elevation",
        ],
        timeline: "Retainer-based",
        pricing: "Company desired quote",
        link: "Inquire Now",
      },
    ],
  },
  mentoring: {
    title: "Mentoring & Career Development",
    icon: GraduationCap,
    intro: "Helping aspiring developers transition into successful tech careers",
    services: [
      {
        icon: UserCheck,
        name: "1-on-1 Career Transition Mentoring",
        description:
          "Personalized guidance for career changers entering web development.",
        deliverables: [
          "Custom Learning Roadmap",
          "Weekly Coaching Calls",
          "Resume & Portfolio Help",
        ],
        timeline: "3-6 month programs",
        pricing: "timeline based",
        link: "Apply for Mentorship",
      },
      {
        icon: Rocket,
        name: "Technical Skills Accelerator",
        description:
          "Intensive training in React, JavaScript, and full-stack development.",
        deliverables: [
          "Structured Curriculum",
          "Code Reviews",
          "Portfolio Projects",
        ],
        timeline: "8-12 weeks",
        pricing: "Contact for quote",
        link: "Enroll Now",
      },
      {
        icon: Search,
        name: "Job Search & Interview Coaching",
        description:
          "Interview preparation, technical assessment practice, salary negotiation.",
        deliverables: [
          "Mock Interviews",
          "Coding Challenge Practice",
          "Offer Evaluation",
        ],
        timeline: "",
        pricing: "Contact for quote",
        link: "Get Interview Ready",
      },
      {
        icon: ClipboardCheck,
        name: "Portfolio & Project Review",
        description: "Detailed feedback on portfolio projects and code quality.",
        deliverables: [
          "Code Review",
          "Improvement Recommendations",
          "Best Practices Guidance",
        ],
        timeline: "One-time or ongoing",
        pricing: "free",
        link: "Request a Review",
      },
    ],
  },
};
