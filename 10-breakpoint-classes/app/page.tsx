export default function Home() {

  return (
    <div>
      {/* <!-- Tailwind is mobile-first --> */}
      <div className="bg-black sm:bg-green-900 md:bg-red-900 lg:bg-yellow-800  xl:bg-lime-600 2xl:bg-cyan-900 w-full h-screen">
      <h1 className="text-white text-4xl">Changing Background color with respect to screen</h1>
      </div>
      


    </div>
  )
}

// <!-- Breakpoint Classes
//     sm	640px	  @media (min-width: 640px) { ... }
//     md	768px	  @media (min-width: 768px) { ... }
//     lg	1024px	@media (min-width: 1024px) { ... }
//     xl	1280px	@media (min-width: 1280px) { ... }
//     2xl	1536px	@media (min-width: 1536px) { ... }
//   -->