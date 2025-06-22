import React from 'react'
import { Avatar } from '../ui/avatar'
import { Social } from '@/mocks/social'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import Link from 'next/link'

export function CardSocial(props: Social) {
  return (
    <div className="cursor-pointer mb-2 rounded-sm bg-card/25 text-foreground hover:bg-secondary/50 border p-4 sm:p-7 mr-2 backdrop-brightness-110 transition-all duration-150 dark:shadow-black/15">
      <Link
        href={props.link}
        className="flex flex-col items-center sm:items-start"
      >
        <Avatar className="rounded-xl w-12 h-12 sm:w-16 sm:h-16">
          <AvatarImage src={props.image}></AvatarImage>
          <AvatarFallback>{props.fallbackImage}</AvatarFallback>
        </Avatar>
        <p className="mt-2 text-sm text-center sm:text-left">{props.title}</p>
      </Link>
    </div>
  )
}

export default CardSocial
