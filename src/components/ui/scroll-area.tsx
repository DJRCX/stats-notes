import * as React from "react"
import { cn } from "@/lib/utils"

export function ScrollArea({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      <div className="h-full w-full overflow-y-auto overscroll-contain">{children}</div>
    </div>
  )
}
