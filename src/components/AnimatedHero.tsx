"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SplitHeading from "@/components/motion/SplitHeading";
import Magnetic from "@/components/motion/Magnetic";

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
  { color: "#9B2335", h: 60, grade: "08" },
  { color: "#1B3A6B", h: 104, grade: "09" },
  { color: "#2D6A2D", h: 148, grade: "10" },
  { color: "#CC5500", h: 192, grade: "11" },
  { color: "#6B3A5D", h: 236, grade: "12" },
] as const;

const BW = 58, GAP = 12, MAX_H = 236, KID = 54;

const WA_HREF = "https://wa.me/919967365793?text=Hello%2C%20I%27m%20interested%20in%20enrolling%20at%20Shree%20Excellence%20Tutorials";

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
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<SVGSVGElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  const svgH = MAX_H + KID;
  const svgW = BLOCKS.length * (BW + GAP) - GAP;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const blockGroups = blocksRef.current ? gsap.utils.toArray<SVGGElement>(blocksRef.current.children) : [];

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(eyebrowRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, 0.1)
          .fromTo(subRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, 0.55)
          .fromTo(badgesRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, 0.75)
          .fromTo(ctaRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.65 }, 0.85)
          .fromTo(
            blockGroups,
            { y: 70, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: "back.out(1.6)" },
            0.5
          );

        // Ambient blobs: settle-in once, then a gentle one-shot drift — no infinite loop
        if (blobRef.current) {
          gsap.fromTo(
            blobRef.current,
            { opacity: 0, scale: 0.85 },
            { opacity: 1, scale: 1, duration: 1.6, ease: "power2.out" }
          );
        }

        // Scroll cue fades as the user starts scrolling
        if (cueRef.current) {
          gsap.to(cueRef.current, {
            opacity: 0,
            scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "+=250", scrub: true },
          });
        }
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([eyebrowRef.current, subRef.current, badgesRef.current, ctaRef.current], { opacity: 1, y: 0 });
        if (blocksRef.current) gsap.set(blocksRef.current.children, { opacity: 1, y: 0 });
        if (cueRef.current) gsap.set(cueRef.current, { display: "none" });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative bg-cream overflow-hidden">
      {/* Ambient gradient mesh */}
      <div ref={blobRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -right-40 -top-40 w-[560px] h-[560px] rounded-full opacity-[0.10] blur-2xl"
          style={{ background: "radial-gradient(circle, #1B3A6B 0%, transparent 70%)" }}
        />
        <div
          className="absolute -left-32 top-1/3 w-[420px] h-[420px] rounded-full opacity-[0.08] blur-2xl"
          style={{ background: "radial-gradient(circle, #9B2335 0%, transparent 70%)" }}
        />
        <div
          className="absolute right-1/4 bottom-0 w-[380px] h-[380px] rounded-full opacity-[0.07] blur-2xl"
          style={{ background: "radial-gradient(circle, #CC5500 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 pb-20 md:pb-28">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* ── Text ── */}
          <div className="flex-1 order-2 md:order-1 md:max-w-xl">
            <p
              ref={eyebrowRef}
              className="text-warm-gray text-xs font-semibold uppercase tracking-[0.24em] mb-5 flex items-center gap-2"
              style={{ fontFamily: "var(--font-body, sans-serif)" }}
            >
              <span className="w-6 h-px bg-maroon" aria-hidden="true" />
              Est. 2017 · Panvel, Maharashtra
            </p>

            <SplitHeading
              as="h1"
              trigger="mount"
              className="text-hero font-semibold text-navy mb-6"
              type="lines"
            >
              <>
                Pride in
                <br />
                <span className="text-maroon italic">Excellence.</span>
              </>
            </SplitHeading>

            <p
              ref={subRef}
              className="text-lg sm:text-xl text-warm-gray leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: "var(--font-body, sans-serif)" }}
            >
              State Board &amp; CBSE coaching for Grades 8–12 in Khanda Colony, Panvel.
              Trusted by families across the community since 2017.
            </p>

            <div ref={badgesRef} className="flex flex-wrap gap-3 mb-10">
              {[
                <><span className="text-amber-500">★</span> 4.9 · 44 Reviews</>,
                "State Board & CBSE",
                "Grades 8–12",
              ].map((label, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-cream-dark rounded-full text-xs font-semibold text-navy shadow-sm"
                  style={{ fontFamily: "var(--font-body, sans-serif)" }}
                >
                  {label}
                </span>
              ))}
            </div>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
              <Magnetic strength={10}>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-forest text-white font-semibold rounded-lg shadow-sm select-none hover:bg-forest-dark active:scale-[0.97] transition-[background-color,transform] duration-200"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </Magnetic>
              <Magnetic strength={10}>
                <a
                  href="tel:+919967365793"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-maroon text-maroon font-semibold rounded-lg select-none hover:bg-maroon hover:text-cream active:scale-[0.97] transition-[background-color,color,transform] duration-200"
                >
                  <PhoneIcon />
                  Call Now
                </a>
              </Magnetic>
            </div>
          </div>

          {/* ── Step-blocks visual ── */}
          <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
            <svg
              ref={blocksRef}
              viewBox={`0 0 ${svgW} ${svgH}`}
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Five ascending step-blocks labelled Grade 8 through 12, with students climbing — the Shree Excellence emblem"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md drop-shadow-xl"
            >
              {BLOCKS.map((block, i) => {
                const x = i * (BW + GAP);
                const blockTopY = svgH - block.h;
                const cx = x + BW / 2;

                return (
                  <g key={i}>
                    <rect x={x} y={blockTopY} width={BW} height={block.h} rx={6} fill={block.color} />
                    <rect x={x + 4} y={blockTopY + 4} width={BW - 8} height={16} rx={4} fill="white" fillOpacity={0.14} />
                    <text
                      x={cx}
                      y={blockTopY + block.h - 14}
                      textAnchor="middle"
                      fill="white"
                      fillOpacity={0.85}
                      fontSize={13}
                      fontWeight={800}
                      style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
                    >
                      {block.grade}
                    </text>
                    <ChildFigure cx={cx} topY={blockTopY} s={0.9} />
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Scroll cue */}
        <div ref={cueRef} className="hidden md:flex justify-center mt-14">
          <div className="flex flex-col items-center gap-2 text-warm-gray/70">
            <span className="text-[10px] uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
              Scroll
            </span>
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="animate-bounce" aria-hidden="true">
              <path d="M1 1L7 8L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 11L7 18L13 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
