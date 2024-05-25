import React from 'react';
import Slider from 'react-slick'; // Import the React Slick component
import 'slick-carousel/slick/slick.css'; // Import the Slick CSS file
import 'slick-carousel/slick/slick-theme.css'; // Import the Slick theme CSS file

const LogoSlider = () => {
  const totalSlides = 9; // Total number of slides
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5, // Number of visible slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-12/12 mx-auto text-center mt-20 mb-20 bg-[#d7d7d72b] p-10">
      <h3 className='text-primary mb-5'>Trusted Partners</h3>
      <Slider {...settings}>
        {[...Array(totalSlides).keys()].map((index) => (
          <div key={index} className="slide p-3">
            <div className="bg-white h-32 rounded-lg  flex items-center justify-center">
              <img className='h-3/4' src={`../developers_logo/${index + 1}.png`} alt={`logo ${index + 1}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
