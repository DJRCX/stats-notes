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
import {
  CoinChangeOverview,
  FibRecursionTree,
  FibRepeatedSubproblems,
  GreedyVsDpCoins,
  KnapsackItems,
  LcsMatching,
  MemoVsTabulation,
  ShortestPathSubstructure,
} from "./DpDiagrams"
import { DpQuiz, DpStudyChecklist } from "./DpInteractive"
import { PopulationSample } from "./PopulationSample"
import {
  ChannelsCalculator,
  CommPlanSteps,
  CommunicationTypes,
  ConflictModes,
  MaslowPyramid,
  OrgStructure,
  RaciMatrix,
  ResourceLeveling,
  ResourceProcesses,
  SlackGantt,
  TuckmanStages,
  WorkAssignment,
} from "./SpmDiagrams"
import { SpmQuiz, SpmStudyChecklist } from "./SpmInteractive"
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
  "dp-fib-recursion-tree": () => <FibRecursionTree />,
  "dp-memo-vs-tabulation": () => <MemoVsTabulation />,
  "dp-fib-repeated-subproblems": () => <FibRepeatedSubproblems />,
  "dp-shortest-path": () => <ShortestPathSubstructure />,
  "dp-greedy-vs-dp-coins": () => <GreedyVsDpCoins />,
  "dp-knapsack-items": () => <KnapsackItems />,
  "dp-lcs-matching": () => <LcsMatching />,
  "dp-coin-change-overview": () => <CoinChangeOverview />,
  "dp-quiz": () => <DpQuiz />,
  "dp-study-checklist": () => <DpStudyChecklist />,
  "spm-resource-processes": () => <ResourceProcesses />,
  "spm-maslow-pyramid": () => <MaslowPyramid />,
  "spm-org-structure": () => <OrgStructure />,
  "spm-work-assignment": () => <WorkAssignment />,
  "spm-raci-matrix": () => <RaciMatrix />,
  "spm-slack-gantt": () => <SlackGantt />,
  "spm-resource-leveling": () => <ResourceLeveling />,
  "spm-tuckman": () => <TuckmanStages />,
  "spm-conflict-modes": () => <ConflictModes />,
  "spm-communication-types": () => <CommunicationTypes />,
  "spm-channels-calculator": () => <ChannelsCalculator />,
  "spm-comm-plan-steps": () => <CommPlanSteps />,
  "spm-quiz": () => <SpmQuiz />,
  "spm-study-checklist": () => <SpmStudyChecklist />,
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
