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
    image: '/charityInstitution.jpg',
    fallbackImage: 'Charty Institution',
    link: 'https://github.com/TheGzuckert/next-charty-institution',
  },
  {
    id: nanoid(),
    title: '📷 instagram',
    fallbackImage: 'Instagram',
    link: 'https://www.instagram.com/gustavozuckert/',
  },
]
