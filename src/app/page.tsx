import Link from "next/link";
import { StepBlocksDivider, StepBlocksAccent } from "@/components/StepBlocksSVG";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedWhyUs from "@/components/AnimatedWhyUs";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

// Stats: values are white text on navy bg — no per-stat color needed.
// Accent dots use brand colors instead.
const STATS = [
  { value: "4.9★", label: "Google Rating",    dot: "#9B2335" },
  { value: "44",   label: "Student Reviews",  dot: "#6B3A5D" },  // was text-navy = invisible; fixed
  { value: "2",    label: "Boards Covered",   dot: "#2D6A2D" },
  { value: "5",    label: "Grades (8–12)",    dot: "#CC5500" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO (animated, client component) ─────────────── */}
      <AnimatedHero />

      <StepBlocksDivider />

      {/* ── STATS STRIP ────────────────────────────────────── */}
      <section className="bg-navy" aria-label="Key facts">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20">
            {STATS.map(({ value, label, dot }) => (
              <div key={label} className="text-center px-4">
                {/* Colored block accent above value */}
                <div className="flex justify-center mb-2" aria-hidden="true">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: dot }} />
                </div>
                <div
                  className="text-3xl md:text-4xl font-extrabold text-white leading-none mb-1"
                  style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
                >
                  {value}
                </div>
                <div
                  className="text-white/60 text-xs uppercase tracking-widest mt-1"
                  style={{ fontFamily: "var(--font-body, sans-serif)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── ABOUT PREVIEW ──────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual block */}
            <div className="relative">
              <div className="bg-cream-dark rounded-2xl p-8 aspect-square flex items-center justify-center">
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
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <StepBlocksAccent />
                <span className="text-warm-gray text-xs uppercase tracking-[0.18em] font-semibold" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
                  About Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-4" style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}>
                A tuition home that feels like family.
              </h2>
              <p className="text-warm-gray leading-relaxed mb-4" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
                Shree Excellence Tutorials has been a trusted part of Panvel&apos;s educational landscape since 2017. We coach Grades 8 through 12 — from the foundational middle years right through to board exams.
              </p>
              <p className="text-warm-gray leading-relaxed mb-8" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
                Our approach is straightforward: small groups, clear explanations, and enough personal attention so no student slips behind unnoticed.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-maroon font-semibold hover:gap-3 transition-all"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                Read the full story
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="2" y1="8" x2="14" y2="8"/>
                  <polyline points="9 3 14 8 9 13"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── WHY SHREE EXCELLENCE (animated, client) ────────── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-3">
              <StepBlocksAccent />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy" style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}>
              Why Shree Excellence?
            </h2>
          </div>
          <AnimatedWhyUs />
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── TESTIMONIALS (client carousel) ─────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-3">
              <StepBlocksAccent />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy" style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}>
              What our students say
            </h2>
            <p className="mt-2 text-warm-gray text-sm" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
              Verified Google Reviews · 4.9★ across 44 reviews
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── CTA BANNER ─────────────────────────────────────── */}
      <section className="bg-maroon text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}>
            Ready to take the first step?
          </h2>
          <p className="text-white/80 text-lg mb-8" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
            Reach out via WhatsApp or call us directly. We&apos;ll answer every question before you commit to anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
            <a
              href="https://wa.me/919967365793?text=Hello%2C%20I%27m%20interested%20in%20enrolling%20at%20Shree%20Excellence%20Tutorials"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-white text-maroon font-bold rounded-lg hover:bg-cream active:scale-[0.97] transition-all shadow"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919967365793"
              className="px-7 py-3.5 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 active:scale-[0.97] transition-all"
            >
              +91 99673 65793
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
