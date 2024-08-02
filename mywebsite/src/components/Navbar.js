import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/components/navbar.css';

export default function Navbar()
{
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    useEffect(()=> {
        setMenuOpen(false);
        setScrolled(false);
        window.scrollTo(0, 0);
    }, [useLocation()])

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div id="nav" className={scrolled?'scrolled':''}>
            <div className="nav_content">
                <div className="top-row">
                    <div className={`menu-icon ${menuOpen?"open":""}`} onClick={handleClick}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <Link to="/" id="nav-title">
                        <h1>Noe Jager</h1>
                    </Link>
                </div>
                <div className={`links ${menuOpen?"links-open":""}`}>
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
        </div>
    )
}