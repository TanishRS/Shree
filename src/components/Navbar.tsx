"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "@/lib/gsap";
import Magnetic from "@/components/motion/Magnetic";

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
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Reset the mobile menu when the route changes (adjusting state during
  // render, per React's guidance, instead of an effect that would cause
  // an extra commit).
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const spring = { type: "spring" as const, stiffness: 420, damping: 32 };

  // Shrink + hide-on-scroll-down, reveal-on-scroll-up
  useGSAP(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        setScrolled(self.scroll() > 24);
        if (self.scroll() < 80) {
          setHidden(false);
          return;
        }
        setHidden(self.direction === 1);
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4 transition-transform duration-500"
      style={{ transform: hidden ? "translateY(-130%)" : "translateY(0)" }}
    >
      <header className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between rounded-2xl border border-black/[0.06] bg-cream/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(20,17,15,0.06)] transition-[padding] duration-300 ${
            scrolled ? "px-3 py-1.5 sm:px-4 sm:py-2" : "px-4 py-2.5 sm:px-6 sm:py-3.5"
          }`}
        >
          {/* ── Logo ── */}
          <Link href="/" className="shrink-0 flex items-center" onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              alt="Shree Excellence Tutorials"
              width={1536}
              height={1024}
              className={`w-auto transition-[height] duration-300 ${scrolled ? "h-9 sm:h-11" : "h-11 sm:h-14"}`}
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
                  className="relative px-4 py-2 text-sm font-semibold"
                  style={{ fontFamily: "var(--font-body, sans-serif)" }}
                >
                  {active && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 bg-navy rounded-full"
                      transition={spring}
                    />
                  )}
                  <span className={`relative z-10 transition-colors ${active ? "text-white" : "text-navy hover:text-maroon"}`}>
                    {label}
                  </span>
                </Link>
              );
            })}

            <Magnetic className="ml-3">
              <motion.a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-maroon text-white text-sm font-semibold rounded-full select-none"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
                whileHover={reduce ? {} : { backgroundColor: "#7A1A28" }}
                whileTap={reduce ? {} : { scale: 0.94 }}
                transition={spring}
              >
                Enroll Now
              </motion.a>
            </Magnetic>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden p-2 -mr-1 text-navy rounded-full hover:bg-navy/5 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {open ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 rounded-2xl border border-black/[0.06] bg-cream/95 backdrop-blur-xl shadow-lg overflow-hidden"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block px-5 py-3.5 text-sm font-semibold border-b border-black/[0.05] last:border-0 ${
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
                className="block m-3 text-center px-5 py-3 bg-maroon text-white text-sm font-semibold rounded-xl active:scale-[0.97] transition-transform"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                Enroll Now via WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
