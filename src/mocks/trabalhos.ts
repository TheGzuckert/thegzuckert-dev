import { nanoid } from 'nanoid'

export type Trabalho = {
  id?: string
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
    company: 'Devhat',
    title: 'Desenvolvedor Web - Voluntario',
    location: 'São Paulo - Remoto',
    date: 'Nov 22, 2023 - Atualmente',
    image: '/Devhat.jpg',
    fallbackImage: 'Devhat',
  },
  {
    id: nanoid(),
    company: 'Bten',
    title: 'Analista de Suporte e DBA',
    location: 'São Paulo - Remoto',
    date: 'Oct 17, 2022 - 01 Jun, 2024',
    image: '/BtenIcon.jpg',
    fallbackImage: 'Bten',
  },
  {
    id: nanoid(),
    company: 'Corelab',
    title: 'Desenvolvedor Web -  Treinee',
    location: 'São Paulo - Remoto',
    date: 'Fev 28, 2022 - 01 Jul 2022',
    image: '/Corelab.jpg',
    fallbackImage: 'Devhat',
  },
]
