import React from "react";
import { FaSun } from "react-icons/fa"; // Icon for solar energy
import "./KusumYojna.css";
import kusum_image from "../../assets/kusum_1.png";

const KusumYojna = () => {
  return (
    <div className="kusum-container">
      <div className="kusum-header">
        <h1 className="kusum-title">
          PM Kusum Yojna <FaSun style={{ color: "#f39c12" }} />
        </h1>
        <p className="kusum-description">
          A visionary government initiative empowering farmers with solar-powered irrigation systems and promoting a greener future for India.
        </p>
      </div>

      <div className="kusum-content">
        <div className="kusum-text">
          <h2>Key Features of Kusum Yojna</h2>
          <ul className="animated-list">
            <li>
              <strong>Subsidy:</strong> Up to 60% subsidy for solar pumps, reducing installation costs for farmers.
            </li>
            <li>
              <strong>Loan Assistance:</strong> 30% of the installation cost is covered through easy financing options.
            </li>
            <li>
              <strong>Income Generation:</strong> Sell surplus solar energy to the grid and earn additional income.
            </li>
            <li>
              <strong>Eco-Friendly:</strong> Minimize reliance on diesel-powered pumps, contributing to sustainable farming.
            </li>
            <li>
              <strong>Carbon Reduction:</strong> Decrease greenhouse gas emissions by adopting renewable energy solutions.
            </li>
            <li>
              <strong>Rural Empowerment:</strong> Create jobs and enhance economic development in rural areas.
            </li>
            <li>
              <strong>Water Conservation:</strong> Promote efficient irrigation techniques with reliable solar energy.
            </li>
          </ul>
          <a
            href="https://mnre.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="kusum-link"
          >
           Read More
          </a>
        </div>

        <div className="kusum-image">
          <img src={kusum_image} alt="Solar Power" className="kusum-image" />
        </div>
      </div>

      <div className="kusum-additional-info">
        <h2>Benefits for Farmers</h2>
        <p>
          The PM Kusum Yojna is tailored to address the unique needs of the agricultural community, providing both
          economic and environmental advantages. Key benefits include:
        </p>
        <ul className="animated-list">
          <li>Lower operational costs for irrigation with solar-powered pumps.</li>
          <li>Reliable power supply even in remote areas.</li>
          <li>Increased productivity through uninterrupted farming operations.</li>
          <li>Contribute to India’s goal of achieving 175 GW renewable energy capacity by 2025.</li>
        </ul>
      </div>

      <div className="kusum-footer">
        <div className="kusum-footer-text">
          <h3>Switch to Solar Energy Today!</h3>
          <p>
            Embrace renewable energy with PM Kusum Yojna and lead the way toward sustainable farming. Apply now to take
            advantage of this life-changing initiative.
          </p>
          <a
            href="https://mnre.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="kusum-btn"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default KusumYojna;
