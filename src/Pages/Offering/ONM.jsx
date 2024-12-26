import React from 'react';
import './ONM.css';

// Image Imports
import topImage from '../../assets/hero_image_3.jpg'; // Adjust path as needed
import projectImage from '../../assets/ONM_1.png' // Adjust path as needed
import maintenanceImage from '../../assets/ONM_2.png'; // Adjust path as needed

const ONM = () => {
  return (
    <div className="onm-container animated-slide-up">
      {/* Top Image */}
      <div className="top-image">
        <img src={topImage} alt="Solar Panels" />
      </div>

      {/* Main Content Section */}
      <div className="content-section">
        {/* Project Services Section */}
        <div className="service-section projectt-section">
          <h2>Project Services</h2>
          <div className="section-image">
            <img src={projectImage} alt="Project Services" />
          </div>
          <ul>
            <li><strong>Solar System Design and Installation:</strong> Our team works closely with clients to provide a customized solar system design that meets their specific energy requirements and site conditions. Using state-of-the-art technology and materials, we ensure a high-performance and long-lasting system installation that maximizes energy efficiency.</li>
            <li><strong>Regulatory Support and Compliance:</strong> We offer comprehensive assistance in obtaining the necessary permits, approvals, and documentation required by local authorities. Our experts ensure compliance with all safety, environmental, and regulatory standards throughout the project, mitigating any potential delays or issues.</li>
            <li><strong>Energy Storage Solutions:</strong> We integrate advanced battery storage systems to help clients optimize the use of their solar power. Whether for energy independence, backup power, or efficiency optimization, our solutions are tailored to meet diverse needs and ensure reliable energy availability.</li>
            <li><strong>Grid Integration and Commissioning:</strong> Our team ensures smooth integration of solar systems with the local electricity grid, ensuring seamless energy distribution. We handle all commissioning processes, from initial testing to system startup, ensuring your system is ready to deliver power efficiently.</li>
            <li><strong>Project Management:</strong> We manage all aspects of the solar project lifecycle, from planning to execution, ensuring projects are completed on time, within budget, and to the highest standards. Our team oversees logistics, scheduling, procurement, and quality control for a smooth installation experience.</li>
          </ul>
        </div>

        {/* Maintenance Services Section */}
        <div className="service-section maintenance-section">
          <h2>Maintenance Services</h2>
          <div className="section-image">
            <img src={maintenanceImage} alt="Maintenance Services" />
          </div>
          <ul>
            <li><strong>Preventive Maintenance:</strong> Regularly scheduled inspections, cleaning, and maintenance of solar panels, inverters, and other system components to maintain optimal performance. Our team identifies potential issues early to minimize downtime and extend the life of your solar system.</li>
            <li><strong>Performance Monitoring and Analytics:</strong> We provide continuous monitoring of your solar system’s performance using cutting-edge software. Our analytics identify inefficiencies or performance drops, enabling us to proactively address issues before they impact energy production.</li>
            <li><strong>Repairs and Component Replacement:</strong> Should any component of your system require repairs or replacements, we offer fast, reliable service. We only use certified, high-quality parts to ensure your system operates efficiently and complies with warranties.</li>
            <li><strong>System Upgrades and Retrofits:</strong> Over time, technology evolves. Our team offers upgrades to incorporate new technologies and expand system capacity, allowing clients to benefit from the latest innovations in solar energy, improving overall system performance and efficiency.</li>
            <li><strong>Annual Service Contracts:</strong> We provide customized service packages that include regular maintenance, performance tracking, and priority service for any issues that arise. These contracts help ensure that your solar system continues to operate at peak efficiency with minimal hassle.</li>
            <li><strong>Emergency Support:</strong> In case of unexpected system failures, our 24/7 emergency support service is ready to assist. Our skilled technicians are on-call to troubleshoot and resolve any issues that may arise, ensuring that your energy production is back online as soon as possible.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ONM;
