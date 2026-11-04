import type { ReactNode } from "react"
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from "recharts"

const axis = {
  stroke: "#71717a",
  tick: { fill: "#a1a1aa", fontSize: 10 },
}
const grid = { stroke: "#27272a", strokeDasharray: "3 3" }

function SvgShell({
  title,
  description,
  children,
  className,
}: {
  title: string
  description?: string
  children: ReactNode
  className?: string
}) {
  return (
    <figure
      className={`not-prose my-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-50 shadow-sm ${className ?? ""}`}
    >
      <figcaption className="space-y-1 border-b border-zinc-800 px-4 py-3">
        <p className="text-sm font-semibold tracking-tight">{title}</p>
        {description ? (
          <p className="text-xs text-zinc-400">{description}</p>
        ) : null}
      </figcaption>
      <div className="px-3 py-4 sm:px-4">{children}</div>
    </figure>
  )
}

export function QuartileDistribution() {
  const segments = [
    { label: "Minimum to Q1", color: "bg-sky-500/80" },
    { label: "Q1 to Q2", color: "bg-teal-500/80" },
    { label: "Q2 to Q3", color: "bg-emerald-500/80" },
    { label: "Q3 to Maximum", color: "bg-amber-500/80" },
  ]

  return (
    <SvgShell
      title="Quartile distribution"
      description="Each quartile covers 25% of the ordered observations."
    >
      <div className="grid gap-2 sm:grid-cols-4">
        {segments.map((s) => (
          <div
            key={s.label}
            className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900"
          >
            <div className={`h-3 ${s.color}`} />
            <div className="space-y-1 px-3 py-3 text-center">
              <p className="text-lg font-semibold tabular-nums text-zinc-100">
                25%
              </p>
              <p className="text-xs text-zinc-400">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </SvgShell>
  )
}

export function FiveNumberBoxPlot() {
  return (
    <SvgShell
      title="Structure of a box plot"
      description="Conceptual illustration of the five-number summary."
    >
      <svg
        viewBox="0 0 340 120"
        className="mx-auto h-auto w-full max-w-xl text-zinc-100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Box plot showing Min, Q1, Median, Q3 and Max"
      >
        <line
          x1="25"
          y1="53"
          x2="312"
          y2="53"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="25"
          y1="42"
          x2="25"
          y2="64"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="312"
          y1="42"
          x2="312"
          y2="64"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="100"
          y="30"
          width="145"
          height="46"
          fill="#0d9488"
          fillOpacity="0.16"
          stroke="#0d9488"
          strokeWidth="2"
        />
        <line
          x1="172"
          y1="30"
          x2="172"
          y2="76"
          stroke="#0d9488"
          strokeWidth="3"
        />
        <line
          x1="25"
          y1="53"
          x2="100"
          y2="53"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="245"
          y1="53"
          x2="312"
          y2="53"
          stroke="currentColor"
          strokeWidth="2"
        />
        {[
          [25, "Min"],
          [100, "Q1"],
          [172, "Median"],
          [245, "Q3"],
          [312, "Max"],
        ].map(([x, label]) => (
          <g key={String(label)}>
            <line
              x1={Number(x)}
              y1="78"
              x2={Number(x)}
              y2="85"
              stroke="currentColor"
            />
            <text
              x={Number(x)}
              y="101"
              fill="currentColor"
              fontSize="10"
              textAnchor="middle"
            >
              {label}
            </text>
          </g>
        ))}
      </svg>
    </SvgShell>
  )
}

export function LowHighCV() {
  return (
    <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-emerald-900/50 bg-emerald-950/30 p-4 text-zinc-50">
        <p className="text-sm font-semibold text-emerald-300">Low CV</p>
        <p className="mt-1 text-base font-medium">High consistency</p>
        <p className="mt-2 text-xs leading-relaxed text-zinc-400">
          Low relative variability, high uniformity and stability.
        </p>
      </div>
      <div className="rounded-xl border border-rose-900/50 bg-rose-950/30 p-4 text-zinc-50">
        <p className="text-sm font-semibold text-rose-300">High CV</p>
        <p className="mt-1 text-base font-medium">Low consistency</p>
        <p className="mt-2 text-xs leading-relaxed text-zinc-400">
          High relative variability, low uniformity and stability.
        </p>
      </div>
    </div>
  )
}

type ScatterKind =
  | "perfect-positive"
  | "perfect-negative"
  | "positive"
  | "negative"
  | "zero"
  | "nonlinear"

function scatterPoints(kind: ScatterKind) {
  const xs = [1, 2, 3, 4, 5, 6, 7, 8]
  switch (kind) {
    case "perfect-positive":
      return xs.map((x) => ({ x, y: x }))
    case "perfect-negative":
      return xs.map((x) => ({ x, y: 9 - x }))
    case "positive":
      return [
        { x: 1, y: 2.2 },
        { x: 2, y: 2.8 },
        { x: 3, y: 4.1 },
        { x: 4, y: 4.4 },
        { x: 5, y: 5.6 },
        { x: 6, y: 6.2 },
        { x: 7, y: 7.5 },
        { x: 8, y: 7.9 },
      ]
    case "negative":
      return [
        { x: 1, y: 7.8 },
        { x: 2, y: 7.1 },
        { x: 3, y: 6.0 },
        { x: 4, y: 5.4 },
        { x: 5, y: 4.3 },
        { x: 6, y: 3.7 },
        { x: 7, y: 2.6 },
        { x: 8, y: 2.1 },
      ]
    case "zero":
      return [
        { x: 1, y: 5.2 },
        { x: 2, y: 3.1 },
        { x: 3, y: 7.4 },
        { x: 4, y: 2.8 },
        { x: 5, y: 6.1 },
        { x: 6, y: 4.0 },
        { x: 7, y: 5.8 },
        { x: 8, y: 3.5 },
      ]
    case "nonlinear":
      return [
        { x: 1, y: 1.5 },
        { x: 2, y: 3.2 },
        { x: 3, y: 5.5 },
        { x: 4, y: 7.0 },
        { x: 5, y: 7.6 },
        { x: 6, y: 7.1 },
        { x: 7, y: 5.4 },
        { x: 8, y: 2.8 },
      ]
  }
}

const scatterCards: {
  kind: ScatterKind
  title: string
  caption: string
  color: string
}[] = [
  {
    kind: "perfect-positive",
    title: "Perfect Positive",
    caption: "All points lie on an upward straight line.",
    color: "#34d399",
  },
  {
    kind: "perfect-negative",
    title: "Perfect Negative",
    caption: "All points lie on a downward straight line.",
    color: "#f87171",
  },
  {
    kind: "positive",
    title: "Positive Correlation",
    caption: "Points tend to increase from left to right.",
    color: "#60a5fa",
  },
  {
    kind: "negative",
    title: "Negative Correlation",
    caption: "Points tend to decrease from left to right.",
    color: "#fb923c",
  },
  {
    kind: "zero",
    title: "Zero Correlation",
    caption: "No clear linear pattern.",
    color: "#a1a1aa",
  },
  {
    kind: "nonlinear",
    title: "Nonlinear Relationship",
    caption: "Points follow a curved pattern.",
    color: "#c084fc",
  },
]

export function ScatterTypes() {
  return (
    <div className="not-prose my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {scatterCards.map((card) => (
        <figure
          key={card.kind}
          className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-50 shadow-sm"
        >
          <figcaption className="border-b border-zinc-800 px-3 py-2">
            <p className="text-sm font-semibold">{card.title}</p>
            <p className="text-[11px] text-zinc-400">{card.caption}</p>
          </figcaption>
          <div className="h-40 w-full px-1 pb-1 pt-2">
            <ResponsiveContainer>
              <ScatterChart margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
                <CartesianGrid {...grid} />
                <XAxis
                  type="number"
                  dataKey="x"
                  domain={[0, 9]}
                  hide
                  {...axis}
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  domain={[0, 9]}
                  hide
                  {...axis}
                />
                <Scatter
                  data={scatterPoints(card.kind)}
                  fill={card.color}
                  line={
                    card.kind === "perfect-positive" ||
                    card.kind === "perfect-negative"
                      ? { stroke: card.color, strokeWidth: 1.5 }
                      : undefined
                  }
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </figure>
      ))}
    </div>
  )
}

