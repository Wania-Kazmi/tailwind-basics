import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <!-- Hover State Styling --> */}
      <button className="bg-black text-white m-3 py-3 px-5 rounded-lg hover:bg-orange-500 hover:text-white">
        Hover
      </button>

      {/* <!-- Focus State Styling --> */}
      <button className="bg-black text-white m-3 py-3 px-5 rounded-lg focus:bg-green-500 focus:text-white">
        Focus
      </button>

      {/* <!-- Active State Styling --> */}
      <button className="bg-black text-white m-3 py-3 px-5 rounded-lg active:bg-purple-500 active:text-white">
        Active
      </button>
      {/* <!-- Styling based on parent state --> */}
      <Link href={"#"} className="group block max-w-xs mx-auto rounded-lg p-6 bg-white shadow-lg space-y-3 hover:bg-sky-300">
        <h3 className="group-hover:text-white">Card Title</h3>
        <p className="group-hover:text-white">This is card text</p>
      </Link>

      {/* <!-- Pseudo Classes --> */}
      <ul>
        <li className="first:bg-red-500 even:bg-fuchsia-300 odd:bg-rose-200">Item 1</li>
        <li className="first:bg-red-300 even:bg-fuchsia-300 odd:bg-rose-200">Item 2</li>
        <li className="first:bg-red-300 even:bg-fuchsia-300 odd:bg-rose-200">Item 3</li>
        <li className="first:bg-red-300 even:bg-fuchsia-300 odd:bg-rose-200">Item 4</li>
        <li className="first:bg-red-300 even:bg-fuchsia-300 odd:bg-rose-200">Item 5</li>
        <li className="first:bg-red-300 even:bg-fuchsia-300 odd:bg-rose-200">Item 6</li>
      </ul>

      {/* <!-- Appearance --> */}
      {/* <!-- Use appearance-none to reset any browser specific styling on an element. This utility is often used when creating custom form components. --> */}
      <select className="appearance-none">
        <option>Yes</option>
        <option>No</option>
      </select>

      {/* <!-- Cursor --> */}
      <button className="bg-black text-white m-3 py-3 px-5 rounded-lg cursor-grabbing">Cursor</button>

      {/* <!-- Resize --> */}

      {/* <!-- User Select --> */}
      <div className="select-none">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et pariatur sapiente dolor illum cupiditate velit perferendis ipsam libero aliquam incidunt.</div>
      <div className="select-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et pariatur sapiente dolor illum cupiditate velit perferendis ipsam libero aliquam incidunt.</div>
      <div className="select-all">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et pariatur sapiente dolor illum cupiditate velit perferendis ipsam libero aliquam incidunt.</div>
      <div className="select-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et pariatur sapiente dolor illum cupiditate velit perferendis ipsam libero aliquam incidunt.</div>

      {/* <!-- Smooth Scroll Example --> */}
      {/* <Link href={"#item"} className="underline">Go to item</Link> */}
      <a href="#items">Go to item</a>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ea distinctio unde, voluptatum aliquid facere et vitae explicabo beatae doloremque ipsa error cumque quas placeat quidem. Odio porro omnis nemo necessitatibus adipisci vero optio! Atque distinctio pariatur ex modi enim quidem, optio mollitia, architecto libero maiores consequuntur corporis. Rerum, reprehenderit!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ea distinctio unde, voluptatum aliquid facere et vitae explicabo beatae doloremque ipsa error cumque quas placeat quidem. Odio porro omnis nemo necessitatibus adipisci vero optio! Atque distinctio pariatur ex modi enim quidem, optio mollitia, architecto libero maiores consequuntur corporis. Rerum, reprehenderit!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ea distinctio unde, voluptatum aliquid facere et vitae explicabo beatae doloremque ipsa error cumque quas placeat quidem. Odio porro omnis nemo necessitatibus adipisci vero optio! Atque distinctio pariatur ex modi enim quidem, optio mollitia, architecto libero maiores consequuntur corporis. Rerum, reprehenderit!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ea distinctio unde, voluptatum aliquid facere et vitae explicabo beatae doloremque ipsa error cumque quas placeat quidem. Odio porro omnis nemo necessitatibus adipisci vero optio! Atque distinctio pariatur ex modi enim quidem, optio mollitia, architecto libero maiores consequuntur corporis. Rerum, reprehenderit!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ea distinctio unde, voluptatum aliquid facere et vitae explicabo beatae doloremque ipsa error cumque quas placeat quidem. Odio porro omnis nemo necessitatibus adipisci vero optio! Atque distinctio pariatur ex modi enim quidem, optio mollitia, architecto libero maiores consequuntur corporis. Rerum, reprehenderit!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ea distinctio unde, voluptatum aliquid facere et vitae explicabo beatae doloremque ipsa error cumque quas placeat quidem. Odio porro omnis nemo necessitatibus adipisci vero optio! Atque distinctio pariatur ex modi enim quidem, optio mollitia, architecto libero maiores consequuntur corporis. Rerum, reprehenderit!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ea distinctio unde, voluptatum aliquid facere et vitae explicabo beatae doloremque ipsa error cumque quas placeat quidem. Odio porro omnis nemo necessitatibus adipisci vero optio! Atque distinctio pariatur ex modi enim quidem, optio mollitia, architecto libero maiores consequuntur corporis. Rerum, reprehenderit!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ea distinctio unde, voluptatum aliquid facere et vitae explicabo beatae doloremque ipsa error cumque quas placeat quidem. Odio porro omnis nemo necessitatibus adipisci vero optio! Atque distinctio pariatur ex modi enim quidem, optio mollitia, architecto libero maiores consequuntur corporis. Rerum, reprehenderit!</p>
      <p id="items">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ea distinctio unde, voluptatum aliquid facere et vitae explicabo beatae doloremque ipsa error cumque quas placeat quidem. Odio porro omnis nemo necessitatibus adipisci vero optio! Atque distinctio pariatur ex modi enim quidem, optio mollitia, architecto libero maiores consequuntur corporis. Rerum, reprehenderit!</p>
    </div>
  );
}

