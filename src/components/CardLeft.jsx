import React from 'react'

function CardLeft() {
  return (
    <div className='w-full h-[90vh]'>
        <div className="w-11/12 md:w-10/12 h-5/6 mx-auto flex flex-col relative">
            <div className='w-full md:w-3/4 h-3/4 md:absolute right-0 bottom-0 bg-primary'></div>
            <div className='w-full md:w-2/4 px- h-3/4 md:absolute left-0 top-0 bg-black'></div>
        </div>
      
    </div>
  )
}

export default CardLeft
