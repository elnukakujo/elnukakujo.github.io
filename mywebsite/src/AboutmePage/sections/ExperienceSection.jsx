import '../assets/css/sections/experiencesection.css';

import { motion } from 'framer-motion';
import {useInView} from "react-intersection-observer";
import {useSidebar} from "../SidebarContext";

export default function ExperienceSection() {
    const { setActiveSection } = useSidebar();
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
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
        className="p-8 bg-blue-500 text-white text-center rounded-xl shadow-lg experience-section experience"
        >
            <h1 className='experience-section__title'>Experience</h1>
            <h1>Help me fill it!</h1>
        </motion.div>
    );
}