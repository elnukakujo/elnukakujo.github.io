import React from "react";

import skills from "../../assets/data/skills.json";

const images = import.meta.glob('../../assets/img/logo/skills/**', { eager: true });
console.log(images);

export default function SkillsTechSection(){
    console.log(skills);
    return (
        <div className="skills-section">
            <h1 className="skills-section__title">Skills & Technologies</h1>
            <div className="skills-section__content">
                {skills.map((skill, index) => {
                    const imagePath = images[`../../assets/img/logo/skills/${skill.logo}`]?.default || null;
                    console.log(imagePath);
                    return (
                        <div className="skills-section__content__skill" key={index}>
                            {imagePath ? (
                                <img src={imagePath} alt={skill.name} className="skills-section__content__skill__logo" />
                            ) : null}
                            <p className="skills-section__content__skill__tag tag">{skill.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}