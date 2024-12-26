import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import AboutUs from "../src/Pages/AboutUs/AboutUs";
import CompanyHistory from "./Pages/AboutUs/CompanyHistory";
import AnR from "./Pages/AboutUs/AnR";
import NavBar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Project from "./Pages/Project/Project";
import Blog from "./Pages/Blog/Blog";
import Career from "./Pages/Career/Career";
import ContactUs from "./Pages/ContactUs/ContactUs";
import BlogDetail from "./Pages/Blog/BlogDetail";
import ScrollToTop from "./Components/ScrollToTop";
import Offering from "./Pages/Offering/Offering";
import EPCDEV from "./Pages/Offering/EPCDEV";
import OpenAccess from "./Pages/Offering/OpenAccess";
import ONM from "./Pages/Offering/ONM";
import ProjectManagement from "./Pages/Offering/ProjectManagement";
import RooftopSolar from "./Pages/Offering/RooftopSolar";
import KusumYojna from "./Pages/Offering/KusumYojna";


function App() {
  useEffect(() => {
    // Ensure that on refresh, the page scrolls to the top
    window.scrollTo(0, 0);

    // If you are not on the Home page, refresh and navigate to the Home page
    if (window.location.pathname !== "/") {
      window.location.href = "/"; // Forces redirect to Home page
    }
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about-us" element={<AboutUs />} />
  <Route path="/about-us/company-history" element={<CompanyHistory />} />
  <Route path="/about-us/anr" element={<AnR />} />
  <Route path="/project" element={<Project />} />
  <Route path="/offering" element={<Offering />} />
  <Route path="/offering/epc-development" element={<EPCDEV />} />
  <Route path="/offering/open-access" element={<OpenAccess />} />
  <Route path="/offering/onm" element={<ONM />} />
  <Route path="/offering/project-management" element={<ProjectManagement />} />
  <Route path="/offering/rooftop-solar" element={<RooftopSolar />} />
  <Route path="/offering/kusum-yojna" element={<KusumYojna />} />
  
  <Route path="/blog" element={<Blog />} />
  <Route path="/career" element={<Career />} />
  <Route path="/contact" element={<ContactUs />} />
  <Route path="/blog/:id" element={<BlogDetail />} />
</Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
