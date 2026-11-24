import type { ReactNode } from "react"
import { ChartShell } from "./ChartShell"

type FibNode = {
  n: number
  x: number
  depth: number
  children: FibNode[]
}

function buildFibTree(n: number) {
  let leaf = 0
  function build(k: number, depth: number): FibNode {
    const children = k >= 2 ? [build(k - 1, depth + 1), build(k - 2, depth + 1)] : []
    const x = children.length ? (children[0].x + children[1].x) / 2 : leaf++
    return { n: k, x, depth, children }
  }
  const root = build(n, 0)
  const nodes: FibNode[] = []
  const edges: [FibNode, FibNode][] = []
  const walk = (node: FibNode) => {
    nodes.push(node)
    for (const child of node.children) {
      edges.push([node, child])
      walk(child)
    }
  }
  walk(root)
  return { nodes, edges, leaves: leaf }
}

const fibColors: Record<number, { node: string; swatch: string }> = {
  5: { node: "fill-zinc-400/20 stroke-zinc-500", swatch: "bg-zinc-400/40 border-zinc-500" },
  4: { node: "fill-violet-400/25 stroke-violet-500", swatch: "bg-violet-400/40 border-violet-500" },
  3: { node: "fill-amber-400/30 stroke-amber-500", swatch: "bg-amber-400/40 border-amber-500" },
  2: { node: "fill-sky-400/30 stroke-sky-500", swatch: "bg-sky-400/40 border-sky-500" },
  1: { node: "fill-emerald-400/25 stroke-emerald-500", swatch: "bg-emerald-400/40 border-emerald-500" },
  0: { node: "fill-rose-400/25 stroke-rose-500", swatch: "bg-rose-400/40 border-rose-500" },
}
const neutralNode = "fill-card stroke-muted-foreground/60"

function Swatch({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`inline-block size-3 rounded-full border-2 ${className}`} />
      {label}
    </span>
  )
}

function FibTree({ mode }: { mode: "highlight" | "repeated" }) {
  const { nodes, edges, leaves } = buildFibTree(5)
  const step = 80
  const width = leaves * step
  const pos = (node: FibNode) => ({ x: step / 2 + node.x * step, y: 32 + node.depth * 62 })
  const counts = nodes.reduce<Record<number, number>>((acc, node) => {
    acc[node.n] = (acc[node.n] ?? 0) + 1
    return acc
  }, {})
  const nodeClass = (n: number) => {
    if (mode === "repeated") return fibColors[n].node
    return n === 3 || n === 2 ? fibColors[n].node : neutralNode
  }

  return (
    <div>
      <svg viewBox={`0 0 ${width} 300`} className="h-auto w-full" role="img" aria-label="Recursion tree of F(5)">
        {edges.map(([from, to], i) => {
          const a = pos(from)
          const b = pos(to)
          return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} className="stroke-border" strokeWidth="2" />
        })}
        {nodes.map((node, i) => {
          const p = pos(node)
          return (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="20" className={nodeClass(node.n)} strokeWidth="2" />
              <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="12" fontWeight="600" className="fill-foreground">
                F({node.n})
              </text>
            </g>
          )
        })}
      </svg>
      <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        {mode === "highlight" ? (
          <>
            <Swatch className={fibColors[3].swatch} label={`F(3) computed ${counts[3]} times`} />
            <Swatch className={fibColors[2].swatch} label={`F(2) computed ${counts[2]} times`} />
          </>
        ) : (
          [4, 3, 2, 1, 0].map((n) => (
            <Swatch key={n} className={fibColors[n].swatch} label={`F(${n}) × ${counts[n]}`} />
          ))
        )}
      </div>
    </div>
  )
}

export function FibRecursionTree() {
  return (
    <ChartShell
      title="Recursion tree for F(5)"
      description="Plain recursion recomputes the same subproblems again and again."
    >
      <FibTree mode="highlight" />
    </ChartShell>
  )
}

