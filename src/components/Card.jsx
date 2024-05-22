import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, fab);

function Card() {
  return (
        <div className="bg-[rgb(235, 232, 232)] rounded-3xl shadow-2xl md:shadow-card p-6 text-center">
            <div className="mb-4 xl:mt-10">
            <FontAwesomeIcon icon="fa-solid fa-chart-line" className='text-gray-600 text-4xl'/>
            </div>
            <h3 className="text-2xl mb-2 xl:mt-6 text-primary font-bold">PRICE TRENDS</h3>
            <p className="text-primary font-semibold text-sm mb-4 text-justify xl:px-10 mt-6 leading-none ">Lorem ipsum is simply dummy text of the printing and
                typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since.</p>
            <button className="bg-primary text-white w-3/4 mx-auto font-bold text-sm md:text-lg xl:text-2xl rounded-3xl xl:mt-6 py-4">LEARN MORE</button>
        </div>

  )
}

export default Card
