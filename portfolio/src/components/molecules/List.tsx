import type ListType from "../../interface/List";
import type TextType from "../../interface/Text";
import type TagType from "../../interface/Tag";
import type ImageType from "../../interface/Image";
import type InternalLinkType from "../../interface/Link/InternalLink";
import type ExternalLinkType from "../../interface/Link/ExternalLink";

import Image from "../atoms/Image";
import Tag from "./Tag";
import Text from "../atoms/Text";
import Link from "../atoms/Link";

export default function ListComponent({ items, direction, layer, className }: ListType) {
    function isText(arg: any): arg is TextType {
        return arg.type === 'text';
    }

    function isImage(arg: any): arg is ImageType {
        return arg.type === 'image';
    }

    function isTag(arg: any): arg is TagType {
        return arg.type === 'tag';
    }

    function isLink(arg: any): arg is ExternalLinkType | InternalLinkType {
        return arg.type === 'externalLink' || arg.type === 'internalLink';
    }
    return (
        <ul className={`list-none flex ${direction === 'horizontal' ? 'flex-row' : 'flex-col'} ${className}`}>
            {items.map((item, index) => (
                <li key={index} className="w-fit">
                    {isText(item) && (
                        <Text text={item.text} type={item.type} className={item.className} />
                    )}
                    {isImage(item) && (
                        <Image imageUrl={item.imageUrl} caption={item.caption} size={item.size} altText={item.altText} className={item.className} />
                    )}
                    {isTag(item) && (
                        <Tag text={item.text} image={item.image} className={item.className} layer={layer} />
                    )}
                    {isLink(item) && (
                        <Link
                            url={"url" in item ? item.url : undefined}
                            path={"path" in item ? item.path : undefined}
                            id={"id" in item ? item.id : undefined}
                            text={item.text}
                            imageUrl={item.imageUrl}
                            logoType={"logoType" in item ? item.logoType : undefined}
                            className={item.className}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}