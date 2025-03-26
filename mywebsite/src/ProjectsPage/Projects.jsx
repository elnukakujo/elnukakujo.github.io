import './assets/css/projects.css';
import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SidebarProvider, useSidebar } from './SidebarContext';

import SideMenu from '../ReusableComponents/SideMenu';
import HeaderSection from './sections/HeaderSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactMe from './sections/ContactMeSection';

import projects from '../assets/data/projects.json';

export default function Projects() {
    useEffect(() => {
        document.title = 'Projects | Noe Jager';
      }, []);

    const location = useLocation();

    useEffect(() => {
        const scrollToElement = () => {
            if (location.state?.scrollTo) {
                if (location.state.scrollTo === '0') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                }
                const element = document.querySelector(`.${location.state.scrollTo}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        // Delay the execution to after the component has rendered
        requestAnimationFrame(scrollToElement);
    }, [location]);

    return (
        <SidebarProvider>
            <div className='projects-page'>
                <SideMenu sections={projects} useSidebar={useSidebar} />
                <HeaderSection />
                <ProjectsSection />
                <ContactMe />
            </div>
        </SidebarProvider>
    );
}