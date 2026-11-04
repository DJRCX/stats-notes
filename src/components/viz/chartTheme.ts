export function isDarkMode() {
  return document.documentElement.classList.contains("dark")
}

export function getChartTheme(tickFontSize = 12) {
  const dark = isDarkMode()
  return {
    axis: {
      stroke: dark ? "#71717a" : "#a1a1aa",
      tick: { fill: dark ? "#a1a1aa" : "#71717a", fontSize: tickFontSize },
    },
    grid: {
      stroke: dark ? "#27272a" : "#e4e4e7",
      strokeDasharray: "3 3",
    },
    tooltipStyle: {
      backgroundColor: dark ? "#18181b" : "#ffffff",
      border: dark ? "1px solid #3f3f46" : "1px solid #e4e4e7",
      borderRadius: 8,
      color: dark ? "#fafafa" : "#18181b",
      fontSize: 12,
    },
    cursorFill: dark ? "#27272a" : "#f4f4f5",
  }
}
