import React from "react";

function FineWords() {
  return (
    // Container for FineWords section
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center space-y-12 md:space-y-0 md:space-x-6">
      {/* Image Section */}
      <div className="basis-2/4">
        <img src="/images/aboutimg.svg" alt="" />
      </div>
      {/* Text Section */}
      <div className="text-center lg:text-left basis-2/4">
        {/* Company Tag */}
        <span className="font-semibold lg:text-lg text-[#FF3946]">OUR COMPANY</span>
        {/* Main Title */}
        <h2 className="text-[#314584] font-semibold text-3xl lg:text-4xl my-6">Some Fine Words About Us</h2>
        {/* Description */}
        <p className="text-[#314584] text-lg lg:text-xl">Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.Vestibulum ac diam sit amet.Quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
      </div>
    </div>
  );
}

export default FineWords;
