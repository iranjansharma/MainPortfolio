import { FC } from 'react';
import Nav from '../components/Nav/Nav';

const Skills: FC = () => {
  return (
    <div className='bg-[url("/public/assets/bg2.png")] md:bg-cover h-screen'>
      <Nav />
      <h1 className='text-center font-bold text-6xl font-barlow text-white md:pt-10'>SKILLS</h1>
    </div>
  );
};

export default Skills;
