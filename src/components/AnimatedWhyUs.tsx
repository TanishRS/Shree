"use client";

import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";

const WHY_US = [
  {
    accent: "#9B2335",
    title: "Grades 8–12 Coverage",
    body: "From foundational middle-school years through SSC/HSC and CBSE board exams — one institute for the full secondary journey.",
  },
  {
    accent: "#1B3A6B",
    title: "State Board & CBSE",
    body: "Both major Maharashtra boards covered under one roof, so you don't need to look elsewhere.",
  },
  {
    accent: "#2D6A2D",
    title: "Established Since 2017",
    body: "Years of consistent results and parent trust, rooted in the Panvel community.",
  },
  {
    accent: "#CC5500",
    title: "4.9★ on Google",
    body: "44 organic reviews speak louder than any claim we could make. Read them yourself.",
  },
] as const;

export default function AnimatedWhyUs() {
  return (
    <Reveal as="div" stagger={0.12} y={32} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {WHY_US.map(({ accent, title, body }) => (
        <TiltCard key={title} className="group">
          <div
            className="relative h-full bg-white rounded-2xl p-7 border border-cream-dark cursor-default overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_45px_-15px_rgba(20,17,15,0.18)]"
          >
            <div
              className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-[0.08] transition-transform duration-500 group-hover:scale-125"
              style={{ backgroundColor: accent }}
              aria-hidden="true"
            />
            <div
              className="relative w-11 h-11 rounded-xl mb-5 flex items-end justify-end pb-2 pr-2"
              style={{ backgroundColor: accent + "1A" }}
            >
              <div className="w-5 h-5 rounded" style={{ backgroundColor: accent }} />
            </div>
            <h3
              className="relative font-semibold text-navy text-lg mb-2.5"
              style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
            >
              {title}
            </h3>
            <p
              className="relative text-warm-gray text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-body, sans-serif)" }}
            >
              {body}
            </p>
          </div>
        </TiltCard>
      ))}
    </Reveal>
  );
}
