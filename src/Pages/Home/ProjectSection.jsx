import React from "react";
import "./ProjectSection.css"; // Add styling here
import project_image_1 from "../../assets/Project_image_1mw.jpg";
import project_image_2 from "../../assets/Project_image_250kw.jpg";
import project_image_3 from "../../assets/Project_image_50kw.jpeg";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  return (
    <div className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <Link to = "/project">
          <img src={project_image_1} alt="Project 1" />
          <div className="project-info">
            <h4>01 MW Project</h4>
            <p>Tonk, Rajasthan</p>
          </div></Link>
        </div>
        <div className="project-card">
         <Link to="/project"> <img src={project_image_2} alt="Project 2" />
          <div className="project-info">
            <h4>250 KW Project</h4>
            <p>Jaipur Rajasthan</p>
          </div></Link>
        </div>
        <div className="project-card">
          <Link to="/project">
            <img src={project_image_3} alt="Project 3" />
            <div className="project-info">
              <h4>50 KW Project</h4>
              <p>Jaipur Rajasthan</p>
            </div>
          </Link>
        </div>
      </div>
      <Link to="/project" className="view-more-btn">
        View More Projects
      </Link>
    </div>
  );
};

export default ProjectSection;
