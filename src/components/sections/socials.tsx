import { Share2 } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { CardSocial } from '@/components/card-social/cardSocial'
import { Socials as SocialsMock } from '@/mocks/social'

export function Socials() {
  return (
    <section id="contact" className="space-y-6">
      <div className="flex items-center gap-3 pb-4">
        <Share2 className="h-6 w-6 text-on-surface-variant" />
        <h3 className="text-headline-lg-mobile text-foreground md:text-headline-lg">
          Redes Sociais
        </h3>
      </div>
      <Separator className="bg-surface-container-highest" />

      <div className="grid grid-cols-2 gap-4">
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
