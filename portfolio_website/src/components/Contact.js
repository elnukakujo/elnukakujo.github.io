import React from 'react';
import githubLogo from '../assets/img/logo/github_logo.jpg';
import linkedinLogo from "../assets/img/logo/linkedin_logo.jpg";
import gmailLogo from '../assets/img/logo/gmail_logo.jpg';
import '../assets/css/components/contact.css';

export default function Contact(){
    return (
        <footer>
            <div className="content">
                <h3>Contact Me</h3>
                <figure id="contacts_links">
                    <a className="img_container" href="https://github.com/elnukakujo" target="_blank">
                        <img src={githubLogo} alt="GitHub"/>
                    </a>
                    <a className="img_container" href="https://www.linkedin.com/in/no%C3%A9-jager-2b4866236/" target="_blank">
                        <img src={linkedinLogo} alt="Linkedin"/>
                    </a>
                    <a className="img_container" href="mailto:noe.p.jager@gmail.com"target="_blank">
                        <img src={gmailLogo} alt="Gmail" />
                    </a>
                </figure>
            </div>
        </footer>
    )
}
