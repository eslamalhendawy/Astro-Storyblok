
function Hero() {
  return (
    // Container for the Hero section
    <div className="container mx-auto px-6 py-12 lg:py-0 flex items-center justify-between">
      {/* Text Content */}
      <div className="lg:basis-2/4">
        {/* Main Title */}
        <h1 className="text-center lg:text-left text-[#314584] font-bold text-4xl md:text-5xl mb-6">The Spirit of Digital Agency.</h1>
        {/* Description */}
        <p className="text-center lg:text-left text-[#6E757A] md:text-lg w-4/5 lg:w-auto mx-auto mb-6">Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
        {/* Button and Link */}
        <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center ">
          {/* Button */}
          <button className="mb-4 md:mb-0 md:mr-8 text-white bg-[#FF3946] border-2 border-[#FF3946] px-8 py-4 rounded-3xl font-semibold hover:text-[#314584] hover:bg-white duration-300">
            More About Us
          </button>
          {/* Link */}
          <a href="" className="text-[#314584] font-semibold text-sm">Get in Touch.</a>
        </div>
      </div>
      {/* Image (Visible on large screens) */}
      <div className="hidden lg:block basis-2/4">
        <img src="/images/hero.svg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
