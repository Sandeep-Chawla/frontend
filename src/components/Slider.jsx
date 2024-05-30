import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import the styles for the skeleton loader

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://whitehat.realty/api/v1/get-sliders");
        const data = await response.json();
        const heroData = data.api_data;
        const images = heroData.map(item => item.image);
        setSlides(images);
        setProgress(Array(images.length).fill(0)); // Initialize progress
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching hero sections:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const nextSlide = () => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => {
          const newSlide = (prevSlide + 1) % slides.length;
          return newSlide;
        });
        setIsVisible(true);
      }, 1000); // Transition time for fading out
    };

    const intervalId = setInterval(() => {
      nextSlide();
    }, 6000);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        if (newProgress[currentSlide] < 100) {
          newProgress[currentSlide] = Math.min(newProgress[currentSlide] + (100 / 6000) * 60, 100);
        }
        return newProgress;
      });
    }, 60);

    return () => {
      clearInterval(intervalId);
      clearInterval(progressInterval);
    };
  }, [currentSlide, slides.length]);

  useEffect(() => {
    if (currentSlide === 0) {
      setProgress(Array(slides.length).fill(0));
    } else {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        newProgress[currentSlide] = 0;
        return newProgress;
      });
    }
  }, [currentSlide]);

  const image = {
    backgroundImage: `url(${slides[currentSlide]})`,
    transition: 'opacity 1s ease-in-out',
    opacity: isVisible ? 1 : 0.3,
  };

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex justify-center">
        <div className="w-11/12 md:w-8/12 h-5/6 rounded-3xl relative">
          <Skeleton height="100%" borderRadius="1.5rem" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[60vh] flex justify-center">
      <div
        className={`slider-img bg-cover bg-center w-11/12 md:w-8/12 h-5/6 rounded-3xl relative`}
        style={image}
      >
        <div className="absolute top-5 left-0 flex w-full mx-auto justify-evenly">
          {slides.map((_, index) => (
            <div key={index} className="w-1/6 h-1 bg-white relative">
              <div
                className={`bg-primary h-full`}
                style={{
                  width: `${progress[index]}%`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
