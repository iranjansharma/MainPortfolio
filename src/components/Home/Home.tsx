import { FC } from 'react';
import Nav from '../Nav/Nav';
import "./Home.css"

const Home: FC = () => {
  return (
    <div className='bg-[url("/public/assets/hero-bg.jpg")] md:bg-cover h-screen'>
      <Nav />
      <div className='container mx-auto flex flex-col-reverse pt-36 md:flex-row md:items-center md:justify-between md:w-3/5 '>
        <div className="text-white text-center md:text-left md:basis-2/4">
          <h2 className='pt-8'>
            <span className='font-barlow text-3xl font-semibold'>Hello I'm</span><br />
            <span className='font-barlow font-bold text-4xl md:text-6xl md:font-black tracking-wide leading-relaxed'>Ranjan Sharma</span><br />
            <span className='font-barlow text-lg font-semibold leading-loose'>Full-Stack Web Developer MERN.</span>
          </h2>

          <p className='font-lato text-lg font-normal leading-relaxed md:py-4'>
            I Am Enthusiastic Web Developer Eager To Contribute To Team Success Through Hard Work, Attention To Detail, And Excellent Organizational Skills.
          </p>
          <button className='font-barlow px-8 py-2.5 bg-secondary-color text-sm md:text-lg font-semibold hover:bg-red-500 duration-500 rounded-full mr-6 tracking-wider'>Get a Quote</button>
          <button className='font-barlow px-8 py-2.5 bg-red-500 text-sm md:text-lg font-semibold hover:bg-secondary-color duration-500 rounded-full tracking-wider'>About Me</button>
        </div>
        <div className='relative'>
          <img src="/assets/hero-banner.jpg" alt="Ranjan-Sharma" loading='lazy' draggable="false" className='w-[150px] mx-auto md:w-[340px] md:h-[390px] rounded-lg' />
        </div>
      </div >
    </div >

  );
};

export default Home;
