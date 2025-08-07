function FloorLayout() {

  return (
    <>
    
    <h1 className = "text-4xl text-center font-bold mt-30 text-[#444444]">
      Floor Layout
    </h1>

    <p className = "text-center text-lg mt-10 mx-10 text-[#444444]">Soak up the vibrant atmosphere
with refreshing lifestyle choices
to enliven every day. Mergent Residences
offers shared environments
to chill out and connect.</p>

    <div className = "grid grid-cols-1 sm:grid-cols-2 text-center mt-10">
     <div className="flex justify-center"> 
      <div className = "w-96 mx-20">
        <div className = "max-w-96 h-64 bg-[url(/public/amenityfloor-mergent.png)] bg-no-repeat bg-contain bg-center"> </div>
        <p className="text-center font-bold text-lg text-[#444444] mt-7">Amenity Floor (10th floor)</p>
        <p className="text-center mx-5 mt-3 text-[#444444]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, dui eget porta eleifend, purus purus vulputate nisi, sed varius nisi odio sed enim.</p>
      </div>      
     </div>

     <div className="flex justify-center"> 
      <div className = "w-96 mx-20">
        <div className = "max-w-96 h-64 bg-[url(/public/amenityfloor-mergent.png)] bg-no-repeat bg-contain bg-center"> </div>
        <p className="text-center font-bold text-lg text-[#444444] mt-7">Residential Floor (11th to 47th floor)</p>
        <p className="text-center mx-5 mt-3 text-[#444444]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, dui eget porta eleifend, purus purus vulputate nisi, sed varius nisi odio sed enim.</p>
      </div>      
     </div>

    </div>
    
    </>
  )
}

export default FloorLayout
