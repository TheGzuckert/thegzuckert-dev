import { Badge } from '@/components/ui/badge'
import React from 'react'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

interface CardProps {
  company: string
  title: string
  location: string
  date: string
  image?: string
  fallbackImage?: string
}

export const Card = ({
  location,
  company,
  title,
  date,
  image,
  fallbackImage,
}: CardProps) => {
  return (
    <div className="cursor-pointer mb-2 rounded-sm bg-card/25 text-foreground hover:bg-secondary/50 border p-4 backdrop-brightness-110 transition-all duration-150 dark:shadow-black/15 flex items-start">
      <span className="mr-4">
        <Avatar className="mb-2 flex flex-shrink-0 rounded-xl">
          <AvatarImage src={image} alt={company}></AvatarImage>
          <AvatarFallback>{fallbackImage}</AvatarFallback>
        </Avatar>
      </span>
      <div className="flex-col justify-between flex-grow">
        <div className="flex justify-between items-center">
          <Badge className="bg-violet-500" variant={'default'}>
            {company}
          </Badge>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">{title}</p>
          <h2 className="text-xs text-gray-400">{location}</h2>
        </div>
      </div>
    </div>
  )
}

export default Card
