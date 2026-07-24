import { Layers } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { CardTec } from '@/components/card-tecnologies/cardTec'
import { Tecnologia } from '@/mocks/tecnologias'

export function Technologies() {
  return (
    <section id="stack" className="space-y-6">
      <div className="flex items-center gap-3 pb-4">
        <Layers className="h-6 w-6 text-on-surface-variant" />
        <h3 className="text-headline-lg-mobile text-foreground md:text-headline-lg">
          Principais Tecnologias
        </h3>
      </div>
      <Separator className="bg-surface-container-highest" />

      <div className="grid grid-cols-2 gap-4">
        {Tecnologia.map((tecnologia) => (
          <CardTec
            key={tecnologia.id}
            name={tecnologia.name}
            title={tecnologia.title}
            image={tecnologia.image}
            fallbackImage={tecnologia.fallbackImage}
          />
        ))}
      </div>
    </section>
  )
}
