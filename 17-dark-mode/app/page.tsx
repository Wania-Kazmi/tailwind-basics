"use client";

export default function Home() {


  return (
    <div>
      <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow-xl">
        <h3 className="text-slate-900 dark:text-white font-medium tracking-tight">
          Lorem ipsum dolor sit amet.
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          maxime? Distinctio accusamus, atque ipsum laborum, molestiae
          temporibus perferendis omnis reprehenderit hic possimus quos ex
          ducimus incidunt facilis fuga dolore id unde sequi neque harum
          voluptate sed. Error, omnis enim! Maiores harum iure iste quos, magni
          illo debitis magnam asperiores corrupti!
        </p>
      </div>
      <div className="relative inline-block w-10 ml-12 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox" 
          name="toggle"
          id="toggle"
          className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`}
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>

    </div>
  );
}

// <!-- Credit for toggle button style
// https://tailwindcomponents.com/component/toggle-switch
//  -->
