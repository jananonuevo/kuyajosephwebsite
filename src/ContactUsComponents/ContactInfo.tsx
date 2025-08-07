function ContactInfo() {

  return (
    <>

  <div className = "mx-15"> 
    <h1 className = "text-4xl text-center font-bold mt-25">
        Contact Information
    </h1>

    <p className = "text-center mt-10 ml-10 mr-10"> Hello! I'm Joseph Muñoz, your trusted real estate partner from Alveo Corporation. I'm dedicated to providing a seamless experience as I guide you through our premium property listings and help you make an informed decision.</p>

    <div className = "grid gap-20 sm:grid-cols-1 xl:grid-cols-2 md:items-center lg:items-center text-center mt-10 mx-50">
      
      <div className = "">
        <div className = "flex justify-center items-center">
          <div className = "w-30 h-30 bg-[url(./public/telephone.png)] bg-no-repeat bg-cover bg-center"> </div>
        </div>
        <p className="text-center font-bold text-lg mt-5">Phone Number</p>
        <p className="text-center mx-10 mt-3">Reach out through my phone number which is also available via Viber or WhatsApp</p>
        <p className="text-center mx-10 mt-3 underline">+63 955 866 1262</p>
      </div>      
      
      <div className = "">
        <div className = "flex justify-center items-center">
          <div className = "w-30 h-30 bg-[url(./public/mail.png)] bg-no-repeat bg-cover bg-center"> </div>
        </div>
        <p className="text-center font-bold text-lg mt-5">Email</p>
        <p className="text-center mx-10 mt-3">We can also communicate through my email, which is my main mode of communication should you wish to have a copy of the computations and brochures</p>
        <p className="text-center mx-10 mt-3 underline">hello123.alveoland@gmail.com</p>
      </div>   

    </div>
  </div> 
    </>
  )
}

export default ContactInfo
