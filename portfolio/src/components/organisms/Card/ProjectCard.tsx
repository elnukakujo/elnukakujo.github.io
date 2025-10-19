import type Project from "../../../interface/Project";
import type ExternalLink from "../../../interface/Link/ExternalLink";

import { skills } from "../../../pages/ProjectsPage/Projects.constants";

import SimpleCard from "./SimpleCard";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";
import Video from "../../atoms/Video";
import Tag from "../../molecules/Tag";
import List from "../../molecules/List";
import SwipeElement from "../SwipeElement";

import Markdown from "react-markdown";
import TagType from "../../../interface/Tag";

type ProjectCardProps = {
    project: Project;
    size: 'medium' | 'large';
    layer: number;
    className?: string;
};

export default function ProjectCard({ size, layer, className, project }: ProjectCardProps) {
    const header = {
        title: project.title,
        company: project.company,
        date: project.date,
        status: project.status,
        externalLinks: size === 'large' && project.externalLink ? project.externalLink.filter((link): link is ExternalLink => !!link && ('logoType' in link || 'imageUrl' in link)) : undefined,
    };
    const tags: TagType[] = (project.skills_id ?? []).map((skill, index) => (
        {type: "tag", text: {type: "text", text: skills.find(s => s.id === skill)?.name || skill}, image: {type: "image", imageUrl: skills.find(s => s.id === skill)?.logo || undefined, size: "small"}}
    ));
    console.log(tags);
    return (
        <SimpleCard
            header={header}
            size={size}
            layer={layer}
            className={className}
        >
            {project.images || project.videos ? (
                <SwipeElement>
                    {project.videos?.map((video, index) => (
                        <Video
                            key={index}
                            url={video.url}
                            caption={video.caption}
                            altText={`Project ${project.title} video ${index + 1}`}
                            size={video.size}
                            className={video.className}
                        />
                    ))}
                    {project.images?.map((image, index) => (
                        <Image
                            key={index}
                            imageUrl={image.imageUrl}
                            caption={image.caption}
                            altText={`Project ${project.title} image ${index + 1}`}
                            size={image.size}
                            className={image.className}
                        />
                    ))}
                    {project.images?.map((image, index) => (
                        <Image
                            key={index}
                            imageUrl={image.imageUrl}
                            caption={image.caption}
                            altText={image.altText || `Project ${project.title} image ${index + 1}`}
                            size={image.size}
                            className={image.className}
                        />
                    ))}
                </SwipeElement>
            ) : null}
            <span className="flex flex-col gap-md">
                <Text text={project.summary} type="text" className="italic"/>
                {size === "large" && project.description.map((paragraph, index) => (
                    <SimpleCard key={index} size="medium" layer={layer+1}>
                        {paragraph.title && <Text text={paragraph.title} type="subsubheader" className="w-full"/>}
                        {paragraph.text.map((text, index) => (
                            <Markdown key={index}>{text}</Markdown>
                        ))}
                    </SimpleCard>
                ))}
            </span>
            {project.skills_id && (<List
                direction="horizontal"
                className="flex-wrap gap-sm items-center"
                items={tags}
                layer={layer+1}
            />)}
            {project.externalLink && (
                <span className="w-full text-left space-y-2">
                    <Text text="External Links" type="subheader"/>
                    <List
                        items={project.externalLink.filter(link => link.text && !link.imageUrl)}
                        direction="vertical"
                        className="ml-[1rem] gap-sm"
                    />
                </span>
            )}
        </SimpleCard>
  );
}
