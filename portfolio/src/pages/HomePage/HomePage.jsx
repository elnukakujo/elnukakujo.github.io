import HeroLayout from "../../layouts/HeroLayout";
import SkillsSection from "./SkillsSection";

function HomePage() {
    return (
        <div className="page">
            <HeroLayout/>
            <SkillsSection />
        </div>
    );
}

export default HomePage;