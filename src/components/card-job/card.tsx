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
    <div className="group flex min-w-0 gap-3 sm:gap-4">
      <div className="flex w-3.5 shrink-0 justify-center pt-5">
        <div
          className={cn(
            'relative z-10 h-3.5 w-3.5 rounded-full border-2 bg-background transition-colors',
            isFirst
              ? 'border-foreground group-hover:bg-foreground'
              : 'border-border group-hover:border-foreground',
          )}
        />
      </div>

      <div className="surface-panel surface-panel-hover min-w-0 flex-1 rounded-lg p-4 sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-start gap-3">
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
                  'h-auto min-w-0 flex-1 whitespace-normal rounded-md px-2.5 py-1 text-left font-mono text-xs leading-snug',
                  isFirst
                    ? 'border-foreground/20 bg-foreground/5 text-foreground'
                    : 'text-on-surface-variant',
                )}
              >
                {company}
              </Badge>
            </div>
            <h4 className="text-base font-semibold text-foreground sm:text-lg">
              {title}
            </h4>
            <p className="text-sm text-on-surface-variant sm:text-body-md">
              {location}
            </p>
          </div>
          <p className="shrink-0 font-mono text-xs text-muted-foreground sm:text-label-sm">
            {date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
