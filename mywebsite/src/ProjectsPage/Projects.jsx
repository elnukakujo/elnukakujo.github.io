import './assets/css/projects.css';
import React from 'react';
import { useEffect } from 'react';

import HeaderSection from './sections/HeaderSection';
import ProjectsSection from './sections/ProjectsSection';

export default function Projects() {
    useEffect(() => {
        document.title = 'Projects | Noe Jager';
      }, []);
    return (
        <div className='projects-page'>
            <HeaderSection />
            <ProjectsSection />
        </div>
    );
}