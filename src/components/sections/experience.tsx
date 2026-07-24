import { Briefcase } from 'lucide-react'
import { SectionHeader } from '@/components/layout/section-header'
import { Card } from '@/components/card-job/card'
import { Trabalhos } from '@/mocks/trabalhos'

export function Experience() {
  return (
    <section id="work" className="space-y-6 md:col-span-2 lg:col-span-6">
      <SectionHeader icon={Briefcase} title="Experiências Profissionais" />

      <div className="relative ml-3 space-y-6 border-l border-border pl-0">
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
