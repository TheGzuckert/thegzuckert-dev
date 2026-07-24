import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Social } from '@/mocks/social'

export function CardSocial({ title, image, fallbackImage, link }: Social) {
  const label = fallbackImage ?? title

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-panel surface-panel-hover group flex flex-col items-center justify-center gap-1.5 rounded-lg px-2 py-3"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-highest">
        <Avatar className="h-5 w-5 rounded-none bg-transparent">
          <AvatarImage src={image} alt={label} className="object-contain" />
          <AvatarFallback className="bg-transparent text-[10px]">
            {label.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>
      <span className="font-mono text-xs text-on-surface-variant">{label}</span>
    </Link>
  )
}

export default CardSocial
