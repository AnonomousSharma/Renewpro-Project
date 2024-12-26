import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Career.css";

const jobList = [
  {
    title: "GM/AGM - Project Construction",
    location: "Jaipur",
    responsibilities: [
      "Oversee all aspects of project construction",
      "Coordinate with stakeholders and teams",
      "Ensure compliance with safety and quality standards",
    ],
  },
  {
    title: "Executive/Sr. Executive - Project Management",
    location: "Rajasthan and Assam",
    responsibilities: [
      "Prepare project schedules and resource allocation",
      "Monitor project progress and deliverables",
      "Assist in risk and cost management activities",
    ],
  },
  {
    title: "Asst. Manager/Dy. Manager - Supply Quality",
    location: "Jaipur/Gurgaon",
    responsibilities: [
      "Manage supplier quality assurance",
      "Coordinate with vendors for materials",
      "Perform audits and maintain quality standards",
    ],
  },
  {
    title: "Project Director (Solar Industry)",
    location: "Pan India",
    responsibilities: [
      "Lead large-scale solar projects across India",
      "Develop strategies for project implementation",
      "Ensure timely completion within budget",
    ],
  },
];

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    education: "",
    experience: "",
    resumeLink: "", // New field to store the resume link
  });
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); // Added state to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the application
    emailjs
      .sendForm(
        "service_zekbt6s",
        "template_rwci7x8",
        e.target,
        "osWopsh9xBW16yHYf"
      )
      .then(
        (result) => {
          setConfirmationMessage(
            "Your application has been submitted successfully!"
          );
          setFormSubmitted(true); // Mark the form as submitted
          setShowForm(false); // Close the form after submission

          // Reset form data instantly after successful submission
          setFormData({
            name: "",
            email: "",
            mobile: "",
            education: "",
            experience: "",
            resumeLink: "", // Reset the resume link field
          });

          // Clear confirmation message after 5 seconds
          setTimeout(() => {
            setConfirmationMessage("");
            setFormSubmitted(false); // Reset form submitted state
          }, 5000); // Reset confirmation message after 5 seconds
        },
        (error) => {
          setConfirmationMessage(
            "Something went wrong, please try again later."
          );
        }
      );
  };

  const closeJobDetails = () => {
    setSelectedJob(null);
    setShowForm(false); // Close form when job details are closed
  };

  return (
    <div className="career-page">
      <h1>Current Openings</h1>
      <div className="job-list">
        {jobList.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <button onClick={() => setSelectedJob(job)}>View</button>

            {/* Job Details */}
            {selectedJob === job && (
              <div className="job-details">
                <h2>{job.title}</h2>
                <h4>Location: {job.location}</h4>
                <h3>Responsibilities:</h3>
                <ul>
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
                <button className="close-btn" onClick={closeJobDetails}>
                  Close
                </button>
                <button className="apply-btn" onClick={() => setShowForm(true)}>
                  Apply Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {showForm && !formSubmitted && (
        <div className="application-form">
          <button className="close-btn-form" onClick={() => setShowForm(false)}>
            X
          </button>
          <h3>Apply for {selectedJob?.title}</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile No."
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="education"
              placeholder="Education"
              value={formData.education}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="experience"
              placeholder="Experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="resumeLink"
              placeholder="Paste your resume link here"
              value={formData.resumeLink}
              onChange={handleChange}
              required
            />
            <button className="send-btn" type="submit">
              Send Application
            </button>
          </form>
        </div>
      )}

      {confirmationMessage && (
        <div className="confirmation-message">{confirmationMessage}</div>
      )}
    </div>
  );
};

export default Career;
