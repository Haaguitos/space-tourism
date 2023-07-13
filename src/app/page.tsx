import { ExploreButton } from '@/components/ExploreButton'

export default function Home() {
  return (
    <main className="flex flex-col md:mt-[15vh] md:pb-16 xl:mx-auto xl:max-w-[90rem] xl:flex-row xl:justify-between xl:px-40 xl:pb-32">
      <div className="mb-20 flex flex-col items-center gap-4 px-6 pt-16 text-center md:mb-40 md:pt-24 xl:mb-0 xl:items-start xl:px-0 xl:text-left">
        <h2 className="font-sans-condensed tracking-[0.16875rem] text-secondary md:text-xl xl:text-2xl">
          SO, YOU WANT TO TRAVEL TO
        </h2>

        <h1 className="font-alt text-7xl text-white md:text-[9.375rem]">
          SPACE
        </h1>

        <h3 className="max-w-[27.75rem] text-[0.9375rem] leading-6 text-secondary md:text-base md:leading-7 xl:text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </h3>
      </div>

      <div className="flex items-center justify-center xl:items-end">
        <ExploreButton />
      </div>
    </main>
  )
}
