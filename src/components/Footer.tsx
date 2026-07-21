import Link from "next/link";
import Image from "next/image";
import { StepBlocksDivider } from "./StepBlocksSVG";

export default function Footer() {
  return (
    <footer className="relative grain bg-navy text-white overflow-hidden">
      <StepBlocksDivider />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div>
            {/* Real logo — displayed on the dark navy background where the glow design reads correctly */}
            <div className="mb-5 rounded-xl overflow-hidden" style={{ width: 180, height: 120 }}>
              <Image
                src="/logo.png"
                alt="Shree Excellence Tutorials"
                width={1536}
                height={1024}
                className="w-full h-full object-contain"
                priority={false}
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
              Pride in Excellence. Dedicated coaching for Grades 8–12 (State Board &amp; CBSE) in the heart of Panvel since 2017.
            </p>
            <div className="mt-5 flex items-center gap-1.5">
              <span className="text-amber-400 text-sm">★★★★★</span>
              <span className="text-white/80 text-sm font-semibold">4.9</span>
              <span className="text-white/50 text-xs">· 44 Google Reviews</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}>
              Quick Links
            </h3>
            <ul className="space-y-3" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Admissions", href: "/admissions" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="group inline-flex items-center text-white/70 hover:text-white text-sm transition-colors">
                    <span className="relative">
                      {label}
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}>
              Find Us
            </h3>
            <address className="not-italic space-y-3 text-sm text-white/70 leading-relaxed" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
              <p>Sector 7, Khanda Colony<br />Panvel, Maharashtra 410206</p>
              <p>
                <a href="tel:+919967365793" className="hover:text-white transition-colors">
                  +91 99673 65793
                </a>
              </p>
              <a
                href="https://wa.me/919967365793?text=Hello%2C%20I%27m%20interested%20in%20enrolling%20at%20Shree%20Excellence%20Tutorials"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2.5 bg-forest-light text-white text-xs font-semibold rounded-lg hover:bg-forest transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.504 3.93 1.387 5.61L.047 23.4a.5.5 0 0 0 .609.608l5.88-1.337A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 0 1-5.045-1.4l-.36-.215-3.49.794.82-3.394-.235-.374A9.787 9.787 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
                WhatsApp Us
              </a>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/10 text-center text-white/40 text-xs" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
          © {new Date().getFullYear()} Shree Excellence Tutorials, Panvel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
