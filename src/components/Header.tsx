'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export function Header() {
  const pathname = usePathname()
  const router = useRouter()

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  return (
    <header className="flex items-center justify-between px-6 py-6 md:py-0 md:pl-10 md:pr-0 xl:pt-10">
      <Link href="/">
        <Image
          src={'/icon.png'}
          width={40}
          height={40}
          alt="Space app"
          className="md:h-12 md:w-12"
        />
      </Link>

      <button
        className="z-[2] flex items-center md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? (
          <X size={32} className="stroke-secondary" />
        ) : (
          <Menu size={32} className="stroke-secondary" />
        )}
      </button>

      <div className="relative hidden gap-10 bg-white/5 px-12 backdrop-blur-2xl md:flex xl:w-[60%] xl:px-32">
        <div className="absolute left-[-45%] top-1/2 hidden w-1/2 border-b-[1px] border-white/25 xl:flex" />

        <button
          className={`box-border h-24 ${
            pathname === '/' ? `border-b-2 border-white` : `pb-[2px]`
          } font-sans-condensed text-sm tracking-[0.14763rem] hover:border-b-2 hover:border-white/50 hover:pb-0`}
          onClick={() => router.push('/')}
        >
          HOME
        </button>
        <button
          className={`box-border h-24 ${
            pathname === '/destination' ? `border-b-2 border-white` : `pb-[2px]`
          } font-sans-condensed text-sm tracking-[0.14763rem] hover:border-b-2 hover:border-white/50 hover:pb-0`}
          onClick={() => router.push('/destination')}
        >
          DESTINATION
        </button>
        <button
          className={`box-border h-24 ${
            pathname === '/crew' ? `border-b-2 border-white` : `pb-[2px]`
          } font-sans-condensed text-sm tracking-[0.14763rem] hover:border-b-2 hover:border-white/50 hover:pb-0`}
          onClick={() => router.push('/crew')}
        >
          CREW
        </button>
        <button
          className={`box-border h-24 ${
            pathname === '/technology' ? `border-b-2 border-white` : `pb-[2px]`
          } font-sans-condensed text-sm tracking-[0.14763rem] hover:border-b-2 hover:border-white/50 hover:pb-0`}
          onClick={() => router.push('/technology')}
        >
          TECHNOLOGY
        </button>
      </div>

      {showMobileMenu && (
        <div className="fixed right-0 top-0 z-[1] flex min-h-screen w-60 animate-overlay-show flex-col gap-8 bg-white/5 pl-8 pt-28 backdrop-blur-2xl">
          <span
            className="flex gap-2 font-sans-condensed tracking-[0.16875rem]"
            onClick={() => router.push('/')}
          >
            <strong className="w-5">00</strong> HOME
          </span>
          <span
            className="flex gap-2 font-sans-condensed tracking-[0.16875rem]"
            onClick={() => router.push('/destination')}
          >
            <strong className="w-5">01</strong> DESTINATION
          </span>
          <span
            className="flex gap-2 font-sans-condensed tracking-[0.16875rem]"
            onClick={() => router.push('/crew')}
          >
            <strong className="w-5">02</strong> CREW
          </span>
          <span
            className="flex gap-2 font-sans-condensed tracking-[0.16875rem]"
            onClick={() => router.push('/technology')}
          >
            <strong className="w-5">03</strong> TECHNOLOGY
          </span>
        </div>
      )}
    </header>
  )
}
