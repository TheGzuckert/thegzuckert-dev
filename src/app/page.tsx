'use client'
import React, { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { LuSunMoon } from 'react-icons/lu'
import { IoMdMoon } from 'react-icons/io'
import { Card } from '@/components/card-job/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Home() {
  const [darkmode, setDarkmode] = useState(false)

  const toggleDarkMode = () => {
    setDarkmode(!darkmode)
  }

  useEffect(() => {
    document.body.classList.toggle('dark', darkmode)
  }, [darkmode])

  return (
    <div className="ml-5">
      <nav className="mt-6"></nav>
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
        <div className="flex gap-2">
          <Badge
            variant={'outline'}
            onClick={toggleDarkMode}
            style={{ cursor: 'pointer' }}
          >
            {darkmode ? (
              <>
                <LuSunMoon className="text-yellow-500 mr-1" />
                Modo Escuro
              </>
            ) : (
              <>
                <IoMdMoon className="text-yellow-500 mr-1" />
                Modo Claro
              </>
            )}
          </Badge>

          <Badge variant={'outline'}>TheGzuckert</Badge>

          <Badge variant={'outline'}>22 - Anos</Badge>

          <Badge variant={'outline'}>IFSP</Badge>
        </div>
        <div className="flex flex-col max-w-screen-sm">
          <h1 className="font-bold text-3xl">Gustavo Dos Santos Zuckert</h1>

          <p className="mt-1 font-bold">Fullstack Developer</p>

          <p className="mt-1 mb-1 text-sm">
            Desenvolvedor Web com seis meses de experiência no mercado.
            Atualmente trabalho como Analista de Suporte e DBA pela Bten,
            entretanto busco uma oportunidade de voltar para o mercado de
            desenvolvimento.
          </p>
        </div>
      </header>
      <section className="mt-4 max-w-screen-sm mr-4">
        <div>
          <p className="font-bold">💼 Experiencias profissionais</p>
          <Card
            company="Bten"
            date="Oct 17, 2022 - Atualmente"
            title="Analista de Suporte e DBA"
            location="Remoto"
            image="/BtenIcon.jpg"
            fallbackImage="BtenIcon.jpg"
          />
          <Card
            company="DevHatt"
            date="Nov 22, 2023 - Atualmente"
            title="Desenvolvedor Web"
            location="Remoto"
            image="/Devhat.jpg"
            fallbackImage="DevHat.jpg"
          />
          <Card
            company="Corelab"
            date="Fev 28, 2022 - 01 Jul 2022"
            title="Desenvolvedor Web -  Treinee"
            location="Remoto"
            image="/Corelab.jpg"
            fallbackImage="Corelab.jpg"
          />
        </div>
      </section>
    </div>
  )
}
