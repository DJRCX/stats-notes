import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
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

const socialMedia = [
  { label: "150–199", frequency: 1 },
  { label: "200–249", frequency: 0 },
  { label: "250–299", frequency: 8 },
  { label: "300–349", frequency: 4 },
  { label: "350–399", frequency: 0 },
  { label: "400–449", frequency: 1 },
  { label: "450–499", frequency: 1 },
]

const income = [
  { label: "20–29", frequency: 4 },
  { label: "30–39", frequency: 5 },
  { label: "40–49", frequency: 4 },
  { label: "50–59", frequency: 5 },
  { label: "60–69", frequency: 4 },
  { label: "70–79", frequency: 3 },
]

const studyMarks = [
  { x: 2, y: 50 },
  { x: 4, y: 55 },
  { x: 3, y: 52 },
  { x: 5, y: 60 },
  { x: 4, y: 58 },
  { x: 6, y: 62 },
  { x: 5, y: 61 },
  { x: 7, y: 65 },
  { x: 3, y: 54 },
  { x: 6, y: 63 },
]

type BoxPlotProps = {
  title: string
  description?: string
  min: number
  q1: number
  median: number
  q3: number
  max: number
  outliers?: number[]
  color?: string
  viewBoxWidth?: number
  viewBoxHeight?: number
}

function scale(value: number, domainMin: number, domainMax: number, x0: number, x1: number) {
  if (domainMax === domainMin) return (x0 + x1) / 2
  return x0 + ((value - domainMin) / (domainMax - domainMin)) * (x1 - x0)
}

export function NumericBoxPlot({
  title,
  description,
  min,
  q1,
  median,
  q3,
  max,
  outliers = [],
  color = "#0d9488",
  viewBoxWidth = 340,
  viewBoxHeight = 90,
}: BoxPlotProps) {
  const all = [min, q1, median, q3, max, ...outliers]
  const domainMin = Math.min(...all)
  const domainMax = Math.max(...all)
  const pad = (domainMax - domainMin) * 0.08 || 1
  const d0 = domainMin - pad
  const d1 = domainMax + pad
  const x0 = 28
  const x1 = viewBoxWidth - 28
  const midY = viewBoxHeight * 0.4
  const boxH = Math.max(28, viewBoxHeight * 0.35)
  const top = midY - boxH / 2
  const bottom = midY + boxH / 2
  const labelY = viewBoxHeight - 12

  const xMin = scale(min, d0, d1, x0, x1)
  const xQ1 = scale(q1, d0, d1, x0, x1)
  const xMed = scale(median, d0, d1, x0, x1)
  const xQ3 = scale(q3, d0, d1, x0, x1)
  const xMax = scale(max, d0, d1, x0, x1)

  const tickVals = [min, q1, median, q3, max]

  return (
    <ChartShell title={title} description={description}>
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="mx-auto h-auto w-full max-w-xl text-zinc-100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={title}
      >
        <line
          x1={xMin}
          y1={midY}
          x2={xMax}
          y2={midY}
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1={xMin}
          y1={midY - 9}
          x2={xMin}
          y2={midY + 9}
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1={xMax}
          y1={midY - 9}
          x2={xMax}
          y2={midY + 9}
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x={xQ1}
          y={top}
          width={Math.max(2, xQ3 - xQ1)}
          height={boxH}
          fill={color}
          fillOpacity="0.16"
          stroke={color}
          strokeWidth="2"
        />
        <line
          x1={xMed}
          y1={top}
          x2={xMed}
          y2={bottom}
          stroke={color}
          strokeWidth="3"
        />
        {outliers.map((v) => {
          const cx = scale(v, d0, d1, x0, x1)
          return (
            <g key={v}>
              <circle cx={cx} cy={midY} r="4" fill="#dc4444" />
              <text
                x={cx}
                y={top - 8}
                fill="#dc4444"
                fontSize="10"
                textAnchor="middle"
              >
                {v}
              </text>
            </g>
          )
        })}
        {tickVals.map((v, i) => {
          const x = scale(v, d0, d1, x0, x1)
          return (
            <text
              key={`${v}-${i}`}
              x={x}
              y={labelY}
              fill="currentColor"
              fontSize="11"
              textAnchor="middle"
            >
              {v}
            </text>
          )
        })}
      </svg>
    </ChartShell>
  )
}

function HistogramChart({
  title,
  description,
  data,
  yMax,
}: {
  title: string
  description: string
  data: { label: string; frequency: number }[]
  yMax: number
}) {
  return (
    <ChartShell title={title} description={description}>
      <div className="h-72 w-full">
        <ResponsiveContainer>
          <BarChart data={data} barCategoryGap={0}>
            <CartesianGrid {...grid} vertical={false} />
            <XAxis dataKey="label" {...axis} interval={0} angle={-20} textAnchor="end" height={50} />
            <YAxis
              {...axis}
              domain={[0, yMax]}
              allowDecimals={false}
            />
            <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "#27272a" }} />
            <Bar dataKey="frequency" fill="#60a5fa" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartShell>
  )
}

