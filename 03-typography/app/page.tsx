
import { Poppins } from 'next/font/google';
import { Sofia_Sans } from 'next/font/google';


const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '400'
});
const sofia = Sofia_Sans({
  subsets: ['latin'],
  variable: '--font-sofia',
});



export default function Home() {
  
  return (
    <div className='flex flex-col gap-4'>
      {/* <!-- Font Family --> */}
      <h2 className='font-bold'>Font Family</h2>
      {/* <div className="font-sans">Tailwind Font Family</div> */}
      <div className={`${poppins.variable} font-poppins`}>Tailwind Font Family</div>
      <div className={`${sofia.variable} font-sofia`}>Tailwind Font Family</div>
      {/* <h2>Wania</h2> */}

      {/* <!-- Font Size --> */}
      <h2 className='font-bold'>Font Size</h2>
      <div className="text-xs">Tailwind is awesome</div>
      <div className="text-sm">Tailwind is awesome</div>
      <div className="text-base">Tailwind is awesome</div>
      <div className="text-lg">Tailwind is awesome</div>
      <div className="text-xl">Tailwind is awesome</div>
      <div className="text-2xl">Tailwind is awesome</div>
      <div className="text-3xl">Tailwind is awesome</div>
      {/* <div className="text-9xl">Tailwind is awesome</div> */}

      {/* <!-- Font Weight --> */}
      <h2 className='font-bold'>Font Weight</h2>
      <div className="font-light">Tailwind Font Weight</div>
      <div className="font-normal">Tailwind Font Weight</div>
      <div className="font-medium">Tailwind Font Weight</div>
      <div className="font-semibold">Tailwind Font Weight</div>
      <div className="font-bold">Tailwind Font Weight</div>
      <div className="font-extrabold">Tailwind Font Weight</div>

      {/* <!-- Letter Spacing --> */}
      <h2 className='font-bold'>Letter Spacing</h2>
      <div className="tracking-tight">Tailwind Letter Spacing</div>
      <div className="tracking-normal">Tailwind Letter Spacing</div>
      <div className="tracking-wide">Tailwind Letter Spacing</div>

      {/* <!-- Text Alignment --> */}
      <h2 className='font-bold'>Text Alignment</h2>
      <div className="text-left">Tailwind Text Alignment</div>
      <div className="text-center">Tailwind Text Alignment</div>
      <div className="text-right">Tailwind Text Alignment</div>

      {/* <!-- Text Decoration --> */}
      <h2 className='font-bold'>Text Decoration</h2>
      <div className='underline decoration-4 decoration-blue-400'>Tailwind text decoration</div>

      {/* <!-- Decoration Style --> */}
      <h2 className='font-bold'>Text Decoration Style</h2>
      <div className="underline decoration-double">Tailwind text decoration style</div>
      <div className="underline decoration-wavy">Tailwind text decoration style</div>
      <div className="underline decoration-dotted">Tailwind text decoration style</div>
      <div className="underline decoration-dashed">Tailwind text decoration style</div>

      {/* <!-- Decoration Offset --> */}
      <h2 className='font-bold'>Text Decoration offset</h2>
      <div className="underline decoration-4 decoration-blue-400 underline-offset-2">Tailwind text decoration offset</div>
      <div className="underline decoration-4 decoration-green-400 underline-offset-4">Tailwind text decoration offset</div>
      <div className="underline decoration-4 decoration-red-400 underline-offset-8">Tailwind text decoration offset</div>
      {/* <div className="underline decoration-4 decoration-purple-400 underline-offset-9">Tailwind text decoration offset</div> */}

      {/* <!-- Text Transform --> */}
      <h2 className='font-bold'>Text Transform</h2>
      <div className="normal-case">Tailwind text transform</div>
      <div className="uppercase">Tailwind text transform</div>
      <div className="lowercase">Tailwind text transform</div>
      <div className="capitalize">Tailwind text transform</div>
    </div>
  )
}

// <!-- Font Family
//   font-sans	
//   font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

//   font-serif	
//   font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  
//   font-mono	
//   font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

// -->

// <!-- 
//   Font Size
//   text-xs	    font-size: 0.75rem; /* 12px */
//   text-sm	    font-size: 0.875rem; /* 14px */
//   text-base	  font-size: 1rem; /* 16px */
//   text-lg	    font-size: 1.125rem; /* 18px */
//   text-xl	    font-size: 1.25rem; /* 20px */
//   text-2xl	  font-size: 1.5rem; /* 24px */
//   text-3xl	  font-size: 1.875rem; /* 30px */
//   text-4xl	  font-size: 2.25rem; /* 36px */
//   text-5xl	  font-size: 3rem; /* 48px */
//   text-6xl	  font-size: 3.75rem; /* 60px */
//   text-7xl	  font-size: 4.5rem; /* 72px */
//   text-8xl	  font-size: 6rem; /* 96px */
//   text-9xl	  font-size: 8rem; /* 128px */ 
// -->

// <!-- Font Weight
//   font-thin	      font-weight: 100;
//   font-extralight	font-weight: 200;
//   font-light	    font-weight: 300;
//   font-normal	    font-weight: 400;
//   font-medium	    font-weight: 500;
//   font-semibold	  font-weight: 600;
//   font-bold	      font-weight: 700;
//   font-extrabold	font-weight: 800;
//   font-black	    font-weight: 900;
// -->

// <!-- Letter Spacing
//   tracking-tighter	letter-spacing: -0.05em;
//   tracking-tight	  letter-spacing: -0.025em;
//   tracking-normal	  letter-spacing: 0em;
//   tracking-wide	    letter-spacing: 0.025em;
//   tracking-wider	  letter-spacing: 0.05em;
//   tracking-widest	  letter-spacing: 0.1em;
// -->

// <!-- Text Alignment
//   text-left	    text-align: left;
//   text-center	  text-align: center;
//   text-right	  text-align: right;
//   text-justify	text-align: justify;
//  -->

// <!-- Text Decoration
//   decoration-auto	      text-decoration-thickness: auto;
//   decoration-from-font	text-decoration-thickness: from-font;
//   decoration-0	        text-decoration-thickness: 0px;
//   decoration-1	        text-decoration-thickness: 1px;
//   decoration-2	        text-decoration-thickness: 2px;
//   decoration-4	        text-decoration-thickness: 4px;
//   decoration-8	        text-decoration-thickness: 8px;
// -->

// <!-- Text Transform
//   uppercase	  text-transform: uppercase;
//   lowercase	  text-transform: lowercase;
//   capitalize	text-transform: capitalize;  
//   normal-case	text-transform: none;
// -->

