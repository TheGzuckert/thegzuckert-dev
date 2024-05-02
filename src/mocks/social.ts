import { nanoid } from 'nanoid'

export type Social = {
  id: string
  title: string
  image?: string
  fallbackImage?: string
}

export const Socials: Social[] = [
  {
    id: nanoid(),
    title: '⌨️ Github ',
    image: '/github.svg',
    fallbackImage: 'Devhat',
  },
  {
    id: nanoid(),
    title: '📷 instagram',
    image: '/instagram.svg',
    fallbackImage: 'Devhat',
  },
  {
    id: nanoid(),
    title: '💼 Linkedin ',
    image: '/linkedin.svg',
    fallbackImage: 'Bten',
  },
  {
    id: nanoid(),
    title: '✖ Twitter',
    image: '/twitter.svg',
    fallbackImage: 'Devhat',
  },
]
