import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="about-section"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="title">ABOUT ME</h1>
      <br />
      <h4 className="heading">
        Hello! I'm Jatin Verma, a developer-in-training with a clear goal.
      </h4>
      <br />
      <p className="description">
        While I'm currently focusing on mastering frontend technologies like
        React.js, JavaScript, and HTML/CSS, my ultimate ambition is to become a
        versatile full-stack developer. I believe a strong foundation is key,
        which is why I also dedicate my time to sharpening my problem-solving
        skills using C++ (Data Structures and Algorithms).
      </p>
      <br />
      <p className="description">
        I'm now looking for a challenging internship where I can contribute my
        frontend skills, learn from experienced mentors, and continue my journey
        toward becoming a full-stack engineer.
      </p>
    </motion.section>
  );
};

export default About;
