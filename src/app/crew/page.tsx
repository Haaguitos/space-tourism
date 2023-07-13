'use client'

import { crew } from '@/mocks/data'
import Image from 'next/image'
import { useState } from 'react'

export default function Crew() {
  const [selectedMember, setSelectedMember] = useState(crew[0])

  return (
    <main className="flex flex-col items-center px-6 pb-8 md:px-10 md:pb-0 md:pt-10 xl:mx-auto xl:grid xl:max-w-[90rem] xl:grid-cols-2 xl:items-stretch xl:gap-8 xl:px-40 xl:pt-20">
      <div className="flex w-full flex-col gap-16 xl:justify-between xl:pb-24">
        <h1 className="flex gap-4 font-sans-condensed tracking-[0.16875rem] md:self-start md:text-xl xl:text-2xl">
          <b className="opacity-25">02</b> MEET YOUR CREW
        </h1>

        <div className="flex flex-col md:flex-col-reverse">
          <div className="my-8 flex w-full flex-col items-center md:mb-0 md:mt-10 xl:hidden">
            <Image
              src={selectedMember.image}
              height="720"
              alt="Image"
              className="h-56 w-auto animate-overlay-show md:h-[35rem]"
            />
            <hr className="flex w-full opacity-25 md:hidden" />
          </div>

          <div className="flex flex-col items-center gap-8 md:flex-col-reverse xl:items-start xl:gap-32">
            <div className="flex flex-row gap-4">
              {crew.map((member, index) => {
                return (
                  <span
                    key={member.name}
                    onClick={() => setSelectedMember(crew[index])}
                    className={`${
                      selectedMember.name === member.name
                        ? `bg-white`
                        : `bg-white/10`
                    } flex h-3 w-3 rounded-full md:hover:bg-white/25`}
                  />
                )
              })}
            </div>

            <div className="flex flex-col items-center gap-2 xl:items-start">
              <h3 className="font-alt uppercase opacity-50 md:text-2xl">
                {selectedMember.role}
              </h3>

              <h2 className="font-alt text-2xl uppercase md:text-4xl">
                {selectedMember.name}
              </h2>

              <p className="mt-2 line-clamp-3 text-center text-secondary md:max-w-xl xl:line-clamp-none xl:max-w-md xl:text-left">
                {selectedMember.bio}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={selectedMember.image}
        height="720"
        alt="Image"
        className="hidden h-[45rem] w-auto animate-overlay-show xl:flex"
      />
    </main>
  )
}
