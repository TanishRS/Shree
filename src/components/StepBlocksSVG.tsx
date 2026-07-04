// The signature five-step visual motif — reused at hero, nav, and divider scale

interface ChildFigureProps {
  cx: number;
  topY: number;
  scale?: number;
}

function ChildFigure({ cx, topY, scale = 1 }: ChildFigureProps) {
  const s = scale;
  return (
    <g transform={`translate(${cx}, ${topY})`}>
      <circle cx={0} cy={-22 * s} r={6 * s} fill="#1C1C2E" />
      <path
        d={`M${-5 * s} ${-16 * s} L${5 * s} ${-16 * s} L${4 * s} ${-2 * s} L${-4 * s} ${-2 * s} Z`}
        fill="#1C1C2E"
      />
      <line x1={-5 * s} y1={-13 * s} x2={-11 * s} y2={-21 * s} stroke="#1C1C2E" strokeWidth={2 * s} strokeLinecap="round" />
      <line x1={5 * s} y1={-13 * s} x2={11 * s} y2={-21 * s} stroke="#1C1C2E" strokeWidth={2 * s} strokeLinecap="round" />
      <line x1={-2 * s} y1={-2 * s} x2={-4 * s} y2={10 * s} stroke="#1C1C2E" strokeWidth={2 * s} strokeLinecap="round" />
      <line x1={2 * s} y1={-2 * s} x2={4 * s} y2={10 * s} stroke="#1C1C2E" strokeWidth={2 * s} strokeLinecap="round" />
    </g>
  );
}

const BLOCKS = [
  { color: "#9B2335", h: 50 },
  { color: "#1B3A6B", h: 88 },
  { color: "#2D6A2D", h: 126 },
  { color: "#CC5500", h: 164 },
  { color: "#6B3A5D", h: 202 },
] as const;

const BLOCK_W = 52;
const GAP = 10;
const MAX_H = 202;
const KID_SPACE = 48;

export function StepBlocksHero() {
  const svgH = MAX_H + KID_SPACE;
  const svgW = BLOCKS.length * (BLOCK_W + GAP) - GAP;

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Five ascending step-blocks with students climbing — the Shree Excellence emblem"
      className="w-full max-w-xs sm:max-w-sm md:max-w-md drop-shadow-lg"
    >
      {BLOCKS.map((block, i) => {
        const x = i * (BLOCK_W + GAP);
        const blockTopY = svgH - block.h;
        const cx = x + BLOCK_W / 2;
        return (
          <g key={i}>
            <rect x={x} y={blockTopY} width={BLOCK_W} height={block.h} rx={5} fill={block.color} />
            <rect x={x + 4} y={blockTopY + 4} width={BLOCK_W - 8} height={14} rx={3} fill="white" fillOpacity={0.12} />
            <ChildFigure cx={cx} topY={blockTopY} scale={0.85} />
          </g>
        );
      })}
    </svg>
  );
}

export function StepBlocksMark({ size = 32 }: { size?: number }) {
  const bw = 7;
  const g = 2;
  const maxH = 24;
  const heights = [8, 12, 16, 20, 24];
  const colors = ["#9B2335", "#1B3A6B", "#2D6A2D", "#CC5500", "#6B3A5D"];
  const svgW = 5 * (bw + g) - g;

  return (
    <svg
      viewBox={`0 0 ${svgW} ${maxH}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: size, height: size * 0.75 }}
    >
      {heights.map((h, i) => (
        <rect key={i} x={i * (bw + g)} y={maxH - h} width={bw} height={h} rx={1} fill={colors[i]} />
      ))}
    </svg>
  );
}

export function StepBlocksDivider() {
  return (
    <div className="flex h-1.5 w-full" aria-hidden="true">
      <div className="flex-1 bg-maroon" />
      <div className="flex-1 bg-navy" />
      <div className="flex-1 bg-forest" />
      <div className="flex-1 bg-orange" />
      <div className="flex-1 bg-plum" />
    </div>
  );
}

export function StepBlocksAccent() {
  const heights = [6, 9, 12, 15, 18];
  const colors = ["#9B2335", "#1B3A6B", "#2D6A2D", "#CC5500", "#6B3A5D"];
  const bw = 5;
  const g = 2;
  const maxH = 18;
  const svgW = 5 * (bw + g) - g;

  return (
    <svg viewBox={`0 0 ${svgW} ${maxH}`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 36, height: 18 }}>
      {heights.map((h, i) => (
        <rect key={i} x={i * (bw + g)} y={maxH - h} width={bw} height={h} rx={1} fill={colors[i]} />
      ))}
    </svg>
  );
}
