'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Experience } from '@/components/sections/experience'
import { Technologies } from '@/components/sections/technologies'
import { Socials } from '@/components/sections/socials'
import { ThemeCircleTransition } from '@/components/effects/theme-circle-transition'
import { applyThemeClass, applyThemeInstant, runViewTransitionTheme, setThemeTransitionOrigin, supportsViewTransitions } from '@/lib/theme-transition'

type ThemeTransition = {
  x: number
  y: number
  toDark: boolean
}

export default function Home() {
  const [darkmode, setDarkmode] = useState(true)
  const [fallbackTransition, setFallbackTransition] =
    useState<ThemeTransition | null>(null)
  const themeRootRef = useRef<HTMLDivElement>(null)
  const fallbackRef = useRef<ThemeTransition | null>(null)

  const commitTheme = useCallback((toDark: boolean) => {
    applyThemeClass(toDark)
    setDarkmode(toDark)
  }, [])

  const toggleDarkMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const toDark = !darkmode

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      applyThemeInstant(toDark, () => setDarkmode(toDark))
      return
    }

    setThemeTransitionOrigin(x, y)

    if (supportsViewTransitions()) {
      runViewTransitionTheme(() => {
        commitTheme(toDark)
      })
      return
    }

    const nextTransition = { x, y, toDark }
    fallbackRef.current = nextTransition
    setFallbackTransition(nextTransition)
  }

  const completeFallbackTransition = useCallback(() => {
    const pending = fallbackRef.current
    if (!pending) return

    applyThemeInstant(pending.toDark, () => setDarkmode(pending.toDark))
    fallbackRef.current = null
    setFallbackTransition(null)
  }, [])

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkmode(prefersDark)
  }, [])

  useEffect(() => {
    applyThemeClass(darkmode)
  }, [darkmode])

  return (
    <>
      <div ref={themeRootRef} className="relative z-10">
        <Navbar />
        <main className="mx-auto max-w-container-max px-margin-mobile pb-section-gap pt-24 md:px-margin-desktop md:pt-28">
          <Hero darkmode={darkmode} onToggleDarkMode={toggleDarkMode} />

          <div className="mt-16 grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-12 md:mt-24">
            <Experience />
            <Technologies />
            <Socials />
          </div>
        </main>
        <Footer />
      </div>

      {fallbackTransition && (
        <ThemeCircleTransition
          x={fallbackTransition.x}
          y={fallbackTransition.y}
          toDark={fallbackTransition.toDark}
          sourceRef={themeRootRef}
          onComplete={completeFallbackTransition}
        />
      )}
    </>
  )
}
