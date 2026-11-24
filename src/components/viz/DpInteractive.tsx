import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChartShell } from "./ChartShell"

type Question = {
  question: string
  options: string[]
  answer: number
  explanation: string
}

const questions: Question[] = [
  {
    question: "Which two properties are commonly associated with Dynamic Programming?",
    options: ["Sorting and searching", "Overlapping subproblems and optimal substructure", "Greedy choice and recursion only", "Divide and conquer only"],
    answer: 1,
    explanation: "DP commonly relies on overlapping subproblems and optimal substructure.",
  },
  {
    question: "What is the main purpose of storing results in DP?",
    options: ["Increase recursion depth", "Avoid repeated calculations", "Make every algorithm O(1)", "Remove the need for base cases"],
    answer: 1,
    explanation: "Stored results are reused instead of recalculating the same subproblems.",
  },
  {
    question: "In 0/1 Knapsack, how many times can an item be selected?",
    options: ["Unlimited times", "Exactly twice", "At most once", "Only if its value is positive"],
    answer: 2,
    explanation: "Each item is either selected (1) or not selected (0).",
  },
  {
    question: "What does dp[i][j] represent in LCS?",
    options: ["The number of matching characters at exactly i and j", "The LCS length of two prefixes", "The longest substring", "The number of ways to rearrange strings"],
    answer: 1,
    explanation: "It stores the LCS length for prefixes of lengths i and j.",
  },
  {
    question: "What is the base case for minimum coin change?",
    options: ["dp[0] = 1", "dp[0] = infinity", "dp[0] = 0", "dp[1] = 0"],
    answer: 2,
    explanation: "Zero coins are needed to make amount zero.",
  },
  {
    question: "What is the base case for counting coin combinations?",
    options: ["dp[0] = 0", "dp[0] = 1", "dp[0] = -1", "dp[0] = infinity"],
    answer: 1,
    explanation: "There is one way to form zero: select no coins.",
  },
  {
    question: "Coins [1, 3, 4], amount 6. What is the minimum number of coins?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "3 + 3 makes 6 using two coins.",
  },
  {
    question: "In coin change combinations, why is the coin loop usually outside the amount loop?",
    options: ["To sort the coins", "To count combinations rather than different orderings", "To make the algorithm recursive", "To prevent using a coin more than once"],
    answer: 1,
    explanation: "Processing one denomination at a time avoids counting permutations separately.",
  },
]

const tasks = [
  "Understand what Dynamic Programming means",
  "Understand memoization and tabulation",
  "Understand overlapping subproblems",
  "Understand optimal substructure",
  "Compare Greedy and DP",
  "Understand why DP stores results",
  "Derive 0/1 Knapsack recurrence",
  "Manually construct a Knapsack DP table",
  "Derive LCS recurrence",
  "Manually construct an LCS DP table",
  "Derive minimum coin change recurrence",
  "Derive coin change counting recurrence",
  "Understand the difference between combinations and permutations",
  "Implement all three problems without looking at notes",
]

const CHECKLIST_KEY = "stats-notes-dp-checklist"

function ProgressBar({ value, total }: { value: number; total: number }) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
      <div
        className="h-full rounded-full bg-emerald-600 transition-[width]"
        style={{ width: `${(value / total) * 100}%` }}
      />
    </div>
  )
}

export function DpQuiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const answered = Object.keys(answers).length
  const score = questions.filter((q, i) => answers[i] === q.answer).length

  return (
    <ChartShell title="DP Knowledge Check" description={`${answered}/${questions.length} answered`}>
      <div className="space-y-4 px-2 py-1">
        <ProgressBar value={answered} total={questions.length} />
        {questions.map((q, i) => (
          <fieldset key={i} className="space-y-2 border-b border-border pb-4 last:border-b-0">
            <legend className="mb-2 text-sm font-semibold">
              {i + 1}. {q.question}
            </legend>
            {q.options.map((option, j) => {
              const chosen = answers[i] === j
              const showResult = submitted && (chosen || j === q.answer)
              return (
                <label
                  key={j}
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors",
                    chosen ? "border-foreground/40 bg-muted" : "border-border hover:bg-muted/60",
                    showResult && j === q.answer && "border-emerald-500/60 bg-emerald-500/10",
                    showResult && chosen && j !== q.answer && "border-rose-500/60 bg-rose-500/10",
                    submitted && "cursor-default",
                  )}
                >
                  <input
                    type="radio"
                    name={`dp-quiz-${i}`}
                    className="accent-emerald-600"
                    checked={chosen}
                    disabled={submitted}
                    onChange={() => setAnswers((prev) => ({ ...prev, [i]: j }))}
                  />
                  {option}
                </label>
              )
            })}
            {submitted && (
              <p
                className={cn(
                  "rounded-md px-3 py-2 text-sm",
                  answers[i] === q.answer
                    ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                    : "bg-rose-500/10 text-rose-700 dark:text-rose-300",
                )}
              >
                <span className="font-semibold">
                  {answers[i] === q.answer ? "Correct. " : `Incorrect — ${q.options[q.answer]}. `}
                </span>
                {q.explanation}
              </p>
            )}
          </fieldset>
        ))}
        {submitted ? (
          <div className="space-y-3 text-center">
            <p className="text-3xl font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
              {score}/{questions.length}
            </p>
            <p className="text-sm font-semibold">Your result</p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setAnswers({})
                setSubmitted(false)
              }}
            >
              Try again
            </Button>
          </div>
        ) : (
          <Button className="w-full" disabled={answered !== questions.length} onClick={() => setSubmitted(true)}>
            Submit answers
          </Button>
        )}
      </div>
    </ChartShell>
  )
}

function readChecklist(): number[] {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(CHECKLIST_KEY) ?? "[]")
    return Array.isArray(parsed) ? parsed.filter((n) => typeof n === "number") : []
  } catch {
    return []
  }
}

export function DpStudyChecklist() {
  const [done, setDone] = useState<number[]>(readChecklist)

  function update(next: number[]) {
    setDone(next)
    try {
      window.localStorage.setItem(CHECKLIST_KEY, JSON.stringify(next))
    } catch {
      // ignore
    }
  }

  return (
    <ChartShell title="Your DP study checklist" description="Progress is saved in this browser.">
      <div className="space-y-3 px-2 py-1">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="uppercase tracking-wide">Your progress</span>
          <span className="font-semibold text-foreground">
            {done.length}/{tasks.length}
          </span>
        </div>
        <ProgressBar value={done.length} total={tasks.length} />
        <div className="space-y-1">
          {tasks.map((task, i) => (
            <label key={i} className="flex cursor-pointer items-start gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted/60">
              <input
                type="checkbox"
                className="mt-0.5 accent-emerald-600"
                checked={done.includes(i)}
                onChange={(e) => update(e.target.checked ? [...done, i] : done.filter((x) => x !== i))}
              />
              <span className={cn(done.includes(i) && "text-muted-foreground line-through")}>{task}</span>
            </label>
          ))}
        </div>
        <Button variant="outline" className="w-full" onClick={() => update([])}>
          Reset progress
        </Button>
      </div>
    </ChartShell>
  )
}
