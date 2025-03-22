import '../assets/css/sections/projectssection.css';

import projects from "../../assets/data/projects.json";
import skills from "../../assets/data/skills.json";

import githubLogo from "../../assets/img/logo/github_logo.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';

export default function ProjectsSection() {
    return (
        <section className='projects-section'>
            {projects.map((project, index) => {
                console.log(project);
                return (
                    <div className={`projects-section__project ${project.anchorId}`} key={index}>
                        <div className="projects-section__project__header">
                            <div className='projects-section__project__header__header'>
                                <h2 className="projects-section__project__title">{project.title}</h2>
                                <p className="projects-section__project__date">{project.date}</p>
                            </div>
                            <div className="projects-section__project__header__cta">
                                {project.articleUrl ? (
                                    <a href="" className="projects-section__project__header__cta-button">
                                        <FontAwesomeIcon icon={faGoogleScholar} />
                                    </a>
                                ) : null}
                                {project.websiteUrl ? (
                                    <a href={project.websiteUrl} className="projects-section__project__header__cta-button">
                                        <FontAwesomeIcon icon={faCompass} />
                                    </a>
                                ) : null}
                                {project.githubUrl ? (
                                    <a href={project.githubUrl} className="projects-section__project__header__cta-button" target="_blank" rel="noreferrer">
                                        <img src={githubLogo} alt="Github Logo" />
                                    </a>
                                ) : null}
                            </div>
                        </div>
                        <div className="projects-section__project__medias">
                            {project.images ? (
                                project.images.map((image, index) => {
                                    return (
                                        <figure key={index}>
                                            <img key={index} src={image.imageUrl} alt={project.title} className="projects-section__project__image" />
                                            <figcaption className="projects-section__project__image__caption">{image.description}</figcaption>
                                        </figure>
                                    );
                                }))
                                :null
                            }
                            {project.videoUrl ? (
                                <iframe src={project.videoUrl} title={project.title} className="projects-section__project__video"></iframe>
                            ) : null}
                        </div>
                        <div className="projects-section__project__content">
                            <p className="projects-section__project__summary">{project.summary}</p>
                            <p className="projects-section__project__description">{project.description}</p>
                        </div>
                        <div className="projects-section__project__tags">
                            {project.tags.map((tag, index) => {
                                const skill = skills.find(skill => skill.id === tag).name;
                                return (
                                    <p key={index} className="projects-section__project__tags__tag tag">{skill}</p>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}