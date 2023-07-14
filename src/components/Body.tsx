'use client'

// eslint-disable-next-line camelcase
import { Bellefair, Barlow_Condensed, Barlow } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

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

export function Body({ children }: { children: ReactNode }) {
  const pathname = usePathname()

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

  return <body className={returnBackground()}>{children}</body>
}
