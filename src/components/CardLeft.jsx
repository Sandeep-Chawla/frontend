import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function CardLeft(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Minimum 2 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full h-[90vh]">
      <div className="w-11/12 md:w-10/12 h-5/6 mx-auto flex flex-col relative">
          <div className={`w-full md:w-3/4 h-3/4 md:absolute right-0 bottom-0 ${isLoading ? "" :"bg-primary"}`}>
            {isLoading ? (
            <Skeleton className="w-full h-full" />
        ) : (<img src={props.img} className="h-full w-full" alt={props.title}/>)}</div>
        
        <div className={`w-full md:w-2/4 px- h-1/2 md:absolute left-0 top-0 ${isLoading ? "" :"bg-['#EBE8E8']"}`}>{isLoading ? (
            <Skeleton className="w-full h-full" />
        ) : (<div before={props.title} className={`bg-[#EBE8E8] flex items-center px-10 font-bold text-lg capitalize text-primary shadow-card w-full h-full absolute left-0 z-10 before:content-[attr(before)] before:w-full before:absolute before:text-6xl before:text-center before:left-0 before:top-10 before:uppercase before:bg-gradient-to-t before:from-[#837f7f42] before:from-25% before:-z-10 before:to-gray-600 before:bg-clip-text before:text-transparent`}>{props.text}</div>)}</div>
      </div>
    </div>
  );
}

export default CardLeft;
