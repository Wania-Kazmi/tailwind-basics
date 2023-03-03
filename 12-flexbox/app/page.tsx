
export default function Home() {
  return (
    <div>
      {/* <!-- Flex and alignment --> */}
      <h2 className="font-bold m-6">Flex and alignment</h2>
      <div className="flex flex-col flex-wrap h-72 w-full bg-gray-200 items-stretch justify-evenly">
        <div className="p-10 border border-blue-500 bg-blue-200">1</div>
        <div className="p-10 border border-blue-500 bg-blue-200">2</div>
        <div className="p-10 border border-blue-500 bg-blue-200">3</div>
        <div className="p-10 border border-blue-500 bg-blue-200">4</div>
        <div className="p-10 border border-blue-500 bg-blue-200">5</div>
        <div className="p-10 border border-blue-500 bg-blue-200">1</div>
        <div className="p-10 border border-blue-500 bg-blue-200">2</div>
        <div className="p-10 border border-blue-500 bg-blue-200">3</div>
        <div className="p-10 border border-blue-500 bg-blue-200">4</div>
        <div className="p-10 border border-blue-500 bg-blue-200">5</div>
      </div>      

      {/* flex-wrap = if our content/element went outside the screen and it gives the scroller then we can use the flex-wrap which wrap our content within the particular div/container */}
      {/* <h2 className="font-bold m-6">Flex Order and Gap</h2>
      <div className="flex flex-col gap-4 h-72 w-full bg-gray-300 items-center justify-between">
        <div className="order-2 p-10 border border-blue-500 bg-blue-200">1</div>
        <div className="order-4 p-10 border border-blue-500 bg-blue-200">2</div>
        <div className="order-1 p-10 border border-blue-500 bg-blue-200">3</div>
        <div className="order-5 p-10 border border-blue-500 bg-blue-200">4</div>
        <div className="order-3 p-10 border border-blue-500 bg-blue-200">5</div>
      </div> */}
      {/* <!-- Flex Column, Gap and Order --> */}

      {/* <!-- Grow and shrink --> */}
      <h2 className="font-bold m-6">Grow and Shrink</h2>
      <div className="flex w-full bg-gray-300 ">
        <div className="flex-none w-64 p-10 border border-blue-500 bg-blue-200">1</div>
        <div className="flex-initial w-64 p-10 border border-blue-500 bg-blue-200">2</div>
        <div className="flex-auto w-64 p-10 border border-blue-500 bg-blue-200">3</div>
        <div className="flex-1 w-64 p-10 border border-blue-500 bg-blue-200">4</div>
        <div className="p-10 border border-blue-500 bg-blue-200">5</div>
        <div className="p-10 border border-blue-500 bg-blue-200">6</div>
        <div className="p-10 border border-blue-500 bg-blue-200">7</div>
      </div>
    </div>
  )
}

// <!-- Justify Content
//       justify-start	      justify-content: flex-start;
//       justify-end	        justify-content: flex-end;
//       justify-center	    justify-content: center;
//       justify-between	    justify-content: space-between;
//       justify-around	    justify-content: space-around;
//       justify-evenly	    justify-content: space-evenly;
//     -->

// <!-- 
//       items-start	             align-items: flex-start;
//       items-end	               align-items: flex-end;
//       items-center   	         align-items: center;
//       items-baseline  	         align-items: baseline;
//       items-stretch(default)	   align-items: stretch;
//      -->

// <!-- Flex Direction
//       flex-row	        flex-direction: row;
//       flex-row-reverse	flex-direction: row-reverse;
//       flex-col	        flex-direction: column;
//       flex-col-reverse	flex-direction: column-reverse;
//     -->

// <!-- 
//       flex-wrap	        flex-wrap: wrap;
//       flex-wrap-reverse	flex-wrap: wrap-reverse;
//       flex-nowrap	      flex-wrap: nowrap;
//      -->

// <!-- Flex Properties
//       flex-none	    flex: none;     
//       Prevent item from growing or shrinking

//       flex-initial	flex: 0 1 auto; 
//       Allow item to shrink but not grow, taking into account its initial size

//       flex-auto	    flex: 1 1 auto; 
//       Allow item to grow and shrink, taking into account its initial size

//       flex-1	      flex: 1 1 0%;   
//       Allow item to grow and shrink as needed, ignoring its initial size
//     -->
