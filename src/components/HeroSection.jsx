import React, { useEffect, useState } from "react";
import Select from "react-select";
import Skeleton from "react-loading-skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./Search";
import anime from "animejs/lib/anime.es.js";

function HeroSection({
  heroImage,
  heroText,
  loading,
  selectedOption,
  handleChange,
  customStyles,
  options,
  cities
}) {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!loading) {
      var textWrapper = document.querySelector(".letters");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".letter",
          opacity: [0.3, 1],
          translateX: [100, 0],
          easing: "easeOutExpo",
          duration: 2000,
          delay: (el, i) => 80 * i,
        })
        .add({
          targets: ".ml1",
          opacity: 0,
          duration: 1200,
          easing: "easeOutExpo",
          delay: 2000,
        });
    }
  }, [loading]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="w-full h-[90vh] flex justify-center hero">
      {loading ? (
        <Skeleton className="w-[90vw] md:w-[80vw] h-5/6 rounded-[36px] relative flex items-end" />
      ) : (
        <div
          className={`bg-cover bg-center w-11/12 md:w-10/12 rounded-[36px] relative flex flex-col justify-center h-5/6 ${isFocused ? 'focused' : ''}`}
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="w-full h-full absolute top-0 left-0 bg-[#00000050] rounded-[36px]"></div>
          <h3 className="letters text-center relative z-10 text-white text-2xl pb-10">
            {heroText}
          </h3>
          <div className="grid md:grid-cols-[auto,auto,1fr,auto] mx-auto w-10/12 relative origin-bottom gap-4 items-start h-14">
            <Select
              className="city cursor-pointer px-4 text-primary z-20 bg-white text-2xl rounded-full outline-none font-bold"
              classNamePrefix="react-select"
              value={selectedOption}
              onChange={handleChange}
              options={cities}
              placeholder="CITY"
              styles={customStyles}
            />
            <Select
              className="locality cursor-pointer px-4 text-primary z-20 bg-white text-2xl rounded-full outline-none font-bold"
              classNamePrefix="react-select"
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
              <SearchBar onFocus={handleFocus} onBlur={handleBlur} />
              <div
                className={`col-span-3 h-52 border-t-2 my-2 ${
                    isFocused ? "block" : "hidden"
                  }`}
              ></div>
            </div>
            <div className="hidden md:flex rounded-full bg-white text-center px-12 py-2 h-14 font-bold text-primary text-sm items-center cursor-pointer">
              FIND
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
