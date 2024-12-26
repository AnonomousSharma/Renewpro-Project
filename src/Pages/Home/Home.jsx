import React from "react";
import HeroSection from "./HeroSection";
import MainContent from "./MainContent";
import ProjectSection from "./ProjectSection";
import OfferingSection from "./OfferingSection";
import AwardSection from "./AwardSection";


const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Section */}
      <MainContent />

      {/* Project Section */}
      <ProjectSection />

      {/* Offering Section */}
      <OfferingSection />

      {/* Award Section */}
      <AwardSection />

     
    </>
  );
};

export default Home;
