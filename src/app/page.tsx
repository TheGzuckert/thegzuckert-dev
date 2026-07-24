'use client'

import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Experience } from '@/components/sections/experience'
import { Technologies } from '@/components/sections/technologies'
import { Socials } from '@/components/sections/socials'

export default function Home() {
  const [darkmode, setDarkmode] = useState(true)

  const toggleDarkMode = () => {
    setDarkmode((prev) => !prev)
  }

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkmode(prefersDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkmode)
  }, [darkmode])

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-container-max px-margin-mobile pb-section-gap pt-32 md:px-margin-desktop">
        <Hero darkmode={darkmode} onToggleDarkMode={toggleDarkMode} />

        <div className="mt-16 grid grid-cols-1 gap-gutter lg:grid-cols-12 md:mt-24">
          <Experience />
          <aside className="space-y-section-gap lg:col-span-4">
            <Technologies />
            <Socials />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
