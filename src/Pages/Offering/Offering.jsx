import React from "react";
import { Routes,Outlet, Link } from "react-router-dom";
// import CompanyHistory from "./CompanyHistory";
// import Testimonial from "./Testimonials";

const Offering = () => {
  return (
    <div>
      
      <Routes>
        {/* <Route path="company-history" element={<CompanyHistory />} /> */}
        {/* <Route path="testimonial" element={<Testimonial />} /> */}
        <Link to="epc-development">EPC & Development</Link>
        <Link to="open-access">
          Open Access
        </Link>

      </Routes>
      <Outlet />
    </div>
  );
};

export default Offering;
