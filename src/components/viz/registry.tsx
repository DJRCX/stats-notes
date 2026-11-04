import type { ReactNode } from "react"
import {
  FiveNumberBoxPlot,
  LowHighCV,
  QuartileDistribution,
  ScatterTypes,
  TwoTailedTest,
} from "./ConceptualDiagrams"
import {
  KurtosisTypes,
  NegativeSkewDistribution,
  PositiveSkewDistribution,
  SymmetricalDistribution,
} from "./DistributionShapes"
import { PopulationSample } from "./PopulationSample"
import {
  BooksReadBoxPlot,
  DailyIncomeHistogram,
  ExamScoresBoxPlot,
  ExamScoresBoxPlotFall,
  HoursMarksScatter,
  MobileRepairIncomeHistogram,
  ModifiedBoxSocialMedia,
  SleepHoursBoxPlot,
  SleepHoursBoxPlotFall,
  SocialMediaHistogram,
  StudyHoursScatter,
} from "./SolvedCharts"
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
  "quartile-distribution": () => <QuartileDistribution />,
  "five-number-boxplot": () => <FiveNumberBoxPlot />,
  "low-high-cv": () => <LowHighCV />,
  "scatter-types": () => <ScatterTypes />,
  "two-tailed-test": () => <TwoTailedTest />,
  "symmetrical-distribution": () => <SymmetricalDistribution />,
  "positive-skew": () => <PositiveSkewDistribution />,
  "negative-skew": () => <NegativeSkewDistribution />,
  "kurtosis-types": () => <KurtosisTypes />,
  "social-media-histogram": () => <SocialMediaHistogram />,
  "daily-income-histogram": () => <DailyIncomeHistogram />,
  "mobile-repair-histogram": () => <MobileRepairIncomeHistogram />,
  "study-hours-scatter": () => <StudyHoursScatter />,
  "hours-marks-scatter": () => <HoursMarksScatter />,
  "modified-box-social-media": () => <ModifiedBoxSocialMedia />,
  "sleep-hours-boxplot": () => <SleepHoursBoxPlot />,
  "exam-scores-boxplot": () => <ExamScoresBoxPlot />,
  "sleep-hours-boxplot-fall": () => <SleepHoursBoxPlotFall />,
  "exam-scores-boxplot-fall": () => <ExamScoresBoxPlotFall />,
  "books-read-boxplot": () => <BooksReadBoxPlot />,
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
