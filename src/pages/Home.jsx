// Home.js
import React, { useState, useEffect } from "react";
import Select from "react-select";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../components/Slider";
import SearchBar from "../components/Search";

// Add all Font Awesome Free solid icons to the library
library.add(fas, fab);

const options = [
  { value: "noida", label: "Noida" },
  { value: "gaziabad", label: "Gaziabad" },
  { value: "lucknow", label: "Lucknow" },
  { value: "lucknow", label: "Lucknow" },
  { value: "lucknow", label: "Lucknow" },
];
function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  // Handler for change event
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      cursor:"pointer",
      width: "100%", // Fixed width
      height: 56,
      fontSize:"14px",
      borderRadius: 999,
      border: "none", // Remove border
      boxShadow: "none", // Remove box-shadow
      "@media (max-width: 600px)": {
        
          height: "40px" /* Example for a smaller screen */
      },
      "&:hover": {
        border: "none", // Remove border on hover
      },
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#1b5577", // Change color based on focus state
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? 'red' : 'gray', // Change color based on focus state
      "&:hover": {
        color: 'red', // Change color on hover
      },
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none', // Remove the separator line
    }),
    menu: (provided) => ({
      ...provided,
      width: "90%",
      fontSize: 14, // Ensure menu width matches control width
      color: "#1b5577",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: 150, // Set max height for the dropdown
      overflowY: "auto", // Enable vertical scrolling
      borderRadius: "10px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#1b5577", // Set color of the selected option text
    }),
    option: (provided, state) => ({
      ...provided,
      cursor:"pointer",
      color: state.isSelected ? "black" : "",
      backgroundColor: state.isSelected ? "lightgray" : "white", // Optionally set the background color for selected option
      "&:hover": {
        backgroundColor: "lightgray", // Optionally set the background color on hover
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#1b5577", // Set color of the placeholder text
    }),
  };
  return (
    <>
      <div className="w-full h-[90vh] flex  justify-center">
        <div className="bg-[url(https://images.unsplash.com/photo-1584282540740-6b523ca98e00?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center w-11/12 md:w-10/12 h-5/6 rounded-[36px] relative flex items-end">
          <div className="grid md:grid-cols-[auto,1fr,auto] mx-auto w-10/12 relative origin-bottom -top-3/4 md:top-[-40%] gap-4 items-start h-14">
            <Select
              className="locality cursor-pointer px-4 text-primary z-20 bg-white text-2xl rounded-full outline-none font-bold"
              value={selectedOption}
              onChange={handleChange}
              options={options}
              placeholder="LOCALITY"
              styles={customStyles}
            />
            <div className="rounded-3xl bg-white grid grid-cols-[auto,1fr,auto] items-center px-4 py-2 relative z-10 shadow-2xl">
              <span>
                <FontAwesomeIcon
                  icon="fa-solid fa-magnifying-glass"
                  className="text-primary px-2"
                />
              </span>
              <SearchBar onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
              
              {/* suggestions */}
              <div
                className={`col-span-3  h-52 border-t-2 my-2 ${
                  isFocused ? "block" : "hidden"
                }`}
              ></div>
            </div>
            <div className="hidden md:flex rounded-full bg-white text-center px-12 py-2 h-14 font-bold text-primary  text-2xl items-center cursor-pointer">
              FIND
            </div>
          </div>
        </div>
      </div>
      <Slider />
      <div>
      <h1>
     Heading 1
      </h1>
      <h2>heading 2</h2>
      <h3>heading 3</h3>
      <h4>heading 4</h4>
      <h5>heading 5</h5>
      <h6> heading 6</h6>
      <p>paragraph</p>
      </div>
    </>
  );
}

export default Home;
