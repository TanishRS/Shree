import Link from "next/link";
import { StepBlocksDivider, StepBlocksAccent } from "@/components/StepBlocksSVG";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedWhyUs from "@/components/AnimatedWhyUs";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Counter from "@/components/motion/Counter";
import Marquee from "@/components/motion/Marquee";
import Magnetic from "@/components/motion/Magnetic";

const STATS = [
  { value: 4.9, decimals: 1, suffix: "★", label: "Google Rating", dot: "#9B2335" },
  { value: 44, decimals: 0, suffix: "", label: "Student Reviews", dot: "#6B3A5D" },
  { value: 2, decimals: 0, suffix: "", label: "Boards Covered", dot: "#2D6A2D" },
  { value: 5, decimals: 0, suffix: "", label: "Grades (8–12)", dot: "#CC5500" },
] as const;

const MARQUEE_ITEMS = [
  "State Board", "CBSE", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12", "Est. 2017", "Panvel",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO (animated, client component) ─────────────── */}
      <AnimatedHero />

      <StepBlocksDivider />

      {/* ── MARQUEE STRIP ──────────────────────────────────── */}
      <section className="bg-navy py-4" aria-hidden="true">
        <Marquee>
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="flex items-center">
              <span
                className="text-white/80 text-sm font-semibold uppercase tracking-[0.2em] px-6"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                {item}
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: ["#9B2335", "#2D6A2D", "#CC5500", "#6B3A5D"][i % 4] }}
              />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ── STATS STRIP ────────────────────────────────────── */}
      <section className="bg-navy" aria-label="Key facts">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
          <Reveal as="div" stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/15">
            {STATS.map(({ value, decimals, suffix, label, dot }) => (
              <div key={label} className="text-center px-4">
                <div className="flex justify-center mb-2.5" aria-hidden="true">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: dot }} />
                </div>
                <div
                  className="text-4xl md:text-5xl font-semibold text-white leading-none mb-1.5"
                  style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
                >
                  <Counter value={value} decimals={decimals ?? 0} suffix={suffix} />
                </div>
                <div
                  className="text-white/55 text-xs uppercase tracking-widest mt-1"
                  style={{ fontFamily: "var(--font-body, sans-serif)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── ABOUT PREVIEW ──────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Visual block */}
            <Reveal as="div" className="md:col-span-5 relative">
              <div className="bg-cream-dark rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-navy/10 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                      <rect x="5" y="20" width="6" height="15" rx="2" fill="#9B2335"/>
                      <rect x="13" y="14" width="6" height="21" rx="2" fill="#1B3A6B"/>
                      <rect x="21" y="9" width="6" height="26" rx="2" fill="#2D6A2D"/>
                      <rect x="29" y="4" width="6" height="31" rx="2" fill="#CC5500"/>
                    </svg>
                  </div>
                  <p className="text-warm-gray text-xs" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
                    [ Photo coming soon ]
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 h-1 rounded-full overflow-hidden flex">
                {["#9B2335","#1B3A6B","#2D6A2D","#CC5500","#6B3A5D"].map((c) => (
                  <div key={c} className="flex-1" style={{ backgroundColor: c }} />
                ))}
              </div>
            </Reveal>

            {/* Text */}
            <div className="md:col-span-7 md:pl-4">
              <div className="flex items-center gap-2 mb-4">
                <StepBlocksAccent />
                <span className="text-warm-gray text-xs uppercase tracking-[0.2em] font-semibold" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
                  About Us
                </span>
              </div>
              <SplitHeading
                as="h2"
                className="text-display font-semibold text-navy mb-5"
              >
                A tuition home that feels like family.
              </SplitHeading>
              <Reveal as="div" delay={0.1}>
                <p className="text-warm-gray text-lg leading-relaxed mb-4" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
                  Shree Excellence Tutorials has been a trusted part of Panvel&apos;s educational landscape since 2017. We coach Grades 8 through 12 — from the foundational middle years right through to board exams.
                </p>
                <p className="text-warm-gray text-lg leading-relaxed mb-9" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
                  Our approach is straightforward: small groups, clear explanations, and enough personal attention so no student slips behind unnoticed.
                </p>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-maroon font-semibold text-lg"
                  style={{ fontFamily: "var(--font-body, sans-serif)" }}
                >
                  Read the full story
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">
                    <line x1="2" y1="8" x2="14" y2="8"/>
                    <polyline points="9 3 14 8 9 13"/>
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── WHY SHREE EXCELLENCE (animated, client) ────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-3">
              <StepBlocksAccent />
            </div>
            <SplitHeading as="h2" className="text-display font-semibold text-navy">
              Why Shree Excellence?
            </SplitHeading>
          </div>
          <AnimatedWhyUs />
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── TESTIMONIALS (client carousel) ─────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-3">
              <StepBlocksAccent />
            </div>
            <SplitHeading as="h2" className="text-display font-semibold text-navy">
              What our students say
            </SplitHeading>
            <p className="mt-3 text-warm-gray text-sm" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
              Verified Google Reviews · 4.9★ across 44 reviews
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── CTA BANNER ─────────────────────────────────────── */}
      <section className="relative bg-maroon text-white py-20 md:py-28 overflow-hidden">
        <div
          className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full opacity-[0.12] pointer-events-none"
          style={{ background: "radial-gradient(circle, #FAF7F2 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <Reveal as="div" className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <SplitHeading as="h2" trigger="scroll" className="text-display font-semibold mb-5 leading-tight">
            Ready to take the first step?
          </SplitHeading>
          <p className="text-white/80 text-lg mb-9" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
            Reach out via WhatsApp or call us directly. We&apos;ll answer every question before you commit to anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
            <Magnetic strength={10}>
              <a
                href="https://wa.me/919967365793?text=Hello%2C%20I%27m%20interested%20in%20enrolling%20at%20Shree%20Excellence%20Tutorials"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-maroon font-bold rounded-lg hover:bg-cream active:scale-[0.97] transition-[background-color,transform] duration-200 shadow-lg"
              >
                WhatsApp Us
              </a>
            </Magnetic>
            <Magnetic strength={10}>
              <a
                href="tel:+919967365793"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 active:scale-[0.97] transition-[background-color,transform] duration-200"
              >
                +91 99673 65793
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </>
  );
}
