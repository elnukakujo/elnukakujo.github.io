import React from "react";

import '../assets/css/sections/contactmesection.css';

import githubLogo from "../../assets/img/logo/github_logo.jpg";
import linkedinLogo from "../../assets/img/logo/linkedin_logo.jpg";
import gmailLogo from "../../assets/img/logo/gmail_logo.jpg";

export default function ContactMe(){
    return (
        <div className="contact-me-section">
            <h1 className="contact-me-section__title">Want to collaborate ? Let's talk !</h1>
            <div className="contact-me-section__content">
                <a href="https://github.com/elnukakujo" className="contact-me-section__content__button" target="_blank" rel="noreferrer">
                    <img src={githubLogo} alt="Github Logo" className="contact-me-section__content__button__img" />
                </a>
                <a href="https://www.linkedin.com/in/no%C3%A9-jager-2b4866236/" className="contact-me-section__content__button" target="_blank" rel="noreferrer">
                    <img src={linkedinLogo}  alt="Linkedin Logo" className="contact-me-section__content__button__img" />
                </a>
                <a href="mailto:noe.p.jager@gmail.com" className="contact-me-section__content__button" target="_blank" rel="noreferrer">
                    <img src={gmailLogo} alt="Gmail Logo" className="contact-me-section__content__button__img" />
                </a>
            </div>
        </div>
    );
}