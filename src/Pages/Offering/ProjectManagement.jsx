import React from "react";
import "./ProjectManagement.css";
import {
  FaProjectDiagram,
  FaTasks,
  FaClipboardCheck,
  FaRegClock,
} from "react-icons/fa";
import PM_image from "../../assets/PM_1.png"; // Replace with your actual image path

const ProjectManagement = () => {
  return (
    <div className="project-management-container animated-slide-up">
      <h1 className="heading">Effective Project Management</h1>
      <div className="introduction-section">
        <div className="text-container">
          <p className="intro">
            Efficient project management is the backbone of successful solar
            energy implementations. It ensures that every phase—from planning to
            execution and maintenance—is handled with precision, minimizing
            risks and maximizing output.
          </p>
          <p className="details">
            At <strong>Your Company Name</strong>, we bring expertise and
            innovation to manage solar projects of all sizes, ensuring timely
            delivery and sustainable performance.
          </p>
        </div>
        <div className="image-container">
          <img src={PM_image} alt="Project Management" className="pm-image" />
        </div>
      </div>

      <div className="features-section">
        <h2 className="sub-heading">Our Key Project Management Features</h2>
        <div className="features">
          <div className="feature-card">
            <FaProjectDiagram className="feature-icon" />
            <h3>Strategic Planning</h3>
            <p>
              Comprehensive project plans tailored to client requirements,
              ensuring feasibility and optimal solutions.
            </p>
          </div>
          <div className="feature-card">
            <FaTasks className="feature-icon" />
            <h3>End-to-End Execution</h3>
            <p>
              From procurement to installation, we manage every detail with a
              focus on quality and timeliness.
            </p>
          </div>
          <div className="feature-card">
            <FaClipboardCheck className="feature-icon" />
            <h3>Compliance and Approvals</h3>
            <p>
              Handling all regulatory processes, ensuring projects meet local
              and national standards.
            </p>
          </div>
          <div className="feature-card">
            <FaRegClock className="feature-icon" />
            <h3>Cost and Time Efficiency</h3>
            <p>
              Delivering projects on time and within budget without compromising
              quality or performance.
            </p>
          </div>
        </div>
      </div>

      <div className="conclusion-section">
        <h2 className="sub-heading">Why Choose Us?</h2>
        <ul className="benefits-list">
          <li>Expertise in managing renewable energy projects.</li>
          <li>Transparent communication at every stage.</li>
          <li>Innovative tools and technology for efficient delivery.</li>
          <li>Commitment to sustainability and environmental goals.</li>
        </ul>
        <p className="closing-note">
          Trust us to manage your solar projects with efficiency and
          reliability. From concept to completion, we deliver excellence in
          every step.
        </p>
      </div>
    </div>
  );
};

export default ProjectManagement;
