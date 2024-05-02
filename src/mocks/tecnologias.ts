import { nanoid } from 'nanoid'

export type Tecnologia = {
  id: string
  name: string
  title: string
  image?: string
  fallbackImage: string
}

export const Tecnologia: Tecnologia[] = [
  {
    id: nanoid(),
    name: 'Express.js',
    title: 'Express.js',
    image: '/express.svg',
    fallbackImage: 'tailwind',
  },
  {
    id: nanoid(),
    name: 'Next.js',
    title: 'Next.js',
    image: '/next-js.svg',
    fallbackImage: 'next',
  },
  {
    id: nanoid(),
    name: 'Node.js',
    title: 'Node.js',
    image: '/nodejs.svg',
    fallbackImage: 'Node.js',
  },
  {
    id: nanoid(),
    name: 'React',
    title: 'React',
    image: '/react.svg',
    fallbackImage: 'react',
  },
]
