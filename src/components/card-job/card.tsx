import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Trabalho } from '@/mocks/trabalhos'
import { cn } from '@/lib/utils'

type CardProps = Trabalho & {
  isFirst?: boolean
  isLast?: boolean
}

export function Card({
  company,
  date,
  title,
  location,
  image,
  fallbackImage,
  isFirst,
}: CardProps) {
  return (
    <div className="group relative pl-8">
      <div
        className={cn(
          'absolute -left-[9px] top-1 h-3.5 w-3.5 rounded-full border-2 bg-background transition-colors',
          isFirst
            ? 'border-foreground group-hover:bg-foreground'
            : 'border-border group-hover:border-foreground',
        )}
      />
      <div className="surface-panel surface-panel-hover rounded-lg p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-center gap-3">
              <Avatar className="h-10 w-10 shrink-0 rounded border border-border bg-white p-1">
                <AvatarImage
                  src={image}
                  alt={company}
                  className="object-contain"
                />
                <AvatarFallback className="rounded text-xs font-bold text-black">
                  {fallbackImage?.slice(0, 2) ?? company.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <Badge
                variant="outline"
                className={cn(
                  'max-w-full truncate rounded-md font-mono text-label-sm',
                  isFirst
                    ? 'border-foreground/20 bg-foreground/5 text-foreground'
                    : 'text-on-surface-variant',
                )}
              >
                {company}
              </Badge>
            </div>
            <h4 className="text-lg font-semibold text-foreground">{title}</h4>
            <p className="text-body-md text-on-surface-variant">{location}</p>
          </div>
          <p className="shrink-0 font-mono text-label-sm text-muted-foreground sm:pt-1 sm:text-right">
            {date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
