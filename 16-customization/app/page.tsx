export default function Home() {
  return (
    // <div  className="bg-black sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800 xl:bg-purple-800 2xl:bg-orange-800">
    <>
      <div className="bg-black sm:bg-green-900 md:bg-red-900 lg:bg-yellow-800 xl:bg-lime-600 2xl:bg-cyan-900 w-full h-screen">
        <h1 className="text-secondary w-[30rem] h-[7rem] text-xl border border-sky-400 rounded-4xl m-auto p-4">
          Changing Background color with respect to screen
        </h1>
      </div>
    </>

    // </div>
  );
}

// <!-- Breakpoint Classes
//     sm	640px	  @media (min-width: 640px) { ... }
//     md	768px	  @media (min-width: 768px) { ... }
//     lg	1024px	@media (min-width: 1024px) { ... }
//     xl	1280px	@media (min-width: 1280px) { ... }
//     2xl	1536px	@media (min-width: 1536px) { ... }
//   -->
