function FloorLayout() {

  return (
    <>
    
    <h1 className = "text-4xl text-center font-bold mt-30 text-[#444444]">
      Floor Layout
    </h1>

    <p className = "text-center text-lg mt-10 mx-10 text-[#444444]"> The development opens
409 expansive units in a variety
of configurations from Studio
to Three-bedroom spaces, catering
to individuals and families.
With only 16 units per floor,
this low-density community
highlights privacy and exclusivity,
giving room for more meaningful
moments at home.</p>

    <div className = "grid grid-cols-1 sm:grid-cols-2 text-center mt-10">

     <div className="flex justify-center"> 
      <div className = "w-96 mx-20">
        <div className = "max-w-96 h-64 bg-[url(/public/amenityfloor-astela.png)] bg-no-repeat bg-contain"> </div>
        <p className="text-center font-bold text-lg text-[#444444]">Amenity Floor (10th floor)</p>
        <p className="text-center mx-5 mt-3 text-[#444444]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, dui eget porta eleifend, purus purus vulputate nisi, sed varius nisi odio sed enim.</p>
      </div>      
     </div>

     <div className="mt-10 sm:mt-0 flex justify-center"> 
      <div className = "w-96 mx-20">
        <div className = "max-w-96 h-64 bg-[url(/public/typicalresidentialfloor-astela.png)] bg-no-repeat bg-contain"> </div>
        <p className="text-center font-bold text-lg text-[#444444]">Typical Residential Floor (11th - 39th floor)</p>
        <p className="text-center mx-5 mt-3 text-[#444444]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, dui eget porta eleifend, purus purus vulputate nisi, sed varius nisi odio sed enim.</p>
      </div> 
     </div>

    </div>
    
    </>
  )
}

export default FloorLayout
