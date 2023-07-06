import { ReactNode } from 'react'
import './globals.css'
// eslint-disable-next-line camelcase
import { Bellefair, Barlow_Condensed, Barlow } from 'next/font/google'
import { Header } from '@/components/Header'

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
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable} font-sans text-gray-100 min-h-screen bg-home-mobile bg-no-repeat bg-cover `}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
