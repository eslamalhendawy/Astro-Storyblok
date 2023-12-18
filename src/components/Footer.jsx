import React from 'react';

function Footer() {
  return (
    // Footer Container
    <div className='w-full p-6 bg-[#314584] text-center flex flex-col text-white justify-center items-center'>
      {/* Company Name */}
      <h5 className='font-bold'>DOOB</h5>
      {/* Main Title */}
      <h3 className='text-[#FF3946] text-3xl font-bold my-3'>CREATIVITY ABOVE</h3>
      {/* Navigation Links */}
      <ul className='my-3 md:flex md:space-x-4'>
        <li className='my-2 font-bold'>
          {/* Home Link */}
          <a href="#home">Home</a>
        </li>
        <li className='my-2 font-bold'>
          {/* Products Link */}
          <a href="#home">Products</a>
        </li>
      </ul>
      {/* Copyright */}
      <p className='mb-4'>© 2023 - Doob, All Rights Reserved</p>
    </div>
  );
}

export default Footer;
