import React from 'react'
import { Projec } from '@/mocks/projects'
import Link from 'next/link'
import Image from 'next/image'

export function CardProjects(props: Projec) {
  return (
    <div className="cursor-pointer mb-2 rounded-sm bg-card/25 text-foreground hover:bg-secondary/50 border p-7 mr-2 backdrop-brightness-110 transition-all duration-150 dark:shadow-black/15 flex items-start">
      <span className="mr-4">
        <Link href={props.link}>
          <Image
            src={props.image ?? ''}
            alt={props.fallbackImage ?? ''}
            width={100}
            height={100}
            className="rounded-xl"
          />
          <div className="">
            <p className="mt-10 text-sm flex-col gap-1">{props.title}</p>
          </div>
        </Link>
      </span>
    </div>
  )
}

export default CardProjects
