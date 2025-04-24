import SmallProjectCard from "../../components/ProjectCard/SmallProjectCard";
import SwipeLayout from "../../layouts/SwipeLayout";

import {projects} from "./Projects.constants";

function RecommendedSection() {
    const recommendedProjects = projects.filter(project => project.featured);
    return (
        <section className="w-main mx-auto flex flex-col gap-md">
            <h2 className="ml-10 text-left">Recommended Projects</h2>
            <SwipeLayout>
                {recommendedProjects.map((project, index) => (
                    <SmallProjectCard key={index} project={project}/>
                ))}
            </SwipeLayout>
        </section>
    );
}

export default RecommendedSection;