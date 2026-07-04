"use client";

import { motion, useReducedMotion } from "framer-motion";

// Inline child figure — keeps this file self-contained as a client component
function ChildFigure({ cx, topY, s = 0.85 }: { cx: number; topY: number; s?: number }) {
  return (
    <g transform={`translate(${cx}, ${topY})`}>
      <circle cx={0} cy={-22 * s} r={6 * s} fill="#1C1C2E" />
      <path d={`M${-5*s} ${-16*s} L${5*s} ${-16*s} L${4*s} ${-2*s} L${-4*s} ${-2*s} Z`} fill="#1C1C2E" />
      <line x1={-5*s} y1={-13*s} x2={-11*s} y2={-21*s} stroke="#1C1C2E" strokeWidth={2*s} strokeLinecap="round" />
      <line x1={5*s} y1={-13*s} x2={11*s} y2={-21*s} stroke="#1C1C2E" strokeWidth={2*s} strokeLinecap="round" />
      <line x1={-2*s} y1={-2*s} x2={-4*s} y2={10*s} stroke="#1C1C2E" strokeWidth={2*s} strokeLinecap="round" />
      <line x1={2*s} y1={-2*s} x2={4*s} y2={10*s} stroke="#1C1C2E" strokeWidth={2*s} strokeLinecap="round" />
    </g>
  );
}

const BLOCKS = [
  { color: "#9B2335", h: 50 },
  { color: "#1B3A6B", h: 88 },
  { color: "#2D6A2D", h: 126 },
  { color: "#CC5500", h: 164 },
  { color: "#6B3A5D", h: 202 },
] as const;

const BW = 52, GAP = 10, MAX_H = 202, KID = 48;

const WA_HREF = "https://wa.me/919967365793?text=Hello%2C%20I%27m%20interested%20in%20enrolling%20at%20Shree%20Excellence%20Tutorials";

// Icon helpers
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.504 3.93 1.387 5.61L.047 23.4a.5.5 0 0 0 .609.608l5.88-1.337A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 0 1-5.045-1.4l-.36-.215-3.49.794.82-3.394-.235-.374A9.787 9.787 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

export default function AnimatedHero() {
  const reduce = useReducedMotion();

  const svgH = MAX_H + KID;
  const svgW = BLOCKS.length * (BW + GAP) - GAP;
  // offset that pushes every block below the SVG viewport
  const SLIDE = svgH;

  const fade = (delay: number, y = 16) => ({
    initial: reduce ? {} : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  const spring = { type: "spring" as const, stiffness: 380, damping: 22 };

  return (
    <section className="relative bg-cream overflow-hidden">
      <div
        className="absolute -right-32 -top-32 w-[520px] h-[520px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #1B3A6B 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* ── Text ── */}
          <div className="flex-1 order-2 md:order-1">
            <motion.p
              className="text-warm-gray text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: "var(--font-body, sans-serif)" }}
              {...fade(0.1, 10)}
            >
              Est. 2017 · Panvel, Maharashtra
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
              {...fade(0.24, 22)}
            >
              Pride in{" "}
              <span className="text-maroon">Excellence.</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-warm-gray leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: "var(--font-body, sans-serif)" }}
              {...fade(0.4, 14)}
            >
              State Board &amp; CBSE coaching for Grades 8–10 in Khanda Colony, Panvel.
              Trusted by families across the community since 2017.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={reduce ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              {[
                <><span className="text-yellow-500">★</span> 4.9 · 44 Reviews</>,
                "State Board & CBSE",
                "Grades 8–10",
              ].map((label, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-cream-dark rounded-full text-xs font-semibold text-navy shadow-sm"
                >
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              style={{ fontFamily: "var(--font-body, sans-serif)" }}
              {...fade(0.68, 10)}
            >
              <motion.a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-forest text-white font-semibold rounded-lg shadow-sm select-none"
                whileHover={reduce ? {} : { scale: 1.03, backgroundColor: "#1E4D1E" }}
                whileTap={reduce ? {} : { scale: 0.95 }}
                transition={spring}
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </motion.a>
              <motion.a
                href="tel:+919967365793"
                className="flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-maroon text-maroon font-semibold rounded-lg select-none"
                whileHover={reduce ? {} : { scale: 1.03, backgroundColor: "#9B2335", color: "#FAF7F2", borderColor: "#9B2335" }}
                whileTap={reduce ? {} : { scale: 0.95 }}
                transition={spring}
              >
                <PhoneIcon />
                Call Now
              </motion.a>
            </motion.div>
          </div>

          {/* ── Animated step-blocks ── */}
          <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
            <svg
              viewBox={`0 0 ${svgW} ${svgH}`}
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Five ascending step-blocks with students — the Shree Excellence emblem"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md drop-shadow-lg overflow-hidden"
              style={{ overflow: "hidden" }}
            >
              {BLOCKS.map((block, i) => {
                const x = i * (BW + GAP);
                const blockTopY = svgH - block.h;
                const cx = x + BW / 2;
                const delay = 0.45 + i * 0.14;

                return (
                  <motion.g
                    key={i}
                    initial={reduce ? {} : { y: SLIDE }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.62, delay, ease: [0.22, 1.05, 0.36, 1] }}
                  >
                    <rect x={x} y={blockTopY} width={BW} height={block.h} rx={5} fill={block.color} />
                    {/* shine highlight */}
                    <rect x={x+4} y={blockTopY+4} width={BW-8} height={14} rx={3} fill="white" fillOpacity={0.12} />
                    <ChildFigure cx={cx} topY={blockTopY} s={0.85} />
                  </motion.g>
                );
              })}
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
