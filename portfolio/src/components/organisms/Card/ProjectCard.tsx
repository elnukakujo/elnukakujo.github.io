import type Project from "../../../interface/Project";
import type ExternalLink from "../../../interface/Link/ExternalLink";

import { skills } from "../../../pages/ProjectsPage/Projects.constants";

import SimpleCard from "./SimpleCard";
import InteractiveImage from "../../molecules/InteractiveImage";
import Text from "../../atoms/Text";
import Video from "../../atoms/Video";
import List from "../../molecules/List";
import SwipeElement from "../SwipeElement";
import Link from "../../atoms/Link";

import Markdown from "react-markdown";

import type TagType from "../../../interface/Tag";

type ProjectCardProps = {
    project: Project;
    size: 'small' | 'medium' | 'large';
    layer: number;
    className?: string;
    overview?: boolean;
};

export default function ProjectCard({ size, layer, className, project, overview }: ProjectCardProps) {
    size = overview ? 'small' : size;

    const header = {
        title: project.title,
        organization: project.company,
        date: project.date,
        status: project.status,
        externalLinks: !overview && project.externalLink ? project.externalLink.filter((link): link is ExternalLink => !!link && ('logoType' in link || 'imageUrl' in link)) : undefined,
    };
    const tags: TagType[] = (project.skills_id ?? []).map((skill, index) => (
        {type: "tag", text: {type: "text", text: skills.find(s => s.id === skill)?.name || skill}, image: {type: "image", url: skills.find(s => s.id === skill)?.logo || undefined, size: "logo"}}
    ));
    if (overview) {
        tags.splice(4);
    }
    return (
        <SimpleCard
            header={header}
            size={size}
            layer={layer}
            className={className}
            id={size !== "small" ? project.id : undefined}
        >
            {project.images || project.videos ? (
                <SwipeElement>
                    {project.videos?.map((video, index) => (
                        <Video
                            key={index}
                            url={video.url}
                            caption={video.caption}
                            altText={`Project ${project.title} video ${index + 1}`}
                            size={size !== "small" ? "large" : "medium"}
                            className={video.className}
                        />
                    ))}
                    {project.images?.map((image, index) => (
                        <InteractiveImage
                            key={index}
                            url={image.url}
                            caption={image.caption}
                            altText={`Project ${project.title} image ${index + 1}`}
                            size={size !== "small" ? "large" : "medium"}
                            className={image.className}
                        />
                    ))}
                </SwipeElement>
            ) : null}
            <span className="flex flex-col gap-md">
                <Text text={project.summary} type="text" className="italic"/>
                {!overview && project.description.map((paragraph, index) => (
                    <SimpleCard key={index} size="medium" layer={layer+1} className="items-start">
                        {paragraph.title && <Text text={paragraph.title} type="subsubheader" className="w-full"/>}
                        {paragraph.text.map((text, index) => (
                            <Markdown key={index}>{text}</Markdown>
                        ))}
                    </SimpleCard>
                ))}
            </span>
            {project.skills_id && (<List
                direction="horizontal"
                items={tags}
                layer={layer+1}
                className=""
            />)}
            {!overview && project.externalLink && project.externalLink.some(link => link.text && !link.imageUrl && !link.logoType) && (
                <span className="w-full text-left space-y-2">
                    <Text text="External Links" type="subheader"/>
                    <List
                        items={project.externalLink.filter(( link ): link is ExternalLink => Boolean(link.text && !link.imageUrl && !link.logoType)).map((link, index) => (
                            {type: "externalLink", text: link.text, url: link.url}
                        ) as ExternalLink)}
                        direction="vertical"
                        className="ml-[1rem] items-baseline! "
                    />
                </span>
            )}
            {overview && (
                <Link text="View More" path="/projects" id={project.id} className="w-full mx-2"/>
            )}
        </SimpleCard>
  );
}
