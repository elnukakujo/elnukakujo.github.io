import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// @ts-ignore
import CV from '../../../assets/docs/cv.pdf';
import { handleDownload } from "../../../utils/Download";
import useNavigateTo from "../../../utils/navigateTo";
import './NavBar.css';

function NavBar() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<boolean | string>(false);
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
        <header className={`fixed top-0 left-0 w-full ${scrolled?'bg-secondary shadow-lg':null} z-2 transition-all duration-300 ease-in-out`}>
            <nav className="min-w-[15rem] max-w-xl w-8/10 h-14 mx-auto flex flex-row justify-evenly items-center ">
                <h2 className={currentPage == "home" ? "current" : ""} onClick={() => navigateTo("/")}>Home</h2>
                <h2 className={currentPage == "aboutme" ? "current" : ""} onClick={() => navigateTo("/aboutme")}>About Me</h2>
                <h2 className={currentPage == "projects" ? "current" : ""} onClick={() => navigateTo("/projects")}>Projects</h2>
                <h2 onClick={() => handleDownload(CV, 'NoeJagerCV.pdf')}>CV</h2>
            </nav>
        </header>
    );
}

export default NavBar;