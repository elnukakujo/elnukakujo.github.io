import type Video from "../../interface/Video";

export default function YoutubeVideo({ url, caption, size, altText, className }: Video) {
    return (
        <figure className={`flex flex-col items-center ${className}`}>
            <iframe
                src={url}
                title={altText || "Video content"}
                className={`rounded-md shadow-md video-${size}`}
                allowFullScreen
            />
            {caption && <figcaption className="mt-2 text-center">{caption}</figcaption>}
        </figure>
    );
}