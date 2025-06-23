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
    company: 'Log Smart',
    title: 'Desenvolvedor',
    location: 'São Paulo - São José dos Campos',
    date: 'Sep 2024 - Present',
    image: '/Logsmart.jpg',
    fallbackImage: 'Devhat',
  },
  {
    id: nanoid(),
    company: 'Devhat',
    title: 'Desenvolvedor - Voluntario',
    location: 'São Paulo - Remote',
    date: 'Sep 2023 - Sep 2024',
    image: '/Devhat.jpg',
    fallbackImage: 'Devhat',
  },  
  {
    id: nanoid(),
    company: 'Bten',
    title: 'Desenvolvedor / Suporte',
    location: 'Estados Unidos - Remote',
    date: 'Oct 2022 - Sep 2024',
    image: '/BtenIcon.jpg',
    fallbackImage: 'Devhat',
  },
  {
    id: nanoid(),
    company: 'Corelab',
    title: 'Desenvolvedor -  Treinee',
    location: 'São Paulo - Remote',
    date: 'Feb 2022 - Jul 2022',
    image: '/Corelab.jpg',
    fallbackImage: 'Devhat',
  },
]
