import { Badge } from '@/components/ui/badge'
import React from 'react'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

interface CardProps {
  name: string
  title: string
  image?: string
  fallbackImage: string
}

export default function CardTec({ name, image, fallbackImage }: CardProps) {
  return (
    <div className="cursor-pointer mt-2 rounded-sm bg-card/25 text-foreground hover:bg-secondary/50 border p-4 backdrop-brightness-110 transition-all duration-150 dark:shadow-black/15 flex items-start">
      <span className="mr-4">
        <Avatar className=" flex flex-shrink-0 rounded-xl">
          <AvatarImage src={image} alt={name}></AvatarImage>
          <AvatarFallback>{fallbackImage}</AvatarFallback>
        </Avatar>
      </span>
      <div className="flex flex-col justify-between flex-grow">
        <div className="flex justify-between items-center mb-2">
          <Badge className="bg-violet-500" variant={'default'}>
            {name}
          </Badge>
        </div>
      </div>
    </div>
  )
}
