import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
library.add(fas, fab);

function Card(props) {
  return (
        <div className="bg-[#fff] rounded-3xl shadow-xl p-6 text-center">
            <div className="mb-4 xl:mt-10">
            <img src={props.icon} className='text-gray-600 w-9 mx-auto'/>
            </div>
            <h3 className="text-2xl mb-2 xl:mt-6 text-primary font-bold">{props.title}</h3>
            <p className="text-primary font-semibold text-sm mb-4 text-justify xl:px-10 mt-6 leading-6">{props.description}</p>
            <Link to={props.url} className="bg-primary block text-white w-3/4 mx-auto font-bold text-sm md:text-sm xl:text-md rounded-3xl xl:mt-6 py-3">LEARN MORE</Link>
        </div>

  ) 
}

export default Card
