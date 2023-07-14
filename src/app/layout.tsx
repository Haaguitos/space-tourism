'use client'

import { ReactNode } from 'react'
import './globals.css'
// eslint-disable-next-line camelcase
import { Bellefair, Barlow_Condensed, Barlow } from 'next/font/google'
import { Header } from '@/components/Header'
import { usePathname } from 'next/navigation'

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bellefair',
})
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-barlow-condensed',
})
const barlow = Barlow({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-barlow',
})

export const metadata = {
  title: 'Space Tourism',
  description:
    'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  console.log('pathname', pathname)

  const returnBackground = () => {
    if (pathname === '/destination')
      return `${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable} min-h-screen bg-destination-mobile bg-cover bg-no-repeat font-sans text-gray-100 md:bg-destination-tablet xl:bg-destination-desktop`
    else if (pathname === '/crew')
      return `${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable} min-h-screen bg-crew-mobile bg-cover bg-no-repeat font-sans text-gray-100 md:bg-crew-tablet xl:bg-crew-desktop`
    else if (pathname === '/technology')
      return `${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable} min-h-screen bg-technology-mobile bg-cover bg-no-repeat font-sans text-gray-100 md:bg-technology-tablet xl:bg-technology-desktop`
    else
      return `${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable} min-h-screen bg-home-mobile bg-cover bg-no-repeat font-sans text-gray-100 md:bg-home-tablet xl:bg-home-desktop`
  }

  return (
    <html lang="en">
      <body className={returnBackground()}>
        <Header />
        {children}
      </body>
    </html>
  )
}
