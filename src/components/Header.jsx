// Header.js
import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);

function Header({ toggleSidebar }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="flex justify-between items-center w-10/12 py-4 mx-auto bg-transparent" >
      <div className=" w-1/2 md:w-1/6">
        <Link to='/'>
        <img src="logo.png" alt="" className="" />
        </Link>
      </div>
      <div className="mx-2 flex gap-4 items-center">
    <div className=" bg-[#ff0000] text-white whitespace-nowrap rounded-full px-4 leading-none text-[10px] h-fit p-2"><Link to={'/register'}>{isMobile?"Post Property":'Post Your Property For Free'}</Link></div>
      <div className="relative text-4xl z-[102]" id="menuIcon" onClick={toggleSidebar}>
        <FontAwesomeIcon id="iconBar" icon="fa-solid fa-list" />
      </div>
      </div>
    </header>
  );
}

export default Header;
