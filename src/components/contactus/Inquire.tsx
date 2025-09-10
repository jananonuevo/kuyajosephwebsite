function Inquire() {
  return (
    <>

  <div className = "w-full bg-[#27374D] mt-30">
      
    <div className = "flex justify-center">
     <div className = "grid gap-5 sm:grid-cols-1 lg:grid-cols-2 w-4/5 ">
      <div className = "mx-10 mt-15 mb-15">
        <h1 className="font-bold text-5xl text-white">I'm Joseph! Your trusted Real Estate Salesperson.</h1>
        <p className="mt-10 text-lg text-white">Hi! I'm Joseph Muñoz, and I have been in the real estate industry for several years now. I am committed to helping clients choose the right home for them, and or the best investment that would really ensure their money's worth. 
          As an accredited real estate salesperson (PRC Details down below), it is my duty to make sure that your home is a reflection of how you wish your future would be. Let's go!</p>
        
          <button /* onClick={openModal} */ className="mt-10 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-10 border border-white hover:border-transparent rounded">
            Inquire Now!
          </button>
      </div>

      <div className = "hidden sm:hidden md:hidden lg:block">
        <div className = "flex justify-center items-center h-4/5">
          <div className = "py-50 px-40 bg-[url(/public/hindiikawtokuyaHAHAH.jpg)] bg-no-repeat bg-cover bg-center mt-15"> </div>
        </div>
      </div>
     </div> 
    </div>

  </div>
   
    </>
  )
}

export default Inquire