export function FibRepeatedSubproblems() {
  return (
    <ChartShell
      title="Overlapping subproblems in F(5)"
      description="Same colour = same subproblem. 15 calls are made, but only 6 distinct values (F(0) to F(5)) are needed."
    >
      <FibTree mode="repeated" />
    </ChartShell>
  )
}

function Cell({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "hit" | "active" }) {
  const toneClass = {
    default: "border-border bg-muted/40",
    hit: "border-emerald-500/60 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    active: "border-sky-500/60 bg-sky-500/10",
  }[tone]
  return <div className={`rounded-md border px-2 py-1.5 text-center font-mono text-xs ${toneClass}`}>{children}</div>
}

export function MemoVsTabulation() {
  const memoSteps: { label: string; tone: "default" | "hit" | "active"; indent: number }[] = [
    { label: "fib(5) → needs fib(4), fib(3)", tone: "active", indent: 0 },
    { label: "fib(4) → needs fib(3), fib(2)", tone: "active", indent: 1 },
    { label: "fib(3) → needs fib(2), fib(1)", tone: "active", indent: 2 },
    { label: "fib(2) → fib(1) + fib(0) = 1, store", tone: "default", indent: 3 },
    { label: "fib(3) = 2, store", tone: "default", indent: 2 },
    { label: "fib(2) found in cache", tone: "hit", indent: 1 },
    { label: "fib(3) found in cache", tone: "hit", indent: 0 },
  ]
  const table = [0, 1, 1, 2, 3, 5]
  return (
    <ChartShell
      title="Memoization vs Tabulation"
      description="Both store results. Memoization starts from the big problem; tabulation starts from the base cases."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <p className="text-sm font-semibold">Memoization (top-down)</p>
          <div className="space-y-1.5">
            {memoSteps.map((s, i) => (
              <div key={i} style={{ marginLeft: s.indent * 12 }}>
                <Cell tone={s.tone}>{s.label}</Cell>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">Recursion + cache. Green = reused, not recomputed.</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold">Tabulation (bottom-up)</p>
          <div className="grid grid-cols-6 gap-1">
            {table.map((_, i) => (
              <div key={i} className="text-center font-mono text-[10px] text-muted-foreground">
                dp[{i}]
              </div>
            ))}
            {table.map((v, i) => (
              <Cell key={i} tone={i < 2 ? "hit" : "active"}>
                {v}
              </Cell>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            fill left → right
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="rounded-md border border-border bg-muted/40 px-3 py-2 font-mono text-xs">
            dp[i] = dp[i-1] + dp[i-2]
          </div>
          <p className="text-xs text-muted-foreground">Loops over a table. Green = base cases dp[0], dp[1].</p>
        </div>
      </div>
    </ChartShell>
  )
}

export function ShortestPathSubstructure() {
  const nodes = [
    { id: "A", x: 70 },
    { id: "B", x: 300 },
    { id: "C", x: 530 },
  ]
  return (
    <ChartShell
      title="Optimal substructure: shortest route A → C via B"
      description="The best A → C route is built from the best A → B and B → C routes."
    >
      <svg viewBox="0 0 600 170" className="h-auto w-full" role="img" aria-label="Shortest path from A to C through B">
        <line x1="70" y1="60" x2="300" y2="60" className="stroke-sky-500" strokeWidth="3" />
        <line x1="300" y1="60" x2="530" y2="60" className="stroke-violet-500" strokeWidth="3" />
        <text x="185" y="48" textAnchor="middle" fontSize="13" fontWeight="600" className="fill-sky-600 dark:fill-sky-400">
          10 km
        </text>
        <text x="415" y="48" textAnchor="middle" fontSize="13" fontWeight="600" className="fill-violet-600 dark:fill-violet-400">
          15 km
        </text>
        {nodes.map((n) => (
          <g key={n.id}>
            <circle cx={n.x} cy="60" r="24" className="fill-card stroke-foreground/70" strokeWidth="2" />
            <text x={n.x} y="66" textAnchor="middle" fontSize="16" fontWeight="700" className="fill-foreground">
              {n.id}
            </text>
          </g>
        ))}
        <path d="M70 110 V122 H530 V110" fill="none" className="stroke-emerald-500" strokeWidth="2" />
        <text x="300" y="150" textAnchor="middle" fontSize="13" fontWeight="600" className="fill-emerald-600 dark:fill-emerald-400">
          Shortest(A, C) = 10 + 15 = 25 km
        </text>
      </svg>
    </ChartShell>
  )
}

function Coin({ value, tone = "amber" }: { value: number; tone?: "amber" | "muted" }) {
  const toneClass =
    tone === "amber"
      ? "border-amber-500 bg-amber-400/25 text-amber-900 dark:text-amber-200"
      : "border-border bg-muted text-muted-foreground"
  return (
    <span className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold ${toneClass}`}>
      {value}
    </span>
  )
}

function CoinRow({ coins }: { coins: number[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {coins.map((c, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-sm text-muted-foreground">+</span>}
          <Coin value={c} />
        </span>
      ))}
    </div>
  )
}

export function GreedyVsDpCoins() {
  const rows = [
    {
      name: "Greedy",
      note: "Always grabs the largest coin first",
      coins: [4, 1, 1],
      result: "3 coins",
      tone: "border-rose-500/40 bg-rose-500/5",
      badge: "bg-rose-500/15 text-rose-700 dark:text-rose-300",
    },
    {
      name: "Dynamic Programming",
      note: "Checks every sub-amount and keeps the best",
      coins: [3, 3],
      result: "2 coins (optimal)",
      tone: "border-emerald-500/40 bg-emerald-500/5",
      badge: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
    },
  ]
  return (
    <ChartShell title="Greedy vs DP — coins {1, 3, 4}, amount 6" description="Greedy picks 4 first and gets stuck with 1 + 1.">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          Available coins:
          {[1, 3, 4].map((c) => (
            <Coin key={c} value={c} tone="muted" />
          ))}
        </div>
        {rows.map((r) => (
          <div key={r.name} className={`flex flex-wrap items-center justify-between gap-3 rounded-lg border p-3 ${r.tone}`}>
            <div className="min-w-0">
              <p className="text-sm font-semibold">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.note}</p>
            </div>
            <CoinRow coins={r.coins} />
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${r.badge}`}>{r.result}</span>
          </div>
        ))}
      </div>
    </ChartShell>
  )
}

export function KnapsackItems() {
  const capacity = 5
  const items = [
    { id: "A", weight: 2, value: 12, picked: true, color: "bg-sky-500/20 border-sky-500" },
    { id: "B", weight: 1, value: 10, picked: true, color: "bg-violet-500/20 border-violet-500" },
    { id: "C", weight: 3, value: 20, picked: false, color: "bg-muted border-border" },
    { id: "D", weight: 2, value: 15, picked: true, color: "bg-emerald-500/20 border-emerald-500" },
  ]
  const picked = items.filter((i) => i.picked)
  return (
    <ChartShell title="0/1 Knapsack — capacity 5 kg" description="Each item is either taken whole (1) or left out (0).">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={`rounded-lg border-2 p-2 text-center ${item.color} ${item.picked ? "" : "opacity-60"}`}
            >
              <p className="text-lg font-bold">{item.id}</p>
              <p className="text-xs">{item.weight} kg · value {item.value}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                {item.picked ? "take (1)" : "leave (0)"}
              </p>
            </div>
          ))}
        </div>
        <div>
          <p className="mb-1 text-xs text-muted-foreground">Backpack (each block = 1 kg)</p>
          <div className="flex gap-1 rounded-lg border-2 border-dashed border-foreground/40 p-1.5">
            {picked.flatMap((item) =>
              Array.from({ length: item.weight }, (_, k) => (
                <div
                  key={`${item.id}-${k}`}
                  className={`flex h-10 flex-1 items-center justify-center rounded border-2 text-sm font-semibold ${item.color}`}
                >
                  {item.id}
                </div>
              )),
            )}
          </div>
          <p className="mt-2 text-sm">
            <span className="font-semibold">A + B + D</span>: weight {picked.reduce((s, i) => s + i.weight, 0)}/{capacity} kg, value{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              {picked.reduce((s, i) => s + i.value, 0)}
            </span>
          </p>
        </div>
      </div>
    </ChartShell>
  )
}

