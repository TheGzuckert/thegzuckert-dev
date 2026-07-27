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
    <footer className="relative z-10 w-full border-t border-border bg-surface-container-lowest py-8 md:py-10">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-4 px-margin-mobile md:flex-row md:gap-6 md:px-margin-desktop">
        <div className="text-lg font-extrabold text-foreground md:text-headline-lg">
          GUSTAVO ZUCKERT
        </div>
        <div className="text-center text-sm text-on-surface-variant md:text-body-md">
          © {year} GUSTAVO ZUCKERT. ALL RIGHTS RESERVED.
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
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
              className="text-sm text-muted-foreground transition-colors hover:text-foreground md:text-body-md"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
