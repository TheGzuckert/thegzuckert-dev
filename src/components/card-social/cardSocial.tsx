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
    // <div className="mb-2 cursor-pointer rounded-sm bg-card/25 text-foreground hover:bg-secondary/50 border p-4 mr-4 backdrop-brightness-110 transition-all duration-150 dark:shadow-black/15 flex">
    <div className="cursor-pointer mb-2 rounded-sm bg-card/25 text-foreground hover:bg-secondary/50 border p-6 mr-2 backdrop-brightness-110 transition-all duration-150 dark:shadow-black/15 flex items-start">
      <span className="mr-4">
        <Avatar className=" rounded-xl">
          <AvatarImage src={image}></AvatarImage>
          <AvatarFallback>{fallbackImage}</AvatarFallback>
        </Avatar>
        <div className="">
          <p className="mt-2 text-sm flex-col gap-1">{title}</p>
        </div>
      </span>
    </div>
  )
}

export default CardSocial
