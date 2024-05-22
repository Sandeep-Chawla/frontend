import React, { useState, useEffect,useRef } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, fab);
const SearchBar = ({ onFocus, onBlur }) => {
  const [query, setQuery] = useState('');
  const [listening, setListening] = useState(false);
  const [error, setError] = useState('');
  const recognitionRef = useRef(null);
  const isRecognizingRef = useRef(false);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Your browser doesn't support speech recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en';
    recognition.continuous = false;

    recognition.onstart = () => {
      setListening(true);
      isRecognizingRef.current = true;
      setError(''); // Clear any previous errors
    };

    recognition.onend = () => {
      setListening(false);
      isRecognizingRef.current = false;
    };

    recognition.onerror = (event) => {
      if (event.error === 'not-allowed') {
        setError('Microphone access is blocked. Please allow access to the microphone.');
      } else {
        setError(`Error occurred in recognition: ${event.error}`);
      }
      setListening(false);
      isRecognizingRef.current = false;
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, []);

  const toggleListening = () => {
    if (recognitionRef.current) {
      if (!isRecognizingRef.current) {
        try {
          recognitionRef.current.start();
        } catch (error) {
          console.error("Failed to start recognition:", error);
          setError("Failed to start recognition. Please check microphone permissions.");
        }
      } else {
        try {
          recognitionRef.current.stop();
        } catch (error) {
          console.error("Failed to stop recognition:", error);
          setError("Failed to stop recognition.");
        }
      }
    }
  };
  const placeholderTexts = [
    '" Villas "',
    '" Apartments "',
    '" Plots "',
    '" Projects "',
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholderTexts.length
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [placeholderTexts.length]);

  return (
    <>
    <input
      type="text"
      placeholder={"Search " + placeholderTexts[placeholderIndex]}
      id="animated-placeholder"
      className="w-3/4 outline-none border-l-2 px-3 h-6 md:h-10"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onFocus={onFocus} // Pass onFocus event handler
      onBlur={onBlur} // Pass onBlur event handler
    />
    <span className="justify-self-end relative flex cursor-pointer justify-center items-center"onClick={toggleListening}>
                <FontAwesomeIcon
                  icon="fa-solid fa-microphone"
                  className="text-primary"
                />
                <div className={`bg-primary p-2 rounded-full absolute ${listening ? 'animate-ping block' : 'hidden'}`}></div>
              </span>
      </>
  );
};

export default SearchBar;