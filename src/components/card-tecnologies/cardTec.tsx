import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tecnologia } from '@/mocks/tecnologias'

export function CardTec({ name, image, fallbackImage }: Tecnologia) {
  return (
    <div className="surface-panel surface-panel-hover group flex aspect-square flex-col items-center justify-center gap-4 rounded-lg p-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-high transition-transform group-hover:scale-105">
        <Avatar className="h-10 w-10 rounded-none bg-transparent">
          <AvatarImage src={image} alt={name} className="object-contain" />
          <AvatarFallback className="bg-transparent text-sm font-bold text-on-surface-variant">
            {fallbackImage?.slice(0, 2) ?? name.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>
      <span className="font-mono text-label-sm text-on-surface-variant">
        {name}
      </span>
    </div>
  )
}

export default CardTec
