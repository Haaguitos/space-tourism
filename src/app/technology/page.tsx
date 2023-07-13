'use client'

import { technology } from '@/mocks/data'
import Image from 'next/image'
import { useState } from 'react'

export default function Crew() {
  const [selectedTech, setSelectedTech] = useState(technology[0])

  return (
    <main className="flex flex-col items-center pb-8 md:px-10 md:py-10 xl:mx-auto xl:grid xl:max-w-[90rem] xl:grid-cols-2 xl:gap-40 xl:px-40 xl:py-20">
      <h1 className="flex gap-4 font-sans-condensed tracking-[0.16875rem] md:self-start md:text-xl xl:text-2xl">
        <b className="opacity-25">03</b> SPACE LAUNCH 101
      </h1>

      <Image
        src={selectedTech.images.landscape}
        height="160"
        alt="Image"
        className="h-40 w-full animate-overlay-show md:h-72 md:w-72 xl:h-96 xl:w-96 xl:self-center"
      />
    </main>
  )
}
