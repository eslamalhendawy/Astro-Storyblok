import React from 'react';

function Features() {
  return (
    // Container for Features
    <div className='container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:items-center'>
      {/* Section 1: Anything you need... */}
      <div className='md:col-span-2 lg:col-span-1'>
        {/* Title */}
        <h2 className='text-[#314584] font-semibold text-center lg:text-left text-3xl mb-6'>Anything you need, we’ve got you covered</h2>
        {/* Get in Touch Button */}
        <button className='mx-auto lg:mx-0 block text-white bg-[#FF3946] border-2 border-[#FF3946] px-8 py-4 rounded-3xl font-semibold hover:text-[#FF3946] hover:bg-white duration-300'>
          Get in Touch
        </button>
      </div>
      {/* Section 2: Web & Graphic Design */}
      <div className='col-span-1 shadow-lg px-5 py-6'>
        {/* Image */}
        <img className='mb-6' src="/images/service-icon1.svg" alt="" />
        {/* Title */}
        <h2 className='mb-6 text-[#314584] font-semibold text-2xl'>Web & Graphic Design</h2>
        {/* Description */}
        <p className='text-[#6E757A] text-sm lg:text-lg'>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
      </div>
      {/* Section 3: Web & App Development */}
      <div className='col-span-1 shadow-lg px-5 py-6'>
        {/* Image */}
        <img className='mb-6' src="/images/service-icon2.svg" alt="" />
        {/* Title */}
        <h2 className='mb-6 text-[#314584] font-semibold text-2xl'>Web & App Development</h2>
        {/* Description */}
        <p className='text-[#6E757A] text-sm lg:text-lg'>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
      </div>
    </div>
  );
}

export default Features;
