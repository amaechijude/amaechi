import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { siteUrl } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amaechi - Full-Stack Developer & Backend Specialist",
    template: "%s | Amaechi",
  },
  description: `Full-Stack Developer specializing in backend architecture and scalable web applications. 
    Expert in C#, .NET, Python, and modern frontend technologies with a passion for building robust systems.`,
    verification: {
    google: "qjrrf8x5SOEkBDFSgslu6oE-BAPyIa7fYy-248nf_p8",
  },
  keywords: [
    "Full-Stack Developer",
    "Backend Developer",
    "Backend Engineer",
    "Full-Stack Engineer",
    "Software Developer",
    "Software Engineer",
    "Amaechi Ugwu",
    "Amaechi",
    "Ugwu",
    "Backend Specialist",
    "API Developer",
    "System Architect",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Python Developer",
    "Django Developer",
    "C# Developer",
    ".NET Developer",
    "Technical Writer",
    "Technical Mentor",
    "Portfolio",
    "Mentor",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "C#",
    ".NET",
    "Python",
    "Django",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "Technical Mentor",
    "Portfolio",
    "Amaechi",
  ],
  authors: [{ name: "Amaechi", url: "https://github.com/amaechijude" }],
  creator: "Amaechi",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Amaechi - Full-Stack Developer & Backend Specialist",
    description:
      "Full-Stack Developer with deep backend expertise. Specializing in scalable web applications, API development, and system architecture using C#, .NET, and Python.",
    siteName: "Amaechi's Portfolio",
    images: [
      {
        url: "/profile.jpg", // Make sure to create and place this file in the /public directory
        width: 1200,
        height: 630,
        alt: "Amaechi - Full-Stack Developer & Backend Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaechi - Full-Stack Developer & Backend Specialist",
    description:
      "Full-Stack Developer with deep backend expertise. Specializing in scalable web applications, API development, and system architecture using C#, .NET, and Python.",
    creator: "@amaechi_1",
    site: "@amaechi_1",
    images: [`${siteUrl}/profile.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/favicon1.ico",
    shortcut: "/icon1.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <main className="relative flex flex-col items-center justify-center bg-slate-900 w-full">
            <Navbar />
            {children}
            <Footer />
        </main>
      </body>
    </html>
  );
}
