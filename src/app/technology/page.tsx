'use client'

import { technology } from '@/mocks/data'
import Image from 'next/image'
import { useState } from 'react'

export default function Crew() {
  const [selectedTech, setSelectedTech] = useState(technology[0])

  return (
    <main className="flex flex-col items-center gap-8 pb-8 md:gap-14 md:py-10 xl:mx-auto xl:max-w-[90rem] xl:gap-6 xl:py-20 xl:pl-40">
      <h1 className="flex gap-4 font-sans-condensed tracking-[0.16875rem] md:self-start md:px-8 md:text-xl xl:px-0 xl:text-2xl">
        <b className="opacity-25">03</b> SPACE LAUNCH 101
      </h1>

      <div className="flex w-full flex-col gap-8 md:gap-14 xl:flex-row-reverse xl:justify-between xl:gap-40">
        <Image
          src={selectedTech.images.landscape}
          height="512"
          alt="Image"
          className="h-40 w-full animate-overlay-show object-cover md:h-80 xl:hidden"
        />
        <Image
          src={selectedTech.images.portrait}
          height="512"
          width="512"
          alt="Image"
          className="hidden h-[32rem] w-[32rem] min-w-[32rem] animate-overlay-show object-cover xl:flex"
        />

        <div className="flex flex-col items-center gap-12 md:pb-24 xl:mt-28 xl:h-fit xl:flex-row xl:items-start xl:gap-20 xl:pb-0">
          <div className="flex gap-4 xl:flex-col xl:gap-8">
            {technology.map((tech, index) => {
              return (
                <button
                  className={`${
                    tech.name === selectedTech.name && `bg-white text-primary`
                  } h-10 w-10 rounded-full border-[1px] border-white/25 font-alt md:h-16 md:w-16 md:text-2xl md:hover:border-white xl:h-20 xl:w-20 xl:text-3xl`}
                  key={tech.name}
                  onClick={() => setSelectedTech(tech)}
                >
                  {index + 1}
                </button>
              )
            })}
          </div>

          <div className="flex flex-col items-center gap-2 md:gap-4 xl:max-w-[30rem] xl:items-start">
            <h3 className="font-sans-condensed text-sm uppercase tracking-[0.14763rem] text-secondary">
              THE TERMINOLOGY…
            </h3>

            <h2 className="font-alt text-2xl uppercase md:text-4xl xl:text-6xl">
              {selectedTech.name}
            </h2>

            <p className="mt-2 max-w-sm px-6 text-center text-secondary md:mt-0 xl:px-0 xl:text-left xl:text-lg">
              {selectedTech.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
