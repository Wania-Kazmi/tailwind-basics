import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <!-- Border Width & Colors --> */}
      <h2 className="font-bold m-4">Border Width and colors</h2>
      <div className="w-96 m-6 p-2 border">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, fuga
        assumenda architecto odio dolor iusto molestias aut voluptatem
        laudantium ipsum.
      </div>
      <div className="w-96 m-6 p-2 border-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, fuga
        assumenda architecto odio dolor iusto molestias aut voluptatem
        laudantium ipsum.
      </div>
      <div className="w-96 m-6 p-2 border-4 border-blue-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, fuga
        assumenda architecto odio dolor iusto molestias aut voluptatem
        laudantium ipsum.
      </div>
      <div className="w-96 m-6 p-2 border-x-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, fuga
        assumenda architecto odio dolor iusto molestias aut voluptatem
        laudantium ipsum.
      </div>
      <div className="w-96 m-6 p-2 border-y-4 border-orange-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, fuga
        assumenda architecto odio dolor iusto molestias aut voluptatem
        laudantium ipsum.
      </div>
      <div className="w-96 m-6 p-2 border-t-4 border-green-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, fuga
        assumenda architecto odio dolor iusto molestias aut voluptatem
        laudantium ipsum.
      </div>
      <div className="w-96 m-6 p-2 border-b-4 border-green-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, fuga
        assumenda architecto odio dolor iusto molestias aut voluptatem
        laudantium ipsum.
      </div>
      <div className="w-96 m-6 p-2 border-r-4 border-green-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, fuga
        assumenda architecto odio dolor iusto molestias aut voluptatem
        laudantium ipsum.
      </div>
      <div className="w-96 m-6 p-2 border-l-4 border-green-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, fuga
        assumenda architecto odio dolor iusto molestias aut voluptatem
        laudantium ipsum.
      </div>

      {/* <!-- Border Radius --> */}
      <h2 className="font-bold m-4">Border Radius</h2>
      <div className="w-96 m-6 p-2 border-4 border-purple-400 rounded">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt
        dolore similique, temporibus neque tempora? Recusandae architecto
        aspernatur tempora blanditiis.
      </div>
      <div className="w-96 m-6 p-2 border-4 border-purple-400 rounded-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt
        dolore similique, temporibus neque tempora? Recusandae architecto
        aspernatur tempora blanditiis.
      </div>
      <div className="w-96 m-6 p-2 border-4 border-purple-400 rounded-md">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt
        dolore similique, temporibus neque tempora? Recusandae architecto
        aspernatur tempora blanditiis.
      </div>
      <div className="w-96 m-6 p-2 border-4 border-purple-400 rounded-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt
        dolore similique, temporibus neque tempora? Recusandae architecto
        aspernatur tempora blanditiis.
      </div>
      <div className="w-96 m-6 p-2 border-4 border-purple-400 rounded-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt
        dolore similique, temporibus neque tempora? Recusandae architecto
        aspernatur tempora blanditiis.
      </div>
      <div className="w-96 m-6 p-2 border-4 border-purple-400 rounded-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt
        dolore similique, temporibus neque tempora? Recusandae architecto
        aspernatur tempora blanditiis.
      </div>
      <div className="w-96 m-6 p-6 border-4 border-purple-400 rounded-full">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt
        dolore similique, temporibus neque tempora? Recusandae architecto
        aspernatur tempora blanditiis.
      </div>

      <h2 className="font-bold m-4">Border Top and bottom rounded</h2>
      
      <div className="w-96 m-6 p-6 border-4 border-rose-400 rounded-t-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt
        dolore similique, temporibus neque tempora? Recusandae architecto
        aspernatur tempora blanditiis.
      </div>
      <div className="w-96 m-6 p-6 border-4 border-rose-400 rounded-b-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt
        dolore similique, temporibus neque tempora? Recusandae architecto
        aspernatur tempora blanditiis.
      </div>

      {/* <!-- Outline --> */}
      <h2 className="font-bold m-4">Outline</h2>
      <button className="m-4 outline outline-4 outline-red-500">Click me</button>

      {/* offset push outward the outline from the text - more like padding */}
      <p>offset push outward the outline from the text - more like padding </p>
      <button className="m-4 outline outline-4 outline-offset-4 outline-red-500">Click me</button>
    </div>
  );
}

// <!-- Border Widths
//       border-0	    border-width: 0px;
//       border-2	    border-width: 2px;
//       border-4	    border-width: 4px;
//       border-8	    border-width: 8px;
//       border	      border-width: 1px;
//       border-x-0	  border-left-width: 0px;
//                     border-right-width: 0px;
//       border-x-2	  border-left-width: 2px;
//                     border-right-width: 2px;
//       border-x-4    border-left-width: 4px;
//                     border-right-width: 4px;
//       border-x-8	  border-left-width: 8px;
//                     border-right-width: 8px;
//       border-x	    border-left-width: 1px;
//                     border-right-width: 1px;
//       border-y-0  	border-top-width: 0px;
//                     border-bottom-width: 0px;
//       border-y-2	  border-top-width: 2px;
//                     border-bottom-width: 2px;
//       border-y-4	  border-top-width: 4px;
//                     border-bottom-width: 4px;
//       border-y-8	  border-top-width: 8px;
//                     border-bottom-width: 8px;
//       border-y	    border-top-width: 1px;
//                     border-bottom-width: 1px;
//       border-t-0	  border-top-width: 0px;
//       border-t-2	  border-top-width: 2px;
//       border-t-4	  border-top-width: 4px;
//       border-t-8	  border-top-width: 8px;
//       border-t	    border-top-width: 1px;
//       border-r-0	  border-right-width: 0px;
//       border-r-2	  border-right-width: 2px;
//       border-r-4	  border-right-width: 4px;
//       border-r-8	  border-right-width: 8px;
//       border-r	    border-right-width: 1px;
//       border-b-0	  border-bottom-width: 0px;
//       border-b-2	  border-bottom-width: 2px;
//       border-b-4	  border-bottom-width: 4px;
//       border-b-8	  border-bottom-width: 8px;
//       border-b	    border-bottom-width: 1px;
//       border-l-0	  border-left-width: 0px;
//       border-l-2	  border-left-width: 2px;
//       border-l-4	  border-left-width: 4px;
//       border-l-8	  border-left-width: 8px;
//       border-l	    border-left-width: 1px;
//     -->

// <!-- Border Radius
//       rounded-none	    border-radius: 0px;
//       rounded-sm	      border-radius: 0.125rem; /* 2px */
//       rounded	          border-radius: 0.25rem; /* 4px */
//       rounded-md	      border-radius: 0.375rem; /* 6px */
//       rounded-lg	      border-radius: 0.5rem; /* 8px */
//       rounded-xl	      border-radius: 0.75rem; /* 12px */
//       rounded-2xl	      border-radius: 1rem; /* 16px */
//       rounded-3xl	      border-radius: 1.5rem; /* 24px */
//       rounded-full	    border-radius: 9999px;
//      -->

// <!-- Outline
//       outline-0	outline-width: 0px;
//       outline-1	outline-width: 1px;
//       outline-2	outline-width: 2px;
//       outline-4	outline-width: 4px;
//       outline-8	outline-width: 8px;
//   -->
