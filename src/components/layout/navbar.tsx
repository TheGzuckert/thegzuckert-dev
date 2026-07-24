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

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
        <Link
          href="#about"
          className="cursor-pointer text-headline-lg font-extrabold tracking-tighter text-foreground transition-opacity hover:opacity-70"
        >
          GUSTAVO ZUCKERT
        </Link>

        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={cn(
                'font-mono text-label-md uppercase tracking-widest transition-colors duration-200',
                active === link.href
                  ? 'border-b border-foreground pb-1 font-semibold text-foreground'
                  : 'text-on-surface-variant hover:text-foreground',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <AlertCard
            trigger={
              <Button className="rounded-md bg-foreground px-6 font-mono text-label-md text-background hover:bg-foreground/90 hover:text-background">
                Hire Me
              </Button>
            }
          />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground md:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="h-7 w-7" />
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
              <AlertCard
                trigger={
                  <Button className="mt-2 w-full bg-foreground font-mono text-label-md text-background hover:bg-foreground/90 hover:text-background">
                    Hire Me
                  </Button>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
