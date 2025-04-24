import { skills } from "../../pages/ProjectsPage/Projects.constants";
import Tags from "../Tags/Tags";
import SwipeLayout from '../../layouts/SwipeLayout';
import GitHubCommit from "../GitHubCommit";
import LifeCycleChart from "../LifeCycleChart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import githubLogo from "../../assets/logo/contact/githubLogo.png";

import Markdown from 'react-markdown';

import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div id={project.id} className='card w-card'>
        <header className="card-header w-full flex flex-row justify-between items-center">
            <div className="flex flex-col gap-sm w-2/3">
                <h2>{project.title}</h2>
                <p className="italic">{project.date}</p>
            </div>
            <div className="flex flex-row gap-sm items-center">
                {project.articleUrl ? (
                    <a href={project.articleUrl} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGoogleScholar} className="interact shadow-none rounded-full text-[2.25rem]" />
                    </a>
                ) : null}
                {project.websiteUrl ? (
                    <a href={project.websiteUrl} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faCompass} className="interact shadow-none rounded-full text-[2.25rem]" />
                    </a>
                ) : null}
                {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <img src={githubLogo} className="interact size-12 rounded-full" alt="Github Logo" />
                    </a>
                ) : null}
            </div>
        </header>
        {project.images || project.videoUrl ? (
            <SwipeLayout>
                {project.videoUrl && (
                    <iframe
                        className="size-media shadow-md"
                        src={project.videoUrl}
                        title={`Project ${project.title} video`}
                        allowFullScreen
                    />
                )}
                {project.images?.map((image, index) => (
                    <img
                        key={index}
                        src={image.imageUrl}
                        alt={`Project ${project.title} image ${index + 1}`}
                        className="rounded-sm shadow-md size-media object-cover-center"
                    />
                ))}
            </SwipeLayout>
        ) : null}
        <div className="flex flex-col gap-md">
            {typeof project.description === 'object' ? (
                Object.entries(project.description).map(([key, value], index) => {
                    const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
                    return (
                        <div className={`bg-primary p-md rounded-md shadow-md flex flex-col gap-sm`} key={index}>
                            <h2>{capitalizedKey}</h2>
                            <div className="p-sm text-justify">
                                <Markdown>{value}</Markdown>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="bg-primary p-md rounded-md shadow-md text-justify">
                    <Markdown>{project.description}</Markdown>
                </div>
            )}
            {project.progress ? (
                <div className="bg-primary p-md rounded-md shadow-md flex flex-col gap-sm">
                    <h2> Progress</h2>
                    <section className="flex flex-col justify-evenly items-center flex-wrap">
                        <LifeCycleChart phase={project.progress.phase}/>
                        <section className="flex flex-col gap-sm text-justify">
                            {project.progress.githubUrl ? (<GitHubCommit githubUrl={project.progress.githubUrl}/>) : project.githubUrl ?? (<GitHubCommit githubUrl={project.githubUrl}/>)}
                            {project.progress.status_infos ? (
                                <span>
                                    <h2>Last Update:</h2>
                                    <Markdown>{project.progress.status_infos}</Markdown>
                                </span>
                            ): null}
                        </section>
                    </section>
                </div>
            ) : null}
        </div>
        <div className="w-full">
            <Tags items={
                project.tags.map((tag, _) => {
                    const skill = skills.find(s => s.id === tag);
                    return { name: skill.name };
                })} 
            />
        </div>
        {
            project.external_ref ? (
                <div className="w-full">
                    <h2>External References</h2>
                    <ul className="p-sm">
                        {project.external_ref.map((ref, index) => {
                            return (
                                <li key={index}>
                                    <a href={ref.url} target="_blank" rel="noreferrer" className="interact shadow-none">{ref.title}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : null
        }
    </div>
  );
}

export default ProjectCard;