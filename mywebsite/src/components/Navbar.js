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

    const location = useLocation();

    useEffect(()=> {
        setMenuOpen(false);
        setScrolled(false);
        window.scrollTo(0, 0);
    }, [location])

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
        </div>
    )
}