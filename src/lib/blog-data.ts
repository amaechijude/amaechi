
export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Building Scalable React Components",
    excerpt: "A deep-dive into creating reusable and maintainable React components for large-scale applications.",
    content: "Full content here...",
    author: "Amaechi",
    date: "Sep 20, 2025",
    readTime: 12,
    category: "Frontend Development",
    tags: ["React", "TypeScript", "Component Design"],
    image: "/projects/one.avif",
    featured: true,
  },
  {
    id: 2,
    title: "From Bartender to Full-Stack Developer: A Success Story",
    excerpt: "How I leveraged mentorship and self-study to transition into a career in tech.",
    content: "Full content here...",
    author: "Amaechi",
    date: "Sep 15, 2025",
    readTime: 8,
    category: "Career Mentoring",
    tags: ["Career Change", "Mentorship", "Self-Taught"],
    image: "/projects/two.avif",
  },
  {
    id: 3,
    title: "Why Senior Developers Should Mentor",
    excerpt: "Exploring the benefits of mentorship for both the mentor and the mentee in a software development team.",
    content: "Full content here...",
    author: "Amaechi",
    date: "Sep 10, 2025",
    readTime: 6,
    category: "Team Leadership",
    tags: ["Mentorship", "Leadership", "Team Culture"],
    image: "/projects/three.avif",
  },
  {
    id: 4,
    title: "Designing APIs That Scale",
    excerpt: "Best practices for designing and implementing RESTful APIs that can handle high traffic and evolve over time.",
    content: "Full content here...",
    author: "Amaechi",
    date: "Sep 5, 2025",
    readTime: 15,
    category: "Architecture & Scaling",
    tags: ["API Design", "Scalability", "System Design"],
    image: "/projects/four.avif",
  },
  {
    id: 5,
    title: "Navigating Your First Senior Developer Role",
    excerpt: "A guide for new senior developers on how to succeed in their new role and responsibilities.",
    content: "Full content here...",
    author: "Amaechi",
    date: "Aug 28, 2025",
    readTime: 10,
    category: "Career Mentoring",
    tags: ["Career Growth", "Senior Dev", "Leadership"],
    image: "/test/one.avif",
  },
  {
    id: 6,
    title: "Tech Trends to Watch in 2026",
    excerpt: "A look at the upcoming technologies and trends that will shape the software development industry.",
    content: "Full content here...",
    author: "Amaechi",
    date: "Aug 22, 2025",
    readTime: 7,
    category: "Industry Insights",
    tags: ["Tech Trends", "Future of Tech", "AI"],
    image: "/test/two.avif",
  },
    {
    id: 7,
    title: "A Deep Dive into Next.js 14",
    excerpt: "Exploring the new features and improvements in Next.js 14 and how to leverage them in your projects.",
    content: "Full content here...",
    author: "Amaechi",
    date: "Aug 15, 2025",
    readTime: 11,
    category: "Frontend Development",
    tags: ["Next.js", "React", "Web Dev"],
    image: "/test/three.avif",
  },
];

export const categories = [
  { name: "Frontend Development", count: 2, color: "text-blue-400" },
  { name: "Architecture & Scaling", count: 1, color: "text-green-400" },
  { name: "Career Mentoring", count: 2, color: "text-purple-400" },
  { name: "Team Leadership", count: 1, color: "text-red-400" },
  { name: "Industry Insights", count: 1, color: "text-yellow-400" },
];
