import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: Update metadataBase with your production domain.

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Amaechi - Software Engineer & Mentor",
    template: "%s | Amaechi",
  },
  description: `The portfolio of Amaechi, a software engineer and mentor specializing in building 
    scalable web applications and empowering developers through technical writing and mentorship.`,
  keywords: [
    "Software Engineer",
    "Software Developer",
    "Software",
    "Engineer",
    "Developer",
    "Amaechi Ugwu",
    "Amaechi",
    "Ugwu",
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Engineer",
    "Full-Stack",
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
    title: "Amaechi - Senior Software Engineer & Mentor",
    description:
      "Building scalable web applications and empowering developers.",
    siteName: "Amaechi's Portfolio",
    images: [
      {
        url: "/profile.jpg", // Make sure to create and place this file in the /public directory
        width: 1200,
        height: 630,
        alt: "Amaechi - Software Engineer & Mentor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaechi - Software Engineer & Mentor",
    description:
      "Building scalable web applications and empowering developers.",
    creator: "@amaechi_1",
    site: "@amaechi_1",
    images: [`${siteUrl}/profile.jpg`],
  },

  icons: {
    icon: "/favicon.ico",
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
        <main className="relative flex flex-col items-center justify-center bg-slate-900">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
