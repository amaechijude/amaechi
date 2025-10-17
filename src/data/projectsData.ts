export interface ProjectDataProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveLink: string;
  codeLink: string;
}

export const projectsData: ProjectDataProps[] = [
  {
    title: "Core Banking Software",
    description:
      "An enterprise-grade core banking system built on a modern microservices architecture using .NET and C#. This project features high-performance inter-service communication with gRPC, all orchestrated behind a YARP API gateway. It leverages PostgreSQL for robust data management and Docker for containerized deployment, showcasing a scalable and resilient backend solution.",
    techStack: [
      ".NET 9",
      "C#",
      "Microservices",
      "YARP",
      "gRPC",
      "PostgreSQL",
      "Docker",
    ],
    imageUrl: "/projects/two.avif",
    liveLink: "https://github.com/amaechijude/CoreBankinSoftware",
    codeLink: "https://github.com/amaechijude/CoreBankinSoftware",
  },
  {
    title: "AspNetCoreEcommerce",
    description:
      "A comprehensive e-commerce backend built with ASP.NET Core, providing a full-featured REST API for managing products, users, and orders. This project implements secure, stateless authentication using JSON Web Tokens (JWT) and relies on PostgreSQL for persistent, relational data storage. The entire application is containerized with Docker, ensuring a portable and easily deployable solution.",
    techStack: [
      "ASP.NET Core",
      "C#",
      "REST API",
      "JWT",
      "PostgreSQL",
      "Docker",
    ],
    imageUrl: "/projects/e-commerce.png",
    liveLink: "https://github.com/amaechijude/AspNetCoreECommerce",
    codeLink: "https://github.com/amaechijude/AspNetCoreECommerce",
  },

  {
    title: "Download Event",
    description:
      "A modern, performant website for the 'Download Event', a premier tech conference. The site was built with Next.js to streamline registration, speaker management, and provide attendees with up-to-date schedules and FAQs.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    imageUrl: "/projects/download.png",
    liveLink: "https://github.com/amaechijude/download-event",
    codeLink: "https://github.com/amaechijude/download-event",
  },
];
