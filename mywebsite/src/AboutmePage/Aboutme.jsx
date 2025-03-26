import './assets/css/aboutme.css';
import React from 'react';
import { useEffect } from 'react';

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

    return (
        <SidebarProvider>
            <div className='aboutme-page'>
                <HeaderSection />
                <EducationSection />
                <ExperienceSection />
                <LifeSection />
                <ContactMe />
            </div>
        </SidebarProvider>
    );
}