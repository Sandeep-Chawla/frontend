// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);

function Header({ toggleSidebar }) {
  return (
    <header className="flex justify-between items-center w-10/12 py-4 mx-auto bg-transparent" >
      <div className=" w-1/2 md:w-1/6">
        <Link to='/'>
        <img src="logo.png" alt="" className="" />
        </Link>
      </div>
      <div className="flex gap-4 items-center">
    <div className=" bg-[#ff0000] leading-none text-white h-fit p-2">Post Your Property For Free</div>
      <div className="relative text-4xl z-[102]" id="menuIcon" onClick={toggleSidebar}>
        <FontAwesomeIcon id="iconBar" icon="fa-solid fa-list" />
      </div>
      </div>
    </header>
  );
}

export default Header;
