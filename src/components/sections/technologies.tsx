import { Layers } from 'lucide-react'
import { SectionHeader } from '@/components/layout/section-header'
import { CardTec } from '@/components/card-tecnologies/cardTec'
import { Tecnologia } from '@/mocks/tecnologias'

export function Technologies() {
  return (
    <section id="stack" className="space-y-6 lg:col-span-3">
      <SectionHeader icon={Layers} title="Principais Tecnologias" />

      <div className="grid grid-cols-2 gap-3">
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
