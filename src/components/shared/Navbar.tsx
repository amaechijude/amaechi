"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchCurrentXRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 4;
      setElevated(scrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
      // focus first item for accessibility
      const id = window.setTimeout(() => firstLinkRef.current?.focus(), 50);
      return () => {
        window.clearTimeout(id);
        document.body.classList.remove("overflow-hidden");
      };
    }
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const activeMatcher = useCallback(
    (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href)),
    [pathname]
  );

  const navHeight = useMemo(() => ({
    mobile: "h-14 sm:h-16", // 56-64px on small screens
    desktop: "md:h-16 lg:h-18", // ~64-72px
  }), []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "backdrop-blur supports-[backdrop-filter]:bg-[#0f172a]/70 bg-[#0f172a]/90",
        elevated && "shadow-[0_6px_20px_rgba(0,0,0,0.35)] bg-[#0f172a]/95"
      )}
      role="banner"
    >
      <nav
        className={cn(
          "mx-auto w-full max-w-7xl px-4 md:px-6",
          "flex items-center justify-between",
          navHeight.mobile,
          navHeight.desktop,
          "animate-[fade_in_0.3s_ease-out]"
        )}
        aria-label="Main"
      >
        <Link
          href="/"
          className={cn(
            "group select-none",
            "text-[#cbd5e1]",
            "font-semibold tracking-tight",
            "transition-transform duration-200 will-change-transform",
            "hover:scale-[1.02]"
          )}
        >
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className="size-2.5 rounded-full bg-[#8b5cf6] shadow-[0_0_20px_#8b5cf6] group-hover:animate-[pulse_glow_1.2s_ease-in-out_infinite]"
            />
            <span className="text-sm md:text-base">Amaechi Okonkwo</span>
            <span className="hidden text-xs text-[#94a3b8] md:inline">/ Senior Software Engineer</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden gap-1 md:flex">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeMatcher(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm",
                  "text-[#cbd5e1] transition-colors duration-200",
                  "hover:bg-[#1e293b]",
                  isActive && "bg-[#1e293b] text-white"
                )}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[#8b5cf6]"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={cn(
            "md:hidden inline-flex items-center justify-center",
            "size-10 rounded-md",
            "text-[#cbd5e1]",
            "hover:bg-[#1e293b]",
            "transition-colors duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "md:hidden fixed inset-0 z-40",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        onTouchStart={(e) => {
          touchStartXRef.current = e.touches[0].clientX;
          touchCurrentXRef.current = e.touches[0].clientX;
        }}
        onTouchMove={(e) => {
          touchCurrentXRef.current = e.touches[0].clientX;
        }}
        onTouchEnd={() => {
          const start = touchStartXRef.current ?? 0;
          const end = touchCurrentXRef.current ?? 0;
          const deltaX = start - end;
          // swipe right-to-left to close when dragging from left to right is negative; we want closing on right swipe
          if (deltaX < -60) setOpen(false);
          touchStartXRef.current = null;
          touchCurrentXRef.current = null;
        }}
      >
        {/* Backdrop */}
        <button
          aria-label="Close menu"
          className={cn(
            "absolute inset-0 bg-black/40 transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={cn(
            "absolute inset-y-0 right-0 w-[85%] max-w-sm",
            "bg-[#0f172a] border-l border-white/10",
            "backdrop-blur-xl",
            "transition-transform duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="px-5 py-4 flex items-center justify-between">
            <span className="text-[#cbd5e1] font-medium">Menu</span>
            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center",
                "size-10 rounded-md",
                "text-[#cbd5e1]",
                "hover:bg-[#1e293b]",
                "transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
              )}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>

          <div className="flex flex-col gap-1 px-3 pb-6">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeMatcher(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={idx === 0 ? firstLinkRef : undefined}
                  className={cn(
                    "rounded-md px-4 py-3 text-base",
                    "text-[#cbd5e1] transition-colors duration-200",
                    "hover:bg-[#1e293b]",
                    isActive && "bg-[#1e293b] text-white"
                  )}
                  onClick={() => setOpen(false)}
                  style={{
                    transitionDelay: `${idx * 100}ms`,
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}