// <!-- Cursor
//   cursor-auto	          cursor: auto;
//   cursor-default	      cursor: default;
//   cursor-pointer	      cursor: pointer;
//   cursor-wait	          cursor: wait;
//   cursor-text	          cursor: text;
//   cursor-move	          cursor: move;
//   cursor-help	          cursor: help;
//   cursor-not-allowed	  cursor: not-allowed;
//   cursor-none	          cursor: none;
//   cursor-context-menu	  cursor: context-menu;
//   cursor-progress	      cursor: progress;
//   cursor-cell	          cursor: cell;
//   cursor-crosshair	    cursor: crosshair;
//   cursor-vertical-text	cursor: vertical-text;
//   cursor-alias	        cursor: alias;
//   cursor-copy	          cursor: copy;
//   cursor-no-drop	      cursor: no-drop;
//   cursor-grab	          cursor: grab;
//   cursor-grabbing	      cursor: grabbing;
//   cursor-all-scroll	    cursor: all-scroll;
//   cursor-col-resize	    cursor: col-resize;
//   cursor-row-resize	    cursor: row-resize;
//   cursor-n-resize	      cursor: n-resize;
//   cursor-e-resize	      cursor: e-resize;
//   cursor-s-resize	      cursor: s-resize;
//   cursor-w-resize	      cursor: w-resize;
//   cursor-ne-resize	    cursor: ne-resize;
//   cursor-nw-resize	    cursor: nw-resize;
//   cursor-se-resize	    cursor: se-resize;
//   cursor-sw-resize	    cursor: sw-resize;
//   cursor-ew-resize	    cursor: ew-resize;
//   cursor-ns-resize	    cursor: ns-resize;
//   cursor-nesw-resize	  cursor: nesw-resize;
//   cursor-nwse-resize	  cursor: nwse-resize;
//   cursor-zoom-in	      cursor: zoom-in;
//   cursor-zoom-out	      cursor: zoom-out;
// -->
