import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tecnologia } from '@/mocks/tecnologias'

export function CardTec({ name, image, fallbackImage }: Tecnologia) {
  return (
    <div className="surface-panel surface-panel-hover group flex flex-col items-center justify-center gap-1.5 rounded-lg px-2 py-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-high transition-transform group-hover:scale-105">
        <Avatar className="h-5 w-5 rounded-none bg-transparent">
          <AvatarImage src={image} alt={name} className="object-contain" />
          <AvatarFallback className="bg-transparent text-[10px] font-bold text-on-surface-variant">
            {fallbackImage?.slice(0, 2) ?? name.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>
      <span className="text-center font-mono text-xs text-on-surface-variant">
        {name}
      </span>
    </div>
  )
}

export default CardTec
