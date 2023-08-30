'use client'

// eslint-disable-next-line camelcase
import { Bellefair, Barlow_Condensed, Barlow } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

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
      return `bg-destination-mobile md:bg-destination-tablet xl:bg-destination-desktop`
    else if (pathname === '/crew')
      return `bg-crew-mobile md:bg-crew-tablet xl:bg-crew-desktop`
    else if (pathname === '/technology')
      return `bg-technology-mobile md:bg-technology-tablet xl:bg-technology-desktop`
    else return `bg-home-mobile md:bg-home-tablet xl:bg-home-desktop`
  }

  return (
    <body
      className={twMerge(
        returnBackground(),
        `${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable} min-h-screen bg-cover bg-no-repeat font-sans text-gray-100 xl:overflow-hidden`,
      )}
    >
      {children}
    </body>
  )
}
