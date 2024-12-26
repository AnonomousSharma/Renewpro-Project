import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Contact_Image from "../../assets/hero_image_3.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vda5aw8",
        "template_ko5zb9o",
        e.target,
        "-A4tcypCk4z0qcGHv"
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setStatus("An error occurred. Please try again later.");
        }
      );
  };

  return (
    <>
      <div className="background animated-slide-up">
        <img
          src={Contact_Image} // Replace with actual background image URL
          alt="Background Leaf"
          className="background-image"
        />
      </div>
      <div className="contact-us">
        <div className="contact-header">
          <h2>LET'S TALK TOGETHER</h2>
          <p>
            You already know what we do. Now all you have to do is get in touch
            with us. Give us a call, shoot us an email, or drop in for some
            wonderfully brewed coffee.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
            {status && <p className="status-message">{status}</p>}
          </div>
          <div className="contact-us-info">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.748426746213!2d75.79690024349311!3d26.8161379063184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dca05399b136f%3A0x5c503c64146ecd64!2s147%2C%201st%20St%2C%20Gayatri%20Nagar%2C%20Bambala%2C%20Jaipur%2C%20Rajasthan%20302029!5e0!3m2!1sen!2sin!4v1733133223266!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="get-in-touch">
              <h3>GET IN TOUCH</h3>
              <p>
                <strong>Address:</strong>
                Plot No. E-147, 1st Floor, Near Jain Mandir, Amba Bari, Jaipur,
                Rajasthan,302029
              </p>
              <p>
                <strong>Phone:</strong> +91 8829025133
              </p>
              <p>
                <strong>Email:</strong> info@renewproenergy.com
              </p>
              <div className="social-links">
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
          </div>
        </div>
        <div className="contact-footer">
          <div className="office">
            <h4>Registered Office</h4>
            <p>
              Plot No. E-147, 1st Floor, Near Jain Mandir, Amba Bari, Jaipur,
              Rajasthan,302029
            </p>
            <p>Phone: (+91) 8829025133</p>
          </div>
          <div className="office">
            <h4>Corporate Office</h4>
            <p>
              300, Path No.-6, Vijay Badi, Sikar Road, Jaipur, Rajasthan,302039
            </p>
            <p>Phone: (+91) 8829025133</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
