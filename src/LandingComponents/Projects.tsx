import { Link } from 'react-router-dom';

function Projects() {

  return (
    <>

  <div className = "mx-15 mt-20"> 
    <h1 className = "text-4xl text-center font-bold mt-10 text-[#444444]">
      Presenting Alveoland's Projects
    </h1>

    <p className = "text-center mt-10 ml-10 mr-10 text-[#444444]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, dui eget porta eleifend, purus purus vulputate nisi, sed varius nisi odio sed enim. Quisque venenatis leo ut neque pulvinar, quis dignissim elit pharetra. Morbi a consectetur felis. Praesent vitae viverra lacus. Sed pellentesque nec nisl sit amet tempus. Aenean porttitor, risus id mattis placerat,</p>

    <div className = "grid gap-20 sm:grid-cols-1 xl:grid-cols-2 md:items-center lg:items-center text-center mt-15">
      <div className = "">
        <div className = "sm:h-120 h-64 bg-[url(/public/astela3.jpg)] bg-no-repeat bg-cover bg-center"> </div>
        <p className="text-center font-bold text-lg mt-10 text-[#444444]">Astela</p>
        <p className="text-center mx-5 mt-3 text-[#444444]"> Astela draws inspiration from the extraordinary and stellar, a residential community shining a light on contemporary living. Surrounded by environments for arts, culture, and entertainment, a vast spectrum of experiences amplify the everyday. </p>
        <Link to="/astela"><p className="text-center underline mt-5 text-[#444444] hover:no-underline transition-[text-decoration] duration-300">Read more</p></Link>
      </div>      
      
      <div className = "">
        <div className = "sm:h-120 h-64 bg-[url(/public/mergent2.jpg)] bg-no-repeat bg-cover bg-center"> </div>
        <p className="text-center font-bold text-lg mt-10 text-[#444444]">Mergent</p>
        <p className="text-center mx-5 mt-3 text-[#444444]"> Alveo Land’s first residential development in Poblacion, Makati opens spaces to connect, linger, and uncover vibrant encounters.

 </p>
        <Link to="/mergent"><p className="text-center underline mt-5 text-[#444444] hover:no-underline transition-[text-decoration] duration-300">Read more</p></Link>
      </div>   

    </div>
  </div> 
    </>
  )
}

export default Projects
