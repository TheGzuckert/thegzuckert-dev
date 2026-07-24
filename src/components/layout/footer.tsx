import Link from 'next/link'
import { Socials } from '@/mocks/social'

export function Footer() {
  const year = new Date().getFullYear()
  const footerLinks = [
    ...Socials.filter((s) =>
      ['Github', 'Linkedin', 'Twitter'].some((name) =>
        s.title.toLowerCase().includes(name.toLowerCase()),
      ),
    ).map((s) => ({
      label: s.fallbackImage ?? s.title,
      href: s.link,
    })),
    {
      label: 'Email',
      href: 'mailto:gustavo.santoszuckert@gmail.com',
    },
  ]

  return (
    <footer className="relative z-10 w-full border-t border-border bg-surface-container-lowest py-section-gap">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-component-gap px-margin-mobile md:flex-row md:px-margin-desktop">
        <div className="text-headline-lg font-extrabold text-foreground">
          GUSTAVO ZUCKERT
        </div>
        <div className="text-body-md text-on-surface-variant">
          © {year} GUSTAVO ZUCKERT. ALL RIGHTS RESERVED.
        </div>
        <div className="flex space-x-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={
                link.href.startsWith('mailto:')
                  ? undefined
                  : 'noopener noreferrer'
              }
              className="text-body-md text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
