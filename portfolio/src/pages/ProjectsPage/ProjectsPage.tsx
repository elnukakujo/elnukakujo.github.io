import { Head } from 'vite-react-ssg';
import AllProjectsSection from "./AllProjectsSection";
import RecommendedSection from "./RecommendedSection";

import { projects } from "./Projects.constants";
import SideBar from "../../components/organisms/SideBar";

export default function ProjectsPage() {
    return (
        <>
            <Head>
                <title>Projects — Noé Jager</title>
                <meta name="description" content="Projects by Noé Jager — deep learning frameworks, full-stack AI applications, robotics, LLM agents, and self-hosted infrastructure." />
            </Head>
            <RecommendedSection/>
            <SideBar sections={projects} />
            <AllProjectsSection/>
        </>
    );
}
