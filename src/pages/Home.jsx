import React, { useState, useEffect } from "react";
import Select from "react-select";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
import anime from "animejs/lib/anime.es.js";
// function typing() {
//   var textWrapper = document.querySelector(".letters");
//   textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g,"<span class='letter'>$&</span>");

//   anime
//     .timeline({ loop: true })
//     .add({
//       targets: ".letter",
//       opacity: [0.3, 1], // Start from opacity 0.3 and end at opacity 1
//       translateX: [100, 0], // Start from 100px to the right (off-screen) and move to 0px
//       easing: "easeOutExpo",
//       duration: 2000,
//       delay: (el, i) => 80 * i, // No need to add 1 to i
//     })
//     .add({
//       targets: ".ml1",
//       opacity: 0,
//       duration: 1200,
//       easing: "easeOutExpo",
//       delay: 2000,
//     });
// }

// Add all Font Awesome Free solid icons to the library
library.add(fas, fab);

const options = [
  { value: "noida", label: "Noida" },
  { value: "gaziabad", label: "Gaziabad" },
  { value: "lucknow", label: "Lucknow" },
];

function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [heroImage, setHeroImage] = useState("");
  const [heroText, setHeroText] = useState("");
  const [loading, setLoading] = useState(true);
  function typing() {
    var textWrapper = document.querySelector(".letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g,"<span class='letter'>$&</span>");
  
    anime
      .timeline({ loop: true })
      .add({
        targets: ".letter",
        opacity: [0.3, 1], // Start from opacity 0.3 and end at opacity 1
        translateX: [100, 0], // Start from 100px to the right (off-screen) and move to 0px
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 80 * i, // No need to add 1 to i
      })
      .add({
        targets: ".ml1",
        opacity: 0,
        duration: 1200,
        easing: "easeOutExpo",
        delay: 2000,
      });
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://whitehat.realty/api/v1/get-hero-sections");
        const data = await response.json();
        const heroData = data.api_data;
        setHeroImage(heroData.hero_image);
        await setHeroText(heroData.title);
        setLoading(false); // Set loading to false when data is loaded
        await new Promise((resolve) => setTimeout(resolve, 100));
        typing();
      } catch (error) {
        console.error("Error fetching hero sections:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };
  
    fetchData();
  }, []);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      width: "100%",
      height: 56,
      fontSize: "14px",
      borderRadius: 999,
      border: "none",
      boxShadow: "none",
      "@media (max-width: 768px)": {
        height: "40px",
      },
      "&:hover": {
        border: "none",
      },
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#1b5577",
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "red" : "gray",
      "&:hover": {
        color: "red",
      },
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      width: "90%",
      fontSize: 14,
      color: "#1b5577",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: 150,
      overflowY: "auto",
      borderRadius: "10px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#1b5577",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: state.isSelected ? "black" : "",
      backgroundColor: state.isSelected ? "lightgray" : "white",
      "&:hover": {
        backgroundColor: "lightgray",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#1b5577",
    }),
  };

  return (
    <div>
      <div className="w-full h-[90vh] flex justify-center">
        {loading ? (
          <Skeleton className="w-[90vw] md:w-[80vw] h-5/6 rounded-[36px] relative flex items-end" />
        ) : (
          <div
            className={` bg-cover bg-center w-11/12 md:w-10/12 rounded-[36px] relative flex flex-col justify-center  h-5/6  `}
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="w-full h-full absolute top-0 left-0 bg-[#00000050] rounded-[36px]"></div>
            <h3 className="letters text-center relative z-10 text-white text-4xl pb-10">
              {heroText}
            </h3>
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
                <div
                  className={`col-span-3  h-52 border-t-2 my-2 ${
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
      <Sidebar />

      {loading ? (
        <Skeleton className="h-[60vh] w-[90vw] md:w-[66vw] mx-auto block rounded-3xl" />
      ) : (
        <Slider />
      )}
      {/* location */}
      <Section text="Discover the Prime Location details of a real estate project. The right location makes all the difference.
      " img='https://g5-orion-clients.g5dxm.com/g5-c-ibsddh6p-pillar-properties-client/g5-cl-55us94ubz-the-lyric-capitol-hill/uploads/apartments-for-rent-seattle-hero.jpg' />
      {/* highlights */}
      <Section_two text="What makes a project special? We spotlight the key features that makes a Real Estate project truly stand out.." />
      {/* floor plan */}
      <CardLeft text="A good floor plan is essential for comfortable living. 
Explore if the design can adapt to different lifestyle needs.
"
        img="floor-plan.png"
        />
        {/* amenities */}
      <CardRight
        text="Amenities can greatly enhance your living experience. 
        Evaluate the quality and variety of facilities with us."
        img="living room 3.webp" 
      />
      {/* possesion */}
      <CardLeft text="Getting your new home on time is crucial. We ensure they are transparent about the progress, so you can plan confidently.

"
        img="possession.webp" />
        {/* background */}
      <CardRight
        text="The developer's reputation is key to a trustworthy investment in the real estate market. We'll help you invest with confidence, knowing you're dealing with reliable developers.
        "
        img="https://img.lovepik.com/background/20211021/large/lovepik-the-scene-of-urban-construction-background-image_400149199.jpg"
      />
      {/* pricing */}
      <CardRight
        text="We analyze the pricing to ensure it's fair and competitive. Our goal is to help you get the best value for your investment.
        "
        img="https://taylorwells.com.au/wp-content/uploads/2020/06/strategic-pricing1.jpg"
      />
      <LogoSlider />
      {loading ? (
        <Skeleton className="w-[90vw] md:w-[80vw] h-[80vh] block mx-auto" />
      ) : (
        <SwiperSlider />
      )}

      <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {loading
          ? Array(6)
              .fill()
              .map((_, index) => (
                <Skeleton key={index} className="h-72 rounded-3xl" />
              ))
          : Array(6)
              .fill()
              .map((_, index) => <Card key={index} />)}
      </div>
    </div>
  );
}

export default Home;
