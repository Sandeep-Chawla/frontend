import React, { useState, useEffect } from "react";
import Select from "react-select";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardRight from "../components/CardRight";
import CardLeft from "../components/CardLeft";
import Card from "../components/Card";
import Section from "../components/Section";
import SearchBar from "../components/Search";
import SwiperSlider from "../components/SwiperSlider";
import LogoSlider from "../components/LogoSlider";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";
import Section_two from "../components/Section_two";

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
  const [heroImage, setHeroImage] = useState('');
  const [heroText, setHeroText] = useState('');

  // Handler for change event
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      width: "100%", // Fixed width
      height: 56,
      fontSize: "14px",
      borderRadius: 999,
      border: "none", // Remove border
      boxShadow: "none", // Remove box-shadow
      "@media (max-width: 768px)": {
        height: "40px" /* Example for a smaller screen */,
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
      color: state.isFocused ? "red" : "gray", // Change color based on focus state
      "&:hover": {
        color: "red", // Change color on hover
      },
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none", // Remove the separator line
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
      cursor: "pointer",
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
  


  useEffect(() => {
    fetch("https://whitehat.realty/api/v1/get-hero-sections")
      .then((response) => response.json())
      .then((data) => {
        
        const heroData = data.api_data;
       const heroImage = heroData.hero_image;

       const heroText  = heroData.title;
       setHeroImage(heroImage)
       setHeroText(heroText)
        
      })
      .catch((error) => {
        console.error("Error fetching hero sections:", error);
      });
  }, []);

  return (
    <>
      <div className="w-full h-[90vh] flex justify-center mb-5">
        <div className={` bg-cover h-full bg-center w-11/12 md:w-10/12 rounded-[36px] relative flex flex-col justify-center`} style={{ backgroundImage: `url(${heroImage})` }}>
          <h3 className="text-center text-white text-4xl pb-10">{heroText}</h3>
          <div className="grid md:grid-cols-[auto,1fr,auto] mx-auto w-10/12 relative origin-bottom gap-4 items-start h-14">
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
                  icon={["fas", "search"]}
                  className="text-primary px-2"
                />
              </span>
              <SearchBar />
              {/* suggestions */}
              <div
                className={`col-span-3  h-52 border-t-2 my-2 ${
                  isFocused ? "block" : "hidden"
                }`}
              ></div>
            </div>
            <div className="hidden md:flex rounded-full bg-white text-center px-12 py-2 h-14 font-bold text-primary  text-sm   items-center cursor-pointer">
              FIND
            </div>
          </div>
        </div>
      </div>
      <Slider />
      
      <Section />
      <Section_two />
      <div>
        <CardRight />
        <CardLeft />
      </div>
      <LogoSlider />
      <SwiperSlider />
      <div className="pt-10 pb-10 bg-[#d7d7d72b]">
      <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      </div>
      
    </>
  );
}

export default Home;
