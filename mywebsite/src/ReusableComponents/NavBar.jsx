import '../assets/css/ReusableComponents/navbar.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function NavBar() {
    const navigate = useNavigate();
    const handleNavigate = (page, anchorId) => {
        navigate('/'+page, {state: {scrollTo : anchorId}});
    }
    // Add scrolling detection for navbar styling
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar__content">
                <a onClick={() => handleNavigate("", "0")}>Home</a>
                <a onClick={() => handleNavigate("aboutme", "0")}>About Me</a>
                <a onClick={() => handleNavigate("projects", "0")}>Projects</a>
                <a href="https://raw.githubusercontent.com/elnukakujo/elnukakujo.github.io/main/mywebsite/src/assets/docs/cv.pdf" target="_blank" rel="noreferrer">CV</a>
            </div>
        </nav>
    );
}