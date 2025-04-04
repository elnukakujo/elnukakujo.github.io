import React, { useState, useEffect } from 'react';

import '../assets/css/ReusableComponents/sidemenu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function SideMenu({ sections, useSidebar }) {
    const { activeSection, setActiveSection } = useSidebar();

    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    // Function to handle screen resizing
    useEffect(() => {
        const handleResize = () => {
            const isCurrentlyMobile = window.innerWidth <= 600;
            setIsMobile(isCurrentlyMobile);
            setIsOpen(!isCurrentlyMobile); // Open on large screens, closed on small
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Run on mount to set the initial state

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setIsOpen(activeSection ? !isMobile : false);
    }, [activeSection, isMobile]);

    const handleScroll = (e) => {
        const element = document.querySelector(`.${e}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(e);
            if (isMobile) {
                setIsOpen(false);
            }
        }
    };
    if (activeSection) {
        return (
            <div className="side-menu">
                {!isMobile && isOpen ? ( // Always open on large screens
                    <div className="side-menu-content">
                        {sections.map((section, index) => (
                            <div
                                className={`side-menu-content__item ${activeSection === section.anchorId ? "focus" : null}`}
                                key={index}
                                onClick={() => handleScroll(section.anchorId)}
                            >
                                <FontAwesomeIcon
                                    icon={faCircle}
                                />
                                <div className="side-menu-content__item__content">
                                    <h2>{section.title}</h2>
                                    {section.summary ? (<p>{section.summary}</p>) : null}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : isMobile && isOpen ? (
                    <>
                        <FontAwesomeIcon
                            className="side-menu-button-control"
                            onClick={() => setIsOpen(false)}
                            icon={faXmark}
                        />
                        <div className="side-menu-content">
                        {sections.map((section, index) => (
                            <div
                                className={`side-menu-content__item ${activeSection === section.anchorId ? "focus" : null}`}
                                key={index}
                                onClick={() => handleScroll(section.anchorId)}
                            >
                                <h2>{section.title}</h2>
                            </div>
                        ))}
                    </div>
                    </>
                )
                : isMobile && !isOpen ? (
                    <FontAwesomeIcon
                        className="side-menu-button-control"
                        onClick={() => {setIsOpen(true)}}
                        icon={faBars}
                    />
                )
                : <></>}
            </div>
        );
    } else {
        return <></>;
    }
}