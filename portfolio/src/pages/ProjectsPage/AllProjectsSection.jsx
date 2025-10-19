import { projects } from "./Projects.constants";

import Text from "../../components/atoms/Text";
import ProjectCard from "../../components/organisms/Card/ProjectCard";

function AllProjectsSection() {
    return (
        <section className="w-main mx-auto flex flex-col gap-md">
            <Text text="All Projects" type="header" />
            <div className="flex flex-col gap-md items-center">
                {projects.map((project, index) => (
                    <ProjectCard key={index} size="large" project={project} />
                ))}
            </div>
        </section>
    );
}
export default AllProjectsSection;