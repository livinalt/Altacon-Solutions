import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import displays55 from '../Assets/displays55.jpg';


export default function Work() {
  return (
    <div>

      <Navbar/>
      

      <div className="">
        <img src={displays55} className="" alt="" />
      </div>

      
      <div className='m-24'>
      <div className="">
        <p className='text-xl font-semibold'>G300</p>

        <div className="flex justify-center align-middle mt-3">
          <section className="mr-20">
            <h4 className='text-sm font-light uppercase'>Client</h4>
            <p className='text-lg font-semibold pr-5'>Meticp</p>
          </section>

          <section className="mx-20">
            <h4 className='text-sm font-light uppercase'>Role</h4>
            <p className='text-lg font-semibold pr-5'>Product Designer</p>
          </section>

          <section className="mx-20">
            <h4 className='text-sm font-light uppercase'>Industry</h4>
            <p className='text-lg font-semibold pr-5'>Education</p>
          </section>

          <section className="mx-20">
            <h4 className='text-sm font-light uppercase'>Duration</h4>
            <p className='text-lg font-semibold pr-5'>1 month</p>
          </section>

          <section className=" mx-20">
            <h4 className='text-sm font-light uppercase'>Team</h4>
            <div className='flex text-lg font-semibold'>
              <p className="">Mossa Dhili</p>
              <p className="">Mossa Dhili</p>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-32">
        <h4 className='text-sm font-light uppercase'>Defining The Problem</h4>
        <p className='text-lg font-semibold'> Designing a product that helps mentors keep track of their mentees and meet right on time
           </p>
      </div>

      </div>
      
      
      
      <div className="">
        <h4 className="">Launch Prototype</h4>
        <hr />
        {/* <video controls src="/querySelector.mp4" "preiewVideo" type="video/mkv"></video> */}
      </div>

      <div className="">
        <div className="">
          <img src="/screens.jpg" className="" alt="color-palette" />
        </div>

        <div className="">
          <h4>Color</h4>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate quaerat repellendus
            cupiditate eligendi perspiciatis consectetur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sit voluptate quaerat repellendus cupiditate eligendi perspiciatis
            consectetur
          </p>
        </div>
      </div>

      {/* typography */}
      <div className="">
        <div className="">
          <h4>Type</h4>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate quaerat
            repellendus cupiditate eligendi perspiciatis consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sit voluptate quaerat repellendus cupiditate eligendi
            perspiciatis consectetur
          </p>
        </div>

        <div className="">
          <img src="/screens.jpg" className="" alt="typography" />
        </div>
      </div>

      <div className="">
        <div className="">
          <h4>Conclusion</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi doloribus
            beatae sit quae nam magnam vel, modi eaque excepturi eos molestias quibusdam dolor
            animi, odio enim repellendus quod accusantium.
          </p>
        </div>

        <div>
          <img src="/screens.jpg" className="" alt="" />
        </div>
      </div>
      <div className="">
        <h4 className="">Next Project</h4>
        <hr className="" />
      </div>


      <Footer/>

    </div>
  );
}

