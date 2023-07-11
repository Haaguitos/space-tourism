'use client'

import { useRouter } from 'next/navigation'

export function ExploreButton() {
  const router = useRouter()

  return (
    <button
      className="group relative h-40 w-40 rounded-full bg-white font-alt text-xl text-primary md:h-60 md:w-60 md:text-4xl"
      onClick={() => router.push('/destination')}
    >
      <div className="absolute left-1/2 top-1/2 z-[-1] hidden h-96 w-96 translate-x-[-50%] translate-y-[-50%] animate-overlay-show rounded-full bg-white/10 xl:group-hover:flex" />
      EXPLORE
    </button>
  )
}
