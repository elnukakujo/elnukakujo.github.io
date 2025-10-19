import ProjectCard from "../../components/organisms/Card/ProjectCard";
import SwipeElement from "../../components/organisms/SwipeElement";
import Text from "../../components/atoms/Text";

import {projects} from "./Projects.constants";

function RecommendedSection() {
    const recommendedProjects = projects.filter(project => project.featured);
    return (
        <section className="w-main mx-auto flex flex-col gap-md">
            <Text text="Recommended Projects" type="header"/>
            <SwipeElement>
                {recommendedProjects.map((project, index) => (
                    <ProjectCard key={index} size="medium" project={project}/>
                ))}
            </SwipeElement>
        </section>
    );
}

export default RecommendedSection;