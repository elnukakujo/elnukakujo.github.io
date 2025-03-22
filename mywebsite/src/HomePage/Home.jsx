import './assets/css/home.css'
import { useEffect } from 'react'

import HeroSection from './sections/HeroSection'
import AboutMeSection from './sections/AboutMeSection'
import ProjectSection from './sections/ProjectSection'
import SkillsTechSection from './sections/SkillsTechSection'
import ContactMeSection from './sections/ContactMeSection'

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Noe Jager';
  }, []);
  return (
    <div className='home-page'>
      <HeroSection />
      <AboutMeSection />
      <ProjectSection />
      <SkillsTechSection />
      <ContactMeSection />
    </ div>
  )
}