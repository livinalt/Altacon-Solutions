import React from 'react';
import behance from '../Assets/icons/Dark/behance.png'
import twitter from '../Assets/icons/Dark/twitter.png'
import linkedin from '../Assets/icons/Dark/linkedin.png'
import github from '../Assets/icons/Dark/github.png'

const Footer = () => {
  return (
    <div className='container'>
      <hr className='ml-20' />
      <div className=" flex justify-between ">
        <div className=''>          
          <p className="text-sm text-left m-20">Made by <span className='text-sm font-medium'>Altacon Solutions</span> &copy;2023 </p>
        </div>

        <div className="flex justify-center align-middle mt-20">
          <a href="https://behance.net/macfd" className='mb-11 px-2 scale-50'><img src={behance} alt='behance'/></a>
          <a href="https://twitter.com/jeremiahdsamuel" className='px-2 scale-75'><img src={twitter} alt='twitterX'/></a>
          <a href="https://linkedin.com/in/your-linkedin-profile" className='px-2 scale-75'><img src={linkedin} alt='linked-in'/></a>
          <a href="https://github.com/livinalt" className='px-2 scale-75'><img src={github} alt='git-hub'/></a>
        
        </div>
      </div>
    </div>
  );
}

export default Footer;
