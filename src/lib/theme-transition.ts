import { flushSync } from 'react-dom'

export const THEME_TRANSITION_MS = 680

export function supportsViewTransitions() {
  return typeof document !== 'undefined' && 'startViewTransition' in document
}

export function setThemeTransitionOrigin(x: number, y: number) {
  document.documentElement.style.setProperty('--theme-x', `${x}px`)
  document.documentElement.style.setProperty('--theme-y', `${y}px`)
}

export function applyThemeClass(toDark: boolean) {
  document.documentElement.classList.toggle('dark', toDark)
}

export function applyThemeInstant(toDark: boolean, onThemeChange: () => void) {
  const root = document.documentElement
  root.classList.add('theme-switch-instant')
  applyThemeClass(toDark)
  onThemeChange()

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.remove('theme-switch-instant')
    })
  })
}

export function runViewTransitionTheme(onThemeChange: () => void) {
  document.startViewTransition(() => {
    flushSync(onThemeChange)
  })
}
