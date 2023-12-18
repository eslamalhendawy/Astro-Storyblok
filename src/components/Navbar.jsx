import { useState, useRef } from "react";
import { storyblokEditable } from '@storyblok/astro'

function Navbar() {
  // State for managing the visibility of the mobile menu
  const [menuVisible, setMenuVisible] = useState(false);

  // Reference to the menu element
  const menu = useRef(null);

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    if (menuVisible) {
      // Hide the menu
      setMenuVisible(false);
      menu.current.classList.remove("top-0");
      menu.current.classList.add("top-[-1000px]");
      menu.current.classList.remove("opacity-100");
      document.body.classList.remove("overflow-hidden");
    } else {
      // Show the menu
      setMenuVisible(true);
      menu.current.classList.add("top-0");
      menu.current.classList.remove("top-[-1000px]");
      menu.current.classList.add("top-100");
      document.body.classList.add("overflow-hidden");
    }
  };

  return (
    // Navbar Container
    <div  id="home" className="container mx-auto flex items-center justify-between p-6 relative border-b-2 border-[#e6e6e6]">
      {/* Logo */}
      <div>
        <a href="/">
          <img src="/images/logo.svg" alt="" />
        </a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row absolute md:static z-[2] md:z-auto left-0 p-4 shadow-md md:shadow-none w-full md:w-auto md:space-x-4 sm:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300">
        <li className="text-xl font-semibold mb-4 md:mb-0 text-[#314584] hover:text-[#FF3946] duration-300">
          <a href="/">Home</a>
        </li>
        <li className="text-xl font-semibold text-[#314584] hover:text-[#FF3946] duration-300">
          <a href="/products">Products</a>
        </li>
      </ul>
      
      {/* Mobile Menu */}
      <div ref={menu} className="absolute w-screen opacity-100 bg-white top-[-1000px] left-0 py-16 transition-all duration-300">
        {/* Close Button */}
        <button className="absolute right-0 top-0 p-4 text-[#314584] hover:text-[#FF3946] duration-300" onClick={toggleMenu}>
          <i className="fa-solid fa-x text-3xl" aria-hidden="true"></i>
        </button>
        {/* Mobile Menu Items */}
        <ul className="text-[#314584]">
          <li className="text-xl border-b-2 border-[#e6e6e6] px-8 py-4 hover:text-[#FF3946] duration-300">
            <a href="/">Home</a>
          </li>
          <li className="text-xl border-b-2 border-[#e6e6e6] px-8 py-4 hover:text-[#FF3946] durationduration-300">
            <a href="/products">Products</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button onClick={toggleMenu} className="md:hidden text-[#314584] hover:text-[#FF3946] duration-300">
        <i className="fa-solid fa-bars" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default Navbar;
