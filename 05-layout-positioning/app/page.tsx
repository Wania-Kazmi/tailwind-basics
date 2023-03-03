import Image from "next/image";

export default function Home() {
  return (
    <div className="m-10">
      {/* <!-- Positioning --> */}
      <div className="relative h-12 w-1/2 bg-red-200">
        <p>Parent</p>
        <div className="absolute bottom-0 right-0 bg-red-400">
          <p>Absolute child</p>
        </div>
      </div>

      {/* <!-- Top left corner --> */}
      <div className="relative h-12 w-1/2 bg-purple-300">
        <p>Parent</p>
        <div className="absolute top-0 left-0 bg-purple-600">
          <p>Absolute Child</p>
        </div>
      </div>

      {/* <!-- Top right corner --> */}
      <div className="relative h-12 w-1/2 bg-green-200">
        <p>Parent</p>
        <div className="absolute top-0 right-0 bg-green-500">
          <p>Absolute child</p>
        </div>
      </div>

      {/* <!-- Bottom left corner --> */}
      <div className="relative h-12 w-1/2 bg-orange-200">
        <p>Parent</p>
        <div className="absolute bottom-0 left-0 bg-orange-500">
          <p>Absolute Child</p>
        </div>
      </div>

      {/* <!-- Bottom right corner --> */}
      <div className="relative h-12 w-1/2 bg-pink-300">
        <p>Parent</p>
        <div className="absolute bottom-0 right-0 bg-pink-600">
          <p>Absolute Child</p>
        </div>
      </div>

      <h2 className="font-bold my-6">Span Top Edges</h2>

      {/* <!-- Span top edge --> */}
      <div className="relative h-32 w-1/2 bg-red-200">
        {/* <p>Parent</p> */}
        <div className="absolute h-12 inset-x-0 top-0 bg-red-400">
          <p>Absolute Child with span top edge</p>
        </div>
      </div>

      {/* <!-- Span left edge --> */}
      <div className="relative h-32 w-1/2 bg-purple-300">
        <p>Parent</p>
        <div className="absolute inset-y-0 left-0 w-12 bg-purple-600">
          <p>Absolute Child</p>
        </div>
      </div>

      {/* <!-- Span right edge --> */}
      <div className="relative h-32 w-1/2 bg-green-200">
        <p>Parent</p>
        <div className="absolute inset-y-0 right-0 w-12 bg-green-500">
          <p>Absolute Child</p>
        </div>
      </div>

      {/* <!-- Span bottom edge --> */}
      <div className="relative h-32 w-1/2 bg-orange-200">
        <p>Parent</p>
        <div className="absolute inset-x-0 bottom-0 h-12 bg-orange-500">
          <p>Absolute Child</p>
        </div>
      </div>

      {/* <!-- Display Classes --> */}
      <div>
        Lorem ipsum, dolor sit amet consectetur <span className="inline font-bold">This is inline</span> adipisicing elit. Molestias
        neque veritatis hic dolorum <span className="block font-bold">This is block</span> blanditiis reprehenderit omnis sunt corrupti
        quidem, voluptas <span className="inline-block font-bold">This is inline block</span> laudantium amet quae <span className="hidden font-bold">This is hidden span</span> rem itaque rerum pariatur dolorem
        recusandae quis.
      </div>

      {/* <!-- Z-Index --> */}
      <div className="relative h-36">
        <div className="absolute left-10 w-24 h-24 bg-blue-200 z-20">1</div>
        <div className="absolute left-20 w-24 h-24 bg-blue-300 z-30">2</div>
        <div className="absolute left-40 w-24 h-24 bg-blue-400 z-[-40]">jkhkjhnkljlkj jhjghyfj fyhfjhkjgjhghjgjghghjhgjghhjg</div>
        <div className="absolute left-60 w-24 h-24 bg-blue-500 z-10">4</div>
        <div className="absolute left-80 w-24 h-24 bg-blue-600 z-10">5</div>
      </div>

      {/* <!-- Floats --> */}
      <div className="w-full">
        <Image className="float-right" src={'/image.jpg'} alt="pic" height={500} width={500} />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aut doloribus corporis eius obcaecati totam, vitae distinctio perferendis pariatur sequi autem enim beatae sit quibusdam nam odio dignissimos porro in!</p>
      </div>
    </div>
  );
}

// <!-- Position Classes
//       static	    position: static;
//       fixed	      position: fixed;
//       absolute	  position: absolute;
//       relative	  position: relative;
//       sticky	    position: sticky;
//     -->

// <!-- Display Classes
//       block	            display: block;
//       inline-block	    display: inline-block;
//       inline	          display: inline;
//       flex	            display: flex;
//       inline-flex	      display: inline-flex;
//       table	            display: table;
//       grid	            display: grid;
//       inline-grid	      display: inline-grid;
//       contents	        display: contents;
//       list-item	        display: list-item;
//       hidden	          display: none;
//     -->

// <!-- Z-Index
//       z-0	    z-index: 0;
//       z-10	  z-index: 10;
//       z-20	  z-index: 20;
//       z-30	  z-index: 30;
//       z-40	  z-index: 40;
//       z-50	  z-index: 50;
//       z-auto	z-index: auto;
//     -->

// <!-- Float
//       float-right	  float: right;
//       float-left	  float: left;
//       float-none	  float: none;
//     -->
