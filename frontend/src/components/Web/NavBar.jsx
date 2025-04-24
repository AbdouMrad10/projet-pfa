import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Wahb-logo.png';
import user from '../../assets/user.png';
import { FaCog, FaOutdent, FaSign, FaSignOutAlt, FaUser } from 'react-icons/fa';

export const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="text-white z-20 absolute top-3  left-0 right-0">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-20 ml-10">
          <img src={logo} alt="Logo" className="h-10 w-30" />

          <div className="space-x-6">
            <Link to="/" className="font-poppins text-[15px] leading-[100%] tracking-[-0.015em] hover:text-Color2 ease-in-out duration-200">Home</Link>
            <Link to="/campaigns" className="font-poppins text-[15px] leading-[100%] tracking-[-0.015em] hover:text-Color2 ease-in-out duration-200">Campaigns</Link>
            <Link to="/about" className="font-poppins text-[15px] leading-[100%] tracking-[-0.015em] hover:text-Color2 ease-in-out duration-200">About</Link>
            <Link to="/contact" className="font-poppins text-[15px] leading-[100%] tracking-[-0.015em] hover:text-Color2 ease-in-out duration-200">Contact</Link>
          </div>
        </div>

        <div className="space-x-4 flex items-center mr-10 relative" ref={dropdownRef}>
          <button className="bg-[#BF8C6F] text-white font-poppins text-[16px] leading-[100%] tracking-[-0.015em] py-2 px-8 border-2 border-Color4 rounded mt-1">
            Donate Now
          </button>

          <div className="relative">
            <img 
              src={user} 
              alt="User" 
              className="cursor-pointer" 
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <>
                <div className="absolute -right-3 top-full mt-3 w-28 bg-[#FFFFFF] rounded-md shadow-lg z-40 before:content-[''] before:absolute before:-top-1 before:right-6 before:w-3 before:h-3 before:-z-10 before:bg-[#FFFFFF] before:transform before:rotate-45 before:border-t ">
                  <div className="p-1">
                    <Link 
                      to="/profile" 
                      className="flex items-center z-50 justify-start px-4 rounded-md py-2 text-sm text-[#474747] hover:text-[#1a1a1a]  hover:bg-Color2 gap-2 transition-all duration-200 ease-in-out"
                    >
                      <FaUser className="text-sm" />
                      <span>Profile</span>
                    </Link>
                    <Link 
                      to="/settings" 
                      className="flex items-center justify-start px-4 rounded-md py-2 text-sm text-[#474747] hover:text-[#1a1a1a]  hover:bg-Color2 gap-2 transition-all duration-200 ease-in-out"
                    >
                      <FaCog className="text-sm" />
                      <span>Settings</span>
                    </Link>
                    <Link 
                      to="/logout" 
                      className="flex items-center justify-start px-4 rounded-md py-2 text-sm text-[#474747] hover:text-[#1a1a1a]  hover:bg-Color2 gap-2 transition-all duration-200 ease-in-out"
                    >
                      <FaSignOutAlt className="text-sm" />
                      <span>Logout</span>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};