import { FC } from 'react';

const Card: FC = () => {
  return (
    <div className='flex justify-center flex-grow pb-10 md:m-4 md:pb-8'>
      <div className='rounded-lg shadow-lg bg-white max-w-xs'>
        <a href='#!' data-mdb-ripple='true' data-mdb-ripple-color='light'>
          <img
            className='rounded-t-lg'
            draggable='false'
            src='https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/1Td2vgC8TOCkJIx2FSDg'
            alt='Skills'
          />
        </a>
        <div className='p-6 text-center md:my-6'>
          <h5 className='text-gray-900 font-lato hover:text-pink-600 duration-200 text-xl font-black mb-2'>
            Mastering Kubernetes
          </h5>
          <p className='text-gray-700 font-barlow text-lg font-medium text-center mb-4'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
