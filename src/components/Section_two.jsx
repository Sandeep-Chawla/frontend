import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Section_two(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Minimum 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='md:h-screen w-11/12 md:w-10/12 items-start justify-center relative mx-auto flex flex-col-reverse my-4'>
      <div className='md:h-full w-full md:w-3/5'>
        {isLoading ? (
          <div className='md:w-1/2 h-2/5  mb-4 mx-auto'>
            <Skeleton className='w-full h-full' />
          </div>
        ) : (
          <div className='md:w-1/2 w-full h-2/5  mb-4 mx-auto'>
            <img
              src="project-higlights.png"
              className='w-full h-full object-cover'
              alt="Loaded content"
            />
          </div>
        )}
        {isLoading ? (
          <div className='w-full h-2/5 '>
            <Skeleton className='w-full h-full' />
          </div>
        ) : (
          <div className='w-full h-2/5 '>
            <iframe
              className='w-full h-full'
              src="https://www.youtube.com/embed/bpZA0trSN5Y?si=yZrgzz4PYhHtvvaz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      {isLoading ? (
          <div className='md:w-[40vw] w-full h-[40vh] md:absolute right-0'>
            <Skeleton className='w-full h-full' />
          </div>
        ) : (
      <div className='bg-[#EBE8E8] flex items-center flex-col justify-center px-4 md:px-14 font-bold text-lg capitalize text-primary shadow-card md:w-1/2 h-[40vh] md:h-2/5 md:absolute right-0 z-10 leading-5'><div className='w-full md:text-6xl text-4xl text-center left-0 top-10 uppercase bg-gradient-to-t from-[#837f7f42] from-25% -z-10 to-gray-600 bg-clip-text text-transparent py-2'>{props.title}</div>{props.text}</div>
        )}
    </div>
  );
}

export default Section_two;
