import SimpleCard from "./SimpleCard";
import SwipeElement from "../SwipeElement";
import type DegreeType from "../../../interface/Degree";
import type UniversityType from "../../../interface/Organization/University";
import type VideoType from "../../../interface/Video";
import type ImageType from "../../../interface/Image";

import List from "../../molecules/List";
import Text from "../../atoms/Text";
import Video from "../../atoms/Video";
import InteractiveImage from "../../molecules/InteractiveImage";

type DegreeCardProps = {
    degree: DegreeType;
    size: 'small' | 'medium';
    layer: number;
    className?: string;
}

export default function DegreeCard( {className, degree, size, layer}: DegreeCardProps ) {
    const header = {
        status: degree.status,
        title: degree.name,
        organization: degree.university,
        date: degree.date,
    };
    return (
        <SimpleCard className={`${className}`} size={size} layer={layer} header={header}>
            {degree.university.some((univ: UniversityType) => univ.images) || degree.university.some((univ: UniversityType) => univ.videos) ? (
            <SwipeElement>
                {degree.university.some((univ: UniversityType) => univ.videos) && (degree.university.flatMap((univ: UniversityType) => univ.videos ?? []) as VideoType[]).map((video, index) => (
                    <Video
                        key={index}
                        url={video.url}
                        caption={video.caption}
                        altText={`degree ${degree.name} video ${index + 1}`}
                        size={video.size}
                        className={"rounded-xl " + video.className}
                    />
                ))}
                {degree.university.some((univ: UniversityType) => univ.images) && (degree.university.flatMap((univ: UniversityType) => univ.images ?? []) as ImageType[]).map((image, index) => (
                <InteractiveImage
                    key={index}
                    url={image.url}
                    caption={image.caption}
                    altText={`degree ${degree.name} image ${index + 1}`}
                    size={image.size}
                    className={image.className}
                />
                ))}
            </SwipeElement>
            ) : null}
            <Text text="Courses" type="subsubheader"/>
            {degree.courses && (<List
                direction="vertical"
                className="flex-wrap gap-sm items-center"
                items={degree.courses.map((course, index) => ({
                    type: "text",
                    text: course
                }))}
                layer={layer+1}
            />)}
        </SimpleCard>
    );
}