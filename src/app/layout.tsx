import type { Metadata } from 'next'
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  weight: ['400', '600', '700', '800'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['500'],
})

export const metadata: Metadata = {
  title: 'Gustavo Zuckert - Fullstack Developer',
  description: 'Portfólio de Gustavo Zuckert',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="dark" suppressHydrationWarning>
      <body
        className={`${hanken.variable} ${jetbrains.variable} font-sans overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
