import React from "react";
import "./skills.css";

const expertiseHighlights = [
  { title: "Digital and Business Transformations" },
  { title: "O-RAN/ RIC/ Cognitive Networking / AI & ML" },
  { title: "Cloud and IoT Solution Development" },
  { title: "Software as a Service (SaaS)" },
  { title: "Profit and Loss / Growth Strategies" },
  { title: "Requirements Gathering / Analysis" },
  { title: "Sales and Account Management" },
  { title: "Relationship and Business Development" },
  { title: "Program and Project Management" },
  { title: "Cellular/ Mission Critical Network Tech." }
];

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="h1-design">My Expertise</h1>
      <div className="skills-grid expertise-highlights">
        {expertiseHighlights.map((highlight, index) => (
          <div key={index} className="skill-item">
            <div className="skill-title">{highlight.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;