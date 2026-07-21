"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const REVIEWS = [
  {
    name: "Santanu S.",
    text: "I joined Shree Excellence Tutorials in 11th Std... I highly recommend it to parents looking for a reliable institution to guide their children through the crucial years.",
  },
  {
    name: "Himani G.",
    text: "Teachers there are really understanding and excellent when it comes to teaching. The environment is the best. This institute helped me to grow and realize my potential!",
  },
  {
    name: "Krishna S.",
    text: "The best ever tutorials till date... there is no ladder for success as he still helps and guides me in every path of learning.",
  },
  {
    name: "Kartik W.",
    text: "One of the best coaching classes in panvel. Teachers too supportive and friendly.",
  },
  {
    name: "Vaishnav S.",
    text: "Really a great place to inculcate more knowledge... the focus remains on all the individuals rather than teaching as a whole. 100% recommended.",
  },
] as const;

const BRAND_COLORS = ["#9B2335", "#1B3A6B", "#2D6A2D", "#CC5500", "#6B3A5D"];

function GoogleBadge() {
  return (
    <div className="flex items-center gap-1.5">
      {/* Google 'G' using brand letter */}
      <svg width="16" height="16" viewBox="0 0 24 24" aria-label="Google" role="img">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <span
        className="text-warm-gray text-xs"
        style={{ fontFamily: "var(--font-body, sans-serif)" }}
      >
        Google Review
      </span>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#F59E0B" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const reduce = useReducedMotion();

  const go = useCallback((d: number) => {
    setDir(d);
    setCurrent((p) => (p + d + REVIEWS.length) % REVIEWS.length);
  }, []);

  // Auto-advance — paused when user prefers reduced motion
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => go(1), 5200);
    return () => clearInterval(t);
  }, [go, reduce]);

  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 36 : -36, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -36 : 36, scale: 0.97 }),
  };

  const accentColor = BRAND_COLORS[current];

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Card area */}
      <div className="overflow-hidden rounded-3xl">
        <AnimatePresence initial={false} custom={dir} mode="wait">
          <motion.div
            key={current}
            custom={dir}
            variants={reduce ? {} : variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: "easeInOut" }}
            className="bg-white rounded-3xl p-9 md:p-12 shadow-[0_20px_60px_-20px_rgba(20,17,15,0.15)] border border-cream-dark"
          >
            {/* Top row: stars + badge */}
            <div className="flex items-center justify-between mb-5">
              <Stars />
              <GoogleBadge />
            </div>

            {/* Quote */}
            <blockquote
              className="text-navy text-xl md:text-2xl leading-relaxed mb-7 relative font-medium"
              style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
            >
              <span
                className="absolute -top-4 -left-1 text-6xl leading-none select-none"
                style={{ color: accentColor, opacity: 0.18, fontFamily: "var(--font-heading, Georgia, serif)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <span className="relative">{REVIEWS[current].text}</span>
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                style={{ backgroundColor: accentColor }}
                aria-hidden="true"
              >
                {REVIEWS[current].name[0]}
              </div>
              <span
                className="font-semibold text-navy text-sm"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                {REVIEWS[current].name}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between mt-6">
        {/* Prev */}
        <button
          onClick={() => go(-1)}
          className="w-10 h-10 rounded-full border border-cream-dark bg-white flex items-center justify-center text-navy hover:border-navy transition-colors"
          aria-label="Previous review"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="14" y1="8" x2="2" y2="8"/>
            <polyline points="7 13 2 8 7 3"/>
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2" role="tablist" aria-label="Review navigation">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Review ${i + 1}`}
              onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === current ? 24 : 8,
                backgroundColor: i === current ? BRAND_COLORS[i] : "#D4C9BC",
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => go(1)}
          className="w-10 h-10 rounded-full border border-cream-dark bg-white flex items-center justify-center text-navy hover:border-navy transition-colors"
          aria-label="Next review"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="2" y1="8" x2="14" y2="8"/>
            <polyline points="9 3 14 8 9 13"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
