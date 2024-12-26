import React from "react";
import "./CompanyHistory.css"; // Include this for styling
import Company_Image from "../../assets/hero_image_3.jpg";
import profile_1 from "../../assets/Profile_1.png"
import profile_2 from "../../assets/Profile_2.png"

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Background section */}
      <div className="background">
        <img
          src={Company_Image} // Replace with actual background image URL
          alt="Background Leaf"
          className="background-image"
        />
      </div>

      {/* About Us Section */}
      <div className="content">
        <h2>About Us</h2>
        <p>
          Established in 2024, we have been one of the early movers in the solar
          park regime and have now grown into a well-established player in
          turnkey solar engineering, procurement and construction (“EPC”)
          services, catering to the increasing demand for renewable energy in
          the country. We are also one of the leading integrated solar power
          company in India with the implementation of solar power projects of
          1,607 mega-watts peak (“MWp”). On the back of our strong regulatory
          understanding of State laws for land acquisition and our ability to
          liaise with State land authorities, we have established a track record
          of acquiring over 5,700 acres of land for our customers across India.
          We offer a consultative approach to our customers’ solar energy needs
          and capabilities, which enables us to provide customized solutions to
          meet their requirements.
        </p>
        <br />
        <p>
        Our mission is to empower our clients through sustainable energy solutions that reduce costs, minimize environmental impact, and enhance energy efficiency. We are committed to excellence in every aspect of our work, from product innovation to customer service. At RenewPro, we believe in creating a cleaner, greener future for all, and we aim to lead the way in providing renewable energy solutions that make a tangible difference in the world.
        </p>
        <br />

        <p>
          <span>Think Green Think Better!</span>
        </p>
      </div>
{/* profile section */}
      <div className="profile-section">
      <div className="profile-card">
        <img src={profile_1} alt="Profile 1" className="profile-image" />
        <div className="profile-info">
          <h3 className="profile-name">John Doe</h3>
          <p className="profile-position">CEO & Founder</p>
          <p className="profile-qualification">B.Tech, MBA</p>
          <p className="profile-details">
            John is the visionary leader behind our company, with over 15 years of experience in the solar energy sector. His strategic foresight and commitment to sustainability drive our mission to provide renewable energy solutions.
          </p>
        </div>
      </div>

      <div className="profile-card">
        <img src={profile_2} alt="Profile 2" className="profile-image" />
        <div className="profile-info">
          <h3 className="profile-name">Jane Smith</h3>
          <p className="profile-position">Chief Technology Officer</p>
          <p className="profile-qualification">M.Sc. in Renewable Energy</p>
          <p className="profile-details">
            Jane is an expert in solar technology with over a decade of experience in designing and implementing renewable energy projects. She leads our technical team with a focus on innovation and efficiency.
          </p>
        </div>
      </div>
    </div>

      {/* Vision, Mission, Values Section */}
      <div className="vision-mission-values">
        <div className="card">
          <h3> - Vision</h3>
          <p>
          Our vision is to be a global leader in sustainable energy solutions, driving innovation and empowering communities to embrace clean, renewable energy for a brighter, greener future.
          </p>
        </div>
        <div className="card">
          <h3> - Mission</h3>
          <p>Our mission is to provide cutting-edge, reliable solar energy solutions that reduce carbon footprints and promote energy independence. We are committed to delivering exceptional value to our customers while advancing the global transition to renewable energy.  </p>
        </div>
        <div className="card">
          <h3> - Values</h3>
          <ul>
    <li><strong>Integrity:</strong> We uphold honesty and transparency in all our actions.</li>
    <li><strong>Innovation:</strong> We foster creativity to deliver advanced energy solutions.</li>
    <li><strong>Sustainability:</strong> We prioritize eco-friendly products and practices.</li>
    <li><strong>Customer-Centricity:</strong> We are dedicated to exceeding customer expectations.</li>
  </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
