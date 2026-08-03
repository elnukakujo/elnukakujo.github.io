import { Head, ClientOnly } from 'vite-react-ssg';
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";

function HomePage() {
    return (
        <>
            <Head>
                <title>Noé Jager — ML Engineer</title>
                <meta name="description" content="ML Engineer portfolio — AI/ML, full-stack development, cloud infrastructure. Projects in deep learning, LLMs, data privacy, and self-hosted infrastructure." />
            </Head>
            <ClientOnly>
                {() => (
                    <>
                        <HeroSection/>
                        <SkillsSection />
                    </>
                )}
            </ClientOnly>
        </>
    );
}

export default HomePage;
