import type { ReactNode } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import { renderViz } from "@/components/viz/registry"
import { cn } from "@/lib/utils"

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function headingText(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children)
  }
  if (Array.isArray(children)) {
    return children.map(headingText).join("")
  }
  if (children && typeof children === "object" && "props" in (children as object)) {
    const el = children as { props?: { children?: ReactNode } }
    return headingText(el.props?.children)
  }
  return ""
}

const VIZ_SPLIT = /<!--\s*viz:([a-z0-9-]+)\s*-->/i

function MarkdownChunk({ markdown }: { markdown: string }) {
  if (!markdown.trim()) return null

  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[
        [
          rehypeKatex,
          {
            throwOnError: false,
            strict: "ignore",
            trust: true,
            output: "htmlAndMathml",
          },
        ],
      ]}
      components={{
        h1: ({ children, ...props }) => {
          const text = headingText(children)
          return (
            <h1 id={slugify(text)} {...props}>
              {children}
            </h1>
          )
        },
        h2: ({ children, ...props }) => {
          const text = headingText(children)
          return (
            <h2 id={slugify(text)} {...props}>
              {children}
            </h2>
          )
        },
        h3: ({ children, ...props }) => {
          const text = headingText(children)
          return (
            <h3 id={slugify(text)} {...props}>
              {children}
            </h3>
          )
        },
        a: ({ href, children, ...props }) => (
          <a href={href} target="_blank" rel="noreferrer" {...props}>
            {children}
          </a>
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  )
}

type Props = {
  markdown: string
  className?: string
}

export function MarkdownView({ markdown, className }: Props) {
  const parts = markdown.split(VIZ_SPLIT)

  return (
    <div
      className={cn(
        "prose prose-neutral max-w-none dark:prose-invert",
        "prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-h1:text-3xl prose-h1:leading-tight",
        "prose-h2:text-xl prose-h2:border-b prose-h2:border-border prose-h2:pb-2",
        "prose-h3:text-lg",
        "prose-p:leading-7 prose-p:text-foreground/90",
        "prose-li:leading-7",
        "prose-strong:text-foreground",
        "prose-table:text-sm",
        "prose-th:border prose-th:border-border prose-th:bg-muted/50 prose-th:px-3 prose-th:py-2 prose-th:text-left",
        "prose-td:border prose-td:border-border prose-td:px-3 prose-td:py-2",
        "prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none",
        "prose-pre:bg-muted prose-pre:text-foreground",
        "[&_.katex-display]:my-5 [&_.katex-display]:overflow-x-auto [&_.katex-display]:rounded-lg [&_.katex-display]:border [&_.katex-display]:border-border [&_.katex-display]:bg-muted/40 [&_.katex-display]:px-4 [&_.katex-display]:py-3",
        "[&_.katex]:text-[1.05em] [&_.katex-display>.katex]:text-[1.15em]",
        "[&_.katex-error]:text-destructive",
        className,
      )}
    >
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          return <div key={`viz-${part}-${index}`}>{renderViz(part)}</div>
        }
        return <MarkdownChunk key={`md-${index}`} markdown={part} />
      })}
    </div>
  )
}
