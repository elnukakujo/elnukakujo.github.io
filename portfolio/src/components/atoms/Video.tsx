import type Video from "../../interface/Video";

import Text from "../atoms/Text";

export default function YoutubeVideo({ url, caption, size, altText, className }: Video) {
    return (
        <figure className={`flex flex-col items-center ${className}`}>
            <iframe
                src={url}
                title={altText || "Video content"}
                className={`rounded-md shadow-md image-${size}`}
                allowFullScreen
            />
            {caption && (
                <Text
                    text={caption}
                    type="text"
                    className="mt-2 text-center italic text-wrap w-full"
                />
            )}
        </figure>
    );
}