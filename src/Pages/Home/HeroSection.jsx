import React, { useState, useEffect } from "react";
import "./HeroSection.css";

// Import videos from the assets folder
import heroVideo1 from "../../assets/Hero_Gif_1.mp4";
import heroVideo2 from "../../assets/Hero_Gif_2.mp4";
import heroVideo3 from "../../assets/Hero_Gif_3.mp4";
import { Link } from "react-router-dom";

// Array of video sources
const videos = [heroVideo1, heroVideo2, heroVideo3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the video every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="hero">
      {/* Display the video */}
      <video 
        key={currentIndex} 
        src={videos[currentIndex]} 
        autoPlay 
        muted 
        loop 
        className="hero-video"
      />

      {/* Overlay content */}
      <div className="hero-overlay">
        <div className="text-box">
          <h1>PORTFOLIO OF 6.9 MW SOLAR POWER PROJECTS</h1>
          <Link to="/project">
    <button className="learn-more-btn--hero">Learn More</button>
  </Link>
        </div>
      </div>

      {/* Indicators for the video slider */}
      <div className="slider-indicators">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
