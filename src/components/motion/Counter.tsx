"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface CounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

/** Count-up number that animates from 0 when it scrolls into view. */
export default function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  duration = 1.4,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          onUpdate: () => {
            el.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
      });

      return () => mm.revert();
    },
    { scope: ref, dependencies: [value] }
  );

  return (
    <span ref={ref} className={className}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
}
