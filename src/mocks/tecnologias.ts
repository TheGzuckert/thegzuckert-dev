import { nanoid } from 'nanoid'

export type Tecnologia = {
  id: string
  name: string
  image?: string
  fallbackImage: string
}

export const Tecnologia: Tecnologia[] = [
  {
    id: nanoid(),
    name: 'React',
    image: '/react.png',
    fallbackImage: 'react',
  },
  {
    id: nanoid(),
    name: 'Next.js',
    image: '/next.png',
    fallbackImage: 'next',
  },
  {
    id: nanoid(),
    name: 'TailwindCSS',
    image: '/tailwind.png',
    fallbackImage: 'tailwind',
  },
  {
    id: nanoid(),
    name: 'Node.js',
    image: '/Node.js.png',
    fallbackImage: 'Node.js',
  },
]
