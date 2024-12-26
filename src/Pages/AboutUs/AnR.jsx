import React from "react";
import "./AnR.css";
import awardImage1 from "../../assets/award_image_1.png";
import awardImage2 from "../../assets/award_image_2.png";
import awardImage3 from "../../assets/award_image_3-AnR.png";

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

const AnR = () => {
  return (
    <div className="anr-page">
      <section className="anr-header">
        <h1 className="anr-title">Awards & Recognitions</h1>
        <p className="anr-introduction">
          Over the years, we have been proud to receive prestigious awards for
          our dedication to excellence, innovation, and leadership in the solar
          energy sector. Here are some of the awards that highlight our journey
          and success.
        </p>
      </section>

      <section className="anr-awards">
        <div className="anr-container">
          {awards.map((award, index) => (
            <div key={index} className="anr-card">
              <div className="anr-image">
                <img src={award.image} alt={award.title} />
              </div>
              <div className="anr-details">
                <h3 className="anr-award-title">{award.title}</h3>
                <p className="anr-year">Year: {award.year}</p>
                <p className="anr-description">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="anr-footer">
        <p className="footer-text">
          Our awards represent our commitment to delivering high-quality solar
          solutions and making a positive impact on the environment.
        </p>
      </section>
    </div>
  );
};

export default AnR;
