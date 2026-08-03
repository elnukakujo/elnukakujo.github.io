import { Head } from 'vite-react-ssg';
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";

function HomePage() {
    return (
        <>
            <Head>
                <title>Noé Jager — ML Engineer</title>
                <meta name="description" content="ML Engineer portfolio — AI/ML, full-stack development, cloud infrastructure. Projects in deep learning, LLMs, data privacy, and self-hosted infrastructure." />
                <meta property="og:title" content="Noé Jager — ML Engineer" />
                <meta property="og:description" content="ML Engineer specializing in AI/ML, full-stack development, and cloud infrastructure. Portfolio showcasing projects in deep learning, LLMs, and data privacy." />
                <meta property="og:url" content="https://elnukakujo.github.io/" />
                <meta name="twitter:title" content="Noé Jager — ML Engineer" />
                <meta name="twitter:description" content="ML Engineer specializing in AI/ML, full-stack development, and cloud infrastructure." />
            </Head>
            <HeroSection/>
            <SkillsSection />
        </>
    );
}

export default HomePage;
