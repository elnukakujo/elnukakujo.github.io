import React from "react";

import projects from "../../assets/data/projects.json";
import skills from "../../assets/data/skills.json";

import '../assets/css/sections/projectsection.css';

export default function ProjectSection() {
    const featuredProjects = projects.filter(project => project.featured === true).slice(0,4);
    return (
        <div className="project-section">
            <h1 className="project-section__title">Featured Projects</h1>
            <div className="project-section__content">
                <div className="project-section__content__projects">
                    {featuredProjects.map((project, index) => {
                        return (
                            <div className="project-section__content__project" key={index}>
                                <div className="project-section__content__project__header">
                                    <h2 className="project-section__content__project__title">{project.title}</h2>
                                    <p className="project-section__content__project__date">{project.date}</p>
                                </div>
                                <div className="project-section__content__project__description">
                                    {project.videoUrl ? (
                                        <iframe src={project.videoUrl} title={project.title} className="project-section__content__project__video"></iframe>
                                    ) : project.image ? (
                                        <img src={project.image[0].imageUrl} alt={project.title} className="project-section__content__project__image" />
                                    ) : null}
                                    <p >{project.description}</p>
                                </div>
                                <div className="project-section__content__project__tags">
                                    {project.tags.map((tag, index) => {
                                        const skill = skills.find(skill => skill.id === tag).name;
                                        return (
                                            <p key={index} className="project-section__content__project__tags__tag tag">{skill}</p>
                                        );
                                    })}
                                </div>
                                <a href="" className="project-section__content__project-button  button">More Details</a>
                            </div>
                        );
                    })}
                </div>
                <a href="" className="project-section__content__button button">View All Projects</a>
            </div>
        </div>
    );
}