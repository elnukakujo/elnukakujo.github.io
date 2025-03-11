import React from "react";

import projects from "../../assets/data/projects.json";

export default function ProjectSection() {
    const firstFourProjects = projects.projects.slice(0, 4);
    return (
        <div className="project-section">
            <h1 className="project-section__title">Featured Projects</h1>
            <div className="project-section__content">
                <div className="project-section__content__projects">
                    {firstFourProjects.map((project, index) => {
                        return (
                            <div className="project-section__content__project" key={index}>
                                <h2 className="project-section__content__project__title">{project.title}</h2>
                                <h2 className="project-section__content__project__date">{project.date}</h2>
                                {project.videoUrl ? (
                                    <iframe src={project.videoUrl} title={project.title} className="project-section__content__project__video"></iframe>
                                ) : (
                                    <img src={project.imageUrl} alt={project.title} className="project-section__content__project__image" />
                                )}
                                <p className="project-section__content__project__description">{project.description}</p>
                                <div className="project-section__content__project__tags">
                                    {project.tags.map((tag, index) => {
                                        return (
                                            <span key={index} className="project-section__content__project__tags__tag tag">{tag}</span>
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