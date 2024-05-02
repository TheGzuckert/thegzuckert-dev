import React from 'react'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

interface CardProps {
  name: string
  image?: string
  fallbackImage: string
}

export default function CardTec({ name, image, fallbackImage }: CardProps) {
  return (
    <div className="cursor-pointer mb-2 rounded-sm bg-card/25 text-foreground hover:bg-secondary/50 border p-7 mr-2 backdrop-brightness-110 transition-all duration-150 dark:shadow-black/15 flex items-start">
      <span className="mr-4">
        <Avatar className=" rounded-xl">
          <AvatarImage src={image}></AvatarImage>
          <AvatarFallback>{fallbackImage}</AvatarFallback>
        </Avatar>
        <div className="">
          <p className="mt-2 text-sm flex-col gap-1">{name}</p>
        </div>
      </span>
    </div>
  )
}
