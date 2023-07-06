export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-4 text-center px-6 pt-16 mb-20">
        <h2 className="text-secondary tracking-[0.16875rem] font-sans-condensed">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="text-white text-7xl font-alt">SPACE</h1>

        <h3 className="text-secondary text-[0.9375rem] leading-6">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </h3>
      </div>

      <div className="flex items-center justify-center">
        <button className="w-40 h-40 bg-white rounded-full text-primary font-alt text-xl">
          EXPLORE
        </button>
      </div>
    </main>
  )
}
