import PageLayout from "../../layouts/PageLayout";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";

function HomePage() {
    return (
        <PageLayout>
            <HeroSection/>
            <SkillsSection />
        </PageLayout>
    );
}

export default HomePage;