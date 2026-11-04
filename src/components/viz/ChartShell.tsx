import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function ChartShell({ title, description, children, className }: Props) {
  return (
    <figure
      className={cn(
        "not-prose my-6 overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      <figcaption className="space-y-1 border-b border-border px-4 py-3">
        <p className="text-sm font-semibold tracking-tight">{title}</p>
        {description ? (
          <p className="text-xs text-muted-foreground">{description}</p>
        ) : null}
      </figcaption>
      <div className="px-2 pb-3 pt-2 sm:px-3">{children}</div>
    </figure>
  )
}
