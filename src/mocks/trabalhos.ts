import { nanoid } from "nanoid";

export type Trabalho = {
  id?: string;
  company: string;
  title: string;
  location: string;
  date: string;
  image?: string;
  fallbackImage?: string;
};

export const Trabalhos: Trabalho[] = [
  {
    id: nanoid(),
    company: "Log Smart",
    title: "Desenvolvedor",
    location: "São Paulo - São José dos Campos",
    date: "Nov 23, 2024 - Atualmente",
    image: "/Logsmart.jpg",
    fallbackImage: "Devhat",
  },
  {
    id: nanoid(),
    company: "Devhat",
    title: "Desenvolvedor - Voluntario",
    location: "São Paulo - Remoto",
    date: "Nov 23, 2022 - Nov 10, 2023",
    image: "/Devhat.jpg",
    fallbackImage: "Devhat",
  },
  // {
  //   id: nanoid(),
  //   company: 'Bten',
  //   title: 'Analista Dados Jr. e Suporte',
  //   location: 'São Paulo - Remoto',
  //   date: 'Oct 17, 2022 - 01 Jun, 2024',
  //   image: '/BtenIcon.jpg',
  //   fallbackImage: 'Bten',
  // },
  {
    id: nanoid(),
    company: "Corelab",
    title: "Desenvolvedor -  Treinee",
    location: "São Paulo - Remoto",
    date: "Fev 28, 2022 - 01 Jul 2022",
    image: "/Corelab.jpg",
    fallbackImage: "Devhat",
  },
];
