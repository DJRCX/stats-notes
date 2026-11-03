import type { ReactNode } from "react"
import { PopulationSample } from "./PopulationSample"
import {
  FrequencyPolygonHours,
  HistogramHours,
  LessThanOgive,
  MoreThanOgive,
  PopulationTrend,
  ShoeBarChart,
  ShoePieChart,
} from "./StudyCharts"

const registry: Record<string, () => ReactNode> = {
  "population-sample": () => <PopulationSample />,
  "histogram-hours": () => <HistogramHours />,
  "frequency-polygon-hours": () => <FrequencyPolygonHours />,
  "less-than-ogive": () => <LessThanOgive />,
  "more-than-ogive": () => <MoreThanOgive />,
  "shoe-bar": () => <ShoeBarChart />,
  "shoe-pie": () => <ShoePieChart />,
  "population-trend": () => <PopulationTrend />,
}

export function renderViz(id: string) {
  const factory = registry[id]
  if (!factory) {
    return (
      <p className="not-prose my-4 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
        Missing visualization: {id}
      </p>
    )
  }
  return factory()
}

export const vizIds = Object.keys(registry)
