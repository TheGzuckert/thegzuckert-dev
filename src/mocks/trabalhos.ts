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
    company: 'Multfacil Comercial / Evolution',
    title: 'Desenvolvedor Full Stack',
    location: 'São Paulo - São José dos Campos',
    date: 'Jan 2026 - Present',
    image: '/mult_icon.jpeg',
    fallbackImage: 'Devhat',
  },
  {
    id: nanoid(),
    company: 'Log Smart',
    title: 'Desenvolvedor Full Stack',
    location: 'São Paulo - São José dos Campos',
    date: 'Sep 2024 - Dez 2025',
    image: '/Logsmart.jpg',
    fallbackImage: 'Devhat',
  },
  {
    id: nanoid(),
    company: 'Devhat',
    title: 'Desenvolvedor - Open Source',
    location: 'São Paulo - Remote',
    date: 'Sep 2023 - Sep 2024',
    image: '/Devhat.jpg',
    fallbackImage: 'Devhat',
  },  
  {
    id: nanoid(),
    company: 'Bten',
    title: 'Desenvolvedor Full Stack',
    location: 'Estados Unidos - Remote',
    date: 'Oct 2022 - Sep 2024',
    image: '/BtenIcon.jpg',
    fallbackImage: 'Devhat',
  },
  {
    id: nanoid(),
    company: 'Corelab',
    title: 'Desenvolvedor Full Stack',
    location: 'São Paulo - Remote',
    date: 'Feb 2019 - Jul 2022',
    image: '/Corelab.jpg',
    fallbackImage: 'Devhat',
  },
]
