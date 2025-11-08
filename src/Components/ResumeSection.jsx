import React from "react";
import "./ResumeSection.css";
import resumePDF from "../assets/jatin_resume.pdf";

const ResumeSection = () => {
  return (
    <div>
      <section className="resume-section">
        <h1>Hello!</h1>
        <p>
          I'm Jatin Verma, and I'm an aspiring software developer. I'm currently
          pursuing my BCA while also diving deep into building modern web
          applications. I love using React.js to create clean, interactive UIs,
          and I'm just as passionate about strengthening my problem-solving
          foundation with C++ (DSA).
        </p>

        <div className="education-skills">
          <div className="education">
            <h2>EDUCATION</h2>
            <h4>2025-2027: Indira Gandhi National Open University (IGNOU)</h4>
            <p>Bachelor of Computer Applications (BCA)</p>
            <h4>2021-2024: Delhi University (SOL)</h4>
            <p>Bachelor of Arts (BA)</p>
          </div>

          <div className="skills">
            <h2>SKILLS</h2>
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <p>React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS</p>
            </div>

            <div className="skill-category">
              <h3>Programming & DSA</h3>
              <p>C++ (Data Structures & Algorithms), 100+ LeetCode</p>
            </div>

            <div className="skill-category">
              <h3>Developer Tools</h3>
              <p>Git, GitHub, VS Code</p>
            </div>
          </div>
        </div>

        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-resume"
        >
          View My Resume
        </a>
      </section>
    </div>
  );
};

export default ResumeSection;
