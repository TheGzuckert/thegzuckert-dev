import React from 'react'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Tecnologia } from '@/mocks/tecnologias'

export function CardTec(props: Tecnologia) {
  return (
    <div className="cursor-pointer mb-2 rounded-sm bg-card/25 text-foreground hover:bg-secondary/50 border p-4 sm:p-7 mr-2 backdrop-brightness-110 transition-all duration-150 dark:shadow-black/15">
      <div className="flex flex-col items-center sm:items-start">
        <Avatar className="rounded-xl w-12 h-12 sm:w-16 sm:h-16">
          <AvatarImage src={props.image}></AvatarImage>
          <AvatarFallback>{props.fallbackImage}</AvatarFallback>
        </Avatar>
        <p className="mt-2 text-sm text-center sm:text-left">{props.name}</p>
      </div>
    </div>
  )
}
