import AboutMeSection from "./AboutMeSection/AboutMeSection";
import SocialsBar from "../../components/SocialsBar/SocialsBar";
import FeaturedProjectsSection from "./FeaturedProjectsSection/FeaturedProjectsSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import ContactFooter from "../../components/ContactFooter/ContactFooter";
import HeroLayout from "../../layouts/HeroLayout";

function HomePage() {
    return (
        <div className="page">
            <HeroLayout/>
            <AboutMeSection />
            <FeaturedProjectsSection />
            <SkillsSection />
            <ContactFooter />
        </div>
    );
}

export default HomePage;