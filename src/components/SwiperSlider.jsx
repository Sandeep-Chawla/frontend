import React, { useState, useEffect } from 'react';
import '../assets/swiperSlider.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// Add all Font Awesome Free solid icons to the library
library.add(fas, fab);

export default function SwiperSlider() {
  // State to track the active option
  const [activeOption, setActiveOption] = useState(0);

  // Function to handle click event on an option
  const handleOptionClick = (index) => {
    setActiveOption(index); // Update activeOption state to the clicked option's index
  };

  useEffect(() => {
    // Set interval to change the active option every 2 seconds
    const interval = setInterval(() => {
      // Calculate the next option index
      const nextIndex = (activeOption + 1) % totalOptions;
      setActiveOption(nextIndex);
    }, 2000);

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [activeOption]); // Re-run effect whenever activeOption changes

  // Total number of options
  const totalOptions = 5; // Update this value with the total number of options

  return (
    <div className='swiperBody'>
      <div className="options">
        <div className={`option ${activeOption === 0 ? 'active' : ''}`} style={{ '--optionBackground': 'url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg)' }} onClick={() => handleOptionClick(0)}>
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-walking"></i>
            </div>
            <div className="info">
              <div className="main">Blonkisoaz</div>
              <div className="sub">Omuke trughte a otufta</div>
            </div>
          </div>
        </div>

        <div className={`option ${activeOption === 1 ? 'active' : ''}`} style={{ '--optionBackground': 'url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg)' }} onClick={() => handleOptionClick(1)}>
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-snowflake"></i>
            </div>
            <div className="info">
              <div className="main">Oretemauw</div>
              <div className="sub">Omuke trughte a otufta</div>
            </div>
          </div>
        </div>
        

        <div className={`option ${activeOption === 2 ? 'active' : ''}`} style={{ '--optionBackground': 'url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg)' }} onClick={() => handleOptionClick(2)}>
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-snowflake"></i>
            </div>
            <div className="info">
              <div className="main">Oretemauw</div>
              <div className="sub">Omuke trughte a otufta</div>
            </div>
          </div>
        </div>
        


        <div className={`option ${activeOption === 3 ? 'active' : ''}`} style={{ '--optionBackground': 'url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg)' }} onClick={() => handleOptionClick(3)}>
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-snowflake"></i>
            </div>
            <div className="info">
              <div className="main">Oretemauw</div>
              <div className="sub">Omuke trughte a otufta</div>
            </div>
          </div>
        </div>
        
        

        <div className={`option ${activeOption === 4? 'active' : ''}`} style={{ '--optionBackground': 'url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg)' }} onClick={() => handleOptionClick(4)}>
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-snowflake"></i>
            </div>
            <div className="info">
              <div className="main">Oretemauw</div>
              <div className="sub">Omuke trughte a otufta</div>
            </div>
          </div>
        </div>
        
      </div>
     
    </div>
  );
}








