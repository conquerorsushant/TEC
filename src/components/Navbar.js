// src/Navbar.js
import React from 'react';

export default function Navbar  ()  {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">


        {/* Navigation Links */}
        <ul className="flex space-x-4" style={{marginLeft:"-7rem"}}>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Network</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Events</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Achievements</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Contact Us</a>
          </li>
        </ul>

        {/* Social Media Links */}
        <ul className="flex space-x-4" style={{marginRight:"-6rem"}}>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


