import type { ReactNode } from "react"

function Shell({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <figure className="not-prose my-6 overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm">
      <figcaption className="space-y-1 border-b border-border px-4 py-3">
        <p className="text-sm font-semibold tracking-tight">{title}</p>
        {description ? (
          <p className="text-xs text-muted-foreground">{description}</p>
        ) : null}
      </figcaption>
      <div className="px-3 py-4 sm:px-4">{children}</div>
    </figure>
  )
}

function Curve({
  d,
  stroke,
  fill,
}: {
  d: string
  stroke: string
  fill?: string
}) {
  return (
    <path
      d={d}
      fill={fill ?? "none"}
      fillOpacity={fill ? 0.18 : undefined}
      stroke={stroke}
      strokeWidth="2.5"
    />
  )
}

function Marker({
  x,
  label,
  color,
  y = 108,
}: {
  x: number
  label: string
  color: string
  y?: number
}) {
  return (
    <g>
      <line
        x1={x}
        y1="22"
        x2={x}
        y2="92"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <text
        x={x}
        y={y}
        fill={color}
        fontSize="10"
        textAnchor="middle"
        fontWeight="600"
      >
        {label}
      </text>
    </g>
  )
}

export function SymmetricalDistribution() {
  return (
    <Shell
      title="Symmetrical distribution"
      description="In a perfectly symmetrical unimodal distribution, Mean = Median = Mode."
    >
      <svg
        viewBox="0 0 340 120"
        className="mx-auto h-auto w-full max-w-xl text-foreground"
        role="img"
        aria-label="Bell-shaped symmetrical distribution with Mean, Median and Mode at the center"
      >
        <Curve
          d="M20 95 C55 95 75 30 170 30 C265 30 285 95 320 95"
          stroke="#0d9488"
          fill="#0d9488"
        />
        <Marker x={170} label="Mean = Median = Mode" color="#34d399" />
      </svg>
    </Shell>
  )
}

export function PositiveSkewDistribution() {
  return (
    <Shell
      title="Positively skewed distribution"
      description="Longer right tail. Mean is pulled toward the right: Mean > Median > Mode."
    >
      <svg
        viewBox="0 0 340 120"
        className="mx-auto h-auto w-full max-w-xl text-foreground"
        role="img"
        aria-label="Right-skewed distribution with Mode, Median and Mean labeled left to right"
      >
        <Curve
          d="M30 95 C55 95 70 25 110 25 C150 25 170 55 210 70 C260 88 290 95 320 95"
          stroke="#2563eb"
          fill="#2563eb"
        />
        <Marker x={110} label="Mode" color="#60a5fa" y={108} />
        <Marker x={165} label="Median" color="#a78bfa" y={108} />
        <Marker x={220} label="Mean" color="#f472b6" y={108} />
      </svg>
    </Shell>
  )
}

export function NegativeSkewDistribution() {
  return (
    <Shell
      title="Negatively skewed distribution"
      description="Longer left tail. Mean is pulled toward the left: Mean < Median < Mode."
    >
      <svg
        viewBox="0 0 340 120"
        className="mx-auto h-auto w-full max-w-xl text-foreground"
        role="img"
        aria-label="Left-skewed distribution with Mean, Median and Mode labeled left to right"
      >
        <Curve
          d="M20 95 C50 95 80 88 130 70 C170 55 190 25 230 25 C270 25 285 95 310 95"
          stroke="#d97706"
          fill="#d97706"
        />
        <Marker x={120} label="Mean" color="#f472b6" y={108} />
        <Marker x={175} label="Median" color="#a78bfa" y={108} />
        <Marker x={230} label="Mode" color="#60a5fa" y={108} />
      </svg>
    </Shell>
  )
}

export function KurtosisTypes() {
  const curves = [
    {
      title: "Leptokurtic",
      caption: "More peaked (β₂ > 3)",
      d: "M20 95 C70 95 95 12 170 12 C245 12 270 95 320 95",
      stroke: "#ef4444",
    },
    {
      title: "Mesokurtic",
      caption: "Normal reference (β₂ = 3)",
      d: "M20 95 C60 95 85 35 170 35 C255 35 280 95 320 95",
      stroke: "#0d9488",
    },
    {
      title: "Platykurtic",
      caption: "Flatter peak (β₂ < 3)",
      d: "M20 95 C50 95 70 58 170 58 C270 58 290 95 320 95",
      stroke: "#2563eb",
    },
  ]

  return (
    <div className="not-prose my-6 grid gap-3 sm:grid-cols-3">
      {curves.map((c) => (
        <figure
          key={c.title}
          className="overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm"
        >
          <figcaption className="border-b border-border px-3 py-2">
            <p className="text-sm font-semibold">{c.title}</p>
            <p className="text-[11px] text-muted-foreground">{c.caption}</p>
          </figcaption>
          <div className="px-2 py-3">
            <svg
              viewBox="0 0 340 110"
              className="h-auto w-full"
              role="img"
              aria-label={c.title}
            >
              <Curve d={c.d} stroke={c.stroke} fill={c.stroke} />
            </svg>
          </div>
        </figure>
      ))}
    </div>
  )
}
