'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import { THEME_TRANSITION_MS } from '@/lib/theme-transition'

type ThemeCircleTransitionProps = {
  x: number
  y: number
  toDark: boolean
  sourceRef: React.RefObject<HTMLElement | null>
  onComplete: () => void
}

export function ThemeCircleTransition({
  x,
  y,
  toDark,
  sourceRef,
  onComplete,
}: ThemeCircleTransitionProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const mountRef = useRef<HTMLDivElement>(null)
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    const source = sourceRef.current
    const overlay = overlayRef.current
    const mount = mountRef.current
    if (!source || !overlay || !mount) return

    mount.className = cn(
      'theme-clone-root min-h-full w-full bg-background font-sans text-foreground antialiased',
      toDark ? 'theme-clone-dark dark' : 'theme-clone-light',
    )

    document.body.classList.forEach((className) => {
      if (className.includes('variable') || className.startsWith('font-')) {
        mount.classList.add(className)
      }
    })

    const clone = source.cloneNode(true) as HTMLElement
    clone.setAttribute('aria-hidden', 'true')
    clone.querySelectorAll('[id]').forEach((element) => {
      element.removeAttribute('id')
    })
    mount.appendChild(clone)

    const endRadius =
      Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      ) + 32

    overlay.style.clipPath = `circle(0px at ${x}px ${y}px)`

    let frame = 0
    let finished = false

    const finish = () => {
      if (finished) return
      finished = true
      onCompleteRef.current()
    }

    const handleEnd = (event: TransitionEvent) => {
      if (event.propertyName !== 'clip-path') return
      finish()
    }

    frame = requestAnimationFrame(() => {
      overlay.style.clipPath = `circle(${endRadius}px at ${x}px ${y}px)`
    })

    overlay.addEventListener('transitionend', handleEnd)
    const fallback = window.setTimeout(finish, THEME_TRANSITION_MS + 120)

    return () => {
      cancelAnimationFrame(frame)
      overlay.removeEventListener('transitionend', handleEnd)
      clearTimeout(fallback)
      mount.innerHTML = ''
    }
  }, [sourceRef, toDark, x, y])

  return createPortal(
    <div
      ref={overlayRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
      style={{
        clipPath: `circle(0px at ${x}px ${y}px)`,
        transition: `clip-path ${THEME_TRANSITION_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`,
      }}
    >
      <div ref={mountRef} />
    </div>,
    document.body,
  )
}
