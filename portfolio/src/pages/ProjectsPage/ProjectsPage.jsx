import AllProjectsSection from "./AllProjectsSection";
import RecommendedSection from "./RecommendedSection";

import { projects } from "./Projects.constants";
import SideNav from "../../components/SideNav";

function ProjectsPage() {
    return (
        <div className="page">
            <RecommendedSection/>
            <SideNav sections={projects} />
            <AllProjectsSection/>
        </div>
    );
}
export default ProjectsPage;