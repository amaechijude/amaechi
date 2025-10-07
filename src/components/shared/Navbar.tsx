"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.2, 0.8, 0.2, 1] as const, // 👈 Fix
        staggerChildren: 0.05,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

 const mobileMenuVariants = {
   hidden: { x: "100%", opacity: 0 },
   visible: {
     x: 0,
     opacity: 1,
     transition: {
       duration: 0.4,
       ease: [0.2, 0.8, 0.2, 1] as const, // 👈 Fix
     },
   },
 };


  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-900/80 shadow-lg backdrop-blur-sm"
        )}
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <nav className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <motion.div variants={navItemVariants}>
            <Link href="/" className="text-xl font-bold text-slate-200">
              Amaechi
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.div
            className="hidden items-center gap-2 md:flex"
            variants={navbarVariants}
          >
            {NAV_ITEMS.map((item) => (
              <motion.div key={item.label} variants={navItemVariants}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-violet-400",
                    pathname === item.href && "text-violet-400"
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="active-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-violet-400"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-slate-900 p-6"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-slate-200">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-violet-400"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <motion.div
                className="mt-8 flex flex-col gap-4"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {NAV_ITEMS.map((item) => (
                  <motion.div key={item.label} variants={navItemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block rounded-md px-4 py-2 text-lg font-medium",
                        pathname === item.href
                          ? "bg-violet-500/10 text-violet-300"
                          : "text-slate-300 hover:bg-slate-800"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
