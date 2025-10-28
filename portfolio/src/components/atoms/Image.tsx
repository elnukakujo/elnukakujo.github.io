import type ImageType from "../../interface/Image";
import Text from "../atoms/Text";

export default function Image({ url, caption, size, altText, className, onClick }: ImageType) {
    return (
        <figure className={`flex flex-col items-center ${className} overflow-hidden`}>
            <img
                src={url}
                alt={altText}
                onClick={onClick}
                className={`max-w-full image-${size}`}
            />
            {caption && (
                <Text
                    text={caption}
                    type="text"
                    className="mt-2 text-center italic text-wrap w-full h-auto"
                />
            )}
        </figure>
    );
}
