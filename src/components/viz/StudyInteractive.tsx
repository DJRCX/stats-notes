import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChartShell } from "./ChartShell"

export type Question = {
  question: string
  options: string[]
  answer: number
  explanation: string
}

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

// Survives the remount that MarkdownView gets on theme change.
const savedQuizzes: Record<string, { answers: Record<number, number>; submitted: boolean }> = {}

export function Quiz({ id, title, questions }: { id: string; title: string; questions: Question[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>(() => savedQuizzes[id]?.answers ?? {})
  const [submitted, setSubmitted] = useState(() => savedQuizzes[id]?.submitted ?? false)
  useEffect(() => {
    savedQuizzes[id] = { answers, submitted }
  }, [id, answers, submitted])
  const answered = Object.keys(answers).length
  const score = questions.filter((q, i) => answers[i] === q.answer).length

  return (
    <ChartShell title={title} description={`${answered}/${questions.length} answered`}>
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
                    name={`${id}-quiz-${i}`}
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

function readChecklist(storageKey: string): number[] {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]")
    return Array.isArray(parsed) ? parsed.filter((n) => typeof n === "number") : []
  } catch {
    return []
  }
}

export function StudyChecklist({ storageKey, title, tasks }: { storageKey: string; title: string; tasks: string[] }) {
  const [done, setDone] = useState<number[]>(() => readChecklist(storageKey))

  function update(next: number[]) {
    setDone(next)
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next))
    } catch {
      // ignore
    }
  }

  return (
    <ChartShell title={title} description="Progress is saved in this browser.">
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
