import Tags from "./Tags/Tags";
import { skills } from "../pages/ProjectsPage/Projects.constants";
import ProjectStatusTag from "./ProjectStatusTag";

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
            <article className="bg-primary p-md rounded-md shadow-md flex flex-col gap-sm">
                <h2>Description</h2>
                <p>{exp.description}</p>
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