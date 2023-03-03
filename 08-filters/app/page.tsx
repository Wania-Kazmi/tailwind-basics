import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <!-- Blur --> */}
      <h2 className="font-bold m-4">Blur</h2>
      <div className="blur-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsum
        corporis! Natus tempora veritatis optio pariatur voluptate excepturi,
        sequi non in architecto commodi fugit placeat sint officiis id. Amet,
        possimus.
      </div>
      <div className="blur">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsum
        corporis! Natus tempora veritatis optio pariatur voluptate excepturi,
        sequi non in architecto commodi fugit placeat sint officiis id. Amet,
        possimus.
      </div>
      <Image className="m-auto blur-xl" src='/image-01.jpg' alt='image' width={700} height={700} />

      {/* <!-- Brightness -> */}
      <h2 className="font-bold m-4">Brightness</h2>
      <div className="flex">
      <Image className="m-auto brightness-50" src='/image-01.jpg' alt='image' width={200} height={300} />
      <Image className="m-auto brightness-75" src='/image-01.jpg' alt='image' width={200} height={300} />
      <Image className="m-auto brightness-90" src='/image-01.jpg' alt='image' width={200} height={300} />
      <Image className="m-auto brightness-100" src='/image-01.jpg' alt='image' width={200} height={300} />
      <Image className="m-auto brightness-110" src='/image-01.jpg' alt='image' width={200} height={300} />
      <Image className="m-auto brightness-150" src='/image-01.jpg' alt='image' width={200} height={300} />
      </div>

      {/* <!-- Contrast --> */}
      <h2 className="font-bold m-4">Contrast</h2>
      {/* <Image className="m-auto contrast-0" src='/image2.jpg' alt="random image" width={700} height={700} /> */}
      <div className="flex">
      <Image className="m-auto contrast-50" src='/image2.jpg' alt="random image" width={200} height={300} />
      <Image className="m-auto contrast-100" src='/image2.jpg' alt="random image" width={200} height={300} />
      <Image className="m-auto contrast-150" src='/image2.jpg' alt="random image" width={200} height={300} />
      <Image className="m-auto contrast-200" src='/image2.jpg' alt="random image" width={200} height={300} />
      </div>

      {/* <!-- Grayscale --> */}
      <h2 className="font-bold m-4">Grayscale - gives you black and white picture</h2>
      <p className="m-4">It has no number and value</p>

      <div className="flex">   
      <h3 className="font-bold m-4">Picture without Gray Scale</h3>
      <Image className="m-auto" src='/image3.jpg' alt="random image" width={400} height={600} />
      <h3 className="font-bold m-4">Picture with Gray Scale</h3>
      <Image className="m-auto grayscale" src='/image3.jpg' alt="random image" width={400} height={600} />
      </div>

      {/* <!-- Invert --> */}
      <h2 className="font-bold m-4">Invert</h2>
      <div className="flex">   
        <h3 className="font-bold m-4">Picture without Invert</h3>
        <Image className="m-auto" src='/image4.jpg' alt="random image" width={400} height={600} />
        <h3 className="font-bold m-4">Picture with Invert</h3>
        <Image className="m-auto invert" src='/image4.jpg' alt="random image" width={400} height={600} />
      </div>

      {/* <!-- Sepia --> */}
      <h2 className="font-bold m-4">Sepia</h2>
      <div className="flex">   
        <h3 className="font-bold m-4">Picture without Sepia</h3>
        <Image className="m-auto" src='/image4.jpg' alt="random image" width={400} height={600} />
        <h3 className="font-bold m-4">Picture with Sepia</h3>
        <Image className="m-auto sepia" src='/image4.jpg' alt="random image" width={400} height={600} />
      </div>
      {/* <!-- Hue Rotate --> */}
      <h2 className="font-bold m-4">Hue Rotate</h2>
      <div className="flex">
        
      <Image className="m-auto hue-rotate-0" src='/image5.jpg' alt="random image" width={200} height={400} />
      <Image className="m-auto hue-rotate-15" src='/image5.jpg' alt="random image" width={200} height={400} />
      <Image className="m-auto hue-rotate-30" src='/image5.jpg' alt="random image" width={200} height={400} />
      <Image className="m-auto hue-rotate-60" src='/image5.jpg' alt="random image" width={200} height={400} />
      <Image className="m-auto hue-rotate-90" src='/image5.jpg' alt="random image" width={200} height={400} />
      <Image className="m-auto hue-rotate-180" src='/image5.jpg' alt="random image" width={200} height={400} />
      </div>
    </div>
  );
}

// <!-- Blur
//   blur-none	    filter: blur(0);
//   blur-sm	      filter: blur(4px);
//   blur	        filter: blur(8px);
//   blur-md	      filter: blur(12px);
//   blur-lg	      filter: blur(16px);
//   blur-xl	      filter: blur(24px);
//   blur-2xl	    filter: blur(40px);
//   blur-3xl	    filter: blur(64px);
// -->

// <!-- Brightness
//   brightness-0	    filter: brightness(0);
//   brightness-50	    filter: brightness(.5);
//   brightness-75	    filter: brightness(.75);
//   brightness-90	    filter: brightness(.9);
//   brightness-95	    filter: brightness(.95);
//   brightness-100	  filter: brightness(1);
//   brightness-105	  filter: brightness(1.05);
//   brightness-110	  filter: brightness(1.1);
//   brightness-125	  filter: brightness(1.25);
//   brightness-150	  filter: brightness(1.5);
//   brightness-200	  filter: brightness(2);
// -->

// <!-- Contrast
//   contrast-0	  filter: contrast(0);
//   contrast-50	  filter: contrast(.5);
//   contrast-75	  filter: contrast(.75);
//   contrast-100	filter: contrast(1);
//   contrast-125	filter: contrast(1.25);
//   contrast-150	filter: contrast(1.5);
//   contrast-200	filter: contrast(2);
// -->

// <!-- Hue Rotate
//   hue-rotate-0	    filter: hue-rotate(0deg);
//   hue-rotate-15	    filter: hue-rotate(15deg);
//   hue-rotate-30	    filter: hue-rotate(30deg);
//   hue-rotate-60	    filter: hue-rotate(60deg);
//   hue-rotate-90	    filter: hue-rotate(90deg);
//   hue-rotate-180	  filter: hue-rotate(180deg);
// -->
