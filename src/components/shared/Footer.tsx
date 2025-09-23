"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between px-4 md:flex-row">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Amaechi. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-6 md:mt-0">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 text-slate-400 hover:text-violet-400 transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 text-slate-400 hover:text-violet-400 transition-colors" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6 text-slate-400 hover:text-violet-400 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
