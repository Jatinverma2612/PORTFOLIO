import React from "react";
import Hero from "./Hero";
import ResumeSection from "./ResumeSection";
import Navbar from "./Navbar"
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Hero />
        <ResumeSection />
        <Projects/>
        <Contact/> 
      </div>
    </>
  );
};

export default Home;
