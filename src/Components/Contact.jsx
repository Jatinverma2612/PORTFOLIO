import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="contact-title">GET IN TOUCH</h1>
      <p className="contact-subtitle">
        I'm always open to discussing new projects, creative ideas, or
        opportunities. <br />
        Here's how you can reach me:
      </p>

      <div className="contact-links-container">
        {/* Contact Card */}

        <a href="tel:+918512058838" className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <p>+91 85120 58838</p>
          <span>Call me</span>
        </a>

        {/* Email Card */}
        <a href="mailto:jatinverma4554@gmail.com" className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>jatinverma4554@gmail.com</p>
          <span>Send me an email</span>
        </a>

        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/jatin-verma-26dec03/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <p>Jatin Verma</p>
          <span>Connect with me</span>
        </a>

        {/* GitHub Card */}

        <a
          href="https://github.com/Jatinverma2612"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p>Jatinverma2612</p>
          <span>See my work</span>
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
