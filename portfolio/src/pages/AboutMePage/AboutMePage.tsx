import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Head, ClientOnly } from 'vite-react-ssg';

import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import TravelSection from "./TravelSection";
import HobbiesSection from "./HobbiesSection";
import SideBar from "../../components/organisms/SideBar";

const navItems = [
    { title: "Education", id: "education" },
    { title: "Experience", id: "experience" },
    { title: "Hobbies", id: "hobbies" },
    { title: "Travel", id: "travel" },
];

function AboutMePage() {
    const location = useLocation();

    useEffect(() => {
        const { state } = location;
        if (state?.scrollToId) {
            const el = document.getElementById(state.scrollToId);
            if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <>
            <Head>
                <title>About Me — Noé Jager</title>
                <meta name="description" content="Education, work experience, and background of Noé Jager — ML Engineer with a Master's in Computer Science from University of Montréal." />
            </Head>
            <ClientOnly>
                {() => (
                    <>
                        <EducationSection/>
                        <SideBar sections={navItems} />
                        <ExperienceSection/>
                        <HobbiesSection/>
                        <TravelSection/>
                    </>
                )}
            </ClientOnly>
        </>
    );
}

export default AboutMePage;
