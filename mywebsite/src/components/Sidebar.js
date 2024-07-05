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
                <div className="dropdown">
                    <Link to="/education" className="drop-trigger">Education</Link>
                    <div className="dropdown-content">
                        <Link to="/education#masterUdem">Master</Link>
                        <Link to="/education#bacUniLu">Bachelor</Link>
                        <Link to="/education#oc">Online Courses</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="/projects" className="drop-trigger">Projects</Link>
                    <div className="dropdown-content">
                        <Link to="/projects#master_projects">Master Projects</Link>
                        <Link to="/projects#bachelor_projects">Bachelor Projects</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}