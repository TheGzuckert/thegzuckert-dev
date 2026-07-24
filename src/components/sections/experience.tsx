import { Briefcase } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Card } from '@/components/card-job/card'
import { Trabalhos } from '@/mocks/trabalhos'

export function Experience() {
  return (
    <section id="work" className="space-y-8 lg:col-span-8">
      <div className="flex items-center gap-4 pb-4">
        <Briefcase className="h-7 w-7 text-on-surface-variant" />
        <h3 className="text-headline-lg text-foreground">
          Experiências Profissionais
        </h3>
      </div>
      <Separator className="bg-surface-container-highest" />

      <div className="relative ml-4 space-y-12 border-l border-surface-container-highest pb-8">
        {Trabalhos.map((trabalho, index) => (
          <Card
            key={trabalho.id}
            company={trabalho.company}
            date={trabalho.date}
            title={trabalho.title}
            location={trabalho.location}
            image={trabalho.image}
            fallbackImage={trabalho.fallbackImage}
            isFirst={index === 0}
            isLast={index === Trabalhos.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
