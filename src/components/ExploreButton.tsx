'use client'

import Link from 'next/link'

export function ExploreButton() {
  return (
    <Link
      href="/destination"
      className="group relative flex h-40 w-40 items-center justify-center rounded-full bg-white font-alt text-xl text-primary md:h-60 md:w-60 md:text-4xl"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-96 w-96 translate-x-[-50%] translate-y-[-50%] animate-overlay-show rounded-full bg-white/10 xl:group-hover:flex" />
      EXPLORE
    </Link>
  )
}