export function LcsMatching() {
  const x = "ABCDGH".split("")
  const y = "AEDFHR".split("")
  const matches: [number, number][] = [
    [0, 0],
    [3, 2],
    [5, 4],
  ]
  const step = 70
  const left = 55
  const cx = (i: number) => left + i * step
  const matchedX = new Set(matches.map(([i]) => i))
  const matchedY = new Set(matches.map(([, j]) => j))
  const box = (ch: string, i: number, y0: number, on: boolean) => (
    <g key={`${y0}-${i}`}>
      <rect
        x={cx(i) - 22}
        y={y0}
        width="44"
        height="40"
        rx="8"
        className={on ? "fill-emerald-400/25 stroke-emerald-500" : "fill-card stroke-border"}
        strokeWidth="2"
      />
      <text x={cx(i)} y={y0 + 26} textAnchor="middle" fontSize="17" fontWeight="700" className="fill-foreground">
        {ch}
      </text>
    </g>
  )
  return (
    <ChartShell title="Longest Common Subsequence of ABCDGH and AEDFHR" description="Matched characters keep their order in both strings but do not need to be next to each other.">
      <svg viewBox="0 0 500 210" className="h-auto w-full" role="img" aria-label="LCS matching between ABCDGH and AEDFHR">
        <text x="8" y="46" fontSize="14" fontWeight="600" className="fill-muted-foreground">X</text>
        <text x="8" y="166" fontSize="14" fontWeight="600" className="fill-muted-foreground">Y</text>
        {matches.map(([i, j]) => (
          <line key={`${i}-${j}`} x1={cx(i)} y1="60" x2={cx(j)} y2="140" className="stroke-emerald-500" strokeWidth="2.5" />
        ))}
        {x.map((ch, i) => box(ch, i, 20, matchedX.has(i)))}
        {y.map((ch, j) => box(ch, j, 140, matchedY.has(j)))}
        <text x="480" y="105" textAnchor="end" fontSize="13" fontWeight="600" className="fill-emerald-600 dark:fill-emerald-400">
          LCS = ADH (3)
        </text>
      </svg>
    </ChartShell>
  )
}

