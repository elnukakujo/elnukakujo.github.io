import type InternalLink from "./Link/InternalLink";
import type ExternalLink from "./Link/ExternalLink";
import type Image from "./Image";
import type Tag from "./Tag";
import type Text from "./Text";

export default interface List {
    type?: 'list';
    layer?: number;
    items: Text[] | Tag[] | Image[] | (InternalLink | ExternalLink)[] | string[];
    direction: 'vertical' | 'horizontal';
    className?: string;
}