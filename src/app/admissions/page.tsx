import type { Metadata } from "next";
import { StepBlocksDivider, StepBlocksAccent } from "@/components/StepBlocksSVG";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import TiltCard from "@/components/motion/TiltCard";
import Magnetic from "@/components/motion/Magnetic";

export const metadata: Metadata = {
  title: "Admissions | Shree Excellence Tutorials",
  description:
    "Enrol in Shree Excellence Tutorials, Panvel. State Board and CBSE coaching for Grades 8–12. Contact us on WhatsApp or call +91 99673 65793.",
};

const BOARDS = [
  {
    color: "#9B2335",
    board: "Maharashtra State Board",
    desc: "Full syllabus coverage for SSC (Grades 8–10) and HSC (Grades 11–12). Aligned with the Divisional Board timetable and paper pattern.",
  },
  {
    color: "#1B3A6B",
    board: "CBSE",
    desc: "Class 8–12 coaching following the NCERT curriculum. Regular practice with CBSE-style assessment formats across all secondary grades.",
  },
];

const GRADES = [
  { grade: "Grade 8",  color: "#9B2335", note: "Foundation year — building strong subject basics" },
  { grade: "Grade 9",  color: "#1B3A6B", note: "Concepts deepen; pre-board habits established" },
  { grade: "Grade 10", color: "#2D6A2D", note: "SSC / CBSE board year — focused exam preparation" },
  { grade: "Grade 11", color: "#CC5500", note: "Stream specialisation — Science, Commerce, or Arts" },
  { grade: "Grade 12", color: "#6B3A5D", note: "HSC / CBSE board year — intensive revision and mock tests" },
];

const STEPS = [
  {
    num: "01",
    color: "#9B2335",
    title: "Get in touch",
    body: "Call or WhatsApp us to ask any questions about batches, timing, and fees. No commitment needed.",
  },
  {
    num: "02",
    color: "#1B3A6B",
    title: "Visit the institute",
    body: "Come by our Khanda Colony centre. Meet the faculty, see the classroom, and gauge the environment for yourself.",
  },
  {
    num: "03",
    color: "#2D6A2D",
    title: "Confirm enrolment",
    body: "Once you are satisfied, we confirm your child's seat in the appropriate batch for their grade and board.",
  },
  {
    num: "04",
    color: "#CC5500",
    title: "Start learning",
    body: "Your child joins the batch and we get to work. We track progress and keep you informed throughout.",
  },
];

export default function AdmissionsPage() {
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
              Admissions
            </span>
          </Reveal>
          <SplitHeading as="h1" trigger="mount" className="text-page-title font-semibold max-w-2xl mb-5">
            <>
              Enrol at <span className="text-maroon italic">Shree Excellence.</span>
            </>
          </SplitHeading>
          <Reveal as="div" delay={0.3}>
            <p
              className="text-white/70 max-w-xl text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body, sans-serif)" }}
            >
              We keep the process simple. No lengthy forms — just a conversation to find the right batch for your child.
            </p>
          </Reveal>
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── GRADES ─────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <StepBlocksAccent />
              <span
                className="text-warm-gray text-xs uppercase tracking-[0.18em] font-semibold"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                Who We Teach
              </span>
            </div>
            <SplitHeading as="h2" className="text-display font-semibold text-navy">
              Grades offered
            </SplitHeading>
          </div>

          <Reveal as="div" stagger={0.08} className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {GRADES.map(({ grade, color, note }) => (
              <TiltCard key={grade} max={5}>
                <div className="h-full bg-white rounded-2xl overflow-hidden border border-cream-dark hover:shadow-[0_20px_45px_-20px_rgba(20,17,15,0.18)] transition-shadow duration-300">
                  <div className="h-2" style={{ backgroundColor: color }} />
                  <div className="p-6">
                    <h3
                      className="text-2xl font-semibold mb-2"
                      style={{ fontFamily: "var(--font-heading, Georgia, serif)", color }}
                    >
                      {grade}
                    </h3>
                    <p
                      className="text-warm-gray text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body, sans-serif)" }}
                    >
                      {note}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </Reveal>
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── BOARDS ─────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <StepBlocksAccent />
              <span
                className="text-warm-gray text-xs uppercase tracking-[0.18em] font-semibold"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                Curriculum
              </span>
            </div>
            <SplitHeading as="h2" className="text-display font-semibold text-navy">
              Boards we cover
            </SplitHeading>
          </div>

          <Reveal as="div" stagger={0.1} className="grid md:grid-cols-2 gap-6">
            {BOARDS.map(({ color, board, desc }) => (
              <TiltCard key={board} max={4}>
                <div className="flex gap-5 h-full p-7 rounded-2xl bg-cream border border-cream-dark">
                  <div
                    className="shrink-0 w-1.5 self-stretch rounded-full"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3
                      className="font-semibold text-lg mb-2"
                      style={{ fontFamily: "var(--font-heading, Georgia, serif)", color }}
                    >
                      {board}
                    </h3>
                    <p
                      className="text-warm-gray text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body, sans-serif)" }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </Reveal>

          <p
            className="mt-8 text-warm-gray/70 text-sm italic"
            style={{ fontFamily: "var(--font-body, sans-serif)" }}
          >
            [ Subjects offered, batch sizes, timings, and fees — details coming soon. Contact us directly for current information. ]
          </p>
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── HOW TO ENROL ───────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <StepBlocksAccent />
              <span
                className="text-warm-gray text-xs uppercase tracking-[0.18em] font-semibold"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                Process
              </span>
            </div>
            <SplitHeading as="h2" className="text-display font-semibold text-navy">
              How to enrol
            </SplitHeading>
          </div>

          <Reveal as="div" stagger={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ num, color, title, body }) => (
              <div key={num} className="relative">
                <div
                  className="absolute top-6 left-12 right-0 h-px hidden lg:block"
                  style={{ backgroundColor: color + "33" }}
                  aria-hidden="true"
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-semibold text-white text-sm mb-4 relative z-10"
                  style={{ backgroundColor: color, fontFamily: "var(--font-heading, Georgia, serif)" }}
                >
                  {num}
                </div>
                <h3
                  className="font-semibold text-navy mb-2"
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
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="bg-maroon text-white py-20 md:py-24">
        <Reveal as="div" className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-5"
            style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
          >
            Let&apos;s talk about your child&apos;s next step.
          </h2>
          <p
            className="text-white/80 text-lg mb-9"
            style={{ fontFamily: "var(--font-body, sans-serif)" }}
          >
            Reach out via WhatsApp for the fastest response, or call us directly.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ fontFamily: "var(--font-body, sans-serif)" }}
          >
            <Magnetic strength={10}>
              <a
                href="https://wa.me/919967365793?text=Hello%2C%20I%27m%20interested%20in%20enrolling%20at%20Shree%20Excellence%20Tutorials"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-maroon font-bold rounded-lg hover:bg-cream transition-colors shadow"
              >
                WhatsApp to Enrol
              </a>
            </Magnetic>
            <Magnetic strength={10}>
              <a
                href="tel:+919967365793"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
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
