import React from "react";
import { Routes,Outlet, Link } from "react-router-dom";
// import CompanyHistory from "./CompanyHistory";
// import Testimonial from "./Testimonials";

const AboutUs = () => {
  return (
    <div>
      <h2>hello</h2>
      <Routes>
        {/* <Route path="company-history" element={<CompanyHistory />} /> */}
        <Link to="company-history">Company History</Link>
        {/* <Route path="testimonial" element={<Testimonial />} /> */}
        <Link to="testimonial">
          Tesimonial
        </Link>
      </Routes>
      <Outlet />
    </div>
  );
};

export default AboutUs;
