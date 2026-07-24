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
      <div className="surface-panel surface-panel-hover rounded-lg p-6">
        <div className="mb-1 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <Avatar className="h-10 w-10 rounded border border-border bg-white p-1">
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
                  'rounded-md font-mono text-label-sm',
                  isFirst
                    ? 'border-foreground/20 bg-foreground/5 text-foreground'
                    : 'text-on-surface-variant',
                )}
              >
                {company}
              </Badge>
            </div>
            <h4 className="text-headline-lg-mobile text-foreground">{title}</h4>
            <p className="text-body-md text-on-surface-variant">{location}</p>
          </div>
          <div className="mt-1 shrink-0 font-mono text-label-sm text-muted-foreground">
            {date}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
