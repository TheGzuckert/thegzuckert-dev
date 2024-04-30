import React from 'react'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

interface CardSocialProps {
  title: string
  image?: string
  fallbackImage?: string
}

export const CardSocial = ({
  title,
  image,
  fallbackImage,
}: CardSocialProps) => {
  return (
    <div className="mb-2 md:flex cursor-pointer rounded-sm bg-card/25 text-foreground hover:bg-secondary/50 border p-4 backdrop-brightness-110 transition-all duration-150 dark:shadow-black/15 flex">
      <span className="mr-4">
        <Avatar className="mb-2 flex-shrink-0 rounded-xl">
          <AvatarImage src={image}></AvatarImage>
          <AvatarFallback>{fallbackImage}</AvatarFallback>
        </Avatar>
        <div className="">
          <p className="text-sm">{title}</p>
        </div>
      </span>
    </div>
  )
}

export default CardSocial
