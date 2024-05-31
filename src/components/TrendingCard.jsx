import React from 'react';

const TrendingCard = ({property}) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-2">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img src="https://www.theapexgroup.in/images/projects/ongoing/kremlin1.png" alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
        {property.name}
        </h5>
        <p className="block font-sans text-base text-black font-semibold leading-relaxed ">
          $ 1.13 - 3.20 Crore
        </p>
      </div>
      <div className="p-6 pt-0">
        <button 
          data-ripple-light="true" 
          type="button" 
          className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default TrendingCard;
