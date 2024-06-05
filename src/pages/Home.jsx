import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import CardRight from "../components/CardRight";
import CardLeft from "../components/CardLeft";
import Card from "../components/Card";
import Section from "../components/Section";
import SwiperSlider from "../components/SwiperSlider";
import LogoSlider from "../components/LogoSlider";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";
import Section_two from "../components/Section_two";
import TrendingCard from "../components/TrendingCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import HeroSection from "../components/HeroSection";
import QuoteForm from "../components/QuoteForm";

library.add(fas, fab);

const options = [
  { value: "noida sec 44", label: "Noida Sec 44" },
  { value: "Siddharth Vihar", label: "Siddharth Vihar" },
  { value: "lucknow", label: "Lucknow" },
];

const cities = [
  { value: "delhi", label: "Delhi" },
  { value: "noida", label: "Noida" },
  { value: "gaziabad", label: "Gaziabad" },
];
const propertyType = [
  { value: "Villa", label: "Villa" },
  { value: "BuilderFloor", label: "Builder Floor" },
  { value: "Apartment", label: "Apartment" },
];
const budget = [
  { value: "50lakh-90lakh", label: "50lakh-90lakh" },
  { value: "90lakh-1.25Cr", label: "90lakh-1.25Cr" },
  { value: "1.25Cr-1.5Cr", label: "1.25Cr-1.5Cr" },
  { value: "1.5Cr +", label: "1.5Cr +" },
];


// Sample property data
const properties = [
  { id: 1, city: "Delhi", name: "Property 1", image: "property1.jpg" },
  { id: 2, city: "Noida", name: "Property 2", image: "property2.jpg" },
  { id: 3, city: "Gaziabad", name: "Property 3", image: "property3.jpg" },
  { id: 4, city: "Delhi", name: "Property 4", image: "property4.jpg" },
  { id: 5, city: "Noida", name: "Property 5", image: "property5.jpg" },
];

function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [heroImage, setHeroImage] = useState("");
  const [heroText, setHeroText] = useState("");
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [twoSectionsData, setTwoSectionsData] = useState([]);
  const [logoData, setLogoData] = useState([]);
  const [slides, setSlides] = useState([]);
  const [selectedCity, setSelectedCity] = useState(cities[0]?.label || "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://whitehat.realty/api/v1/get-home-data"
        );
        const data = await response.json();
        const heroData = data.api_data.heroSection;
        const insightsData = data.api_data.insights;
        const twoValuesData = data.api_data.twoValuesSystem;
        const logoData = data.api_data.developerLogos;

        setHeroImage(heroData.hero_image);
        setHeroText(heroData.title);
        setApiData(insightsData.reverse());
        setTwoSectionsData(twoValuesData);
        setLogoData(logoData);

        const sliderImages = data.api_data.sliders.map((item) => item.image);
        setSlides(sliderImages);

        setLoading(false); // Set loading to false when data is loaded
      } catch (error) {
        console.error("Error fetching home data:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, []);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const handleChange2 = (selectedOption) => {
    setSelectedOption2(selectedOption);
  };
  const handleChange3 = (selectedOption) => {
    setSelectedOption3(selectedOption);
  };
  const handleChange4 = (selectedOption) => {
    setSelectedOption4(selectedOption);
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
      fontSize: 14,
      color: "#1b5577",
      width: "100%",
      zIndex: 1000, // Ensure high z-index for menu
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: 150,
      width: "100%",
      overflowY: "auto",
      borderRadius: "10px",
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 1000, // Ensure high z-index for menu portal
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
      whiteSpace: "nowrap",
      "&:hover": {
        backgroundColor: "lightgray",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      // color: "#1b5577",
    }),
  };
  

  // Function to filter properties based on the selected city
  const getFilteredProperties = () => {
    return properties.filter((property) => property.city === selectedCity);
  };

  return (
    <div className="bg-[url(background3.jpg)] pt-6">
      <HeroSection
        heroImage={heroImage}
        heroText={heroText}
        loading={loading}
        selectedOption={selectedOption}
        selectedOption2={selectedOption2}
        handleChange={handleChange}
        handleChange2={handleChange2}
        customStyles={customStyles}
        options={options}
        cities={cities}
        menuPortalTarget={document.body}
      />
      <Sidebar />
      <div className="w-[90vw] md:w-[80vw] mx-auto overflow-x-scroll scrollHide">
        <h3 className="text-xl md:text-2xl">The Most Searched Properties</h3>
        <div className="border-b-[1px] border-gray-400 mb-4 flex gap-4 font-medium pb-2">
          {cities.map((item, i) => (
            <span
              key={i}
              onClick={() => setSelectedCity(item.label)}
              className={`cursor-pointer ${
                selectedCity === item.label
                  ? "text-primary font-bold  "
                  : "text-gray-500"
              }`}
            >
              {item.label}
            </span>
          ))}
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 4,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper py-10"
        >
          {getFilteredProperties().map((property, index) => (
            <SwiperSlide key={index}>
              <TrendingCard property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="min-h-[50vh] w-[90vw] md:w-[80vw] mx-auto mb-6">
        <QuoteForm 
        loading={loading}
        selectedOption={selectedOption}
        selectedOption2={selectedOption2}
        selectedOption3={selectedOption3}
        selectedOption4={selectedOption4}
        handleChange={handleChange}
        handleChange2={handleChange2}
        handleChange3={handleChange3}
        handleChange4={handleChange4}
        customStyles={customStyles}
        options={options}
        cities={cities}
        propertyType={propertyType}
        budget={budget}
        />
      </div>
      <Slider slides={slides} loading={loading} />
      <div className="text-center text-primary text-xl md:text-5xl font-bold py-10">
        How Do We Review a Property
      </div>
      {/* location */}
      <Section
        text="Discover the Prime Location details of a real estate project. The right location makes all the difference."
        img="location.png"
        title="location"
      />
      {/* highlights */}
      <Section_two
        text="What makes a project special? We spotlight the key features that makes a Real Estate project truly stand out.."
        title="highlights"
      />
      {loading
        ? Array(6)
            .fill()
            .map((_, index) => (
              <Skeleton key={index} className="h-72 rounded-3xl" />
            ))
        : twoSectionsData.map((item, i) =>
            i % 2 === 0 ? (
              <CardLeft
                key={item.id}
                img={item.image}
                text={item.description}
                title={item.title}
              />
            ) : (
              <CardRight
                key={item.id}
                img={item.image}
                text={item.description}
                title={item.title}
              />
            )
          )}
      <LogoSlider apiData={logoData} loading={loading} />
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
          : apiData.map((item) => (
              <Card
                key={item.id}
                url={item.url}
                description={item.description}
                title={item.title}
                icon={item.icon}
              />
            ))}
      </div>
    </div>
  );
}

export default Home;
