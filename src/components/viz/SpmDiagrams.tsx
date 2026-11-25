import { useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { cn } from "@/lib/utils"
import { ChartShell } from "./ChartShell"
import { getChartTheme } from "./chartTheme"

function StepFlow({ steps }: { steps: { title: string; text: string; color: string }[] }) {
  return (
    <ol className="grid gap-2 sm:grid-flow-col sm:auto-cols-fr">
      {steps.map((step, i) => (
        <li key={step.title} className={cn("relative rounded-lg border-2 p-3", step.color)}>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Step {i + 1}</p>
          <p className="text-sm font-semibold leading-snug">{step.title}</p>
          <p className="mt-1 text-xs text-muted-foreground">{step.text}</p>
        </li>
      ))}
    </ol>
  )
}

export function ResourceProcesses() {
  const processes = [
    { title: "Plan resource management", phase: "Planning", color: "border-sky-500/60 bg-sky-500/10" },
    { title: "Estimate activity resources", phase: "Planning", color: "border-sky-500/60 bg-sky-500/10" },
    { title: "Acquire resources", phase: "Executing", color: "border-emerald-500/60 bg-emerald-500/10" },
    { title: "Develop the project team", phase: "Executing", color: "border-emerald-500/60 bg-emerald-500/10" },
    { title: "Manage the project team", phase: "Executing", color: "border-emerald-500/60 bg-emerald-500/10" },
    { title: "Control resources", phase: "Monitoring & controlling", color: "border-amber-500/60 bg-amber-500/10" },
  ]
  return (
    <ChartShell title="The six resource management processes" description="Grouped by the process group they belong to.">
      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {processes.map((p, i) => (
          <li key={p.title} className={cn("rounded-lg border-2 p-2.5", p.color)}>
            <p className="text-lg font-bold leading-none">{i + 1}</p>
            <p className="mt-1 text-sm font-semibold leading-snug">{p.title}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{p.phase}</p>
          </li>
        ))}
      </ol>
    </ChartShell>
  )
}

export function MaslowPyramid() {
  const levels = [
    { name: "Self-actualization", text: "Challenging work, innovation, growth", fill: "fill-violet-500/70", group: "growth" },
    { name: "Esteem", text: "Recognition, status, respect", fill: "fill-sky-500/70", group: "deficiency" },
    { name: "Social", text: "Belonging, acceptance, team spirit", fill: "fill-emerald-500/70", group: "deficiency" },
    { name: "Safety", text: "Job security, health coverage", fill: "fill-amber-500/70", group: "deficiency" },
    { name: "Physiological", text: "Food, rest, livable salary", fill: "fill-rose-500/70", group: "deficiency" },
  ]
  const top = 20
  const h = 56
  const apexX = 260
  const halfBase = 230
  const total = levels.length * h
  const halfAt = (y: number) => (halfBase * (y - top)) / total
  return (
    <ChartShell title="Maslow's hierarchy of needs" description="Lower needs must be satisfied before higher needs become motivators.">
      <svg viewBox="0 0 760 320" className="h-auto w-full" role="img" aria-label="Maslow's hierarchy of needs pyramid">
        {levels.map((level, i) => {
          const y0 = top + i * h
          const y1 = y0 + h
          const a = halfAt(y0)
          const b = halfAt(y1)
          const points = `${apexX - a},${y0} ${apexX + a},${y0} ${apexX + b},${y1} ${apexX - b},${y1}`
          return (
            <g key={level.name}>
              <polygon points={points} className={cn(level.fill, "stroke-background")} strokeWidth="3" />
              <text x={apexX} y={y0 + h / 2 + (i === 0 ? 14 : 5)} textAnchor="middle" fontSize="14" fontWeight="700" className="fill-white">
                {i === 0 ? "5" : `${5 - i}. ${level.name}`}
              </text>
              <line x1={apexX + b - 6} y1={y0 + h / 2} x2={494} y2={y0 + h / 2} className="stroke-border" strokeDasharray="3 3" />
              {i === 0 ? (
                <text x={500} y={y0 + h / 2 - 3} fontSize="12" className="fill-muted-foreground">
                  <tspan fontWeight="700" className="fill-foreground">5. {level.name}</tspan>
                  <tspan x={500} dy="15">{level.text}</tspan>
                </text>
              ) : (
                <text x={500} y={y0 + h / 2 + 4} fontSize="12" className="fill-muted-foreground">
                  {level.text}
                </text>
              )}
            </g>
          )
        })}
        <g className="fill-foreground" fontSize="11" fontWeight="600">
          <path d={`M 14 ${top} L 8 ${top} L 8 ${top + h} L 14 ${top + h}`} className="fill-none stroke-violet-500" strokeWidth="2" />
          <text x="20" y={top + 32}>Growth</text>
          <path d={`M 14 ${top + h + 4} L 8 ${top + h + 4} L 8 ${top + total} L 14 ${top + total}`} className="fill-none stroke-muted-foreground" strokeWidth="2" />
          <text x="20" y={top + h + total / 2 - 10}>Deficiency</text>
          <text x="20" y={top + h + total / 2 + 4}>needs</text>
        </g>
      </svg>
    </ChartShell>
  )
}

function OrgBox({ title, subtitle, className }: { title: string; subtitle?: string; className?: string }) {
  return (
    <div className={cn("rounded-lg border-2 px-2 py-1.5 text-center", className)}>
      <p className="text-xs font-semibold leading-tight sm:text-sm">{title}</p>
      {subtitle ? <p className="text-[10px] leading-tight text-muted-foreground sm:text-xs">{subtitle}</p> : null}
    </div>
  )
}

function Down() {
  return <div className="mx-auto h-3 w-0.5 bg-border" />
}

export function OrgStructure() {
  const groups = [
    { title: "Systems Engineering", role: "Plan & design the system", lead: "Systems", teams: ["Architecture", "Integration"], color: "border-lime-500/60 bg-lime-500/10" },
    { title: "Independent Test Group", role: "Test the system", lead: "Testing", teams: ["Functional testing", "Performance testing"], color: "border-sky-500/60 bg-sky-500/10" },
    { title: "Project Technical Lead", role: "Handle technical work", lead: "Development", teams: ["Frontend dev", "Backend dev"], color: "border-orange-500/60 bg-orange-500/10" },
    { title: "Quality Assurance", role: "Ensure quality", lead: "QA", teams: ["Quality review", "Automation testing"], color: "border-teal-500/60 bg-teal-500/10" },
    { title: "Configuration Management", role: "Control changes", lead: "Configuration", teams: ["Version control", "Release & deployment"], color: "border-violet-500/60 bg-violet-500/10" },
  ]
  return (
    <ChartShell title="IT project organizational structure" description="Example: University Management System.">
      <div className="overflow-x-auto">
        <div className="min-w-[640px] space-y-0 p-1">
          <OrgBox title="Project Manager" subtitle="Overall control" className="mx-auto w-56 border-rose-500/60 bg-rose-500/10" />
          <Down />
          <OrgBox title="Deputy Project Manager" subtitle="Assists the project manager" className="mx-auto w-64 border-fuchsia-500/60 bg-fuchsia-500/10" />
          <Down />
          <div className="mx-[10%] h-0.5 bg-border" />
          <div className="grid grid-cols-5 gap-2">
            {groups.map((g) => (
              <div key={g.title} className="space-y-0">
                <Down />
                <OrgBox title={g.title} subtitle={g.role} className={g.color} />
                <Down />
                <OrgBox title="Technical Lead" subtitle={g.lead} className={g.color} />
                <Down />
                <OrgBox title="Sub Manager" className={g.color} />
                <Down />
                <div className="grid gap-1">
                  {g.teams.map((t) => (
                    <OrgBox key={t} title={t} className={g.color} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mx-[10%] mt-3 h-3 border-x-2 border-t-2 border-dashed border-border" />
          <OrgBox title="Project Stakeholders" subtitle="Students, faculty, management, clients" className="mx-auto w-80 border-emerald-500/60 bg-emerald-500/10" />
        </div>
      </div>
    </ChartShell>
  )
}

export function WorkAssignment() {
  return (
    <ChartShell title="Work definition and assignment process" description="Figure 9-4: the work must be defined before people are assigned.">
      <StepFlow
        steps={[
          { title: "Finalize requirements", text: "Contract or project charter locks in scope and technical baselines", color: "border-sky-500/60 bg-sky-500/10" },
          { title: "Define how work will be done", text: "Technical approach, phases, outsourcing decisions", color: "border-violet-500/60 bg-violet-500/10" },
          { title: "Break down the work (WBS)", text: "Decompose deliverables into specific tasks", color: "border-amber-500/60 bg-amber-500/10" },
          { title: "Assign work (OBS & RAM)", text: "Map WBS tasks to organizational units with a responsibility matrix", color: "border-emerald-500/60 bg-emerald-500/10" },
        ]}
      />
    </ChartShell>
  )
}

const raciStyles: Record<string, string> = {
  R: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
  A: "bg-rose-500/15 text-rose-700 dark:text-rose-300",
  C: "bg-amber-400/20 text-amber-700 dark:text-amber-300",
  I: "bg-zinc-400/15 text-muted-foreground",
  "A / R": "bg-violet-500/15 text-violet-700 dark:text-violet-300",
}

export function RaciMatrix() {
  const roles = ["Project Manager", "Lead Developer", "UI/UX Designer", "Security Officer"]
  const rows: [string, string[]][] = [
    ["1. Design app interface", ["A", "C", "R", "I"]],
    ["2. Write backend code", ["A", "R", "I", "C"]],
    ["3. Run security audit", ["A", "C", "I", "R"]],
    ["4. Publish to app store", ["A / R", "R", "I", "I"]],
  ]
  const legend = [
    ["R", "Responsible — does the work"],
    ["A", "Accountable — final sign-off, exactly one"],
    ["C", "Consulted — gives expert input"],
    ["I", "Informed — kept updated"],
  ]
  return (
    <ChartShell title="RACI chart — launching a university mobile app" description="Each row has exactly one Accountable person.">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-separate border-spacing-1 text-sm">
          <thead>
            <tr>
              <th className="rounded-md bg-foreground px-2 py-2 text-left font-semibold text-background">Project task</th>
              {roles.map((r) => (
                <th key={r} className="rounded-md bg-foreground px-2 py-2 font-semibold text-background">
                  {r}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([task, cells]) => (
              <tr key={task}>
                <td className="rounded-md bg-muted px-2 py-2">{task}</td>
                {cells.map((c, i) => (
                  <td key={i} className={cn("rounded-md px-2 py-2 text-center font-semibold", raciStyles[c])}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 grid gap-1.5 px-1 text-xs sm:grid-cols-2">
        {legend.map(([k, label]) => (
          <span key={k} className="inline-flex items-center gap-2">
            <span className={cn("inline-flex size-5 items-center justify-center rounded font-bold", raciStyles[k])}>{k}</span>
            {label}
          </span>
        ))}
      </div>
    </ChartShell>
  )
}

export function SlackGantt() {
  const day = 100
  const x0 = 50
  const bars = [
    { name: "B: AV & sound — critical path", duration: 5, slack: 0, bar: "fill-rose-500/25 stroke-rose-500", slackCls: "" },
    { name: "C: Banner printing", duration: 3, slack: 2, bar: "fill-orange-500/25 stroke-orange-500", slackCls: "fill-amber-400/15 stroke-amber-500" },
    { name: "A: Stage setup", duration: 2, slack: 3, bar: "fill-emerald-500/25 stroke-emerald-500", slackCls: "fill-emerald-400/10 stroke-emerald-500" },
  ]
  return (
    <ChartShell title="Slack and the critical path" description="Solid bars = work duration. Dashed boxes = slack (how far the task can slide).">
      <svg viewBox="0 0 640 260" className="h-auto w-full" role="img" aria-label="Gantt chart showing slack for activities A, B and C">
        {Array.from({ length: 6 }, (_, d) => (
          <g key={d}>
            <line x1={x0 + d * day} y1={10} x2={x0 + d * day} y2={220} className="stroke-border" strokeDasharray="2 4" />
            <text x={x0 + d * day} y={240} textAnchor="middle" fontSize="12" className="fill-muted-foreground">
              {d === 0 ? "Start" : d === 5 ? "Deadline" : `Day ${d}`}
            </text>
          </g>
        ))}
        <line x1={x0 + 5 * day} y1={4} x2={x0 + 5 * day} y2={225} className="stroke-rose-500" strokeWidth="3" strokeDasharray="8 5" />
        {bars.map((b, i) => {
          const y = 22 + i * 66
          return (
            <g key={b.name}>
              <rect x={x0} y={y} width={b.duration * day} height={44} rx="4" className={b.bar} strokeWidth="2" />
              <text x={x0 + (b.duration * day) / 2} y={y + 20} textAnchor="middle" fontSize="12" fontWeight="600" className="fill-foreground">
                {b.name}
              </text>
              <text x={x0 + (b.duration * day) / 2} y={y + 35} textAnchor="middle" fontSize="11" className="fill-muted-foreground">
                {b.duration} days{b.slack === 0 ? " · 0 slack" : ""}
              </text>
              {b.slack > 0 && (
                <g>
                  <rect x={x0 + b.duration * day} y={y} width={b.slack * day} height={44} rx="4" className={b.slackCls} strokeWidth="2" strokeDasharray="6 4" />
                  <text x={x0 + (b.duration + b.slack / 2) * day} y={y + 27} textAnchor="middle" fontSize="12" fontWeight="600" className="fill-foreground">
                    {b.slack} days slack
                  </text>
                </g>
              )}
            </g>
          )
        })}
      </svg>
    </ChartShell>
  )
}

const before = [
  { day: "Day 1", A: 2, B: 4, C: 2 },
  { day: "Day 2", A: 2, B: 4, C: 2 },
  { day: "Day 3", A: 0, B: 4, C: 2 },
  { day: "Day 4", A: 0, B: 4, C: 0 },
  { day: "Day 5", A: 0, B: 4, C: 0 },
]
const after = [
  { day: "Day 1", A: 2, B: 4, C: 0 },
  { day: "Day 2", A: 2, B: 4, C: 0 },
  { day: "Day 3", A: 0, B: 4, C: 2 },
  { day: "Day 4", A: 0, B: 4, C: 2 },
  { day: "Day 5", A: 0, B: 4, C: 2 },
]

function LevelingChart({ title, data }: { title: string; data: typeof before }) {
  const { axis, grid, tooltipStyle, cursorFill } = getChartTheme(11)
  return (
    <div>
      <p className="px-2 pb-1 text-center text-xs font-semibold">{title}</p>
      <div className="h-64 w-full">
        <ResponsiveContainer>
          <BarChart data={data} barCategoryGap={4}>
            <CartesianGrid {...grid} vertical={false} />
            <XAxis dataKey="day" {...axis} />
            <YAxis {...axis} domain={[0, 9]} ticks={[0, 2, 4, 6, 8]} width={28} />
            <Tooltip contentStyle={tooltipStyle} cursor={{ fill: cursorFill }} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <ReferenceLine y={6} stroke="#ef4444" strokeDasharray="6 4" label={{ value: "Max 6", position: "insideTopRight", fill: "#ef4444", fontSize: 11 }} />
            <Bar dataKey="B" name="B (4 workers, critical)" stackId="w" fill="#60a5fa" />
            <Bar dataKey="A" name="A (2 workers)" stackId="w" fill="#34d399" />
            <Bar dataKey="C" name="C (2 workers)" stackId="w" fill="#fb923c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export function ResourceLeveling() {
  return (
    <ChartShell title="Resource leveling — campus event setup" description="Workers needed per day. Delaying C by 2 days removes the overload on days 1–2.">
      <div className="grid gap-4 md:grid-cols-2">
        <LevelingChart title="Before: all tasks start on day 1 (8 workers on days 1–2)" data={before} />
        <LevelingChart title="After: C delayed 2 days (6 workers every day)" data={after} />
      </div>
    </ChartShell>
  )
}

export function TuckmanStages() {
  const stages = [
    { name: "Forming", text: "Polite, guarded, little work done", perf: 30, color: "fill-sky-500/70", chip: "border-sky-500/60 bg-sky-500/10" },
    { name: "Storming", text: "Conflict over styles, tools, leadership", perf: 18, color: "fill-rose-500/70", chip: "border-rose-500/60 bg-rose-500/10" },
    { name: "Norming", text: "Shared rules, trust, collaboration", perf: 55, color: "fill-amber-500/70", chip: "border-amber-500/60 bg-amber-500/10" },
    { name: "Performing", text: "Peak efficiency, smooth problem-solving", perf: 90, color: "fill-emerald-500/70", chip: "border-emerald-500/60 bg-emerald-500/10" },
    { name: "Adjourning", text: "Work complete, team disbands", perf: 40, color: "fill-violet-500/70", chip: "border-violet-500/60 bg-violet-500/10" },
  ]
  const w = 120
  const y = (perf: number) => 150 - perf * 1.3
  const path = stages.map((s, i) => `${i === 0 ? "M" : "L"} ${60 + i * w} ${y(s.perf)}`).join(" ")
  return (
    <ChartShell title="Tuckman model of team development" description="Team performance typically dips during storming and peaks while performing.">
      <svg viewBox="0 0 600 175" className="h-auto w-full" role="img" aria-label="Team performance across Tuckman stages">
        <line x1="20" y1="150" x2="590" y2="150" className="stroke-border" />
        <text x="12" y="16" fontSize="11" className="fill-muted-foreground">Performance</text>
        <path d={path} className="fill-none stroke-foreground/50" strokeWidth="2.5" />
        {stages.map((s, i) => (
          <g key={s.name}>
            <circle cx={60 + i * w} cy={y(s.perf)} r="9" className={s.color} />
            <text x={60 + i * w} y={170} textAnchor="middle" fontSize="13" fontWeight="600" className="fill-foreground">
              {i + 1}. {s.name}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-2 grid gap-2 sm:grid-cols-5">
        {stages.map((s) => (
          <div key={s.name} className={cn("rounded-lg border-2 p-2 text-xs", s.chip)}>
            <p className="font-semibold">{s.name}</p>
            <p className="text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </ChartShell>
  )
}

export function ConflictModes() {
  const modes = [
    { name: "Confrontation / problem-solving", result: "Win/win", color: "bg-emerald-600" },
    { name: "Collaborating", result: "Consensus", color: "bg-emerald-500" },
    { name: "Compromise", result: "Partial win for both", color: "bg-lime-500" },
    { name: "Smoothing / accommodating", result: "Harmony kept, issue downplayed", color: "bg-amber-500" },
    { name: "Forcing / directing", result: "Win/lose (emergencies)", color: "bg-orange-500" },
    { name: "Withdrawal / avoidance", result: "Issue left unresolved", color: "bg-rose-500" },
  ]
  return (
    <ChartShell title="Conflict handling modes" description="From most effective (top) to least effective (bottom).">
      <div className="space-y-1.5 px-1">
        {modes.map((m, i) => (
          <div key={m.name} className="flex items-center gap-3">
            <div className={cn("h-7 shrink-0 rounded-md", m.color)} style={{ width: `${100 - i * 13}%`, maxWidth: "55%" }} />
            <div className="min-w-0 text-sm">
              <span className="font-semibold">{m.name}</span>
              <span className="text-muted-foreground"> — {m.result}</span>
            </div>
          </div>
        ))}
      </div>
    </ChartShell>
  )
}

export function CommunicationTypes() {
  const cells = [
    { title: "Internal + formal", ex: "Official email to the project team, sprint review minutes", color: "border-sky-500/60 bg-sky-500/10" },
    { title: "Internal + informal", ex: "Developers chatting about a bug, quick team chat", color: "border-emerald-500/60 bg-emerald-500/10" },
    { title: "External + formal", ex: "Weekly progress report to the client, signed change request", color: "border-violet-500/60 bg-violet-500/10" },
    { title: "External + informal", ex: "Friendly phone call with a vendor's engineer", color: "border-amber-500/60 bg-amber-500/10" },
  ]
  return (
    <ChartShell title="Two dimensions of communication" description="Who it is with × how official it is.">
      <div className="grid grid-cols-[auto_1fr_1fr] gap-2 text-sm">
        <div />
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">Formal</p>
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">Informal</p>
        {["Internal", "External"].map((row, r) => (
          <div key={row} className="contents">
            <p className="self-center text-xs font-semibold uppercase tracking-wide text-muted-foreground [writing-mode:vertical-rl] rotate-180">
              {row}
            </p>
            {cells.slice(r * 2, r * 2 + 2).map((c) => (
              <div key={c.title} className={cn("rounded-lg border-2 p-3", c.color)}>
                <p className="font-semibold">{c.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.ex}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </ChartShell>
  )
}

export function ChannelsCalculator() {
  const [n, setN] = useState(5)
  const channels = (n * (n - 1)) / 2
  const r = 95
  const cx = 130
  const cy = 120
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (2 * Math.PI * i) / n - Math.PI / 2
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
  })
  const lines: [number, number][] = []
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) lines.push([i, j])
  return (
    <ChartShell title="Communication channels calculator" description="Drag the slider: every line is one channel between two people.">
      <div className="grid items-center gap-4 sm:grid-cols-[260px_1fr]">
        <svg viewBox="0 0 260 240" className="mx-auto h-auto w-full max-w-[260px]" role="img" aria-label={`${n} people with ${channels} channels`}>
          {lines.map(([i, j]) => (
            <line key={`${i}-${j}`} x1={pts[i].x} y1={pts[i].y} x2={pts[j].x} y2={pts[j].y} className="stroke-sky-500/50" strokeWidth="1.5" />
          ))}
          {pts.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="13" className="fill-card stroke-foreground/60" strokeWidth="2" />
              <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="11" fontWeight="600" className="fill-foreground">
                {i + 1}
              </text>
            </g>
          ))}
        </svg>
        <div className="space-y-3 px-2">
          <label className="block text-sm font-medium">
            People (N): <span className="tabular-nums font-bold">{n}</span>
            <input type="range" min={2} max={12} value={n} onChange={(e) => setN(Number(e.target.value))} className="mt-2 w-full accent-sky-600" />
          </label>
          <p className="font-mono text-sm">
            {n} × ({n} − 1) ÷ 2 = {n} × {n - 1} ÷ 2 ={" "}
            <span className="text-lg font-bold text-sky-600 dark:text-sky-400">{channels}</span> channels
          </p>
          {n < 12 && (
            <p className="text-xs text-muted-foreground">
              Adding one more person would add {n} channels (total {((n + 1) * n) / 2}).
            </p>
          )}
        </div>
      </div>
    </ChartShell>
  )
}

export function CommPlanSteps() {
  const steps = [
    { title: "Identify stakeholders", text: "Who needs project information?" },
    { title: "Assess information needs", text: "What information do they need?" },
    { title: "Choose methods", text: "Meeting, email, report, call, chat?" },
    { title: "Set timing & responsibility", text: "When, and sent by whom?" },
    { title: "Document & share the plan", text: "Make it available to the team" },
    { title: "Review & update", text: "Change it when needs change" },
  ]
  return (
    <ChartShell title="Communication planning steps" description="Step 6 loops back: the plan is reviewed as the project changes.">
      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-lg border-2 border-sky-500/50 bg-sky-500/10 p-2.5">
            <p className="flex size-6 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">{i + 1}</p>
            <p className="mt-1.5 text-sm font-semibold leading-snug">{s.title}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
      <p className="mt-2 text-center text-xs text-muted-foreground">↻ Review &amp; update → back to step 1 when stakeholders or the project change</p>
    </ChartShell>
  )
}
