import React, { useEffect, useState } from 'react';
import '../assets/logoSlider.css'; // Import the CSS file

const LogoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === totalSlides - 1) {
          return 0; // Reset to the first slide
        } else {
          return prevIndex + 1; // Move to the next slide
        }
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  const totalSlides = 18; // Total number of slides
  const visibleSlides = 4; // Number of visible slides at a time

  return (
    <div className="w-11/12 mx-auto">
      <div className="slider">
        <div className="slider-inner" style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}>
          {[...Array(totalSlides * 2).keys()].map((index) => (
            <div key={index} className="slide">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src={`../developers_logo/${(index % totalSlides) + 1}.png`} alt={`logo ${(index % totalSlides) + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
