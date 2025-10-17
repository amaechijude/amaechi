"use client";

import { useState, useEffect } from 'react';

export function useActiveSection(itemIds: string[], rootMargin = '-50% 0px -50% 0px'): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    const elements = itemIds.map((id) => document.getElementById(id)).filter(Boolean);
    elements.forEach((el) => observer.observe(el!));

    return () => {
      elements.forEach((el) => observer.unobserve(el!));
    };
  }, [itemIds, rootMargin]);

  return activeSection;
}
