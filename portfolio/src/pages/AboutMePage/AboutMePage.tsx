import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PageLayout from '../../layouts/PageLayout';
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import CountriesVisitedSection from "./CountriesVisitedSection";
import TripsSection from "./TripsSection";
import HobbiesSection from "./HobbiesSection";
import SideBar from "../../components/organisms/SideBar";

const navItems = [
    { title: "Education", id: "education" },
    { title: "Experience", id: "experience" },
    { title: "Countries visited", id: "countries-visited" },
    { title: "Trips", id: "trips" },
    { title: "Hobbies", id: "hobbies" },
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
        <PageLayout>
            <EducationSection/>
            <SideBar sections={navItems} />
            <ExperienceSection/>
            <CountriesVisitedSection/>
            <TripsSection/>
            <HobbiesSection/>
        </PageLayout>
    );
}

export default AboutMePage;