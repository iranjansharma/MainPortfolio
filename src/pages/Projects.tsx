import { FC } from 'react';
import Card from '../components/Card/Card';
import Nav from '../components/Nav/Nav';

const Projects: FC = () => {
  return (

    <div className='bg-[url("/public/assets/hero-bg.jpg")] md:bg-cover h-screen'>
      <Nav />
      <Card />
    </div>

  );
};

export default Projects;
