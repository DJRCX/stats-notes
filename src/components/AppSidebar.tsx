import { BookOpen, Menu, PanelLeftClose, PanelLeftOpen, X } from "lucide-react"
import { chapters, type Chapter } from "@/content/chapters"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

type Props = {
  activeId: string
  onSelect: (chapter: Chapter) => void
  mobileOpen: boolean
  onMobileOpenChange: (open: boolean) => void
  collapsed: boolean
  onCollapsedChange: (collapsed: boolean) => void
}

export function AppSidebar({
  activeId,
  onSelect,
  mobileOpen,
  onMobileOpenChange,
  collapsed,
  onCollapsedChange,
}: Props) {
  const nav = (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 px-3 py-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
          <BookOpen className="size-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">Statistics Notes</p>
          <p className="truncate text-xs text-muted-foreground">Exam study lessons</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="hidden shrink-0 md:inline-flex"
          aria-label="Collapse sidebar"
          onClick={() => onCollapsedChange(true)}
        >
          <PanelLeftClose />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Close menu"
          onClick={() => onMobileOpenChange(false)}
        >
          <X />
        </Button>
      </div>
      <Separator />
      <ScrollArea className="flex-1 px-2 py-3">
        <nav className="flex flex-col gap-0.5" aria-label="Chapters">
          {chapters.map((chapter) => {
            const active = chapter.id === activeId
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => {
                  onSelect(chapter)
                  onMobileOpenChange(false)
                }}
                className={cn(
                  "rounded-md px-3 py-2 text-left text-sm transition-colors",
                  active
                    ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground",
                )}
              >
                <span className="block truncate">{chapter.label}</span>
                {chapter.label !== chapter.title && (
                  <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                    {chapter.title.replace(/^Chapter \d+ — /, "").replace(/^\d+\.\s*/, "")}
                  </span>
                )}
              </button>
            )
          })}
        </nav>
      </ScrollArea>
    </div>
  )

  return (
    <>
      <aside
        className={cn(
          "hidden h-full shrink-0 overflow-hidden border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width] duration-200 ease-out md:flex md:flex-col",
          collapsed ? "w-0 border-r-0" : "w-72",
        )}
        aria-hidden={collapsed}
      >
        <div className="h-full w-72">{nav}</div>
      </aside>

      {collapsed && (
        <div className="hidden shrink-0 items-start border-r border-border bg-background p-2 md:flex">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Expand sidebar"
            onClick={() => onCollapsedChange(false)}
          >
            <PanelLeftOpen />
          </Button>
        </div>
      )}

      <div className="flex items-center gap-2 border-b border-border px-3 py-2 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => onMobileOpenChange(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </Button>
        <span className="text-sm font-medium">Statistics Notes</span>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu overlay"
            onClick={() => onMobileOpenChange(false)}
          />
          <aside className="absolute inset-y-0 left-0 z-50 w-72 border-r border-sidebar-border bg-sidebar text-sidebar-foreground shadow-lg">
            {nav}
          </aside>
        </div>
      )}
    </>
  )
}
