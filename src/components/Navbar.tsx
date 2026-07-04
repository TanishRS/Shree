"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

const WA_HREF = "https://wa.me/919967365793?text=Hello%2C%20I%27m%20interested%20in%20enrolling%20at%20Shree%20Excellence%20Tutorials";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const spring = { type: "spring" as const, stiffness: 400, damping: 22 };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* ── Logo ── */}
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              alt="Shree Excellence Tutorials"
              width={1536}
              height={1024}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`group relative flex flex-col px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? "text-maroon" : "text-navy hover:text-maroon"
                  }`}
                  style={{ fontFamily: "var(--font-body, sans-serif)" }}
                >
                  {label}
                  {active ? (
                    // Active: five-color strip
                    <div className="flex h-0.5 mt-0.5 gap-0.5" aria-hidden="true">
                      {["#9B2335","#1B3A6B","#2D6A2D","#CC5500","#6B3A5D"].map((c) => (
                        <div key={c} className="flex-1 rounded-full" style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  ) : (
                    // Hover: single underline grows from center
                    <span
                      className="h-0.5 rounded-full mt-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center"
                      style={{ backgroundColor: "#9B2335" }}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}

            <motion.a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 bg-maroon text-white text-sm font-semibold rounded select-none"
              style={{ fontFamily: "var(--font-body, sans-serif)" }}
              whileHover={reduce ? {} : { scale: 1.05, backgroundColor: "#7A1A28" }}
              whileTap={reduce ? {} : { scale: 0.94 }}
              transition={spring}
            >
              Enroll Now
            </motion.a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden p-2 text-navy rounded hover:bg-cream transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {open ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* ── Mobile menu ── */}
        {open && (
          <div className="md:hidden border-t border-cream-dark pb-4 pt-2">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block px-2 py-3 text-sm font-semibold border-b border-cream-dark last:border-0 ${
                  pathname === href ? "text-maroon" : "text-navy"
                }`}
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                {label}
              </Link>
            ))}
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block mt-3 text-center px-5 py-3 bg-maroon text-white text-sm font-semibold rounded hover:bg-maroon-dark active:scale-[0.97] transition-all"
              style={{ fontFamily: "var(--font-body, sans-serif)" }}
            >
              Enroll Now via WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* Five-color step-strip */}
      <div className="flex h-1" aria-hidden="true">
        {["#9B2335","#1B3A6B","#2D6A2D","#CC5500","#6B3A5D"].map((c) => (
          <div key={c} className="flex-1" style={{ backgroundColor: c }} />
        ))}
      </div>
    </header>
  );
}
