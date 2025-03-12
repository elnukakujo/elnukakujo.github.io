import React from "react";
import parisNoe from "../assets/img/noe_paris_2025.png";
import '../assets/css/sections/aboutmesection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';


export default function AboutMeSection() {
  return (
    <div className="about-me-section">
        <h1 className="about-me-section__title">Here is something about me ...</h1>
        <div className="about-me-section__content_and_cta">
            <div className="about-me-section__content">
                <img src={parisNoe} alt="Image of Noé at the Orangerie museum" className="about-me-section__image" />
                <div className="about-me-section__text">
                    <p>I'm currently doing a master's degree in Computer Science at Université de Montréal. Right now, I'm interning at AppOX, an AI startup. I've built several AI and full-stack applications and taken part in hackathons at Université de Montréal, McGill University, and online.</p>
                    <p>Besides studying, I love travelling and learning new languages. In summer 2023, I spent two months at a language school in Japan and have also been learning Chinese. This winter, I started bouldering and boxing, which have been really fun. I also weekly join role-playing campaigns, which are a great way to have fun and be creative.</p>
                </div>
            </div>
            <div className="about-me-section__cta">
                <a href="" className="about-me-section__cta-button">
                    <FontAwesomeIcon icon={faBookOpen} />
                    <p>Education</p>
                </a>
                <a href="" className="about-me-section__cta-button">
                    <FontAwesomeIcon icon={faBriefcase} />
                    <p>Experience</p>
                </a>
                <a href="" className="about-me-section__cta-button">
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <p>Not Enough?</p>
                </a>
                <a href="" className="about-me-section__cta-button">
                    <FontAwesomeIcon icon={faMessage} />
                    <p>Contact Me</p>
                </a>
            </div>
        </div>
    </div>
  );
}