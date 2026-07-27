import { Briefcase } from 'lucide-react'
import { SectionHeader } from '@/components/layout/section-header'
import { Card } from '@/components/card-job/card'
import { Trabalhos } from '@/mocks/trabalhos'

export function Experience() {
  return (
    <section id="work" className="min-w-0 space-y-6 md:col-span-2 lg:col-span-6">
      <SectionHeader icon={Briefcase} title="Experiências Profissionais" />

      <div className="relative space-y-6 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:-translate-x-1/2 before:bg-border">
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
