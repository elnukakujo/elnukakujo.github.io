import type Image from "../../interface/Image";

export default function Image({ imageUrl, caption, size, altText, className }: Image) {
    return (
        <figure className={`flex flex-col items-center ${className} overflow-auto`}>
            <img src={imageUrl} alt={altText} className={`image-${size}`} />
            {caption && <figcaption className="mt-2 text-center">{caption}</figcaption>}
        </figure>
    );
}
