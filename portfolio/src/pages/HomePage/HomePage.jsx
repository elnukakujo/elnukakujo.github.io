import HeroLayout from "../../layouts/HeroLayout/HeroLayout";
import SkillsSection from "./SkillsSection/SkillsSection";

function HomePage() {
    return (
        <div className="page">
            <HeroLayout/>
            <SkillsSection />
        </div>
    );
}

export default HomePage;