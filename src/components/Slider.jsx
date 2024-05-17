import React, { useState, useEffect } from "react";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1581261560738-342ca79fcdc3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1615470749121-fb7e38ad335c?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1629169941760-7c121f1a21db?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]; // Your slide content
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after 2 seconds
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Clear the timeout when component unmounts or when isVisible becomes true
    return () => clearTimeout(timeoutId);
  }, []); // Run only once on component mount

  useEffect(() => {
    // Function to advance to the next slide
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    // Interval to advance the slide every 3 seconds (adjust as needed)
    const intervalId = setInterval(nextSlide, 3000);

    // Clean up the interval when component unmounts
    return () => clearInterval(intervalId);
  }, [slides.length]); // Re-run effect when the number of slides changes

  const image={
    backgroundImage:`url(${slides[currentSlide]})`,
    transition: 'opacity 1s ease-in-out',
    opacity: isVisible ? 1 : 0
  }
  return (
    <div className="w-full h-[60vh] flex  justify-center">
      <div
        className={`slider-img bg-cover bg-center  w-11/12 md:w-8/12 h-5/6 rounded-3xl relative`}
        style={image}
      >
        <div className="absolute top-5 left-0 flex w-full mx-auto justify-evenly">
          <div className="w-1/6 h-0.5 bg-gray-400">
            <div className="bg-primary h-full w-0 slider-progress"></div>
          </div>
          <div className="w-1/6 h-0.5 bg-gray-400">
            <div className="bg-primary h-full w-0 slider-progress"></div>
          </div>
          <div className="w-1/6 h-0.5 bg-gray-400">
            <div className="bg-primary h-full w-0 slider-progress"></div>
          </div>
          <div className="w-1/6 h-0.5 bg-gray-400">
            <div className="bg-primary h-full w-0 slider-progress"></div>
          </div>
          <div className="w-1/6 h-0.5 bg-gray-400">
            <div className="bg-primary h-full w-0 slider-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
