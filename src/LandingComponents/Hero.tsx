interface HeroProps {
  openModal: () => void;
}

const Hero = ({ openModal }: HeroProps) => {

  return (
    // The main container uses min-h-screen to ensure it takes at least the full viewport height.
    <div className="relative w-full min-h-screen bg-[url(./public/intropic.jpg)] bg-no-repeat bg-cover bg-center">
      {/* The overlay opacity is now 40% for better readability on various devices */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
        {/* The content container width is now responsive. It's full-width on mobile, then scales up. */}
        <div className="">
          {/* The title font size is now responsive, scaling from a small size to a large one on bigger screens. */}
          <h1 className="text-center font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">Alveoland By Joseph Muñoz</h1>
          {/* Paragraph font size and margin are also responsive. */}
          <p className="text-center text-xs sm:block mt-3 sm:mt-5 md:mt-10 sm:text-sm mx-4 sm:mx-10 md:text-2xl">
            Take a dive into Alveo's residential projects that will surely elevate not just your place of living, but your lifestyle.
          </p>
        </div>
        {/* The button container margin is also responsive. */}
        <div className="flex justify-center mt-3 sm:mt-5 md:mt-10">
          <button onClick={openModal} 
          className="
                  cursor-pointer 
                  bg-transparent 
                  hover:bg-white 
                  text-white 
                  font-semibold 
                  hover:text-black 
                  py-2 
                  px-5 
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
                  text-[0.5em] 
                  transition-colors 
                  duration-300">Inquire Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
