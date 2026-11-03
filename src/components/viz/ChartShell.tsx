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
        "not-prose my-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-50 shadow-sm",
        className,
      )}
    >
      <figcaption className="space-y-1 border-b border-zinc-800 px-4 py-3">
        <p className="text-sm font-semibold tracking-tight">{title}</p>
        {description ? (
          <p className="text-xs text-zinc-400">{description}</p>
        ) : null}
      </figcaption>
      <div className="px-2 pb-3 pt-2 sm:px-3">{children}</div>
    </figure>
  )
}
