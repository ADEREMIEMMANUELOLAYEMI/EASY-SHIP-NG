 


import React from "react";

const Navbar = () => {
  return (
    <div 
     
    >
      <nav className="absolute top-0 left-0 w-full bg-white bg-opacity-90 flex justify-between items-center px-24 py-4 shadow-md">
        <div className="flex items-center space-x-4">
          <img src="./src/images/Easyship_111900.svg" alt="Logo" className="h-12" />
          <span className="text-2xl font-bold text-gray-900">EasyShip</span>
        </div>
        <div className="flex space-x-10 text-gray-700 font-medium">
          <a href="#" className="text-white px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-md">Home</a>
          <a href="#" className="hover:text-blue-500">Company</a>
          <a href="#" className="hover:text-blue-500">Services</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-7 py-2 rounded-full hover:opacity-90 font-medium shadow-lg">
          Get a Quote
        </button>
      </nav>
    </div>
  );
};

export default Navbar;




