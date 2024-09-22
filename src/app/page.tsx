'use client'
import React, { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { LuSunMoon } from 'react-icons/lu'
import { IoMdMoon } from 'react-icons/io'
import { Card } from '@/components/card-job/card'
import { Trabalhos } from '@/mocks/trabalhos'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CardSocial } from '@/components/card-social/cardSocial'
import { Socials } from '@/mocks/social'
import { CardTec } from '@/components/card-tecnologies/cardTec'
import { Tecnologia } from '@/mocks/tecnologias'
import { AlertCard } from '@/components/alertCardInfos/alert'

export default function Home() {
  const [darkmode, setDarkmode] = useState(false)

  const toggleDarkMode = () => {
    setDarkmode(!darkmode)
  }

  useEffect(() => {
    document.body.classList.toggle('dark', darkmode)
  }, [darkmode])

  return (
    <div className="md:flex ml-2">
      <div
        id="left side"
        className="md:h-full md:p-20 lg:p-28 lg:pb-4 lg:pt-10 xl:grid xl:grid-cols-1"
      >
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
              variant={'outline'}
              onClick={toggleDarkMode}
              style={{ cursor: 'pointer' }}
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

            <Badge variant={'outline'}>TheGzuckert</Badge>

            <Badge variant={'outline'}>IFSP</Badge>

            <AlertCard />
          </div>
          <div className="flex flex-col max-w-screen-sm">
            <h1 className="font-bold text-xl">Gustavo Dos Santos Zuckert</h1>

            <p className="mt-1 font-bold">Fullstack Developer</p>

            <p className="mt-1 mb-1 text-sm mr-2">
              Desenvolvedor Web com seis meses de experiência. Atualmente
              participo de uma comunidade Open Source chamada DevHat para ganhar
              mais experiencia de mercado e estou aberto a novas oportiunidades.
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
      <div
        id="right side 1"
        className="w-full h-max-screen mt-4 max-2xl:mx-auto 2xl:max-w-[600px] 2xl:p-9"
      >
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
        {/* <p className="font-bold mb-2 mt-4"> Projetos</p>
        <section className="grid grid-cols-2 grid-rows-2 mt-3.5">
          {Projects.map((projects) => (
            <CardProjects
              key={projects.id}
              title={projects.title}
              image={projects.image}
              fallbackImage={projects.fallbackImage}
              link={projects.link}
            />
          ))}
        </section> */}
      </div>
    </div>
  )
}