export function CoinChangeOverview() {
  return (
    <ChartShell title="Two versions of Coin Change" description="Same kind of input, different question, different recurrence.">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2 rounded-lg border border-border p-3">
          <p className="text-sm font-semibold">Minimum number of coins</p>
          <p className="text-xs text-muted-foreground">Coins [1, 3, 4] · Amount 6</p>
          <CoinRow coins={[3, 3]} />
          <p className="text-sm">
            Answer: <span className="font-semibold text-emerald-600 dark:text-emerald-400">2 coins</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground">dp[a] = min(dp[a], 1 + dp[a - c])</p>
        </div>
        <div className="space-y-2 rounded-lg border border-border p-3">
          <p className="text-sm font-semibold">Number of ways</p>
          <p className="text-xs text-muted-foreground">Coins [1, 2, 3] · Amount 4</p>
          <div className="space-y-1.5">
            {[
              [1, 1, 1, 1],
              [1, 1, 2],
              [2, 2],
              [1, 3],
            ].map((combo, i) => (
              <CoinRow key={i} coins={combo} />
            ))}
          </div>
          <p className="text-sm">
            Answer: <span className="font-semibold text-emerald-600 dark:text-emerald-400">4 ways</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground">dp[a] += dp[a - c]</p>
        </div>
      </div>
    </ChartShell>
  )
}
