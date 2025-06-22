"use client";
import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { LuSunMoon } from "react-icons/lu";
import { IoMdMoon } from "react-icons/io";
import { Card } from "@/components/card-job/card";
import { Trabalhos } from "@/mocks/trabalhos";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardSocial } from "@/components/card-social/cardSocial";
import { Socials } from "@/mocks/social";
import { CardTec } from "@/components/card-tecnologies/cardTec";
import { Tecnologia } from "@/mocks/tecnologias";
import { AlertCard } from "@/components/alertCardInfos/alert";

export default function Home() {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkmode);
  }, [darkmode]);

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div id="left side" className="lg:col-span-7 xl:col-span-8">
          <header className="flex flex-col gap-3">
            <div className="mb-3">
              <Avatar className="w-24 h-24 flex-shrink-0 rounded-xl">
                <AvatarImage
                  src="https://github.com/TheGzuckert.png"
                  alt="Gustavo Zuckert"
                />
                <AvatarFallback>Gustavo Zuckert</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex cursor-pointer">
              <Badge
                className="text-xs"
                variant={"outline"}
                onClick={toggleDarkMode}
                style={{ cursor: "pointer" }}
              >
                {darkmode ? (
                  <>
                    <IoMdMoon className="text-yellow-500 mr-1 bg" />
                    Modo Escuro
                  </>
                ) : (
                  <>
                    <LuSunMoon className="text-yellow-500 mr-1" />
                    Modo Claro
                  </>
                )}
              </Badge>

              <Badge variant={"outline"}>TheGzuckert</Badge>

              <Badge variant={"outline"}>IFSP</Badge>

              <AlertCard />
            </div>
            <div className="flex flex-col max-w-screen-sm">
              <h1 className="font-bold text-xl">Gustavo Dos Santos Zuckert</h1>

              <p className="mt-1 font-bold">Fullstack Developer</p>

              <p className="mt-1 mb-1 text-sm mr-2">
                Atualmente, trabalho como desenvolvedor na empresa Log Smart e,
                no meu dia a dia, sou responsável por implementar novas
                funcionalidades, corrigir bugs e desenvolver APIs com Laravel.
              </p>

              <p className="mt-1 mb-1 text-sm mr-2">
                Como profissional, sou apaixonado por tecnologia e estou sempre
                buscando aprender novas stacks e frameworks para aprimorar
                minhas habilidades como desenvolvedor.
              </p>
            </div>
          </header>
          <section className="mt-4 max-w-screen-sm mr-4">
            <p className="font-bold mb-2">💼 Experiencias profissionais</p>
            {Trabalhos.map((trabalho) => (
              <Card
                key={trabalho.id}
                company={trabalho.company}
                date={trabalho.date}
                title={trabalho.title}
                location={trabalho.location}
                image={trabalho.image}
                fallbackImage={trabalho.fallbackImage}
              />
            ))}
          </section>
        </div>
        <div id="right side 1" className="lg:col-span-5 xl:col-span-4">
          <p className="font-bold mb-2">📱 Redes Sociais</p>
          <section className="grid grid-cols-2 grid-rows-2 mt-3">
            {Socials.map((social) => (
              <CardSocial
                key={social.id}
                title={social.title}
                image={social.image}
                fallbackImage={social.fallbackImage}
                link={social.link}
              />
            ))}
          </section>
          <p className="font-bold mb-2 mt-4">📚 Principais Tecnologias</p>
          <section className="grid grid-cols-2 grid-rows-2 mt-3.5">
            {Tecnologia.map((tecnologias) => (
              <CardTec
                key={tecnologias.id}
                name={tecnologias.name}
                title={tecnologias.title}
                image={tecnologias.image}
                fallbackImage={tecnologias.fallbackImage}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
