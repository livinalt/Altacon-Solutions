import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import displays55 from '../Assets/displays55.jpg';
import screens from '../Assets/screens.jpg';
import screens11 from '../Assets/screens11.jpg';


export default function Work() {
  return (
    <div>

      <Navbar/>
      

      <div className="">
        <img src={displays55} 
            className="grayscale" 
            alt="" />
      </div>

      
      <div className='m-20'>
      <div className="">
        <p className='text-xl font-semibold'>G300</p>

        <div className="flex justify-center align-middle mt-3">
          <section className="mr-20">
            <h4 className='text-sm font-light uppercase'>Client</h4>
            <p className='text-m font-semibold pr-5'>Meticp</p>
          </section>

          <section className="mx-20">
            <h4 className='text-sm font-light uppercase'>Role</h4>
            <p className='text-m font-semibold pr-5'>Product Designer</p>
          </section>

          <section className="mx-20">
            <h4 className='text-sm font-light uppercase'>Industry</h4>
            <p className='text-m font-semibold pr-5'>Education</p>
          </section>

          <section className="mx-20">
            <h4 className='text-sm font-light uppercase mr-4'>Duration</h4>
            <p className='text-m font-semibold pr-8'>1 month</p>
          </section>

          <section className=" mx-20">
            <h4 className='text-sm font-light uppercase'>Team</h4>
            <div className='flex text-m font-semibold'>
              <p className="">Mossa Dhili</p>
              <p className="pl-5">Mossa Dhili</p>
            </div>
          </section>
        </div>
      </div>

    </div>

    <div className="ml-20 mt-32">
        <h4 className='text-sm font-normal uppercase mb-2'>Defining The Problem</h4>
        <p className='text-lg font-semibold'> Designing a product that helps mentors keep track of their mentees and meet right on time
           </p>
      </div>
      
      
      
      <div>
          <div className="m-20 mt-24 ">
            <h4 className="text-sm font-normal uppercase">Launch Prototype</h4>
            <hr className='w-32 stroke-black  mb-10' />        
          </div>

      <img src={displays55} 
            alt="" 
            className="w-full grayscale" />
      </div>

      <div className="m-20 ml-40 flex justify-center align-center">
        {/* <div className=""> */}
          <img src={screens11} 
              className="scale-75" 
              alt="color-palette" />
        {/* </div> */}

        <div className=" m-10 pt-32">
          <h4 className="text-sm font-normal uppercase mb-4">Color</h4>
          <p className="text-lg font-semibold w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate quaerat repellendus
            cupiditate eligendi perspiciatis consectetur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sit voluptate quaerat repellendus cupiditate eligendi perspiciatis
            consectetur
          </p>
        </div>
      </div>

      {/* typography */}
      <div className="m-20 ml-40 flex justify-center align-center ">
        <div className="ml-20 pt-36">
          <h4 className='text-sm font-normal uppercase mb-4'>Type</h4>
          <p className="text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate quaerat
            repellendus cupiditate eligendi perspiciatis consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sit voluptate quaerat repellendus cupiditate eligendi
            perspiciatis consectetur
            </p>
          </div>

        {/* <div className=""> */}
          <img src={screens11} 
              className="scale-75 mr-24" 
              alt="typography" />
        {/* </div> */}
      </div>

      <div className="m-20">
        <div className="">
          <h4 className='text-sm font-normal uppercase mb-4'>Conclusion</h4>
          <p className='text-lg font-semibold mb-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi doloribus
            beatae sit quae nam magnam vel, modi eaque excepturi eos molestias quibusdam dolor
            animi, odio enim repellendus quod accusantium.
          </p>
        </div>

        {/* <div> */}
          <img src={screens} 
              className=" w-full" 
              alt="" />
        {/* </div> */}
      </div>

      <div className="flex flex-col text-center mt-20 mb-20 ">
        <a href="http://"><h4 className="text-lg font-bold">Next Project</h4></a>
        <hr className='w-32 ml-[610px] stroke-black  mb-10'/>        
      </div>
      
      <hr className="" />


      <Footer/>

    </div>
  );
}

