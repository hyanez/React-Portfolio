import React from "react";
import "../styles/Resume.css";

export default function Resume() {
  return (
    <div className="resume">
      <div className="resumeCard">
        <h2>Education</h2>
        <ul>
          <li>Fordham University '19, Bronx, NY</li>

          <li>
            Bachelor of Science in Computer Science, Minor in Cyber Security
          </li>
        </ul>
      </div>
      <div className="resumeCard">
        <h2>Certificates</h2>
        <ul>
          <li>Columbia Engineering Coding Bootcamp, Columbia University '22</li>
        </ul>
      </div>
      <div className="resumeCard">
        <h2>Technical Skills</h2>
        <ul>
          <li>Javascript</li>
          <li>C++</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>MySQL</li>
          <li>GraphQL</li>
          <li>Github</li>
          <li>VS Code</li>
          <li>Slack</li>
          <li>VS Code</li>
          <li>Linux/Unix</li>
          <li>Mac OS</li>
          <li>Windows</li>
        </ul>
      </div>
    </div>
  );
}
