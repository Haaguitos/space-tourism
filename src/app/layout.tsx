import { ReactNode } from 'react'
import './globals.css'
import { Header } from '@/components/Header'
import { Metadata } from 'next'
import { Body } from '@/components/Body'

export const metadata: Metadata = {
  title: 'Space Tourism',
  description:
    'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Body>
        <Header />
        {children}
      </Body>
    </html>
  )
}
