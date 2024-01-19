import React from 'react'
import jeremiah from '../Assets/jeremiah.jpg'

const Hero = () => {
  return (
    <div>

    <div className='m-20 flex flex-row justify-center align-middle'>
            <div className=''>
                <p className=''> Hello, I am
                    </p>
                <h1 className='text-6xl font-bold pt-2 pb-2'>Jeremiah Samuel
                    </h1>
                <h3 className='text-4xl font-medium pb-2'>Product Designer and Developer
                    </h3>
                <p className='w-3/6 text-lg mt-2 mb-4'>I help businesses and companies 
                    reach their goals by designing user-centric
                     digital products and interactive experiences
                     </p>
                <button className ='text-sm bg-black text-white pt-3 pb-3 px-6 hover:bg-slate-600'><a href="mailto:altaconsol@gmail.com" >
                    <img src="" alt=""/>altaconsol@gmail.com</a>
                    </button>

            </div>

            <div className = 'w-2/5'> 
                <img src= {jeremiah} className=''  alt="pic"/>
            </div>
            
    </div>

    </div>
  )
}

export default Hero