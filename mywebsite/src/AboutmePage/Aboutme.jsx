import './assets/css/aboutme.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SidebarProvider, useSidebar } from './SidebarContext';

import SideMenu from '../ReusableComponents/SideMenu';
import HeaderSection from './sections/HeaderSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import LifeSection from './sections/LifeSection';
import ContactMe from './sections/ContactMeSection';

export default function Projects() {
    useEffect(() => {
        document.title = 'About Me | Noe Jager';
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

    const sections = [
        { title: 'Education', anchorId: 'education' },
        { title: 'Experience', anchorId: 'experience' },
        { title: 'Life', anchorId: 'life' }
    ];

    return (
        <SidebarProvider>
            <div className='aboutme-page'>
                <SideMenu sections={sections} useSidebar={useSidebar} />
                <HeaderSection />
                <EducationSection />
                <ExperienceSection />
                <LifeSection />
                <ContactMe />
            </div>
        </SidebarProvider>
    );
}