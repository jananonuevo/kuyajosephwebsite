function Location() {

  return (
    <>
    
    <h1 className = "text-4xl text-center font-bold mt-20 text-[#444444]">
      Project Location
    </h1>

    <p className = "text-lg text-center mt-10 ml-10 mr-10 text-[#444444]"> Mergent Residences by Alveo is located in the vibrant Poblacion neighborhood of Makati City, along Makati Avenue. It is situated at the corner of B. Valdez and Salamanca Streets, placing it near the city's central business district, cultural hubs, and various dining and entertainment spots. </p>

<center>
    <div className="max-w-200 h-96 mt-10">
      <iframe className="w-full h-full"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=mergent%20residences+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>
    </div>
</center>

    </>
  )
}

export default Location
