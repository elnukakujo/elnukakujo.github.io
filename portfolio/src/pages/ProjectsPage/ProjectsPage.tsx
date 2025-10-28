import AllProjectsSection from "./AllProjectsSection";
import RecommendedSection from "./RecommendedSection";
import PageLayout from "../../layouts/PageLayout";

import { projects } from "./Projects.constants";
import SideBar from "../../components/organisms/SideBar";

export default function ProjectsPage() {
    return (
        <PageLayout>
            <RecommendedSection/>
            <SideBar sections={projects} />
            <AllProjectsSection/>
        </PageLayout>
    );
}