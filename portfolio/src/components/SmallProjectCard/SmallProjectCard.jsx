import CtaButton from "../CtaButton/CtaButton";
import { skills } from "../../pages/ProjectsPage/Projects.constants";
import Tags from "../Tags/Tags";
import SwipeLayout from '../../layouts/SwipeLayout';

import "./SmallProjectCard.css";

function SmallProjectCard({ project }) {
  return (
    <div className="project-card rounded-[50px] bg-secondary w-[425px] h-[688.5px] p-8 flex flex-col gap-[20px] justify-between shadow-lg">
        <div className="card-header flex flex-col gap-[5px]">
            <h2>{project.title}</h2>
            <p className="italic">{project.date}</p>
        </div>
        {project.images || project.videoUrl ? (
            <SwipeLayout>
                {project.videoUrl && (
                    <iframe
                        className="aspect-video shadow-md"
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
                        className="rounded-sm shadow-md w-[250px] h-[155px] object-cover-center"
                    />
                ))}
            </SwipeLayout>
        ) : null}
        <p>{project.summary}</p>
        <div className="max-h-[100px] overflow-auto">
            <Tags items={
                project.tags.map((tag, index) => {
                    const skill = skills.find(s => s.id === tag);
                    return { name: skill.name };
                })} 
            />
        </div>
        <CtaButton>More Details</CtaButton>
    </div>
  );
}

export default SmallProjectCard;