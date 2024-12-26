import React from "react";
import "./RooftopSolar.css";
import { FaSolarPanel, FaGlobeAsia, FaChartLine, FaHandHoldingUsd } from "react-icons/fa";
import rooftopMain from "../../assets/Rooftop_1.png"; 
import rooftopBenefits from "../../assets/Rooftop_2.png"; 
import { Link } from 'react-router-dom';

const RooftopSolar = () => {
  return (
    <div className="rooftop-solar-container">
      {/* Hero Section */}
      <section className="rooftop-hero">
        <div className="rooftop-hero-text">
          <h1>Rooftop Solar Solutions</h1>
          <p>
            Transform your rooftop into a power hub. Generate clean, renewable energy while 
            reducing your electricity costs. Join the solar revolution and lead the way to 
            a greener tomorrow.
          </p>
          <p> Solar panels are a step towards energy independence, offering long-term savings 
          and environmental benefits. By choosing rooftop solar, you contribute to a 
          sustainable future and enhance the value of your property.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="rooftop-hero-image">
          <img src={rooftopMain} alt="Rooftop Solar Solutions" />
        </div>
      </section>

      {/* Features Section */}
      <section className="rooftop-features">
        <h2>Why Rooftop Solar?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaSolarPanel className="feature-icon" />
            <h3>Eco-Friendly Energy</h3>
            <p>Harness the power of the sun to reduce your carbon footprint and protect the planet.</p>
          </div>
          <div className="feature-card">
            <FaHandHoldingUsd className="feature-icon" />
            <h3>Cost Savings</h3>
            <p>Cut your electricity bills with efficient and affordable solar energy solutions.</p>
          </div>
          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Boost Property Value</h3>
            <p>Increase the market value of your property with modern solar installations.</p>
          </div>
          <div className="feature-card">
            <FaGlobeAsia className="feature-icon" />
            <h3>Energy Independence</h3>
            <p>Enjoy uninterrupted power supply and rely less on traditional energy sources.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="rooftop-benefits">
        <div className="benefits-image">
          <img src={rooftopBenefits} alt="Benefits of Rooftop Solar" />
        </div>
        <div className="benefits-text">
          <h2>Maximize Your Benefits</h2>
          <ul>
            <li>Save up to 60% on energy costs.</li>
            <li>Minimal maintenance and long-term durability.</li>
            <li>Tax incentives and government subsidies available.</li>
            <li>Contribute to a cleaner, sustainable future.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="rooftop-cta">
        <h2>Ready to Go Solar?</h2>
        <p>Take the first step towards energy independence and sustainability today!</p>
        <Link to="/contact"><button className="get-started-btn">Get Started</button></Link>
      </section>
    </div>
  );
};

export default RooftopSolar;
