import React from "react";
import { useNavigate } from "react-router-dom";
import "./OfferingSection.css";
import offerImage1 from "../../assets/offer_image_1.png";
import offerImage2 from "../../assets/offer_image_2.png";
import offerImage3 from "../../assets/offer_image_3.png";
import offerImage4 from "../../assets/offer_image_4.png";
import offerImage5 from "../../assets/offer_image_5.png";
import offerImage6 from "../../assets/offer_image_6.png";

const Offering_Section = () => {
  const navigate = useNavigate();

  const offerings = [
    {
      image: offerImage1,
      title: "EPC & Development",
      description:
        "Building your solar future with expert Engineering, Procurement, and Construction services",
      path: "/offering/epc-development",
    },
    {
      image: offerImage2,
      title: "Solar Roof Top",
      description:
        "Harness the sun's power right from your roof – sustainable, efficient, and cost-effective",
      path: "/offering/solar-rooftop",
    },
    {
      image: offerImage3,
      title: "Operation & Maintenance",
      description:
        "Maximize your solar investment with reliable, long-term operation and maintenance services",
      path: "/offering/onm",
    },
    {
      image: offerImage4,
      title: "Project Management",
      description:
        "End-to-end project management for seamless solar solutions from start to finish",
      path: "/offering/project-management",
    },
    {
      image: offerImage5,
      title: "Solar Open Access",
      description:
        "Access clean, renewable energy with our Solar Open Access solutions – empowering your business",
      path: "/offering/open-access",
    },
    {
      image: offerImage6,
      title: "Kusum Yojna",
      description:
        "Empowering farmers with the Kusum Yojna – a step towards sustainable energy and better income",
      path: "/offering/kusum-yojna",
    },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="offerings-section">
      <h2>Our Offerings</h2>
      <div className="offerings-grid">
        {offerings.map((offering, index) => (
          <div
            className="offering-card"
            key={index}
            onClick={() => handleCardClick(offering.path)}
          >
            <img src={offering.image} alt={offering.title} />
            <h4>{offering.title}</h4>
            <p>{offering.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offering_Section;
