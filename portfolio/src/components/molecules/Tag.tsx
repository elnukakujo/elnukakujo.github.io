import type Tag from "../../interface/Tag";

import Image from "../atoms/Image";
import Text from "../atoms/Text";
import SimpleCard from "../organisms/Card/SimpleCard";

export default function Tag( { text, image, layer, className }: Tag) {
    return (
        <SimpleCard
            layer={layer}
            size="fit"
            className={`interact cursor-pointer flex flex-row gap-sm items-center rounded-lg ${layer && layer%2 === 0 ? 'bg-primary' : 'bg-secondary'} ${className ? className : ''} group/tag`}>
            {image && image.url && (
                <Image 
                    url={image.url}
                    caption={image.caption}
                    size={image.size}
                    altText={image.altText}
                    className={"rounded-full " + image.className}
                />
            )}
            {text && (
                <Text 
                    text={text.text}
                    type={text.type}
                    className={"group-hover/tag:text-enhanced " + text.className}
                />
            )}
        </SimpleCard>
    );
}
