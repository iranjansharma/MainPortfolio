import { FC } from 'react';
import Nav from '../../components/Nav/Nav';


const Home: FC = () => {
  return (
    <div>
      <div className='bg-[url("/public/assets/hero-bg.jpg")] md:bg-[url("/public/assets/dash.png")] md:bg-cover h-screen'>
        <Nav />
        <div className='container mx-auto flex flex-col-reverse pt-36 md:flex-row md:items-center md:justify-between md:w-3/5'>
          <div className="text-white text-center md:text-left md:basis-2/4">
            <h2 className='pt-8'>
              <span className='font-readex text-3xl font-semibold'>Hello I'm</span><br />
              <span className='font-readex font-bold text-4xl md:text-[56px] md:font-black leading-relaxed'>Ranjan Sharma</span><br />
              <span className='font-barlow text-lg font-semibold leading-loose'>Full-Stack Web Developer MERN.</span>
            </h2>
            <p className='font-readex text-lg font-light leading-relaxed mx-2 my-2 md:py-4'>
              I Am Enthusiastic Web Developer Eager To Contribute To Team Success Through Hard Work, Attention To Detail, And Excellent Organizational Skills. A Clear Understanding Of &nbsp;<img src='https://resume.ranjansharma.tech/assets/javascript.svg' className='w-4 inline mt-[-5px]' />&nbsp; Javascript, ⚛️ React JS, And Training In MERN Stack. Motivated To Learn, Grow And Excel In The Dev Industry.
            </p>
            <button className='font-readex px-8 py-2.5 bg-red-500 border-2 text-sm md:text-lg font-normal hover:bg-secondary-color duration-500 rounded-full mr-6 tracking-wider'>Get Quote</button>
            <a href="https://resume.ranjansharma.tech/assets/Ranjan_Resume.pdf" className='font-readex px-8 py-2.5 bg-transparent border-2 text-sm hover:bg-red-500 md:text-lg font-light duration-500 rounded-full tracking-wider'>Resume</a>
          </div>
          <div className='relative'>
            <img src="/assets/profile-pic3.png" alt="Ranjan-Sharma" loading='lazy' draggable="false" className='w-[200px] mx-auto md:w-[380px] md:h-[390px] rounded-lg animate' />
          </div>
        </div >
      </div >

    </div>

  );
};

export default Home;
