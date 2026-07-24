import { Share2 } from 'lucide-react'
import { SectionHeader } from '@/components/layout/section-header'
import { CardSocial } from '@/components/card-social/cardSocial'
import { Socials as SocialsMock } from '@/mocks/social'

export function Socials() {
  return (
    <section id="contact" className="space-y-6 lg:col-span-3">
      <SectionHeader icon={Share2} title="Redes Sociais" />

      <div className="grid grid-cols-2 gap-2">
        {SocialsMock.map((social) => (
          <CardSocial
            key={social.id}
            title={social.title}
            image={social.image}
            fallbackImage={social.fallbackImage}
            link={social.link}
          />
        ))}
      </div>
    </section>
  )
}
