

export default function Home() {
  return (
    <div>
    {/* <!-- Grid cols and rows --> */}
    <h2 className="font-bold m-4">Grid cols</h2>
    <div className="grid grid-cols-3 gap-2">
      <div className="p-10 border border-blue-600 bg-blue-200">Item 1</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 2</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 3</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 4</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 5</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 6</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 7</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 8</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 9</div>
    </div>

    <h2 className="font-bold m-4">Grid rows</h2>
    <div className="grid grid-cols-2 grid-rows-6 bg-gray-600 gap-2">
      <div className="p-10 border border-blue-600 bg-blue-200">Item 1</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 2</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 3</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 4</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 5</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 6</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 7</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 8</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 9</div>
    </div>

    {/* <!-- Col and row span --> */}
    <h2 className="font-bold m-4">Col and row Span</h2>
    <div className="grid grid-col-1 md:grid-cols-3 bg-gray-600 gap-2">
      <div className="md:col-span-2 md:row-span-2 p-10 border border-blue-600 bg-blue-200">Item 1</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 2</div>
      <div className=" p-10 border border-blue-600 bg-blue-200">Item 3</div>
      <div className="md:col-span-3 p-10 border border-blue-600 bg-blue-200">Item 4</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 5</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 6</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 7</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 8</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 9</div>
      <div className="p-10 border border-blue-600 bg-blue-200">Item 10</div>
    </div>
    </div>
  )
}


// <!-- 
//   Grid Template Columns
//   grid-cols-1	    grid-template-columns: repeat(1, minmax(0, 1fr));
//   grid-cols-2	    grid-template-columns: repeat(2, minmax(0, 1fr));
//   grid-cols-3	    grid-template-columns: repeat(3, minmax(0, 1fr));
//   grid-cols-4	    grid-template-columns: repeat(4, minmax(0, 1fr));
//   grid-cols-5	    grid-template-columns: repeat(5, minmax(0, 1fr));
//   grid-cols-6	    grid-template-columns: repeat(6, minmax(0, 1fr));
//   grid-cols-7	    grid-template-columns: repeat(7, minmax(0, 1fr));
//   grid-cols-8	    grid-template-columns: repeat(8, minmax(0, 1fr));
//   grid-cols-9	    grid-template-columns: repeat(9, minmax(0, 1fr));
//   grid-cols-10	  grid-template-columns: repeat(10, minmax(0, 1fr));
//   grid-cols-11	  grid-template-columns: repeat(11, minmax(0, 1fr));
//   grid-cols-12	  grid-template-columns: repeat(12, minmax(0, 1fr));
//   grid-cols-none	grid-template-columns: none;
//  -->

// <!-- Grid Template Rows
//   grid-rows-1	    grid-template-rows: repeat(1, minmax(0, 1fr));
//   grid-rows-2	    grid-template-rows: repeat(2, minmax(0, 1fr));
//   grid-rows-3	    grid-template-rows: repeat(3, minmax(0, 1fr));
//   grid-rows-4	    grid-template-rows: repeat(4, minmax(0, 1fr));
//   grid-rows-5	    grid-template-rows: repeat(5, minmax(0, 1fr));
//   grid-rows-6	    grid-template-rows: repeat(6, minmax(0, 1fr));
//   grid-rows-none	grid-template-rows: none;
//   -->
