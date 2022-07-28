import { FC } from 'react';
import Nav from '../Nav/Nav';
import "./Home.css"

const Home: FC = () => {
  return (
    <div className='bg-[url("/public/assets/hero-bg.jpg")] bg-cover '>
      <Nav />
      <div className='container mx-auto grid lg:grid-cols-2 gap-x-24 py-24 '>
        <div className="text-white text-center">
          <h2 className="text-left">
            <span>Hello I'm</span><br />
            <strong>Ethan Ward</strong><br /> Web Developer from New York
          </h2>

          <p className="text-left">
            Adipisicing elit. Neque nulla voluptatum eos repellat deserunt nesciunt tempore porro totam.
          </p>
        </div>
        <div className='w-[340px] h-[390px] relative'>
          <img src="/assets/hero-banner.jpg" alt="Ranjan-Sharma" loading='lazy' className='rounded-lg' />
        </div>
      </div >
    </div >

  );
};

export default Home;
