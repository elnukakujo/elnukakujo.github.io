import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Text from "../../atoms/Text";

import useNavigateTo from "../../../utils/navigateTo";
import './NavBar.css';

function NavBar() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<boolean | string>(false);
    const [scrolled, setScrolled] = useState(false);
    const navigateTo = useNavigateTo();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 75;
            setScrolled(prev => isScrolled !== prev ? isScrolled : prev);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setCurrentPage(location.pathname === "/" ? "home" :location.pathname.substring(1));
    }, [location]);

    return (
        <header className={`navbar fixed top-0 left-0 w-full ${scrolled?'bg-secondary shadow-lg':null} z-2 transition-all duration-300 ease-in-out`}>
            <nav className="min-w-[15rem] max-w-xl w-8/10 h-14 mx-auto flex flex-row justify-evenly items-center ">
                <Text text="Home" type="subheader" className={currentPage == "home" ? "current" : ""} onClick={() => navigateTo("/")}/>
                <Text text="About Me" type="subheader" className={currentPage == "aboutme" ? "current" : ""} onClick={() => navigateTo("/aboutme")}/>
                <Text text="Projects" type="subheader" className={currentPage == "projects" ? "current" : ""} onClick={() => navigateTo("/projects")}/>
                <a href="/cv.pdf" download className="text-wrap"><h2 className="undefined text-wrap">CV</h2></a>
            </nav>
        </header>
    );
}

export default NavBar;