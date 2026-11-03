import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, PanelLeft } from "lucide-react"
import { AppSidebar } from "@/components/AppSidebar"
import { MarkdownView } from "@/components/MarkdownView"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { chapters, type Chapter } from "@/content/chapters"
import { cn } from "@/lib/utils"

const SIDEBAR_KEY = "stats-notes-sidebar-collapsed"

function readInitialChapter(): Chapter {
  const hash = window.location.hash.replace(/^#/, "")
  return chapters.find((c) => c.id === hash) ?? chapters[0]
}

function readSidebarCollapsed(): boolean {
  try {
    return window.localStorage.getItem(SIDEBAR_KEY) === "1"
  } catch {
    return false
  }
}

export default function App() {
  const [active, setActive] = useState<Chapter>(readInitialChapter)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(readSidebarCollapsed)
  const contentRef = useRef<HTMLElement>(null)

  const index = useMemo(
    () => chapters.findIndex((c) => c.id === active.id),
    [active.id],
  )
  const prev = index > 0 ? chapters[index - 1] : null
  const next = index < chapters.length - 1 ? chapters[index + 1] : null

  function selectChapter(chapter: Chapter) {
    setActive(chapter)
    window.history.replaceState(null, "", `#${chapter.id}`)
    contentRef.current?.scrollTo({ top: 0 })
  }

  function updateCollapsed(nextCollapsed: boolean) {
    setCollapsed(nextCollapsed)
    try {
      window.localStorage.setItem(SIDEBAR_KEY, nextCollapsed ? "1" : "0")
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    const onHash = () => setActive(readInitialChapter())
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  return (
    <div className="flex h-full flex-col md:flex-row">
      <AppSidebar
        activeId={active.id}
        onSelect={selectChapter}
        mobileOpen={mobileOpen}
        onMobileOpenChange={setMobileOpen}
        collapsed={collapsed}
        onCollapsedChange={updateCollapsed}
      />

      <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-background">
        <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <div className="flex min-w-0 items-center gap-2">
              {collapsed && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden shrink-0 md:inline-flex"
                  aria-label="Expand sidebar"
                  onClick={() => updateCollapsed(false)}
                >
                  <PanelLeft />
                </Button>
              )}
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {active.label}
                </p>
                <h1 className="truncate text-sm font-semibold sm:text-base">
                  {active.title}
                </h1>
              </div>
            </div>
            <div className="hidden shrink-0 items-center gap-1 sm:flex">
              <Button
                variant="outline"
                size="sm"
                disabled={!prev}
                onClick={() => prev && selectChapter(prev)}
              >
                <ChevronLeft />
                Prev
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={!next}
                onClick={() => next && selectChapter(next)}
              >
                Next
                <ChevronRight />
              </Button>
            </div>
          </div>
        </header>

        <main
          ref={contentRef}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
        >
          <article className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
            <MarkdownView markdown={active.markdown} />

            <Separator className="my-10" />

            <div className="flex items-center justify-between gap-3 pb-8">
              <Button
                variant="outline"
                className={cn(!prev && "invisible")}
                disabled={!prev}
                onClick={() => prev && selectChapter(prev)}
              >
                <ChevronLeft />
                {prev?.label}
              </Button>
              <Button
                variant="outline"
                className={cn(!next && "invisible")}
                disabled={!next}
                onClick={() => next && selectChapter(next)}
              >
                {next?.label}
                <ChevronRight />
              </Button>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
