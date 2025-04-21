import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


import CV from '../../assets/docs/CV March 2025.pdf';
import { handleDownload } from "../../utils/Download";
import useNavigateTo from "../../utils/navigateTo";
import './NavBar.css';

function NavBar() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigateTo = useNavigateTo();

    const handleScroll = () => {
        const isScrolled = window.scrollY > 75;
        if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
        }
    };
    
    window.addEventListener('scroll', handleScroll);

    useEffect(() => {
        setCurrentPage(location.pathname === "/" ? "home" :location.pathname.substring(1));
    }, [location]);

    return (
        <nav className={`fixed top-0 left-0 w-full min-w-sm ${scrolled?'bg-secondary shadow-lg':null} z-3 transition-all duration-300 ease-in-out`}>
            <div className="max-w-lg h-14 mx-auto flex flex-row justify-evenly items-center ">
                <h2 className={currentPage == "home" ? "current" : null} onClick={() => navigateTo("/")}>Home</h2>
                <h2 className={currentPage == "aboutme" ? "current" : null} onClick={() => navigateTo("/aboutme")}>About Me</h2>
                <h2 className={currentPage == "projects" ? "current" : null} onClick={() => navigateTo("/projects")}>Projects</h2>
                <h2 onClick={() => handleDownload(CV, 'NoeJagerCV.pdf')}>CV</h2>
            </div>
        </nav>
    );
}

export default NavBar;