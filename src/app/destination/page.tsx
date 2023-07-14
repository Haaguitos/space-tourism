'use client'

import { destinations } from '@/mocks/data'
import Image from 'next/image'
import { useState } from 'react'

export default function Destination() {
  const [selectectedDestination, setSelectedDestination] = useState(
    destinations[0],
  )

  return (
    <main className="flex flex-col items-center px-6 pb-8 md:px-10 md:py-10 xl:mx-auto xl:grid xl:max-w-[90rem] xl:grid-cols-2 xl:gap-40 xl:px-40 xl:py-20">
      <div className="flex w-full flex-col gap-8 md:gap-14 xl:gap-24">
        <h1 className="flex gap-4 font-sans-condensed tracking-[0.16875rem] md:self-start md:text-xl xl:text-2xl">
          <b className="opacity-25">01</b> PICK YOUR DESTINATION
        </h1>

        <Image
          src={selectectedDestination.image}
          width="170"
          height="170"
          alt="Image"
          className="self-center md:h-72 md:w-72 xl:h-96 xl:w-96"
        />
      </div>

      <div className="mt-auto flex flex-col items-center xl:items-start">
        <div className="mt-6 flex gap-6 md:mt-14 xl:mt-0">
          {destinations.map((destination) => {
            return (
              <span
                key={destination.name}
                className={`${
                  selectectedDestination.name === destination.name
                    ? 'border-b-2'
                    : 'pb-2 text-secondary'
                } h-9 font-sans-condensed text-sm uppercase tracking-[0.14763rem] hover:border-b-2 hover:border-secondary md:text-base md:tracking-[0.16875rem]`}
                onClick={() => setSelectedDestination(destination)}
              >
                {destination.name}
              </span>
            )
          })}
        </div>

        <h2 className="mt-5 font-alt text-6xl uppercase md:mt-8 md:text-7xl xl:text-8xl">
          {selectectedDestination.name}
        </h2>

        <p className="line-clamp-4 text-center text-secondary md:max-w-xl xl:max-w-md xl:text-left xl:text-lg">
          {selectectedDestination.description}
        </p>

        <hr className="my-8 flex w-full opacity-25 md:mb-7 md:mt-12 md:max-w-xl xl:max-w-md" />

        <div className="flex flex-col gap-8 text-center md:flex-row md:gap-20 xl:text-left">
          <div className="flex flex-col gap-3">
            <span className="font-sans-condensed text-sm tracking-[0.14763rem] text-secondary">
              AVG. DISTANCE
            </span>
            <span className="font-alt text-2xl uppercase">
              {selectectedDestination.distance}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-sans-condensed text-sm tracking-[0.14763rem] text-secondary">
              EST. TRAVEL TIME
            </span>
            <span className="font-alt text-2xl uppercase">
              {selectectedDestination.travel}
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
