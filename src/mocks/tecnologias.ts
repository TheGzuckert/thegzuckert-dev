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
    name: 'React',
    title: 'React',
    image: '/react.png',
    fallbackImage: 'react',
  },
  {
    id: nanoid(),
    name: 'Next.js',
    title: 'Next.js',
    image: '/next.png',
    fallbackImage: 'next',
  },
  {
    id: nanoid(),
    name: 'TailwindCSS',
    title: 'TailwindCSS',
    image: '/tailwind.png',
    fallbackImage: 'tailwind',
  },
  {
    id: nanoid(),
    name: 'Node.js',
    title: 'Node.js',
    image: '/nodejs.png',
    fallbackImage: 'Node.js',
  },
]
