export type Theme = "light" | "dark"

export const THEME_KEY = "stats-notes-theme"

export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

export function readStoredTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(THEME_KEY)
    if (value === "light" || value === "dark") return value
  } catch {
    // ignore
  }
  return null
}

export function resolveTheme(stored: Theme | null = readStoredTheme()): Theme {
  return stored ?? getSystemTheme()
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
  document.documentElement.style.colorScheme = theme
  window.dispatchEvent(new Event("stats-notes-theme"))
}

export function persistTheme(theme: Theme) {
  try {
    window.localStorage.setItem(THEME_KEY, theme)
  } catch {
    // ignore
  }
}
