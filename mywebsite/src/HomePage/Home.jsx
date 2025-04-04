import './assets/css/home.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SidebarProvider, useSidebar } from './SidebarContext'
import SideMenu from '../ReusableComponents/SideMenu'

import HeroSection from './sections/HeroSection'
import AboutMeSection from './sections/AboutMeSection'
import ProjectSection from './sections/ProjectSection'
import SkillsTechSection from './sections/SkillsTechSection'
import ContactMeSection from './sections/ContactMeSection'

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Noe Jager';
  }, []);

  const location = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
        if (location.state?.scrollTo) {
          if (location.state.scrollTo === '0') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
              const element = document.querySelector(`.${location.state.scrollTo}`);
              if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
              }
          }
          // Reset location state after scrolling to prevent future navigation from re-scrolling
          window.history.replaceState({}, document.title);
        }
    };
    // Delay the execution to after the component has rendered
    requestAnimationFrame(scrollToElement);
  }, [location]);

  const sections = [
    { title: 'Projects', anchorId: 'projects' },
    { title: 'Skills & Technologies', anchorId: 'skills' },
    { title: 'Contact Me', anchorId: 'contact-me' }
  ];

  return (
    <SidebarProvider>
      <div className='home-page'>
        <SideMenu sections={sections} useSidebar={useSidebar} />
        <HeroSection />
        <AboutMeSection />
        <ProjectSection />
        <SkillsTechSection />
        <ContactMeSection />
      </ div>
    </SidebarProvider>
  )
}