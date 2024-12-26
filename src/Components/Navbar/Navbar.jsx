import React, { useState } from "react";
import "./Navbar.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Company_logo from "../../assets/Final_Logo.png";
import { IoIosArrowDropdown } from "react-icons/io";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Menu visibility state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle state
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <FaPhoneAlt /> <span>+91 88290251332</span>
          <span> | </span>
          <FaEnvelope /> <span> info@renewproenergy.com </span>
        </div>
        <div className="social-media-links">
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

      {/* Main Nav */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={Company_logo} alt="Company Logo" className="logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? "line1" : ""}`}></div>
          <div className={`line ${menuOpen ? "line2" : ""}`}></div>
          <div className={`line ${menuOpen ? "line3" : ""}`}></div>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink
              to="/about-us/company-history"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About Us <IoIosArrowDropdown />
            </NavLink>
            <div className="dropdown-content">
              <NavLink
                to="/about-us/company-history"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Company History
              </NavLink>
              <NavLink
                to="/about-us/anr"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Awards & Recognitions
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to="/project"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink
              to="/offering/epc-development"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Offering <IoIosArrowDropdown />
            </NavLink>
            <div className="dropdown-content">
              <NavLink
                to="/offering/epc-development"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                EPC & Development
              </NavLink>
              <NavLink
                to="/offering/open-access"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Open Access
              </NavLink>
              <NavLink
                to="/offering/onm"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Operation & Maintenance
              </NavLink>
              <NavLink
                to="/offering/project-management"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Project Management
              </NavLink>
              <NavLink
                to="/offering/rooftop-solar"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Rooftop Solar
              </NavLink>
              <NavLink
                to="/offering/kusum-yojna"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Kusum Yojna
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to="/blog"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <div></div>
    </>
  );
};

export default NavBar;
