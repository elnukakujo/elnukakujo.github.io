import CtaButton from "../CtaButton/CtaButton";
import { skills } from "../../pages/ProjectsPage/Projects.constants";
import Tags from "../Tags/Tags";
import SwipeLayout from '../../layouts/SwipeLayout';
import scrollTo from "../../utils/scrollTo";
import ProjectStatusTag from "../ProjectStatusTag";

import "./ProjectCard.css";

function SmallProjectCard({ project }) {
    return (
        <div className="card w-card-sm aspect-[0.618]">
            <header className="w-full flex flex-col gap-sm">
                <ProjectStatusTag status={project.status} />
                <div className="card-header flex flex-col">
                    <h2>{project.title}</h2>
                    <p className="italic">{project.date}</p>
                </div>
            </header>
            {project.images || project.videoUrl ? (
                <SwipeLayout>
                    {project.videoUrl && (
                        <iframe
                            className="size-media-sm shadow-md"
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
                            className="rounded-sm shadow-md size-media-sm object-cover-center"
                        />
                    ))}
                </SwipeLayout>
            ) : null}
            <p>{project.summary}</p>
            <div className="w-full max-h-[7rem] p-[0.5rem] overflow-y-clip">
                <Tags items={
                    project.tags.map((tag, index) => {
                        const skill = skills.find(s => s.id === tag);
                        return { name: skill.name };
                    })} 
                />
            </div>
            <div className="w-full">
                <CtaButton onClick={() => scrollTo(project.id)}>More Details</CtaButton>
            </div>
        </div>
    );
}

export default SmallProjectCard;