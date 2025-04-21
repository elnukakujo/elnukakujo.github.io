import SmallProjectCard from "../../components/SmallProjectCard/SmallProjectCard";
import SwipeLayout from "../../layouts/SwipeLayout";

import {projects} from "./Projects.constants";

function ProjectsPage() {
    const recommendedProjects = projects.filter(project => project.featured);
    return (
        <div className="page">
            <div className="content flex flex-col gap-[25px]">
                <h2 className="text-left">Recommended Projects</h2>
                <div className="w-[80vw] max-w-[1000px] ">
                    <SwipeLayout>
                        {recommendedProjects.map((project, index) => (
                            <SmallProjectCard key={index} project={project}/>
                        ))}
                    </SwipeLayout>
                </div>
            </div>
            <div className="content flex flex-col">
                <h2 className="text-left">All Projects</h2>
            </div>
        </div>
    );
}
export default ProjectsPage;