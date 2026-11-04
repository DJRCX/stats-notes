export function PopulationSample() {
  const columns = 10
  const rows = 5
  const sampleDots = 20

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm sm:p-5">
      <p className="mb-3 text-sm font-medium text-muted-foreground">
        Visual example
      </p>

      <div className="space-y-3">
        <div className="rounded-lg bg-muted/50 px-4 py-4">
          <p className="mb-3 text-center text-sm font-semibold">
            Population: 1,000 students
          </p>
          <div className="mx-auto flex w-fit gap-2 sm:gap-2.5">
            {Array.from({ length: columns }).map((_, col) => (
              <div key={col} className="flex flex-col gap-1.5">
                {Array.from({ length: rows }).map((__, row) => (
                  <span
                    key={row}
                    className="size-2 rounded-full bg-slate-500 sm:size-2.5 dark:bg-slate-400"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 py-1 text-muted-foreground">
          <span aria-hidden className="text-lg leading-none">
            ↓
          </span>
          <span className="text-xs">Random sampling</span>
        </div>

        <div className="rounded-lg border border-emerald-600/30 bg-emerald-500/10 px-4 py-4 dark:border-emerald-900/60 dark:bg-emerald-950/40">
          <p className="mb-3 text-center text-sm font-semibold text-emerald-800 dark:text-emerald-100">
            Sample: 100 selected students
          </p>
          <div className="mx-auto flex w-fit flex-wrap justify-center gap-1.5">
            {Array.from({ length: sampleDots }).map((_, i) => (
              <span
                key={i}
                className="size-2 rounded-full bg-emerald-500 sm:size-2.5 dark:bg-emerald-400"
              />
            ))}
          </div>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Illustration only; not proportional to the actual population.
          </p>
        </div>
      </div>
    </figure>
  )
}
