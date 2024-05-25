import { nanoid } from 'nanoid'

export type Projec = {
  id?: string
  title: string
  image?: string
  fallbackImage?: string
  link: string
}

export const Projects: Projec[] = [
  {
    id: nanoid(),
    title: '🏡 Charty Institution',
    image: '/github.svg',
    fallbackImage: 'Charty Institution',
    link: 'https://github.com/TheGzuckert/next-charty-institution',
  },
  {
    id: nanoid(),
    title: '📷 instagram',
    image: '/instagram.svg',
    fallbackImage: 'Instagram',
    link: 'https://www.instagram.com/gustavozuckert/',
  },
]
