
export default function Home(){
  return(
    <div>
       {/* <!-- Default colors --> */}
    {/* <!-- white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, zinc, neutral, stone, amber,  --> */}
      
    {/* <!-- Text Colors --> */} 
    {/* For black and white color, we have no 50, 500, 600  */}
    <h2 className="text-black">Learning Tailwind CSS - 9 Feb 2023</h2>
    <p className="text-white">Learning Tailwind CSS - Text Color Property</p>
    <p className="text-red-500">Learning Tailwind CSS - Text Color Property</p>
    <p className="text-emerald-500">Learning Tailwind CSS - Text Color Property</p>
    <p className="text-zinc-500">Learning Tailwind CSS - Text Color Property</p>
    <p className="text-slate-500">Learning Tailwind CSS - Text Color Property</p>
    

    {/* <!-- Background Colors --> */}
    <p className="bg-slate-800">Learning Tailwind CSS - Background Color</p>
    <p className="bg-emerald-800">Learning Tailwind CSS - Background Color</p>
    <p className="bg-red-800 text-white">Learning Tailwind CSS - Background Color</p>


    {/* <!-- Text Underline --> */}
    {/* By default underline color is black  */}
    <p className="underline decoration-red-500">Underline Text</p>
    <p className="underline decoration-green-500">Underline Text</p>
    <p className="underline decoration-blue-500">Underline Text</p>


    {/* <!-- Border Colors --> */}
    <input type="text" className="border border-red-500" />
    <input type="text" className="border border-green-500" />
    <input type="text" className="border border-orange-500" />


    {/* <!-- Divide Colors --> */}
    <div className="divide-y divide-blue-300">
      <div>items1</div>
      <div>items2</div>
      <div>items3</div>
      <div>items4</div>
      <div>items5</div>
    </div>


    {/* <!-- Outline Colors --> */}
    <button className="outline outline-red-300">Click me</button> <br />
    <button className="outline outline-green-300">Click me</button> <br />
    <button className="outline outline-cyan-300 my-2">Click me</button>
    <p></p>


    {/* <!-- Box Shadow Colors (Opacity defaults to 100, but you can set it)--> */}
    {/* To have shadow we have shadow size, shadow background and shadow Color */}
    <button className="shadow-lg bg-purple-500 shadow-purple-400">Subscribe</button>
    <button className="shadow-lg bg-cyan-500 shadow-cyan-400/50">Subscribe</button>



    {/* <!-- Accent Colors --> */}
    We can use these on checkboxes, which looks nice
    <input type="checkbox" className="accent-purple-500" checked />
    <input type="checkbox" className="accent-cyan-500" checked />



    {/* <!-- Arbitrary Colors --> */}
    {/* We can do arbitrary colors and arbitrary size. Basically we can insert any value we want. */}
    <div className="bg-[#427fab]">Arbitrary Color</div>
    <div className="bg-[rgb(255,0,0)]">Arbitrary Color</div>
    <div className="bg-[steelblue]">Arbitrary Color</div>


    </div>
  )
}