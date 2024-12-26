import React, { useState, useEffect } from "react";
import "./AwardSection.css";
import awardImage1 from "../../assets/award_image_1.png";
import awardImage2 from "../../assets/award_image_2.png";
import awardImage3 from "../../assets/award_image_3.png";


const awards = [
  {
    title: "Top 5 Global Solar EPC Companies",
    year: "2024",
    description:
      "Recognized by IHS Markit as one of the top 5 global solar EPC companies for outstanding contributions to solar power.",
    image: awardImage1,
    
  },
  {
    title: "Excellence in Renewable Energy",
    year: "2023",
    description:
      "Awarded for achieving excellence in driving innovation and sustainability in renewable energy solutions.",
    image: awardImage2,
  },
  {
    title: "Global Solar Leadership Award",
    year: "2023",
    description:
      "Received recognition for leadership in solar technology development and impactful community projects.",
    image: awardImage3,
  },
];

const AwardSection = () => {
  const [currentAward, setCurrentAward] = useState(0);

  const handleNext = () => {
    setCurrentAward((prev) => (prev + 1) % awards.length);
  };

  const handlePrev = () => {
    setCurrentAward((prev) => (prev - 1 + awards.length) % awards.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="award-section">
      <h2 className="award-title">Awards</h2>
      <div className="award-container">
        <button className="arrow-button left-arrow" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="award-card">
          <div className="award-image">
            <img
              src={awards[currentAward].image}
              alt={awards[currentAward].title}
            />
          </div>
          <div className="award-content">
            <h3 className="award-heading">{awards[currentAward].title}</h3>
            <p className="award-year">Year: {awards[currentAward].year}</p>
            <p className="award-description">
              {awards[currentAward].description}
            </p>
          </div>
        </div>
        <button className="arrow-button right-arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default AwardSection;
