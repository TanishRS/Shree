import type { Metadata } from "next";
import Link from "next/link";
import { StepBlocksDivider, StepBlocksAccent } from "@/components/StepBlocksSVG";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import TiltCard from "@/components/motion/TiltCard";
import Magnetic from "@/components/motion/Magnetic";

export const metadata: Metadata = {
  title: "About Us | Shree Excellence Tutorials",
  description:
    "Learn about Shree Excellence Tutorials — dedicated coaching for Grades 8–12 in Panvel, Maharashtra since 2017.",
};

const DIFFERENTIATORS = [
  {
    color: "#9B2335",
    heading: "Grade-specific focus",
    body: "We teach Grades 8 through 12 — covering both the foundational years and the high-stakes board years. Every lesson is aimed at exactly what each grade needs, not a diluted mix.",
  },
  {
    color: "#1B3A6B",
    heading: "Both major boards",
    body: "Whether your child is on State Board or CBSE, we cover the full syllabus. No need to hunt for different tutors for siblings on different boards.",
  },
  {
    color: "#2D6A2D",
    heading: "Continuity you can count on",
    body: "We have been operating from the same location in Khanda Colony since 2017. Parents who enrolled their older children still send their younger ones to us — that continuity is something we are proud of.",
  },
  {
    color: "#CC5500",
    heading: "Honest feedback",
    body: "We believe parents should never be surprised at exam time. Regular progress updates, open communication, and straightforward advice are part of how we work.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ────────────────────────────────────── */}
      <section className="relative grain bg-navy text-white py-20 md:py-28 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="flex items-center gap-2 mb-5">
            <StepBlocksAccent />
            <span
              className="text-white/60 text-xs uppercase tracking-[0.2em] font-semibold"
              style={{ fontFamily: "var(--font-body, sans-serif)" }}
            >
              About Us
            </span>
          </Reveal>
          <SplitHeading
            as="h1"
            trigger="mount"
            className="text-page-title font-semibold max-w-2xl"
          >
            <>
              Behind the name <span className="text-maroon italic">Shree Excellence.</span>
            </>
          </SplitHeading>
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── STORY ──────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Photo placeholder */}
            <Reveal as="div" className="bg-cream-dark rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-navy/10 flex items-center justify-center">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <circle cx="18" cy="12" r="7" fill="#1B3A6B" fillOpacity="0.3"/>
                    <path d="M4 32c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#1B3A6B" strokeWidth="2" strokeLinecap="round" fill="none" fillOpacity="0.3"/>
                  </svg>
                </div>
                <p
                  className="text-warm-gray text-xs"
                  style={{ fontFamily: "var(--font-body, sans-serif)" }}
                >
                  [ Founder / classroom photo coming soon ]
                </p>
              </div>
            </Reveal>

            {/* Story text */}
            <Reveal as="div" delay={0.1}>
              <h2
                className="text-3xl md:text-4xl font-semibold text-navy mb-6"
                style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
              >
                Our story
              </h2>
              <div
                className="space-y-4 text-warm-gray text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                <p>
                  Shree Excellence Tutorials was founded with one intention: to give students in Panvel access to structured, attentive academic coaching across the full secondary school journey — Grades 8 through 12.
                </p>
                <p>
                  Since 2017, we have been part of the Khanda Colony neighbourhood, and over the years the institute has built a reputation that is carried by our students and their families, not by advertising. Our 4.9-star rating on Google — drawn from 44 organic reviews — reflects that.
                </p>
                <p>
                  We cover both State Board and CBSE curricula, so families with children on different boards can rely on a single, trusted place for all their coaching needs.
                </p>
                <p className="italic text-base text-warm-gray/80 border-l-4 border-maroon pl-4 py-1">
                  [ Full founder story and team profiles — coming soon. We are working with the institute to gather these details. ]
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── WHAT MAKES US DIFFERENT ────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <StepBlocksAccent />
              <span
                className="text-warm-gray text-xs uppercase tracking-[0.18em] font-semibold"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                Our Approach
              </span>
            </div>
            <SplitHeading as="h2" className="text-display font-semibold text-navy">
              What sets us apart
            </SplitHeading>
          </div>

          <Reveal as="div" stagger={0.1} className="grid md:grid-cols-2 gap-6">
            {DIFFERENTIATORS.map(({ color, heading, body }) => (
              <TiltCard key={heading} max={4}>
                <div className="flex gap-5 h-full p-7 rounded-2xl bg-cream border border-cream-dark hover:shadow-[0_20px_45px_-20px_rgba(20,17,15,0.15)] transition-shadow duration-300">
                  <div
                    className="shrink-0 w-1.5 rounded-full"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3
                      className="font-semibold text-navy text-lg mb-2"
                      style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
                    >
                      {heading}
                    </h3>
                    <p
                      className="text-warm-gray text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body, sans-serif)" }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </Reveal>
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── REVIEWS PLACEHOLDER ────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <Reveal as="div" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-3">
            <StepBlocksAccent />
          </div>
          <h2
            className="text-3xl md:text-4xl font-semibold text-navy mb-4"
            style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
          >
            4.9★ — 44 families can&apos;t be wrong
          </h2>
          <p
            className="text-warm-gray text-lg mb-9"
            style={{ fontFamily: "var(--font-body, sans-serif)" }}
          >
            Read all 44 reviews on Google to hear directly from the students and parents we have worked with.
          </p>
          <div className="inline-flex items-center gap-2 bg-white rounded-2xl p-7 border border-cream-dark shadow-sm">
            <span className="text-2xl" aria-hidden="true">⭐</span>
            <div className="text-left">
              <div
                className="font-semibold text-navy text-lg"
                style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
              >
                4.9 / 5
              </div>
              <div
                className="text-warm-gray text-xs"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                Based on 44 Google Reviews
              </div>
            </div>
            <div className="mx-4 w-px h-10 bg-cream-dark" />
            <p
              className="text-warm-gray text-xs italic max-w-[200px]"
              style={{ fontFamily: "var(--font-body, sans-serif)" }}
            >
              [ Review quotes coming soon — gathering from Google Business Profile ]
            </p>
          </div>
        </Reveal>
      </section>

      <StepBlocksDivider />

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-20 md:py-24">
        <Reveal as="div" className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-5"
            style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
          >
            Want to know more?
          </h2>
          <p
            className="text-white/70 text-lg mb-9"
            style={{ fontFamily: "var(--font-body, sans-serif)" }}
          >
            Check our admissions page for details on grades, boards, and how to enrol — or contact us directly.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ fontFamily: "var(--font-body, sans-serif)" }}
          >
            <Magnetic strength={10}>
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-maroon text-white font-bold rounded-lg hover:bg-maroon-dark transition-colors"
              >
                See Admissions
              </Link>
            </Magnetic>
            <Magnetic strength={10}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </>
  );
}
