import { skills } from "../ProjectsPage/Projects.constants";
import Text from "../../components/atoms/Text";
import List from "../../components/molecules/List";
import type TagType from "../../interface/Tag";

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
                        <Text text={type.charAt(0).toUpperCase() + type.slice(1)} type='subheader'/>
                        <List
                            items={skills.map(skill => ({
                                type: "tag",
                                text: { text: skill.name, type: "text" },
                                image: { url: skill.logo, size: "logo", altText: skill.name },
                            })) as TagType[]}
                            direction="horizontal"
                        />
                    </div>
                ))
            }
        </section>
    );
}

export default SkillsSection;