import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/components/sidebar.css';

export default function Sidebar(){

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 80;
            if(isScrolled !== scrolled){
                setScrolled(isScrolled);
            }

        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <div id="sidebar" className={scrolled?'scrolled':''}>
            <div className="sidebar_content">
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/education">Education</Link>
                <Link to="/projects">Projects</Link>
                <a 
                href="https://raw.githubusercontent.com/elnukakujo/elnukakujo.github.io/main/mywebsite/src/assets/docs/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer">
                    CV
                </a>
            </div>
        </div>
    )
}