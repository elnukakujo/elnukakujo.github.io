import { skills } from "../ProjectsPage/Projects.constants";
import Text from "../../components/atoms/Text";
import List from "../../components/molecules/List";

function SkillsSection(){
    const skillsByType = {
        language: skills.filter(skill => skill.type === "language"),
        framework: skills.filter(skill => skill.type === "framework"),
        tool: skills.filter(skill => skill.type === "tool"),
        concept: skills.filter(skill => skill.type === "concept"),
    };

    return (
        <section className="w-main mx-auto flex flex-col bg-transparent gap-lg">
            <Text text="Skills & Technologies" type='header'/>
            {
                Object.entries(skillsByType).map(([type, skills]) => (
                    <div key={type}>
                        <Text text={type.charAt(0).toUpperCase() + type.slice(1)} type='sub-header'/>
                        <List
                            items={skills.map(skill => ({
                                text: {text:skill.name, text:"paragraph"},
                                image: {imageUrl: skill.logo, size: "small", altText: skill.name}
                            }))}
                        />
                    </div>
                ))
            }
        </section>
    );
}

export default SkillsSection;