import { experience } from "./AboutMe.constants";
import Text from "../../components/atoms/Text";
import ProjectCard from "../../components/organisms/Card/ProjectCard";

function ExperienceSection() {
    return (
        <section id="experience" className="flex flex-col gap-md items-center">
            <Text text="Experience" type="header" className="w-full"/>
            {experience.map((exp, index) => (
            <ProjectCard key={index} project={exp} size="large" layer={1}/>
            ))}
        </section>
    );
}

export default ExperienceSection;