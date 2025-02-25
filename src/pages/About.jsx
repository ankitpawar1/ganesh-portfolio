import React from "react";
import "../assets/css/styles.css";

const About = () => (
  <section className="about-section">
    <img src="/ganesh-portfolio/images/logo-background.jpeg" alt="logo" className="logo-img" />
    <p>
      A creative and skilled sculpture artist with nine years of experience in
      crafting three-dimensional artworks, proficient in working with clay,
      stone, C4X fiber, metal, and wood. Demonstrates a strong ability to
      conceptualize and create sculptures that effectively convey artistic
      vision and evoke emotion. Possesses in-depth knowledge of sculpting
      techniques, material properties, and art history.
    </p>
    <p>
      Experienced in sculpting across various mediums, including clay, stone,
      metal, and wood, executing both small-scale pieces and large-scale
      installations. Skilled in developing designs from concept to final
      installation, ensuring alignment with client specifications and artistic
      vision. Collaborates closely with clients and stakeholders to understand
      project requirements and deliver innovative artistic solutions. Maintains
      a dedicated studio practice, fostering creativity, technical expertise,
      and professional relationships.
    </p>
    <h1>SKILLS</h1>
    <div className="skills-container">
      {[
        "Clay Work",
        "Stone Carving",
        "Wood Carving",
        "Fiber Casting and Coloring",
        "POP Casting",
        "C4X Carving",
        "Portrait Drawing",
        "Sketch",
        "Metal Work",
        "Tool/Technology",
      ].map((skill) => (
        <div className="skill-box" key={skill}>
          {skill}
        </div>
      ))}
    </div>
  </section>
);

export default About;
