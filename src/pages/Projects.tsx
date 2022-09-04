import { FC } from 'react';
import Card from '../components/Card/Card';
import Nav from '../components/Nav/Nav';

const Projects: FC = () => {
  return (

    <div className='bg-[url("/public/assets/dash.png")] md:bg-cover h-screen'>
      <Nav />
      <h1 className='text-center font-bold text-6xl font-barlow text-white md:pt-10'>PROJECTS</h1>
      <div className='container mx-auto flex flex-wrap px-10 pt-20  md:flex-row md:items-center md:justify-between md:w-3/5'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>

  );
};

export default Projects;
