import { nanoid } from "nanoid";

export type Social = {
  id?: string;
  title: string;
  image?: string;
  fallbackImage?: string;
  link: string;
};

export const Socials: Social[] = [
  {
    id: nanoid(),
    title: "⌨️ Github ",
    image: "/github.svg",
    fallbackImage: "Github",
    link: "https://github.com/TheGzuckert",
  },
  {
    id: nanoid(),
    title: "📷 instagram",
    image: "/instagram.svg",
    fallbackImage: "Instagram",
    link: "https://www.instagram.com/gustavozuckert/",
  },
  {
    id: nanoid(),
    title: "💼 Linkedin ",
    image: "/linkedin.svg",
    fallbackImage: "Linkedin",
    link: "https://www.linkedin.com/in/thegzuckert/",
  },
  {
    id: nanoid(),
    title: "🐥 Twitter",
    image: "/twitter.svg",
    fallbackImage: "Twitter",
    link: "https://twitter.com/TheGzuckert",
  },
];
