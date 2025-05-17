import Tags from "./Tags/Tags";
import { skills } from "../pages/ProjectsPage/Projects.constants";
import ProjectStatusTag from "./ProjectStatusTag";

function ExperienceCard({ exp }) {
  return (
    <section id={exp.anchorId} className="card w-card-sm flex flex-col gap-md">
        <header className="flex items-center justify-between gap-sm w-full">
            <div className="flex flex-col gap-sm">
                <ProjectStatusTag status={exp.status} />
                <h2>{exp.title} at {exp.company}</h2>
                <p className="italic">{exp.date}</p>
            </div>
            <a href={exp.websiteUrl} target="_blank" rel="noopener noreferrer">
                <img src={exp.logo} alt={`${exp.company} logo`} className="size-16 object-contain rounded-sm interact shadow-none" />
            </a>
        </header>
        <div>
            <p>{exp.summary}</p>
        </div>
        <Tags items={
            exp.tags.map((tag, index) => {
                const skill = skills.find(s => s.id === tag);
                return { name: skill.name };
            })} 
        />
    </section>
  );
}

export default ExperienceCard;