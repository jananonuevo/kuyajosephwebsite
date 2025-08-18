interface HeroProps {
  openModal: () => voids;
}

const Hero = ({ openModal }: HeroProps) => {

  return (
    // The main container uses min-h-screen to ensure it takes at least the full viewport height.
    <div className="relative w-full min-h-screen bg-[url(/public/astela.jpg)] bg-no-repeat bg-cover bg-center">
      {/* The overlay opacity is now 40% for better readability on various devices */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
        {/* The content container width is now responsive. It's full-width on mobile, then scales up. */}
        <div className="">
          {/* The title font size is now responsive, scaling from a small size to a large one on bigger screens. */}
          <h1 className="text-center font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl">The Astela by Alveo</h1>
          {/* Paragraph font size and margin are also responsive. */}
          <p className="text-center lg:block hidden mt-3 lg:mt-10 lg:mx-10 lg:text-2xl lg:leading-10">
            Astela draws inspiration from the extraordinary and stellar, a residential community shining a light on contemporary living. Surrounded by environments for arts, culture, and entertainment, a vast spectrum of experiences amplify the everyday.
          </p>
        </div>
        {/* The button container margin is also responsive. */}
        <div className="flex justify-center mt-5 sm:mt-5 md:mt-10">
          <button onClick={openModal} 
          className="
                  cursor-pointer 
                  bg-transparent 
                  hover:bg-white 
                  text-white 
                  font-semibold 
                  hover:text-black 
                  py-3 
                  px-6 
                  sm:py-2 
                  sm:px-8 
                  md:px-12 
                  md:py-4 
                  border 
                  sm:text-md 
                  md:text-lg 
                  border-white 
                  hover:border-transparent 
                  rounded-lg 
                  text-lg 
                  transition-colors 
                  duration-300">Inquire Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
