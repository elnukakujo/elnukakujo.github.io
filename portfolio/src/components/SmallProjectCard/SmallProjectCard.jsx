import CtaButton from "../CtaButton/CtaButton";
import { skills } from "../../pages/ProjectsPage/Projects.constants";
import Tags from "../Tags/Tags";

function SmallProjectCard({ project }) {
  return (
    <div className="project-card rounded-xl bg-secondary max-w-lg p-8 flex flex-col gap-3 justify-between">
        <div className="card-header flex flex-col gap-2">
            <h2>{project.title}</h2>
            <p className="italic">{project.date}</p>
        </div>
        {project.videoUrl ? (
            <iframe
            className="aspect-video"
                src={project.videoUrl}
                title={project.title}
                allowFullScreen
            ></iframe>
        ) : project.images ? (
            <img src={project.images[0].imageUrl} alt={project.images[0].description} />
        ) : null}
        <p>{project.summary}</p>
        <Tags items={
            project.tags.map((tag, index) => {
                const skill = skills.find(s => s.id === tag);
                return { name: skill.name };
            })} 
        containerClass="tags" 
        tagClass="tag bg-primary" />
        <CtaButton>More Details</CtaButton>
    </div>
  );
}

export default SmallProjectCard;