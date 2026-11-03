import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { ChartShell } from "./ChartShell"

const axis = {
  stroke: "#71717a",
  tick: { fill: "#a1a1aa", fontSize: 12 },
}
const grid = { stroke: "#27272a", strokeDasharray: "3 3" }
const tooltipStyle = {
  backgroundColor: "#18181b",
  border: "1px solid #3f3f46",
  borderRadius: 8,
  color: "#fafafa",
  fontSize: 12,
}

const histogram = [
  { label: "10–15", frequency: 7 },
  { label: "15–20", frequency: 12 },
  { label: "20–25", frequency: 7 },
  { label: "25–30", frequency: 3 },
  { label: "30–35", frequency: 1 },
]

const polygon = [
  { midpoint: 12.5, frequency: 7 },
  { midpoint: 17.5, frequency: 12 },
  { midpoint: 22.5, frequency: 7 },
  { midpoint: 27.5, frequency: 3 },
  { midpoint: 32.5, frequency: 1 },
]

const lessThan = [
  { bound: 15, cf: 7 },
  { bound: 20, cf: 19 },
  { bound: 25, cf: 26 },
  { bound: 30, cf: 29 },
  { bound: 35, cf: 30 },
]

const moreThan = [
  { bound: 10, cf: 30 },
  { bound: 15, cf: 23 },
  { bound: 20, cf: 11 },
  { bound: 25, cf: 4 },
  { bound: 30, cf: 1 },
]

const shoes = [
  { name: "Small", value: 12, color: "#60a5fa" },
  { name: "Medium", value: 15, color: "#818cf8" },
  { name: "Large", value: 7, color: "#34d399" },
]

const population = [
  { year: "1988", millions: 103 },
  { year: "1989", millions: 105 },
  { year: "1990", millions: 107 },
  { year: "1991", millions: 109 },
  { year: "1992", millions: 111 },
  { year: "1993", millions: 113 },
]

export function HistogramHours() {
  return (
    <ChartShell
      title="Histogram — Hours Studied"
      description="Frequency of students in each study-hour interval. The bars represent adjacent continuous classes."
    >
      <div className="h-72 w-full">
        <ResponsiveContainer>
          <BarChart data={histogram} barCategoryGap={0}>
            <CartesianGrid {...grid} vertical={false} />
            <XAxis dataKey="label" {...axis} />
            <YAxis {...axis} domain={[0, 16]} ticks={[0, 4, 8, 12, 16]} />
            <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "#27272a" }} />
            <Bar dataKey="frequency" fill="#60a5fa" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartShell>
  )
}

export function FrequencyPolygonHours() {
  return (
    <ChartShell
      title="Frequency Polygon — Hours Studied"
      description="Connect class midpoint and frequency coordinates."
    >
      <p className="mb-2 px-2 font-serif text-sm text-zinc-200">
        (12.5, 7), (17.5, 12), (22.5, 7), (27.5, 3), (32.5, 1)
      </p>
      <div className="h-72 w-full">
        <ResponsiveContainer>
          <LineChart data={polygon}>
            <CartesianGrid {...grid} vertical={false} />
            <XAxis dataKey="midpoint" {...axis} />
            <YAxis {...axis} domain={[0, 16]} ticks={[0, 4, 8, 12, 16]} />
            <Tooltip contentStyle={tooltipStyle} />
            <Line
              type="linear"
              dataKey="frequency"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 5, fill: "#1d4ed8", stroke: "#93c5fd", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartShell>
  )
}

export function LessThanOgive() {
  return (
    <ChartShell
      title="Less Than Ogive — Study Hours"
      description="Cumulative number of students below each upper class boundary."
    >
      <div className="h-72 w-full">
        <ResponsiveContainer>
          <LineChart data={lessThan}>
            <CartesianGrid {...grid} vertical={false} />
            <XAxis dataKey="bound" {...axis} />
            <YAxis {...axis} domain={[0, 36]} ticks={[0, 9, 18, 27, 36]} />
            <Tooltip contentStyle={tooltipStyle} />
            <Line
              type="monotone"
              dataKey="cf"
              stroke="#22c55e"
              strokeWidth={2}
              dot={{ r: 4, fill: "#16a34a", stroke: "#86efac", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartShell>
  )
}

export function MoreThanOgive() {
  return (
    <ChartShell
      title="More Than Ogive — Study Hours"
      description="Cumulative number of students at or above each lower class boundary."
    >
      <div className="h-72 w-full">
        <ResponsiveContainer>
          <LineChart data={moreThan}>
            <CartesianGrid {...grid} vertical={false} />
            <XAxis dataKey="bound" {...axis} />
            <YAxis {...axis} domain={[0, 36]} ticks={[0, 9, 18, 27, 36]} />
            <Tooltip contentStyle={tooltipStyle} />
            <Line
              type="monotone"
              dataKey="cf"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={{ r: 4, fill: "#d97706", stroke: "#fcd34d", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartShell>
  )
}

export function ShoeBarChart() {
  return (
    <ChartShell
      title="Shoe Sizes Sold"
      description="Comparison of the number of shoes sold by category."
    >
      <div className="h-72 w-full">
        <ResponsiveContainer>
          <BarChart data={shoes}>
            <CartesianGrid {...grid} vertical={false} />
            <XAxis dataKey="name" {...axis} />
            <YAxis {...axis} domain={[0, 16]} ticks={[0, 4, 8, 12, 16]} />
            <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "#27272a" }} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {shoes.map((s) => (
                <Cell key={s.name} fill={s.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartShell>
  )
}

export function ShoePieChart() {
  return (
    <ChartShell
      title="Distribution of Shoe Sizes"
      description="Each sector represents the proportion of shoes sold."
    >
      <div className="h-72 w-full">
        <ResponsiveContainer>
          <PieChart>
            <Tooltip contentStyle={tooltipStyle} />
            <Pie
              data={shoes}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={95}
              label={({ name, percent }) =>
                `${name} ${Math.round((percent || 0) * 100)}%`
              }
            >
              {shoes.map((s) => (
                <Cell key={s.name} fill={s.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ChartShell>
  )
}

export function PopulationTrend() {
  return (
    <ChartShell
      title="Population Trend, 1988–1993"
      description="Illustrative historical data from your lecturer's exercise."
    >
      <div className="h-72 w-full">
        <ResponsiveContainer>
          <LineChart data={population}>
            <CartesianGrid {...grid} vertical={false} />
            <XAxis dataKey="year" {...axis} />
            <YAxis
              {...axis}
              domain={[102, 114]}
              ticks={[102, 105, 108, 111, 114]}
              tickFormatter={(v) => `${v}M`}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [`${value} million`, "Population"]}
            />
            <Line
              type="monotone"
              dataKey="millions"
              stroke="#a78bfa"
              strokeWidth={2}
              dot={{ r: 4, fill: "#7c3aed", stroke: "#ddd6fe", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartShell>
  )
}
