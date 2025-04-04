import React from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/img/noe_aout_2022.png";
import '../assets/css/sections/herosection.css';

export default function HeroSection() {
  const navigate = useNavigate();
  const handleNavigate = (page, anchorId) => {
    navigate('/'+page, {state: {scrollTo : anchorId}});
  }

  return (
    <div className="hero-section">
      <div className="hero-section__content">
        <div className="hero-section__header">
            <img src={profileImage} alt="Profile Image of Noé" className="hero-section__image" />
            <h1 className="hero-section__title">Hi, I’m Noé Jager</h1>
            <h2 className="hero-section__description">AI Engineer & Full-Stack Developer | Turning Data into Intelligence</h2>
        </div>
        <div className="hero-section__text">
            <p>I build AI-powered applications that solve real-world problems. Passionate about deep learning, machine learning, and full-stack development.</p>
        </div>
        <div className="hero-section__cta">
            <a onClick={() => handleNavigate("projects", "0")} className="hero-section__cta-button button">View my work</a>
            <a href="https://raw.githubusercontent.com/elnukakujo/elnukakujo.github.io/main/mywebsite/src/assets/docs/cv.pdf" className="hero-section__cta-button button" target="_blank" rel="noreferrer">Download Resume</a>
        </div>
      </div>
    </div>
  );
}