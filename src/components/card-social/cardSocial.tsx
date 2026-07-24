import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Social } from '@/mocks/social'

function cleanTitle(title: string) {
  return title.replace(/[^\p{L}\p{N}\s]/gu, '').trim()
}

export function CardSocial({ title, image, fallbackImage, link }: Social) {
  const label = cleanTitle(title) || fallbackImage || title

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-panel surface-panel-hover group flex flex-col items-center justify-center gap-3 rounded-lg p-4"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest">
        <Avatar className="h-6 w-6 rounded-none bg-transparent">
          <AvatarImage src={image} alt={label} className="object-contain" />
          <AvatarFallback className="bg-transparent text-xs">
            {fallbackImage?.slice(0, 2) ?? label.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>
      <span className="font-mono text-label-sm text-on-surface-variant">
        {label}
      </span>
    </Link>
  )
}

export default CardSocial
