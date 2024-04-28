import { nanoid } from 'nanoid'

export type Trabalho = {
  id: string
  company: string
  title: string
  location: string
  date: string
  image?: string
  fallbackImage?: string
}

export const Trabalhos: Trabalho[] = [
  {
    id: nanoid(),
    company: 'Bten',
    title: 'Analista de Suporte e DBA',
    location: 'Remoto',
    date: 'Oct 17, 2022 - Atualmente',
    image: '/BtenIcon.jpg',
    fallbackImage: 'Bten',
  },
  {
    id: nanoid(),
    company: 'Devhat',
    title: 'Desenvolvedor Web - Freelancer',
    location: 'Remoto',
    date: 'Nov 22, 2023 - Atualmente',
    image: '/Devhat.jpg',
    fallbackImage: 'Devhat',
  },
  {
    id: nanoid(),
    company: 'Corelab',
    title: 'Desenvolvedor Web -  Treinee',
    location: 'Remoto',
    date: 'Fev 28, 2022 - 01 Jul 2022',
    image: '/Corelab.jpg',
    fallbackImage: 'Devhat',
  },
]
