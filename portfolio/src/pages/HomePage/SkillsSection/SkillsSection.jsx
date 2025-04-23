import { skills } from "../../ProjectsPage/Projects.constants";
import Tags from "../../../components/Tags/Tags";

function SkillsSection(){
    const skillsByType = {
        language: skills.filter(skill => skill.type === "language"),
        framework: skills.filter(skill => skill.type === "framework"),
        tool: skills.filter(skill => skill.type === "tool"),
        concept: skills.filter(skill => skill.type === "concept"),
    };

    return (
        <div className="w-main mx-auto">
            <div className="flex flex-col bg-transparent gap-lg">
                <h1>Skills & Technologies</h1>
                {
                    Object.entries(skillsByType).map(([type, skills]) => (
                        <div key={type}>
                            <h2 className="mb-3">{type.charAt(0).toUpperCase() + type.slice(1)}s</h2>
                            <Tags items={
                                skills.map((skill) => {
                                    return { name: skill.name, logo: skill.logo };
                                })} 
                            containerClass="tags" 
                            tagClass="tag bg-secondary text-text hover:text-enhanced" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SkillsSection;