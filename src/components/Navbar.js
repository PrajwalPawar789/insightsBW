import React from 'react';
import { Link } from 'react-router-dom';
// import { IoReorderThreeSharp } from 'react-icons/io5'; // Import the icon
// import { BiSearch } from 'react-icons/bi'

function Navbar() {
  return (
    <nav className="p-4">
      <div className="border-b border-black pb-2 mb-4 text-center flex items-center justify-center">
        {/* <Link to="/" className="text-black text-2xl font-bold flex items-center"> Use flex to align icon and text */}
          
          {/* <IoReorderThreeSharp className="mr-2  text-black text-2xl font-bold" /> */}
          {/* <BiSearch className="text-black text-2xl font-bold" />  */}
          
          <span className="flex-grow text-center text-black text-2xl font-bold">InsightsBW</span> {/* Text (flex-grow for centering) */}
        {/* </Link> */}
      </div>
      <ul className="flex space-x-8 cursor-pointer text-black justify-center font-semibold text-[15px]">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/magazine">Magazine</Link></li>
        <li><Link to="/news">Business Women's Corner</Link></li>
        {/* <li><Link to="/sports">Sports</Link></li> */}
        <li><Link to="/leadership">Leadership</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      
    </nav>
  );
}

export default Navbar;
