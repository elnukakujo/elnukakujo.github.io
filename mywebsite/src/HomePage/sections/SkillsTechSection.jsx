import React from "react";

import '../assets/css/sections/skillstechsection.css';

import skills from "../../assets/data/skills.json";

const images = import.meta.glob('../../assets/img/logo/skills/**', { eager: true });

export default function SkillsTechSection() {
    const skillsByType = {
        language: skills.filter(skill => skill.type === "language"),
        framework: skills.filter(skill => skill.type === "framework"),
        tool: skills.filter(skill => skill.type === "tool"),
        concept: skills.filter(skill => skill.type === "concept"),
    };

    return (
        <div className="skills-section">
            <h1 className="skills-section__title">Skills & Technologies</h1>
            {Object.entries(skillsByType).map(([type, skillsArray]) => (
                <div className={`skills-section__content ${type}`} key={type}>
                    <h2 className="skills-section__content__title">{type.charAt(0).toUpperCase() + type.slice(1)}s</h2>
                    <div className="skills-section__content__tags">
                        {skillsArray.map((skill, index) => {
                            const imagePath = images[`../../assets/img/logo/skills/${skill.logo}`]?.default || null;
                            return (
                                <div className={`skills-section__content__skill ${imagePath ? 'with_logo' : ''}`} key={index}>
                                    {imagePath ? (
                                        <img src={imagePath} alt={skill.name} className="skills-section__content__skill__logo" />
                                    ) : null}
                                    <p className="skills-section__content__skill__tag tag">{skill.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}
