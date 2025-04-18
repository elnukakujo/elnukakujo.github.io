import AboutMeSection from "./AboutMeSection/AboutMeSection";
import SocialsBar from "../../components/SocialsBar/SocialsBar";
import FeaturedProjectsSection from "./FeaturedProjectsSection/FeaturedProjectsSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import ContactFooter from "../../components/ContactFooter/ContactFooter";
import HeroLayout from "../../layouts/HeroLayout";

function HomePage() {
    return (
        <>
            <SocialsBar className="fixed top-2 right-5 z-4 justify-normal items-normal" size={22}/>
            <div className="page">
                <HeroLayout/>
                <AboutMeSection />
                <FeaturedProjectsSection />
                <SkillsSection />
                <ContactFooter />
            </div>
        </>
    );
}

export default HomePage;