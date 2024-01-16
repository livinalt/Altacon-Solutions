import React from 'react';
import displays1 from '../Assets/displays11.png'
import displays2 from '../Assets/displays22.jpg'
import displays3 from '../Assets/displays33.jpg'


const PersonalWorks = () => {
  return (
    <div>
      <div className='container m-20 text-center'>
        <div className="text-lg font-medium pr-12 mt-2 mb-8">
          <p>Personal Projects</p>
        </div>
        <div className='grid grid-cols-3 grid-rows-1 mr-20 scale-90'>
              
                  <div className='bg-red-500 m-2 h-[480px]'>
                  <img src={displays1} 
                  className="h-full" 
                  alt="Project A" /> 
                    </div>     

                  <div className='bg-red-500 m-2 h-[480px]'>
                  <img src={displays2} 
                  className="h-full" 
                  alt="Project B" />
                    </div>  

                  <div className='bg-red-500 m-2 h-[480px]'>
                  <img src={displays3} 
                  className="h-full" 
                  alt="Project C" />
                     </div>
                            
        </div>
      </div>
    </div>
  );
}

export default PersonalWorks
