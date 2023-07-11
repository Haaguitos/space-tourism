'use client'

import { Moon } from '@/assets'
import { useDestinationContext } from '@/context/destination'
import Image from 'next/image'

export default function Destination() {
  const { destination, setDestination } = useDestinationContext()

  return (
    <main className="flex flex-col items-center xl:mx-auto xl:max-w-[90rem] xl:flex-row xl:justify-between xl:px-40 xl:pb-32">
      <h2 className="mb-8 flex gap-4 font-sans-condensed tracking-[0.16875rem]">
        <b className="opacity-25">01</b> PICK YOUR DESTINATION
      </h2>

      <Image src={Moon} width="170" height="170" alt="Image" />

      <div className="mt-6 flex gap-6">
        <span
          className={`${
            destination === 'moon' ? 'border-b-2' : 'pb-2'
          } h-9 font-sans-condensed text-sm tracking-[0.14763rem] hover:border-b-2 hover:border-secondary`}
          onClick={() => setDestination('moon')}
        >
          MOON
        </span>
        <span
          className={`${
            destination === 'mars' ? 'border-b-2' : 'pb-2'
          } h-9 font-sans-condensed text-sm tracking-[0.14763rem] hover:border-b-2 hover:border-secondary`}
          onClick={() => setDestination('mars')}
        >
          MARS
        </span>
        <span
          className={`${
            destination === 'europa' ? 'border-b-2' : 'pb-2'
          } h-9 font-sans-condensed text-sm tracking-[0.14763rem] hover:border-b-2 hover:border-secondary`}
          onClick={() => setDestination('europa')}
        >
          EUROPA
        </span>
        <span
          className={`${
            destination === 'titan' ? 'border-b-2' : 'pb-2'
          } h-9 font-sans-condensed text-sm tracking-[0.14763rem] hover:border-b-2 hover:border-secondary`}
          onClick={() => setDestination('titan')}
        >
          TITAN
        </span>
      </div>

      <h1 className="mt-5 font-alt text-6xl uppercase">{destination}</h1>
    </main>
  )
}
