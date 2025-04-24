import { projects } from "./Projects.constants";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

function AllProjectsSection() {
    return (
        <section className="w-main mx-auto flex flex-col gap-md">
            <h2 className="ml-10 text-left">All Projects</h2>
            <div className="flex flex-col gap-md items-center">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}
export default AllProjectsSection;