export function TwoTailedTest() {
  return (
    <SvgShell
      title="Visual decision rule"
      description="Conceptual two-tailed test. The calculated t-value lies inside the non-rejection region."
    >
      <svg
        viewBox="0 0 340 120"
        className="mx-auto h-auto w-full max-w-xl text-zinc-100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Two-tailed t-test with critical values at plus or minus 2.306 and calculated t of 1.506"
      >
        <path
          d="M15 90 C35 90 55 84 75 60 C91 38 103 20 130 20 C157 20 169 38 185 60 C205 84 225 90 245 90"
          fill="none"
          stroke="#0d9488"
          strokeWidth="2.5"
        />
        <path
          d="M15 90 C22 87 28 83 34 77 L34 90 Z"
          fill="#dc4444"
          fillOpacity="0.35"
        />
        <path
          d="M226 77 C232 83 238 87 245 90 L245 90 Z"
          fill="#dc4444"
          fillOpacity="0.35"
        />
        <line
          x1="130"
          y1="20"
          x2="130"
          y2="92"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeDasharray="3 3"
        />
        <line
          x1="34"
          y1="76"
          x2="34"
          y2="95"
          stroke="#dc4444"
          strokeWidth="2"
        />
        <line
          x1="226"
          y1="76"
          x2="226"
          y2="95"
          stroke="#dc4444"
          strokeWidth="2"
        />
        <line
          x1="187"
          y1="54"
          x2="187"
          y2="95"
          stroke="#2563eb"
          strokeWidth="2.5"
        />
        <text
          x="34"
          y="108"
          fill="currentColor"
          fontSize="10"
          textAnchor="middle"
        >
          -2.306
        </text>
        <text
          x="130"
          y="108"
          fill="currentColor"
          fontSize="10"
          textAnchor="middle"
        >
          0
        </text>
        <text
          x="187"
          y="108"
          fill="#2563eb"
          fontSize="10"
          textAnchor="middle"
        >
          1.506
        </text>
        <text
          x="226"
          y="108"
          fill="currentColor"
          fontSize="10"
          textAnchor="middle"
        >
          +2.306
        </text>
      </svg>
    </SvgShell>
  )
}
