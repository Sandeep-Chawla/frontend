import React, { useState, useEffect } from "react";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const slides = [
    "https://images.unsplash.com/photo-1581261560738-342ca79fcdc3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1615470749121-fb7e38ad335c?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1629169941760-7c121f1a21db?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]; // Your slide content
  const [progress, setProgress] = useState(Array(slides.length).fill(0));

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
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => {
          const newSlide = (prevSlide + 1) % slides.length;
          if (newSlide === 0) {
            // Reset progress if we are back to the first slide
            setProgress(Array(slides.length).fill(0));
          }
          return newSlide;
        });
        setIsVisible(true);
      }, 1000); // Transition time for fading out
    };

    // Interval to advance the slide every 6 seconds (adjust as needed)
    const intervalId = setInterval(() => {
      nextSlide();
    }, 6000);

    // Interval to update the progress bar every 60ms for a smoother progress
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        newProgress[currentSlide] = Math.min(newProgress[currentSlide] + (100 / 6000) * 60, 100);
        return newProgress;
      });
    }, 60);

    // Clean up the intervals when component unmounts
    return () => {
      clearInterval(intervalId);
      clearInterval(progressInterval);
    };
  }, [currentSlide, slides.length]); // Re-run effect when currentSlide or the number of slides changes

  const image = {
    backgroundImage: `url(${slides[currentSlide]})`,
    transition: 'opacity 1s ease-in-out',
    opacity: isVisible ? 1 : 0.3,
  };

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
                className={`bg-primary h-full `}
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
