function GeneralInfo() {

  return (
    <>
    
    <h1 className = "text-4xl text-center font-bold mt-50 text-[#444444]">
      General Information
    </h1>


    <div className = "grid gap-20 xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 text-center mt-10 mb-50 text-[#444444]">
      <div className = "mx-10">
        <h1 className="text-center font-bold text-9xl mt-5">40</h1>
        <p className="text-center mx-5 mt-3 text-2xl"> No. of Floors</p>
      </div>      
      
      <div className = "mx-10">
        <h1 className="text-center font-bold text-9xl mt-5">2026</h1>
        <p className="text-center mx-5 mt-3 text-2xl">Turnover Year</p>
      </div> 

      <div className = "mx-10">
        <h1 className="text-center font-bold text-9xl mt-5">6</h1>
        <p className="text-center mx-5 mt-3 text-2xl">Podium Parking Levels</p>
      </div>   

      <div className = "mx-10">
        <h1 className="text-center font-bold text-9xl mt-5">3</h1>
        <p className="text-center mx-5 mt-3 text-2xl">Number of Elevators</p>
      </div>   
    </div>
    
    </>
  )
}

export default GeneralInfo
