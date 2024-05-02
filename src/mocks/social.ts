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
    title: '💼 Linkedin ',
    image: '/BtenIcon.jpg',
    fallbackImage: 'Bten',
  },
  {
    id: nanoid(),
    title: '⌨️ Github ',
    image: '/Devhat.jpg',
    fallbackImage: 'Devhat',
  },
  {
    id: nanoid(),
    title: '✖ Twitter',
    image: '/Corelab.jpg',
    fallbackImage: 'Devhat',
  },
  {
    id: nanoid(),
    title: '📷 instagram',
    image: '/Corelab.jpg',
    fallbackImage: 'Devhat',
  },
]
