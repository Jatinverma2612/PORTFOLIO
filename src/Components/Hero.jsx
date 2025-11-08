import React from "react";
import "./Hero.css";
import heroImg from "../assets/hero.png";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section id="home" className="hero">
      <div className="hero-content">
        <h2>
          Hi, I'm <span>Jatin Verma</span>
        </h2>
        <h1>Frontend Developer</h1>
        <h4 className="typing">
          Learning Data Structures & Algorithms in C++.
        </h4>

        <p className="para">
          <ReactTyped
            strings={[
              " I build clean and interactive web experiences using React.",
            ]}
            typeSpeed={30}
            backSpeed={60}
            loop
            showCursor={false}
          />
        </p>
        <br />
        <br />
        <div className="hero-buttons">
          <Link to="/About" className="btn-outline">
            About Me
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="jatin verma" />
      </div>
      <div className="social-icons">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jatinverma4554@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/jatin-verma-26dec03/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Jatinverma2612"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
