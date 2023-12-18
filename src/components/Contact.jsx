import React from "react";

function Contact() {
  return (
    // Contact Form Container
    <div className="container mx-auto px-6 py-12">
      {/* Contact Title */}
      <p className="text-center lg:text-left font-bold lg:text-lg text-[#FF3946]">CONTACT US</p>
      <h2 className="text-center lg:text-left text-[#314584] font-semibold text-3xl lg:text-5xl my-6">Get in Touch</h2>
      <div>
        <div className="flex flex-col space-y-6 lg:space-y-0 lg:space-x-6 justify-start lg:flex-row items-center">
          {/* Email Input */}
          <input className="text-[#314584] w-4/5 md:w-3/5 xl:w-2/5 bg-[#F1F1EF] p-3 rounded-lg focus:outline-none" type="text" placeholder="Your Email..." />
          {/* Subject Input */}
          <input className="text-[#314584] w-4/5 md:w-3/5 xl:w-2/5 bg-[#F1F1EF] p-3 rounded-lg focus:outline-none" type="text" placeholder="Subject..." />
        </div>
        <div className="mt-6 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Message Input */}
          <input className="text-[#314584] bg-[#F1F1EF] w-4/5 md:w-3/5 xl:w-2/5 p-3 rounded-lg focus:outline-none block mx-auto lg:mx-0" type="text" placeholder="Message..." />
          {/* Send Message Button */}
          <button className='mx-auto lg:mx-0 block text-white bg-[#FF3946] border-2 border-[#FF3946] px-8 py-4 rounded-3xl font-semibold hover:text-[#FF3946] hover:bg-white duration-300'>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

