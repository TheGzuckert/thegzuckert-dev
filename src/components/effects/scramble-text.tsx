'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*(!'
const SCRAMBLE_CYCLES = 7
const SCRAMBLE_TICK = 20
const REVEAL_PAUSE = 16
const WORD_PAUSE = 110

type ScrambleTextProps = {
  words: string[]
  className?: string
}

function randomChar() {
  return CHARSET[Math.floor(Math.random() * CHARSET.length)]
}

function buildPool(size: number) {
  return Array.from({ length: size }, () => randomChar())
}

function refreshPoolFrom(text: string, pool: string[], fromIndex: number) {
  for (let i = fromIndex; i < text.length; i++) {
    if (text[i] !== ' ') {
      pool[i] = randomChar()
    }
  }
}

function getWordRanges(words: string[]) {
  const ranges: { start: number; end: number }[] = []
  let offset = 0

  words.forEach((word, index) => {
    const start = offset
    offset += word.length
    ranges.push({ start, end: offset })

    if (index < words.length - 1) {
      offset += 1
    }
  })

  return ranges
}

function renderTerminal(
  text: string,
  pool: string[],
  position: number,
  showCursor: boolean,
) {
  let output = ''

  for (let i = 0; i < text.length; i++) {
    const char = text[i]

    if (i < position) {
      output += char
      continue
    }

    if (i === position && char === ' ') {
      output += ' '
      continue
    }

    if (i === position && showCursor) {
      output += '_'
      continue
    }

    output += pool[i]
  }

  if (showCursor && position >= text.length) {
    output += '_'
  }

  return output
}

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms)
  })
}

export function ScrambleText({ words, className }: ScrambleTextProps) {
  const text = useMemo(() => words.join(' '), [words])
  const ranges = useMemo(() => getWordRanges(words), [words])

  const ref = useRef<HTMLSpanElement>(null)
  const poolRef = useRef<string[]>(buildPool(text.length))
  const wasVisibleRef = useRef(false)
  const isAnimatingRef = useRef(false)
  const [display, setDisplay] = useState(text)
  const [showEndCursor, setShowEndCursor] = useState(false)

  const runTerminalDecrypt = useCallback(async () => {
    if (isAnimatingRef.current) return

    isAnimatingRef.current = true
    setShowEndCursor(false)
    poolRef.current = buildPool(text.length)

    for (let rangeIndex = 0; rangeIndex < ranges.length; rangeIndex++) {
      const range = ranges[rangeIndex]

      for (let position = range.start; position <= range.end; position++) {
        const currentChar = text[position]

        if (currentChar && currentChar !== ' ') {
          for (let cycle = 0; cycle < SCRAMBLE_CYCLES; cycle++) {
            refreshPoolFrom(text, poolRef.current, position)
            setDisplay(
              renderTerminal(
                text,
                poolRef.current,
                position,
                true,
              ),
            )
            await wait(SCRAMBLE_TICK)
          }
        }

        setDisplay(
          renderTerminal(
            text,
            poolRef.current,
            position + 1,
            position + 1 <= text.length,
          ),
        )
        await wait(REVEAL_PAUSE)
      }

      if (rangeIndex < ranges.length - 1) {
        await wait(WORD_PAUSE)
      }
    }

    setDisplay(text)
    setShowEndCursor(true)
    isAnimatingRef.current = false
  }, [ranges, text])

  useEffect(() => {
    setDisplay(text)
    setShowEndCursor(false)
  }, [text])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasVisibleRef.current) {
          runTerminalDecrypt()
        }
        wasVisibleRef.current = entry.isIntersecting
      },
      { threshold: 0.4 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [runTerminalDecrypt])

  return (
    <span
      ref={ref}
      className={cn(
        'inline-block cursor-pointer select-none text-primary transition-colors duration-300 hover:text-primary/80',
        className,
      )}
      onMouseEnter={runTerminalDecrypt}
      aria-label={text}
    >
      {display}
      {showEndCursor && <span className="terminal-end-cursor">_</span>}
    </span>
  )
}
