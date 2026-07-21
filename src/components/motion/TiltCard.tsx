"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number;
}

/** Subtle 3D tilt + lift that follows the cursor. No-op on touch / reduced motion. */
export default function TiltCard({ children, className, max = 6 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (window.matchMedia("(hover: none)").matches) return;

      const rotX = gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "power3.out" });
      const rotY = gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "power3.out" });
      const lift = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

      gsap.set(el, { transformPerspective: 700, transformStyle: "preserve3d" });

      const handleMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotY(px * max);
        rotX(-py * max);
        lift(-4);
      };

      const handleLeave = () => {
        rotX(0);
        rotY(0);
        lift(0);
      };

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);

      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      };
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
