import React from 'react'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Tecnologia } from '@/mocks/tecnologias'

export function CardTec(props: Tecnologia) {
  return (
    <div className="cursor-pointer mb-2 rounded-sm bg-card/25 text-foreground hover:bg-secondary/50 border p-7 mr-2 backdrop-brightness-110 transition-all duration-150 dark:shadow-black/15 flex items-start">
      <span className="mr-4">
        <Avatar className=" rounded-xl">
          <AvatarImage src={props.image}></AvatarImage>
          <AvatarFallback>{props.fallbackImage}</AvatarFallback>
        </Avatar>
        <div className="">
          <p className="mt-2 text-sm flex-col gap-1">{props.name}</p>
        </div>
      </span>
    </div>
  )
}
