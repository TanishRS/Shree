import type { Metadata } from "next";
import { StepBlocksDivider, StepBlocksAccent } from "@/components/StepBlocksSVG";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Magnetic from "@/components/motion/Magnetic";

export const metadata: Metadata = {
  title: "Contact | Shree Excellence Tutorials",
  description:
    "Contact Shree Excellence Tutorials in Panvel. Call +91 99673 65793 or WhatsApp us. Sector 7, Khanda Colony, Panvel, Maharashtra 410206.",
};

export default function ContactPage() {
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
              Contact
            </span>
          </Reveal>
          <SplitHeading as="h1" trigger="mount" className="text-page-title font-semibold">
            <>
              Come find us in <span className="text-maroon italic">Panvel.</span>
            </>
          </SplitHeading>
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── CONTACT DETAILS + MAP ──────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact info */}
            <div className="space-y-7">
              <Reveal as="div">
                <div className="flex items-center gap-2 mb-3">
                  <StepBlocksAccent />
                  <span
                    className="text-warm-gray text-xs uppercase tracking-[0.18em] font-semibold"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    Get in Touch
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-semibold text-navy mb-6"
                  style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
                >
                  We&apos;d love to hear from you.
                </h2>
              </Reveal>

              {/* Address card */}
              <Reveal as="div" delay={0.05} className="bg-white rounded-2xl p-6 border border-cream-dark flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-semibold text-navy text-sm mb-1"
                    style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
                  >
                    Address
                  </h3>
                  <address
                    className="not-italic text-warm-gray text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    Sector 7, Khanda Colony<br />
                    Panvel, Maharashtra 410206
                  </address>
                </div>
              </Reveal>

              {/* Phone card */}
              <Reveal as="div" delay={0.1} className="bg-white rounded-2xl p-6 border border-cream-dark flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-maroon/10 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9B2335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-semibold text-navy text-sm mb-1"
                    style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
                  >
                    Phone
                  </h3>
                  <a
                    href="tel:+919967365793"
                    className="text-maroon font-semibold hover:text-maroon-dark transition-colors"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    +91 99673 65793
                  </a>
                </div>
              </Reveal>

              {/* WhatsApp card */}
              <Reveal as="div" delay={0.15} className="bg-white rounded-2xl p-6 border border-cream-dark flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#2D6A2D" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.504 3.93 1.387 5.61L.047 23.4a.5.5 0 0 0 .609.608l5.88-1.337A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 0 1-5.045-1.4l-.36-.215-3.49.794.82-3.394-.235-.374A9.787 9.787 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-semibold text-navy text-sm mb-1"
                    style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
                  >
                    WhatsApp
                  </h3>
                  <p
                    className="text-warm-gray text-xs mb-3"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    Quickest way to reach us — send a message any time.
                  </p>
                  <Magnetic strength={8}>
                    <a
                      href="https://wa.me/919967365793?text=Hello%2C%20I%27m%20interested%20in%20enrolling%20at%20Shree%20Excellence%20Tutorials"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-forest text-white text-xs font-semibold rounded-lg hover:bg-forest-dark transition-colors"
                      style={{ fontFamily: "var(--font-body, sans-serif)" }}
                    >
                      Open WhatsApp Chat
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="2" y1="10" x2="10" y2="2" />
                        <polyline points="4 2 10 2 10 8" />
                      </svg>
                    </a>
                  </Magnetic>
                </div>
              </Reveal>

              {/* Hours placeholder */}
              <Reveal as="div" delay={0.2} className="bg-cream-dark rounded-2xl p-5 border border-cream-dark">
                <h3
                  className="font-semibold text-navy text-sm mb-1"
                  style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
                >
                  Office Hours
                </h3>
                <p
                  className="text-warm-gray text-xs italic"
                  style={{ fontFamily: "var(--font-body, sans-serif)" }}
                >
                  [ Batch timings and office hours — coming soon. Call or WhatsApp to confirm current schedule. ]
                </p>
              </Reveal>
            </div>

            {/* Map */}
            <Reveal as="div" delay={0.1} className="flex flex-col gap-4">
              <h2
                className="text-2xl font-semibold text-navy"
                style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
              >
                Find us on the map
              </h2>
              <div className="rounded-3xl overflow-hidden border border-cream-dark shadow-sm flex-1 min-h-[360px]">
                <iframe
                  title="Shree Excellence Tutorials location on Google Maps"
                  src="https://maps.google.com/maps?q=Sector+7+Khanda+Colony+Panvel+Maharashtra+410206&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 360 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p
                className="text-warm-gray text-xs"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                Sector 7, Khanda Colony, Panvel, Maharashtra 410206
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <StepBlocksDivider />

      {/* ── FINAL CTA ──────────────────────────────────────── */}
      <section className="bg-navy text-white py-16 md:py-20">
        <Reveal as="div" className="max-w-3xl mx-auto px-4 text-center">
          <p
            className="text-white/60 text-xs uppercase tracking-widest mb-3"
            style={{ fontFamily: "var(--font-body, sans-serif)" }}
          >
            Pride in Excellence
          </p>
          <h2
            className="text-2xl md:text-3xl font-semibold mb-7"
            style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
          >
            Shree Excellence Tutorials, Panvel
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
            <Magnetic strength={10}>
              <a
                href="https://wa.me/919967365793?text=Hello%2C%20I%27m%20interested%20in%20enrolling%20at%20Shree%20Excellence%20Tutorials"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 bg-forest text-white font-bold rounded-lg hover:bg-forest-dark transition-colors"
              >
                WhatsApp Us
              </a>
            </Magnetic>
            <Magnetic strength={10}>
              <a
                href="tel:+919967365793"
                className="inline-flex items-center justify-center px-7 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
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
