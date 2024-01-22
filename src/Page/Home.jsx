// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

import jeremiah from '../Assets/jeremiah.jpg';
import displays1 from '../Assets/displays11.png';
import displays2 from '../Assets/displays22.jpg';
import displays3 from '../Assets/displays33.jpg';
import Navbar from '../Components/Navbar';

export default function Home() {

  return (
    <div>
      <Navbar/>
     

      <div className='m-20 flex flex-row justify-center align-middle'>
        <div>
          <p>Hello, I am</p>
          <h1 className='text-6xl font-bold pt-2 pb-2'>Jeremiah Samuel</h1>
          <h3 className='text-4xl font-medium pb-2'>Product Designer and Developer</h3>
          <p className='w-3/6 text-lg mt-2 mb-4'>
            I help businesses and companies reach their goals by designing user-centric
            digital products and interactive experiences
          </p>
          <Link to="mailto:altaconsol@gmail.com">
            <button className='text-sm bg-black text-white pt-3 pb-3 px-6 hover:bg-slate-600'>
              altaconsol@gmail.com
            </button>
          </Link>
        </div>

        <div className='w-2/5'>
          <img src={jeremiah} className='' alt="pic" />
        </div>
      </div>

      <div className='m-20 container'>
        <div className="flex justify-between align-middle">
          <div>
            <h2>A bit about me</h2>
          </div>

          <div className="w-2/5 mr-20">
            <p>
              Hello, My name is Jeremiah, founder of Altacon Solutions. I am currently
              doing this and that. You can check out my projects on...
            </p>
          </div>
        </div>
      </div>

      <div className='m-20 container'>
        <div className='flex justify-between'>
          <div>
            <p className='text-sm'>FEATURED WORK</p>
          </div>

          <div className='mr-20'>
            <ul className='flex justify-center'>
              <li className="px-10 text-sm">UI/UX DESIGN</li>
              <li className="px-10 text-sm">WEB DEVELOPMENT</li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center align-middle m-20'>
          <div>
            <h2 className='z-10 relative text-center top-64 font-semibold text-xl opacity-0 group-hover:opacity-100 transition-opacity'>
              MyFlag
            </h2>

            <div className='m-2 h-[480px] w-[360px] hover:blur-lg '>
              <img src={displays1} className="h-full" alt="Project A" />
            </div>

            <div className='bg-red-500 m-2 h-[480px] w-[360px]'>
              <img src={displays2} className="h-full" alt="Project B" />
            </div>
          </div>

          <div className='mt-20'>
            <div className='bg-red-500 mb-2 h-[480px] w-[360px]'>
              <img src={displays3} className="h-full" alt="Project C" />
            </div>

            <div className='bg-red-500 h-[480px] w-[360px]'>
              <img src={displays3} className="h-full" alt="Project C" />
            </div>
          </div>
        </div>
      </div>

      <div className='container m-20 text-center'>
        <div className="text-lg font-medium pr-12 mt-2 mb-8">
          <p>Personal Projects</p>
        </div>
        <div className='grid grid-cols-3 grid-rows-1 mr-20 scale-90'>
          <div className='bg-red-500 m-2 h-[480px]'>
            <img src={displays1} className="h-full" alt="Project A" />
          </div>

          <div className='bg-red-500 m-2 h-[480px]'>
            <img src={displays2} className="h-full" alt="Project B" />
          </div>

          <div className='bg-red-500 m-2 h-[480px]'>
            <img src={displays3} className="h-full" alt="Project C" />
          </div>
        </div>
      </div>

      <div className="m-20 text-center container">
        <h3 className="text-lg font-medium pr-12 mt-20 mb-8">Contact Me</h3>
        <p className="font-normal pr-12 mt-2 mb-8">
          If you are looking to hire a product designer or you need a front-end developer,
          I am currently available for freelance work.
        </p>
        <Link to="mailto:altaconsol@gmail.com">
          <button className='text-sm bg-black text-white pt-3 pb-3 px-6 mr-10 hover:bg-slate-600'>
            altaconsol@gmail.com
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  )

} 

 

