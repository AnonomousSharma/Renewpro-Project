import React from "react";
import "./Project.css";
import project_image_1 from "../../assets/Project_image_1mw.jpg";
import project_image_2 from "../../assets/Project_image_250kw.jpg";
import project_image_3 from "../../assets/Project_image_50kw.jpeg";
import project_image from "../../assets/hero_image_1.jpg"; // Add your video path

const projects = [
  {
    title: "01 MW Project, Shree Jain Oil Industires, Niwai",
    details: {
      location: "Shree Jain Oil Industries, Niwai, Tonk, 304021",
      projectSize: " 1000 KW",
      powerGeneration: "TBU",
      commercialYear: "2023",
      projectArea: "5 Acres",
      communityBenefits: "Technical training, Mentoring and Jobs for locals",
      co2Reduced: "33,750 Tonnes",
    },
    image: project_image_1,
  },

  {
    title: "250 Kw Project, Bhankrota, Jaipur",
    details: {
      location:
        "Km translogistics,Pallu ki Dhani, Bhankrota, Jaipur, Rajasthan 302026",
      projectSize: "250 KW",
      powerGeneration: "TBU",
      commercialYear: "2024",
      projectType: "Rooftop",
      communityBenefits: "Technical training, Mentoring and Jobs for locals",
      co2Reduced: "68 Tonnes",
    },
    image: project_image_2,
  },
  {
    title: "50 Kw Project, VKI Area, Murlipura, Jaipur",
    details: {
      location:
        "Tata Motors Car Showroom, Vishwakarma Industrial Area, Murlipura, Jaipur, Rajasthan 302013",
      projectSize: "50 KW",
      powerGeneration: "TBU",
      commercialYear: "2023",
      projectType: "Rooftop",
      communityBenefits: "Technical training, Mentoring and Jobs for locals",
      co2Reduced: "68 Tonnes",
    },
    image: project_image_3,
  },
];

const Project = () => {
  return (
    <div className="project-container animated-slide-up">
      <div className="image-section">
        <img
          className="project-image"
          src={project_image}
          alt="5.1 MW Rooftop Commissioned for Nitin Spinners"
        />
        <div className="image-text">
          <h2>5.1 MW Rooftop Commissioned for Nitin Spinners</h2>
        </div>
      </div>

      <h1>Our Successful Solar Projects: Powering a Sustainable Future</h1>

      {projects.map((project, index) => (
        <div
          className={`project-section ${
            index % 2 === 0 ? "image-left" : "image-right"
          }`}
          key={index}
        >
          <div className="project-details">
            <h2>{project.title}</h2>
            <ul>
              <li>
                <strong>Location:</strong> {project.details.location}
              </li>
              <li>
                <strong>Project Size:</strong> {project.details.projectSize}
              </li>
              <li>
                <strong>Power Generation:</strong>{" "}
                {project.details.powerGeneration}
              </li>
              <li>
                <strong>Commercial Operation Year:</strong>{" "}
                {project.details.commercialYear}
              </li>
              <li>
                <strong>Project Type:</strong> {project.details.projectType}
              </li>
              <li>
                <strong>Community Benefits:</strong>{" "}
                {project.details.communityBenefits}
              </li>
              <li>
                <strong>CO2 Emission Reduced:</strong>{" "}
                {project.details.co2Reduced}
              </li>
            </ul>
          </div>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
