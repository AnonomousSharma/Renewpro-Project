import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Company_logo from "../../assets/Final_Logo.png";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
          Established in 2024, we have been one of the early movers in the solar park regime and have now grown into a well-established player in turnkey solar engineering, procurement and construction (“EPC”) services, catering to the increasing demand for renewable energy in the country. 
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li >
            <NavLink to="/about-us/company-history"
            className={({ isActive }) => (isActive ? "active-link" : "")}>About Us</NavLink>
                    </li>
          <li>
            <NavLink to="/project"
            className={({ isActive }) => (isActive ? "active-link" : "")}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/offering/epc-development"
            className={({ isActive }) => (isActive ? "active-link" : "")}>Offering</NavLink>
          </li>
          <li>
            <NavLink to="/blog"
            className={({ isActive }) => (isActive ? "active-link" : "")}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/career"
            className={({ isActive }) => (isActive ? "active-link" : "")}>Careers</NavLink>
          </li>
          <li>
        
            <NavLink to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}>Contact Us</NavLink>
          </li>
        </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><strong>Email:</strong> info@renewproenergy.com</p>
          <p><strong>Phone:</strong> +91 88290251332</p>
          <p><strong>Address</strong> Plot No. E-147, 1st Floor, Near Jain Mandir, Amba Bari, Jaipur, Rajasthan,302029</p>
          <p></p>
          <div className="social-media-links-footer">
          <a href="#facebook">
            <FaFacebook />
          </a>
          <a href="#twitter">
            <FaSquareXTwitter />
          </a>
          <a href="#linkedin">
            <FaLinkedin />
          </a>
        </div>
        </div>

        <div className=" logo-container-footer">
          <img src={Company_logo} alt="Company Logo" className="logo" />
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 RenewPro Energy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
