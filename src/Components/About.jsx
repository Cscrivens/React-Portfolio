import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
      <h2>About Me</h2>
      <p>
        Im a passionate woman new to tech, dedicated to exploring the endless possibilities that the tech industry offers. My journey began with a deep curiosity and eagerness to learn, leading me to pursue a career in software development.
      </p>
      <p>
        With my background in administration, I've honed skills like problem solving, which I believe are invaluable in the world of software engineering. However, my desire to contribute to innovative solutions in technology has driven me to make a full-time transition to software development.
      </p>
      <p>
        Im enthusiastic about the opportunities ahead, eager to dive deeper into the world of software development, and committed to continuous learning and growth. I strongly believe in the power of diversity and inclusion for driving innovation, and as a woman in tech, Im dedicated to being a catalyst for positive change.
      </p>
      </div>
      <div className="about-image">
        <img src="https://s3.resume.io/cdn-cgi/image/width=680,height=595,fit=cover,format=auto/uploads/blog_post/featured_image/26324/RIO_-_Women_coding.png" alt="Coding Woman" />
      </div>
    </div>
  );
}

export default About;
