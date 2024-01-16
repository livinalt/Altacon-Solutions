import React from 'react'
import displays1 from '../Assets/displays11.png'
import displays2 from '../Assets/displays22.jpg'
import displays3 from '../Assets/displays33.jpg'

const FeaturedWork = () => {
  return (
    <div className='m-20 container'>

      <div className='flex justify-between'>
                  <div className="">
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
           <h2 className='z-10 relative text-center top-64 font-semibold text-xl opacity-0 group-hover:opacity-100 transition-opacity'>MyFlag</h2>

              <div className='m-2 h-[480px] w-[360px] hover:blur-lg '>
                  <img src={displays1} 
                  className="h-full" 
                  alt="Project A" /> 
                  </div>     

              <div className='bg-red-500 m-2 h-[480px] w-[360px]'>
                  <img src={displays2} 
                  className="h-full" 
                  alt="Project B" />
                  </div>  

           </div>

           <div className='mt-20'>
              <div className='bg-red-500 mb-2 h-[480px] w-[360px]'>
                  <img src={displays3} 
                  className="h-full" 
                  alt="Project C" />
                  </div>
              
              <div className='bg-red-500 h-[480px] w-[360px]'>
                  <img src={displays3} 
                  className="h-full" 
                  alt="Project C" />
                  </div>
           </div>
                        
        </div>

    </div>
  )
}

export default FeaturedWork