import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tecnologia } from '@/mocks/tecnologias'

export function CardTec({ name, image, fallbackImage }: Tecnologia) {
  return (
    <div className="surface-panel surface-panel-hover group flex aspect-square flex-col items-center justify-center gap-2 rounded-lg p-3 sm:p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-high transition-transform group-hover:scale-105 sm:h-14 sm:w-14">
        <Avatar className="h-8 w-8 rounded-none bg-transparent sm:h-9 sm:w-9">
          <AvatarImage src={image} alt={name} className="object-contain" />
          <AvatarFallback className="bg-transparent text-sm font-bold text-on-surface-variant">
            {fallbackImage?.slice(0, 2) ?? name.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>
      <span className="text-center font-mono text-label-sm text-on-surface-variant">
        {name}
      </span>
    </div>
  )
}

export default CardTec
