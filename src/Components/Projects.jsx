import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  return (
    <motion.section
      className="projects-section"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="projects-title">MY PROJECTS</h1>

      <div className="projects-container">
        {/* Project Section 1 */}
        <div className="project-card">
          <h3 className="project-card-title">My Portfolio Website</h3>
          <p className="project-description">
            A responsive personal portfolio website built from scratch using
            React, featuring smooth page transitions and a modern UI.
          </p>
          <div className="project-tech-stack">
            <span>React</span>
            <span>CSS3</span>
            <span>Framer Motion</span>
          </div>
          <div className="project-links">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project"
            >
              Live Demo
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project"
            >
              GitHub Code
            </a>
          </div>
        </div>

        {/* Projects Section 2 */}
        <div className="project-card">
          <h3 className="project-card-title">Weather App</h3>
          <p className="project-description">
            A weather app that fetches data from a live API (like
            OpenWeatherMap) to display the current weather for any city.
          </p>
          <div className="project-tech-stack">
            <span>React</span>
            <span>API</span>
            <span>JavaScript</span>
          </div>
          <div className="project-links">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project"
            >
              Live Demo
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project"
            >
              GitHub Code
            </a>
          </div>
        </div>

        {/* Project section 3 */}

        <div className="project-card">
          <h3 className="project-card-title">Notes-Saver-App</h3>
          <p className="project-description">
            A simple note-taking app to quickly save, edit, and delete your
            thoughts. Built with React and uses local storage to ensure your
            notes stay saved even after you close the browser.
          </p>
          <div className="project-tech-stack">
            <span>React</span>
            <span>CSS3</span>
            <span>JavaScript</span>
          </div>
          <div className="project-links">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project"
            >
              Live Demo
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project"
            >
              GitHub Code
            </a>
          </div>
        </div>
      </div>
      <div className="Line"></div>
    </motion.section>
  );
};

export default Projects;
