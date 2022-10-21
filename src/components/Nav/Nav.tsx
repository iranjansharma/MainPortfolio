import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

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
    title: 'Home',
    link: ''
  },
  {
    id: 2,
    title: 'About2',
    link: 'about'
  },
  {
    id: 3,
    title: 'Skills',
    link: 'skills'
  },
  {
    id: 4,
    title: 'Projects',
    link: 'projects'
  }]


  return (
    <div
      className={
        colorChange
          ? 'bg-[#242338] duration-300 ease-linear sticky top-0 z-50 drop-shadow-2xl'
          : 'bg-transparent'
      }
    >
      <div className='container flex py-4 px-2 mx-auto justify-between items-center md:text-center md:justify-between md:w-3/5'>
        <Link to='/'>
          <h1 className='font-readex text-2xl md:text-3xl text-white font-black'>
            Ranjan Sharma
          </h1>
        </Link>
        <div className='hidden items-end md:flex md:items-center gap-8'>
          {navItems.map(navItems => (
            <Link to={`/${navItems.link}`} key={navItems.id}>
              <h1 className='font-readex text-base font-light text-white  hover:text-red-500 duration-200'>
                {navItems.title}
              </h1>
            </Link>
          ))}
          <button className='px-6 py-1.5 font-readex bg-transparent border-2 hover:bg-red-500 duration-500 rounded-full'>
            <h1 className='text-base text-white font-readex font-normal hover:text-white duration-300'>
              <a href='https://drive.google.com/file/d/1y651QMtbT1Q6561QwnTT8gZsyjE07CGc/view?usp=sharing' target="_blank">Download CV</a>
            </h1>
          </button>
        </div>
        <div className='flex md:hidden'>
          <GiHamburgerMenu className='text-white justify-items-end items-center w-24' />
        </div>
      </div>
    </div>
  );
};

export default Nav;
