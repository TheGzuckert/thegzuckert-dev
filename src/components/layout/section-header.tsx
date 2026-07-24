import { type LucideIcon } from 'lucide-react'

type SectionHeaderProps = {
  icon: LucideIcon
  title: string
}

export function SectionHeader({ icon: Icon, title }: SectionHeaderProps) {
  return (
    <div className="flex h-12 items-center gap-3 border-b border-border">
      <Icon className="h-6 w-6 shrink-0 text-on-surface-variant" />
      <h3 className="text-xl font-semibold leading-none tracking-tight text-foreground md:text-2xl">
        {title}
      </h3>
    </div>
  )
}
