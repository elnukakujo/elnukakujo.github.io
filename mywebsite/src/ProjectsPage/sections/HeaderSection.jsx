import React from "react";

import '../assets/css/sections/headersection.css';

export default function Header() {
    return (
        <div className="header-section">
            <h1 className="header-section__title">Welcome to My Project Page</h1>
            <div className="header-section__content">
                <h1 className="header-section__content__quotes left">"</h1>
                <p className="header-section__content__text">
                    Here, you’ll find a collection of projects where I explore AI, data science, and full-stack development. 
                    From machine learning models to interactive web apps, each project is a mix of problem-solving, data-driven insights, and creative coding. 
                    Take a look around—I’m always up for challenge and building something new!
                </p>
                <h1 className="header-section__content__quotes right">"</h1>
            </div>
        </div>
    )
}