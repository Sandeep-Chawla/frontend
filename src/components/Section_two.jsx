import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Section_two() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Minimum 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-screen w-11/12 md:w-10/12 items-start justify-center relative mx-auto flex flex-col'>
      <div className='h-full w-3/5'>
        {isLoading ? (
          <div className='w-1/2 h-2/5  mb-4 mx-auto'>
            <Skeleton className='w-full h-full' />
          </div>
        ) : (
          <div className='w-1/2 h-2/5  mb-4 mx-auto'>
            <img
              src="https://images.unsplash.com/photo-1612531726554-4fd9f157132d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <div className='w-[40vw] h-[40vh] absolute right-0'>
            <Skeleton className='w-full h-full' />
          </div>
        ) : (
      <div className='bg-gray-400 shadow-card w-1/2 h-2/5 absolute right-0'></div>
        )}
    </div>
  );
}

export default Section_two;
