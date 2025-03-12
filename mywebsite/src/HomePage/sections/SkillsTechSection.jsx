import React from "react";

import '../assets/css/sections/skillstechsection.css';

import skills from "../../assets/data/skills.json";

const images = import.meta.glob('../../assets/img/logo/skills/**', { eager: true });

export default function SkillsTechSection(){
    const languages = skills.filter(skill => skill.type === "language");
    const frameworks = skills.filter(skill => skill.type === "framework");
    const tools = skills.filter(skill => skill.type === "tool");
    const concepts = skills.filter(skill => skill.type === "concept");

    return (
        <div className="skills-section">
            <h1 className="skills-section__title">Skills & Technologies</h1>
            <div className="skills-section__content language">
                <h2 className="skills-section__content__title">Languages</h2>
                <div className="skills-section__content__tags">
                    {languages.map((language, index) => {
                        const imagePath = images[`../../assets/img/logo/skills/${language.logo}`]?.default || null;
                        return (
                            <div className={`skills-section__content__skill ${imagePath ? 'with_logo':''}`} key={index}>
                                {imagePath ? (
                                    <img src={imagePath} alt={language.name} className="skills-section__content__skill__logo" />
                                ) : null}
                                <p className="skills-section__content__skill__tag tag">{language.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="skills-section__content framework">
                <h2 className="skills-section__content__title">Frameworks</h2>
                <div className="skills-section__content__tags">
                    {frameworks.map((framework, index) => {
                        const imagePath = images[`../../assets/img/logo/skills/${framework.logo}`]?.default || null;
                        return (
                            <div className={`skills-section__content__skill ${imagePath ? 'with_logo':''}`} key={index}>
                                {imagePath ? (
                                    <img src={imagePath} alt={framework.name} className="skills-section__content__skill__logo" />
                                ) : null}
                                <p className="skills-section__content__skill__tag tag">{framework.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="skills-section__content tool">
                <h2 className="skills-section__content__title">Tools</h2>
                <div className="skills-section__content__tags">
                    {tools.map((tool, index) => {
                        const imagePath = images[`../../assets/img/logo/skills/${tool.logo}`]?.default || null;
                        return (
                            <div className={`skills-section__content__skill ${imagePath ? 'with_logo':''}`} key={index}>
                                {imagePath ? (
                                    <img src={imagePath} alt={tool.name} className="skills-section__content__skill__logo" />
                                ) : null}
                                <p className="skills-section__content__skill__tag tag">{tool.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="skills-section__content concept">
                <h2 className="skills-section__content__title">Concepts</h2>
                <div className="skills-section__content__tags">
                    {concepts.map((concept, index) => {
                        const imagePath = images[`../../assets/img/logo/skills/${concept.logo}`]?.default || null;
                        return (
                            <div className={`skills-section__content__skill ${imagePath ? 'with_logo':''}`} key={index}>
                                {imagePath ? (
                                    <img src={imagePath} alt={concept.name} className="skills-section__content__skill__logo" />
                                ) : null}
                                <p className="skills-section__content__skill__tag tag">{concept.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}