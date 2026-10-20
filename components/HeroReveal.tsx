"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type HeroRevealProps = {
  children: React.ReactNode;
  targetSelector: string;
  className?: string;
};

/**
 * GSAP hero text reveal on load, staggered across the selected lines and
 * started once the template loader has cleared.
 */
export default function HeroReveal({ children, targetSelector, className }: HeroRevealProps) {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scope.current;
    if (!element) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = element.querySelectorAll(targetSelector);
    if (reduce || targets.length === 0) return;

    const context = gsap.context(() => {
      gsap.from(targets, {
        y: 34,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.13,
        delay: 1.55,
      });
    }, element);

    return () => context.revert();
  }, [targetSelector]);

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
