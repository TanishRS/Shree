"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsap";

interface SplitHeadingProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** "mount" reveals immediately (hero headlines); "scroll" waits until in view. */
  trigger?: "mount" | "scroll";
  delay?: number;
  type?: "lines" | "chars";
}

/**
 * Splits a heading into lines (or chars) and reveals them with a staggered
 * clip + rise. Text stays in the DOM as plain content if JS/motion is off.
 */
export default function SplitHeading({
  children,
  as: Tag = "h2",
  className,
  trigger = "scroll",
  delay = 0,
  type = "lines",
}: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = new SplitText(el, {
          type: type === "chars" ? "chars,lines" : "lines",
          linesClass: "split-line",
        });

        const targets = type === "chars" ? split.chars : split.lines;

        gsap.set(targets, { opacity: 0, y: "110%" });

        const anim = gsap.to(targets, {
          opacity: 1,
          y: "0%",
          duration: 0.9,
          delay,
          ease: "power4.out",
          stagger: type === "chars" ? 0.015 : 0.09,
          scrollTrigger:
            trigger === "scroll"
              ? { trigger: el, start: "top 85%", toggleActions: "play none none none" }
              : undefined,
        });

        return () => {
          anim.kill();
          split.revert();
        };
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(el, { opacity: 1 });
      });

      return () => mm.revert();
    },
    { scope: ref, dependencies: [trigger, type] }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
