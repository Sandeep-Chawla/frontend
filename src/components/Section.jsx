import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Section(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Minimum 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="md:h-screen w-11/12 md:w-10/12 items-end justify-center relative mx-auto flex flex-col">
      {isLoading ? (
        <Skeleton className="w-6/12 md:h-2/5 absolute top-40 left-0" />
      ) : (
        <div className="bg-[#EBE8E8] flex items-center py-10 px-14 font-bold my-4 md:my-0 text-lg capitalize text-primary shadow-card w-full md:w-1/2 md:h-2/5 md:absolute left-0">{props.text}</div>
      )}
      <div className="h-full md:w-3/5">
        <div className="w-full h-2/5  mb-4">
          {isLoading ? (
            <Skeleton className="w-full h-full" />
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/bpZA0trSN5Y?si=yZrgzz4PYhHtvvaz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="md:w-1/2 h-2/5  mx-auto my-4 md:my-0">
          {isLoading ? (
            <Skeleton className="w-full h-full" />
          ) : (
            <img
              src={props.img}
              className="w-full h-full object-cover"
              alt="Loaded content"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Section;
