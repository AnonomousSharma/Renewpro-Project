import React from "react";
import "./OpenAccess.css";
import OA_image_1 from "../../assets/OpenAccess_1.png";
import OA_image_2 from "../../assets/OpenAccess_2.png";

const OpenAccess = () => {
  return (
    <div className="open-access-container animated-slide-up">
      {/* Part 1: Introduction Section */}
      <div className="introduction-section">
        <div className="image-container">
          <img
            src={OA_image_1}
            alt="Solar Open Access Overview"
            className="soa-image"
          />
        </div>
        <div className="text-container">
          <h1 className="heading">Solar Open Access</h1>
          <p className="intro">
            Solar Open Access (SOA) is an innovative model that allows
            commercial and industrial (C&I) consumers to generate electricity
            from solar power plants located away from their premises. This
            approach enables businesses to harness clean energy at a competitive
            rate, leading to reduced energy costs and a significant reduction in
            carbon footprints.
          </p>
          <p className="details">
            The SOA model opens up opportunities for large-scale solar power
            generation without the need for on-site installations. It provides
            flexibility in terms of power purchase agreements (PPAs) and allows
            businesses to benefit from renewable energy without heavy capital
            expenditure. Solar Open Access is also a step towards achieving
            sustainability goals while contributing to India's green energy
            mission.
          </p>
        </div>
      </div>

      {/* Part 2: Why Choose Solar Open Access */}
      <div className="why-choose-section">
        <h2 className="sub-heading">Why Choose Solar Open Access?</h2>
        <ul className="benefits-list">
          <li>Lower electricity bills with competitive pricing.</li>
          <li>Access to clean, renewable energy for sustainability.</li>
          <li>Reduced dependency on grid power and fossil fuels.</li>
          <li>Flexible Power Purchase Agreements (PPAs).</li>
          <li>Contribute to the nation's green energy goals.</li>
        </ul>
        <p className="additional-info">
          By choosing Solar Open Access, you not only reduce costs but also
          actively participate in reducing greenhouse gas emissions, aligning
          your business with global sustainability trends.
        </p>
      </div>

      {/* Part 3: Process Description Section */}
      <div className="process-section">
        <div className="text-container">
          <h2 className="sub-heading">How Solar Open Access Works?</h2>
          <p className="process-description">
          Solar Open Access allows consumers to source renewable power directly from nearby solar plants via the grid. A Power Purchase Agreement (PPA) is established with the solar developer, outlining tariffs and supply terms. The generated solar energy is transmitted through the distribution network, ensuring reliable delivery. Consumers pay open access charges for using the grid infrastructure. Surplus power can be banked or net-metered based on local regulations. This system reduces dependence on fossil fuels, lowers electricity costs, and provides energy security. It’s an eco-friendly option for businesses aiming to cut emissions and ensure stable energy supply.
          </p>
        </div>
        <div className="image-container">
          <img
            src={OA_image_2}
            alt="Solar Open Access Process"
            className="soa-image"
          />
        </div>
      </div>
    </div>
  );
};

export default OpenAccess;
