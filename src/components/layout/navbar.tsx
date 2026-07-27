'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { AlertCard } from '@/components/alertCardInfos/alert'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#about')

  const hireMeButton = (className?: string) => (
    <Button
      size="sm"
      className={cn(
        'h-9 shrink-0 rounded-md bg-foreground px-4 font-mono text-xs uppercase tracking-wide text-background hover:bg-foreground/90 hover:text-background',
        className,
      )}
    >
      Hire Me
    </Button>
  )

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-container-max items-center justify-between gap-4 px-margin-mobile md:h-[4.5rem] md:px-margin-desktop">
        <Link
          href="#about"
          className="shrink-0 text-lg font-extrabold tracking-tighter text-foreground transition-opacity hover:opacity-70 md:text-xl lg:text-headline-lg"
        >
          GUSTAVO ZUCKERT
        </Link>

        <div className="hidden items-center gap-5 md:flex lg:gap-8">
          <div className="flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={cn(
                  'whitespace-nowrap font-mono text-label-md uppercase tracking-widest transition-colors duration-200',
                  active === link.href
                    ? 'font-semibold text-foreground underline decoration-foreground decoration-1 underline-offset-[6px]'
                    : 'text-on-surface-variant hover:text-foreground',
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <span
            className="mx-1 h-4 w-px shrink-0 bg-border lg:mx-2"
            aria-hidden
          />

          <AlertCard trigger={hireMeButton()} />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 shrink-0 text-foreground md:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-border bg-background text-foreground"
          >
            <SheetHeader>
              <SheetTitle className="text-left text-foreground">Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActive(link.href)
                    setOpen(false)
                  }}
                  className="font-mono text-label-md uppercase tracking-widest text-on-surface-variant transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <AlertCard trigger={hireMeButton('mt-2 w-full')} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
