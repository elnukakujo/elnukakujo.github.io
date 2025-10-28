import Image from "./Image";
import Text from "./Text";

export default interface Tag {
    type?: 'tag';
    layer?: number;
    text?: Text;
    image?: Image;
    className?: string;
}