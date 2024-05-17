// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);

function Header() {
  return (
    <header className="flex justify-between items-center w-10/12 py-4 mx-auto">
      <div className=" w-1/2 md:w-1/6">
        <img src="public/logo.png" alt="" className="" />
      </div>
      <div className="relative text-4xl">
        <FontAwesomeIcon icon="fa-solid fa-house" />
        <FontAwesomeIcon icon="fa-solid fa-bars" className="absolute -right-1 bg-white -bottom-2 rounded-md"/>
      </div>
    </header>
  );
}

export default Header;
