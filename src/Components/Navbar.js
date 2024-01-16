import React from 'react';
import {useState} from 'react';
import logo from '../Assets/logo.png'


const Navbar = () => {

  const [setNavbar, activeNavbar] = useState("Home");

  const handleNavItemClick = (itemName) => {activeNavbar(itemName)
    };  

  return (
    <div className='bg-slate-400'>
      <div className="p-10 flex justify-between">
            <img className='w-8 ml-10' 
              src={logo} 
              alt='logo'/>
        
        <div className="mr-8">          
            <ul className='flex'>
              <li><a href="/index1.html" onClick={() => handleNavItemClick("Home")}><span className='p-5'>Home</span></a></li>
              <li><a href="/index1.html" onclick = {() => handleNavItemClick("About")}><span className='p-5'>About</span></a></li>
              <li><a href="/index2.html" onClick = { () => handleNavItemClick("Work")}><span className='p-5'>Work</span></a></li>
              <li><a href="/index1.html" onClick = { () => handleNavItemClick("Contact")}><span className='p-5'>Contact</span></a></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