function ScatterStudyMarks({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <ChartShell title={title} description={description}>
      <div className="h-72 w-full">
        <ResponsiveContainer>
          <ScatterChart margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
            <CartesianGrid {...grid} />
            <XAxis
              type="number"
              dataKey="x"
              name="Hours"
              domain={[0, 10]}
              ticks={[2, 4, 6, 8, 10]}
              {...axis}
              label={{
                value: "Hours studied",
                position: "insideBottom",
                offset: -2,
                fill: "#a1a1aa",
                fontSize: 11,
              }}
            />
            <YAxis
              type="number"
              dataKey="y"
              name="Marks"
              domain={[48, 72]}
              ticks={[48, 54, 60, 66, 72]}
              {...axis}
              label={{
                value: "Marks",
                angle: -90,
                position: "insideLeft",
                fill: "#a1a1aa",
                fontSize: 11,
              }}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              cursor={{ strokeDasharray: "3 3" }}
              formatter={(value, name) => [value, name === "y" ? "Marks" : "Hours"]}
            />
            <Scatter data={studyMarks} fill="#60a5fa" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </ChartShell>
  )
}

export function SocialMediaHistogram() {
  return (
    <HistogramChart
      title="Daily Social Media Usage"
      description="Frequency distribution of social media usage among 15 students. Use adjacent bars when drawing the actual histogram."
      data={socialMedia}
      yMax={9}
    />
  )
}

export function DailyIncomeHistogram() {
  return (
    <HistogramChart
      title="Daily Income Distribution"
      description="Frequency histogram using 10-Tk class intervals. Bars should touch when drawn as a histogram."
      data={income}
      yMax={6}
    />
  )
}

export function MobileRepairIncomeHistogram() {
  return (
    <HistogramChart
      title="Frequency Histogram — Mobile Repairing Shop Income"
      description="Number of days falling into each income interval. Draw adjacent bars for the histogram."
      data={income}
      yMax={6}
    />
  )
}

export function StudyHoursScatter() {
  return (
    <ScatterStudyMarks
      title="Study Hours vs Examination Marks"
      description="Scatter diagram of 10 students. Each point represents one student's study hours and quiz mark."
    />
  )
}

export function HoursMarksScatter() {
  return (
    <ScatterStudyMarks
      title="Hours Studied vs Marks Obtained"
      description="Scatter diagram using the Summer 2025 midterm observations."
    />
  )
}

export function ModifiedBoxSocialMedia() {
  return (
    <NumericBoxPlot
      title="Modified Box Plot — Social Media Usage"
      description="Conceptual box plot; whisker and outlier positions are labelled in minutes but the drawing is not on a numerical scale."
      min={250}
      q1={275}
      median={290}
      q3={320}
      max={330}
      outliers={[180, 400, 480]}
      viewBoxHeight={120}
    />
  )
}

export function SleepHoursBoxPlot() {
  return (
    <NumericBoxPlot
      title="Box-and-Whisker Plot — Sleep Hours (X)"
      description="Whiskers indicate minimum and maximum; no outliers are identified using the 1.5 × IQR rule."
      min={3}
      q1={4.5}
      median={6.5}
      q3={8.5}
      max={10}
      color="#0d9488"
    />
  )
}

export function ExamScoresBoxPlot() {
  return (
    <NumericBoxPlot
      title="Box-and-Whisker Plot — Examination Scores (Y)"
      description="Whiskers indicate minimum and maximum; no outliers are identified using the 1.5 × IQR rule."
      min={45}
      q1={51}
      median={61.5}
      q3={72.5}
      max={78}
      color="#2563eb"
    />
  )
}

export function SleepHoursBoxPlotFall() {
  return (
    <NumericBoxPlot
      title="Box Plot — Sleep Hours (X)"
      description="Both plots have no suspected outliers under the 1.5 × IQR rule."
      min={3}
      q1={4.5}
      median={6.5}
      q3={8.5}
      max={10}
      color="#0d9488"
    />
  )
}

export function ExamScoresBoxPlotFall() {
  return (
    <NumericBoxPlot
      title="Box Plot — Exam Scores (Y)"
      description="Both plots have no suspected outliers under the 1.5 × IQR rule."
      min={45}
      q1={51}
      median={61.5}
      q3={72.5}
      max={78}
      color="#2563eb"
    />
  )
}

export function BooksReadBoxPlot() {
  return (
    <NumericBoxPlot
      title="Box-and-Whisker Plot — Books Read"
      description="Minimum = 3, Q1 = 5, Median = 7, Q3 = 10, Maximum = 13."
      min={3}
      q1={5}
      median={7}
      q3={10}
      max={13}
    />
  )
}
