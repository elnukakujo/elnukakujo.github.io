import '../assets/css/sections/educationsection.css';

import education from '../assets/data/education.json';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSidebar } from '../SidebarContext';

const images = import.meta.glob('../assets/img/education/**', { eager: true });

export default function EducationSection() {
    const universities = education.uni;
    const ol = education.ol;

    const { setActiveSection } = useSidebar();
    const { ref, inView } = useInView({
        threshold: 0.01,  // Detects when 50% of the section is visible
        triggerOnce: false, // Keeps updating as user scrolls
    });

    // Update the active section when it becomes visible
    if (inView) {
        setActiveSection("experience");
    }

    return (
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-8 bg-blue-500 text-white text-center rounded-xl shadow-lg education-section education"
        >
            <h1 className='education-section__title'>Education</h1>
            <div className='education-section__universities'>
                {universities.map((uni, index) => {
                    return(
                        <div key={index} className='education-section__university'>
                            <div className='education-section__university-header'>
                                <div className='education-section__university-header-header'>
                                    <h2 className='education-section__university-name'>{uni.title}</h2>
                                    <p className='education-section__university-degree'>{uni.date}</p>
                                </div>
                                <div className='education-section__university-header-logo'>
                                    <a href={uni.websiteUrl} target='_blank' rel='noreferrer'>
                                        <img src={images[uni.logo]?.default || null} alt={uni.title} />
                                    </a>
                                </div>
                            </div>
                            <img className='education-section__university-image' src={images[uni.image]?.default || null} alt={uni.title} />
                            <div className='education-section__university-content'>
                                <h2>Subjects covered :</h2>
                                <ul>
                                    {uni.courses.map((course, index) => (
                                        <li key={index}>{course}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='education-section__online-courses'>
                <h2>I also took some additional Online Courses</h2>
                <div className='education-section__online-courses-list'>
                    {ol.map((course, index) => (
                        <div key={index} className='education-section__online-courses-list-course'>
                            <a href={course.url} target='_blank' rel='noreferrer'>{course.title}</a>
                            <a href={course.url} target='_blank' rel='noreferrer'>
                                <img src={images[course.logo]?.default || null} alt={course.title} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}