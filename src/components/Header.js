// src/Header.js
import React from 'react';
import logo1 from '../Images/DST_logo.png'
import logo2 from '../Images/BU logo.png'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4" style={{backgroundColor:"white",display:"flex",justifyContent:"space-between"}}>
      {/* First Image */}
      <img
        src={logo1} // Replace with the actual image source
        alt="Image 1"
        className="w-21 h-18 "
        style={{width:"15rem",height:"6rem",marginLeft:"2rem"}}
      />
      
      {/* Second Image */}
      <img
        src={logo2} // Replace with the actual image source
        alt="Image 2"
        className="w-21 h-18"
        style={{width:"10rem",height:"7rem",marginRight:"2rem"}}
      />
    </header>
  );
};

