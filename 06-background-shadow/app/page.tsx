import Image from "next/image";


export default function Home() {
  return (
    <div>
      {/* <!-- Background Classes --> */}
      {/* tailwind does not support image transperancy so we can achieve it the other way  */}
      {/* => Simple background image: */}

      <div className="bg-[url('/bg-1.jpg')] h-[650px] w-[1360px] bg-cover bg-center bg-no-repeat" />

      {/* => Achieving transparent images: */}
      <div className="relative w-screen h-screen">
        <div className="absolute inset-0 w-full h-full bg-[url('/bg-1.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 w-full h-full bg-gray-200 bg-opacity-25" />
      </div>

      {/* <!-- Gradients --> */}
      <div className="h-48 bg-gradient-to-r from-fuchsia-400 to-rose-800"></div>
      <div className="h-48 bg-gradient-to-l from-teal-400 to-cyan-800"></div>

      {/* <!-- Shadows --> */}
      <div className="w-96 mt-6 ml-4 p-3 shadow">
        <h2>Shadow</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ipsum
        harum eum necessitatibus perferendis provident, laudantium
        exercitationem libero totam vitae.
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-md">
        <h2>Shadow medium</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ipsum
        harum eum necessitatibus perferendis provident, laudantium
        exercitationem libero totam vitae.
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-lg">
      <h2>Shadow large</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ipsum
        harum eum necessitatibus perferendis provident, laudantium
        exercitationem libero totam vitae.
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-xl">
      <h2>Shadow extra large</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ipsum
        harum eum necessitatibus perferendis provident, laudantium
        exercitationem libero totam vitae.
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl">
      <h2>Shadow 2xl</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ipsum
        harum eum necessitatibus perferendis provident, laudantium
        exercitationem libero totam vitae.
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-inner">
      <h2>Shadow inner</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ipsum
        harum eum necessitatibus perferendis provident, laudantium
        exercitationem libero totam vitae.
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl shadow-blue-500/50">
      <h2>Shadow 2xl with color</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ipsum
        harum eum necessitatibus perferendis provident, laudantium
        exercitationem libero totam vitae.
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl shadow-red-500">
      <h2>Shadow 2xl with color</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ipsum
        harum eum necessitatibus perferendis provident, laudantium
        exercitationem libero totam vitae.
      </div>

      {/* <!-- Mix Blend --> */}
      {/* DIY */}
      
    </div>
  );
}

// <!-- Background Size
//   bg-auto	    background-size: auto;
//   bg-cover	  background-size: cover;
//   bg-contain	background-size: contain;
// -->

// <!-- Background Repeat
//   bg-repeat	      background-repeat: repeat;
//   bg-no-repeat	  background-repeat: no-repeat;
//   bg-repeat-x	    background-repeat: repeat-x;
//   bg-repeat-y	    background-repeat: repeat-y;
//   bg-repeat-round	background-repeat: round;
//   bg-repeat-space	background-repeat: space;
// -->

// <!-- Background Position
//   bg-bottom	      background-position: bottom;
//   bg-center	      background-position: center;
//   bg-left	        background-position: left;
//   bg-left-bottom	background-position: left bottom;
//   bg-left-top	    background-position: left top;
//   bg-right	      background-position: right;
//   bg-right-bottom	background-position: right bottom;
//   bg-right-top	  background-position: right top;
//   bg-top	        background-position: top;
// -->

// <!-- Background Attachment
//   bg-fixed	  background-attachment: fixed;
//   bg-local	  background-attachment: local;
//   bg-scroll	  background-attachment: scroll;
// -->

// <!--
//   Shadows
//   shadow-sm	    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
//   shadow	      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
//   shadow-md	    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
//   shadow-lg	    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
//   shadow-xl	    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
//   shadow-2xl	  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
//   shadow-inner	box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
//   shadow-none	  box-shadow: 0 0 #0000;
//  -->
