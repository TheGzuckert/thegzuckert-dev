'use client'

import Link from 'next/link'
import { ArrowDown, Moon, Sun } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type HeroProps = {
  darkmode: boolean
  onToggleDarkMode: () => void
}

export function Hero({ darkmode, onToggleDarkMode }: HeroProps) {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-10 py-8 md:flex-row md:gap-gutter md:py-12"
    >
      <div className="z-10 flex-1 space-y-8">
        <div className="inline-flex items-center space-x-2 rounded-full border border-border bg-surface-container px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-label-sm uppercase tracking-widest text-on-surface-variant">
            Available for new opportunities
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-foreground sm:text-6xl md:text-headline-2xl">
            GUSTAVO <br />
            <span className="text-on-surface-variant">ZUCKERT</span>
          </h1>
          <h2 className="text-3xl font-light text-on-surface-variant md:text-headline-xl">
            Fullstack Developer
          </h2>
        </div>

        <p className="max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">
          Atualmente, trabalho como desenvolvedor na Evolution e, no meu
          dia a dia, sou responsável por implementar novas funcionalidades,
          corrigir bugs e desenvolver APIs com Laravel, e dar manutenção em Microserviços com Go. Como profissional, sou
          apaixonado por tecnologia e estou sempre buscando aprender novas
          stacks e frameworks para aprimorar minhas habilidades como
          desenvolvedor.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button
            asChild
            className="gap-2 bg-foreground px-8 font-mono text-label-md text-background hover:bg-foreground/90 hover:text-background"
          >
            <Link href="#work">
              View Work
              <ArrowDown className="h-4 w-4" />
            </Link>
          </Button>

          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={onToggleDarkMode}
              className="rounded-lg"
              aria-label={darkmode ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {darkmode ? (
                <Sun className="h-5 w-5 text-on-surface-variant" />
              ) : (
                <Moon className="h-5 w-5 text-on-surface-variant" />
              )}
            </Button>
            <Badge
              variant="outline"
              className="h-auto rounded-lg px-4 py-2 font-mono text-label-sm text-on-surface-variant"
            >
              TheGzuckert
            </Badge>
            <Badge
              variant="outline"
              className="h-auto rounded-lg px-4 py-2 font-mono text-label-sm text-on-surface-variant"
            >
              IFSP
            </Badge>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-1 justify-center md:justify-end">
        <div className="relative h-72 w-72 md:h-96 md:w-96">
          <Avatar className="relative z-10 h-full w-full rounded-2xl border border-border bg-card p-1">
            <AvatarImage
              src="https://github.com/TheGzuckert.png"
              alt="Gustavo Zuckert"
              className="rounded-xl object-cover"
            />
            <AvatarFallback className="rounded-xl text-2xl">GZ</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  )
}
