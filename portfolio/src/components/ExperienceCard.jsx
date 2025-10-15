import Tags from "./Tags/Tags";
import { skills } from "../pages/ProjectsPage/Projects.constants";
import ProjectStatusTag from "./ProjectStatusTag";

import LifeCycleChart from "./LifeCycleChart";
import GitHubCommit from "./GitHubCommit";
import Markdown from 'react-markdown';

function ExperienceCard({ exp }) {
  return (
    <section id={exp.anchorId} className="card w-card flex flex-col gap-md">
        <header className="w-full flex flex-col gap-sm">
            <ProjectStatusTag status={exp.status} />
            <header className="flex justify-between gap-sm">
                <div className="flex flex-col gap-sm w-2/3">
                    <h2>{exp.title} @ {exp.company}</h2>
                    <p className="italic">{exp.date}</p>
                </div>
                <a href={exp.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <img src={exp.logo} alt={`${exp.company} logo`} className="size-16 object-contain rounded-sm interact shadow-none" />
                </a>
            </header>
        </header>
        <section className="flex flex-col gap-md">
            <article className="bg-primary p-md rounded-md shadow-md flex flex-col gap-sm">
                <h2>Summary</h2>
                <p>{exp.summary}</p>
            </article>
            <article className="flex flex-col gap-md">
                {typeof exp.description === 'object' ? (
                    Object.entries(exp.description).map(([key, value], index) => {
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
                {exp.progress ? (
                    <div className="bg-primary p-md rounded-md shadow-md flex flex-col gap-sm">
                        <h2> Progress</h2>
                        <section className="flex flex-col justify-evenly items-center flex-wrap">
                            <LifeCycleChart phase={exp.progress.phase}/>
                            <section className="flex flex-col gap-sm text-justify">
                                {exp.progress.githubUrl ? (<GitHubCommit githubUrl={exp.progress.githubUrl}/>) : exp.githubUrl ?? (<GitHubCommit githubUrl={exp.githubUrl}/>)}
                                {exp.progress.status_infos ? (
                                    <span>
                                        <h2>Last Update:</h2>
                                        <Markdown>{exp.progress.status_infos}</Markdown>
                                    </span>
                                ): null}
                            </section>
                        </section>
                    </div>
                ) : null}
            </article>
        </section>
        <Tags items={
            exp.tags.map((tag, index) => {
                const skill = skills.find(s => s.id === tag);
                return { name: skill.name };
            })} 
        />
        {
            exp.external_ref ? (
                <div className="w-full">
                    <h2>External References</h2>
                    <ul className="p-sm">
                        {exp.external_ref.map((ref, index) => {
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
    </section>
  );
}

export default ExperienceCard;