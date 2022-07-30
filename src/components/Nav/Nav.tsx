import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav: FC = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  const navItems = [{
    id: 1,
    title: 'Home'
  },
  {
    id: 2,
    title: 'About'
  },
  {
    id: 3,
    title: 'Skills'
  },
  {
    id: 4,
    title: 'Projects'
  }]


  return (
    <div
      className={
        colorChange
          ? 'bg-[#242338] duration-300 ease-linear sticky top-0 z-50 '
          : 'bg-transparent'
      }
    >
      <div className='container flex py-4 px-2 mx-auto md:text-center md:justify-between md:w-3/5'>
        <div>
          <Link to='/'>
            <h1 className='text-2xl md:text-3xl text-white font-black font-lato'>
              Ranjan Sharma
            </h1>
          </Link>
        </div>
        <div className='hidden items-end md:flex md:items-center gap-8'>
          {navItems.map(navItems => (
            <Link to={`/${navItems.title}`} key={navItems.id}>
              <h1 className='font-lato text-base text-white font-bold hover:text-red-500 duration-200'>
                {navItems.title}
              </h1>
            </Link>
          ))}
          <button className='px-6 py-1.5 font-lato bg-red-500 duration-500 rounded-full'>
            <h1 className='text-base text-white font-bold hover:text-white duration-300'>
              <a href='/Ranjan_Resume.pdf' download='Ranjan_Resume.pdf'>Download CV</a>
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
