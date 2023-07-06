'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  return (
    <header className="flex items-center justify-between px-6 py-6">
      <Image src={'/icon.png'} width={40} height={40} alt="Space app" />

      <button
        className="flex z-10 items-center md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? (
          <X size={32} className="stroke-secondary" />
        ) : (
          <Menu size={32} className="stroke-secondary" />
        )}
      </button>

      {showMobileMenu && (
        <div className="animate-overlay-show fixed flex flex-col pt-28 pl-8 gap-8 bg-white/5 backdrop-blur-2xl min-h-screen top-0 right-0 w-60 ">
          <span className="flex gap-2 font-sans-condensed tracking-[0.16875rem]">
            <strong className="w-5">00</strong> HOME
          </span>
          <span className="flex gap-2 font-sans-condensed tracking-[0.16875rem]">
            <strong className="w-5">01</strong> DESTINATION
          </span>
          <span className="flex gap-2 font-sans-condensed tracking-[0.16875rem]">
            <strong className="w-5">02</strong> CREW
          </span>
          <span className="flex gap-2 font-sans-condensed tracking-[0.16875rem]">
            <strong className="w-5">03</strong> TECHNOLOGY
          </span>
        </div>
      )}
    </header>
  )
}
