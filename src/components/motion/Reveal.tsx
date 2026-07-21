"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  /** When set, animates direct children with this selector as a stagger group instead of the wrapper itself. */
  stagger?: number;
  start?: string;
}

/**
 * Scroll-triggered fade + rise. Falls back to an instant, static appearance
 * under prefers-reduced-motion (checked via ScrollTrigger's matchMedia).
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  y = 40,
  delay = 0,
  duration = 0.9,
  stagger,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = stagger ? gsap.utils.toArray(el.children) : el;

        gsap.fromTo(
          targets,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: "power3.out",
            stagger: stagger ?? 0,
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: "play none none none",
            },
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(el, { opacity: 1, y: 0 });
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}
