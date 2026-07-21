import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
}

/** Infinite CSS-driven marquee — GPU-cheap, pauses on hover, respects reduced motion. */
export default function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={`marquee-wrap overflow-hidden ${className ?? ""}`}>
      <div className="marquee-track">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
