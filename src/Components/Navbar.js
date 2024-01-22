import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

export default function Navbar() {
  const [activeNavbar, setActiveNavbar] = useState("Home");

  const handleNavItemClick = (itemName) => {
    setActiveNavbar(itemName);
  };

  return (
    <div className='bg-slate-400'>
      <div className="p-10 flex justify-between">
        <img className='w-8 ml-10' src={logo} alt='logo' />
        <div className="mr-8">
          <ul className='flex'>
            <li><Link to="/Home" onClick={() => handleNavItemClick("Home")}><span className='p-5'>Home</span></Link></li>
            <li><Link to="/About" onClick={() => handleNavItemClick("About")}><span className='p-5'>About</span></Link></li>
            <li><Link to="/Work" onClick={() => handleNavItemClick("Work")}><span className='p-5'>Work</span></Link></li>
            <li><Link to="/Contact" onClick={() => handleNavItemClick("Contact")}><span className='p-5'>Contact</span></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
