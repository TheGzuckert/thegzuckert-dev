import { Badge } from '@/components/ui/badge'
import React from 'react'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Trabalho } from '@/mocks/trabalhos'

export function Card(props: Trabalho) {
  return (
    <div className="cursor-pointer mb-2 rounded-sm bg-card/25 text-foreground hover:bg-secondary/50 border p-4 backdrop-brightness-110 transition-all duration-150 dark:shadow-black/15 flex items-start">
      <span className="mr-4">
        <Avatar className="mb-2 flex flex-shrink-0 rounded-xl">
          <AvatarImage src={props.image} alt={props.company}></AvatarImage>
          <AvatarFallback>{props.fallbackImage}</AvatarFallback>
        </Avatar>
      </span>
      <div className="justify-between flex-grow">
        <div className=" flex justify-between items-center">
          <Badge className="bg-violet-500 whitespace-nowrap" variant={'default'}>
            {props.company}
          </Badge>
          <p className="text-sm text-gray-400 ml-4">{props.date}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">{props.title}</p>
          <h2 className="text-sm text-gray-400">{props.location}</h2>
        </div>
      </div>
    </div>
  )
}

export default Card
