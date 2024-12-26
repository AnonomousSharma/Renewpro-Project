import React from 'react';
import './EPCDEV.css';
import epcImage from '../../assets/EPCDEV.mp4';
import { Link } from 'react-router-dom';

const EPCDEV = () => {
  return (
    <div className="epc-container animated-slide-up">
      <header className="epc-header">
        <h1>Solar EPC & Development</h1>
        <p>
          At RENEWPRO ENERGY, we offer turnkey Solar EPC (Engineering, Procurement, and Construction) solutions that
          combine cutting-edge technology with unparalleled expertise. Our mission is to deliver efficient, sustainable,
          and high-performance solar energy projects tailored to your specific needs.
        </p>
      </header>

      <div className="epc-container">
      <div className="epc-video">
        {/* Video element with autoplay, loop, and muted attributes */}
        <video
          className="epc-video-element"
          src={epcImage}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>

      <section className="epc-highlights">
        <h2>Why Choose RENEWPRO ENERGY?</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <h3>Experience</h3>
            <ul>
              <li>Proven expertise in delivering high-capacity solar installations.</li>
              <li>Strong track record in designing and implementing solar solutions.</li>
            </ul>
          </div>
          <div className="highlight-card">
            <h3>Technology Excellence</h3>
            <ul>
              <li>State-of-the-art tools and innovative solar technologies.</li>
              <li>Continuous R&D for adopting cutting-edge solar advancements.</li>
            </ul>
          </div>
          <div className="highlight-card">
            <h3>Customized Solutions</h3>
            <ul>
              <li>Tailored project designs for residential, commercial, and industrial clients.</li>
              <li>Flexible and scalable solutions for diverse energy needs.</li>
            </ul>
          </div>
          <div className="highlight-card">
            <h3>Quality Assurance</h3>
            <ul>
              <li>Use of premium-grade materials to ensure durability.</li>
              <li>Strict quality checks at every project stage.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="epc-process">
        <h2>Our EPC Process</h2>
        <div className="process-steps">
          <div className="step">
            <h3>1. Conceptualization</h3>
            <p>
              Comprehensive analysis of your energy needs followed by a customized project blueprint to ensure maximum
              efficiency.
            </p>
          </div>
          <div className="step">
            <h3>2. Procurement</h3>
            <p>
              Sourcing high-quality components from leading global suppliers to guarantee long-term performance.
            </p>
          </div>
          <div className="step">
            <h3>3. Construction</h3>
            <p>
              Timely execution of projects with experienced professionals and modern infrastructure, adhering to
              industry standards.
            </p>
          </div>
          <div className="step">
            <h3>4. Commissioning</h3>
            <p>
              Ensuring seamless integration of the solar system with your existing setup and a full-fledged performance
              test.
            </p>
          </div>
        </div>
      </section>

      <section className="epc-statistics">
        <h2>Key Achievements</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>100+ MW</h3>
            <p>Solar capacity installed and operational globally.</p>
          </div>
          <div className="stat-item">
            <h3>15+ States</h3>
            <p>Presence across multiple regions, delivering sustainable energy solutions.</p>
          </div>
          <div className="stat-item">
            <h3>99% Uptime</h3>
            <p>Guaranteed system reliability and performance efficiency.</p>
          </div>
          <div className="stat-item">
            <h3>50+ Projects</h3>
            <p>Completed successfully for residential, commercial, and industrial clients.</p>
          </div>
        </div>
      </section>

      <footer className="epc-footer">
        <h2>Let’s Build a Sustainable Future Together</h2>
        <p>
          Partner with RENEWPRO ENERGY for your Solar EPC & Development needs and join us in shaping a greener tomorrow.
          Reach out today to discuss your project requirements.
        </p>
        <Link to="/contact">
          <button className="contact-btn">Contact Us</button>
        </Link>     
         </footer>
    </div>
  );
};

export default EPCDEV;
