"use client";

import { motion, useReducedMotion } from "framer-motion";

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
  const reduce = useReducedMotion();

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {WHY_US.map(({ accent, title, body }, i) => (
        <motion.div
          key={title}
          className="bg-cream rounded-xl p-6 border border-cream-dark cursor-default"
          initial={reduce ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.48, delay: i * 0.1 }}
          whileHover={reduce ? {} : { y: -5, boxShadow: "0 10px 28px rgba(0,0,0,0.09)" }}
        >
          <div
            className="w-10 h-10 rounded-lg mb-4 flex items-end justify-end pb-1.5 pr-1.5"
            style={{ backgroundColor: accent + "22" }}
          >
            <div className="w-5 h-5 rounded" style={{ backgroundColor: accent }} />
          </div>
          <h3
            className="font-bold text-navy mb-2"
            style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
          >
            {title}
          </h3>
          <p
            className="text-warm-gray text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-body, sans-serif)" }}
          >
            {body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
