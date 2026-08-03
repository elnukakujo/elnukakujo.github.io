import * as LazyLoadModule from 'react-lazy-load-image-component';
// ponytail: CJS exports {LazyLoadImage} as named, ESM has default
const LazyLoadImage = LazyLoadModule.LazyLoadImage || LazyLoadModule.default;
import type ImageType from "../../interface/Image";
import Text from "../atoms/Text";
import { useState } from 'react';

export default function Image({ url, caption, size, altText, className, onClick }: ImageType) {
    const [loaded, setLoaded] = useState(false);

    return (
        <figure className={`flex flex-col items-center ${className} overflow-hidden`}>
            {!loaded && <div className={`bg-gray-300 animate-pulse w-full image-${size} aspect-[16/9]`} />}
            <LazyLoadImage
                src={url}
                alt={altText}
                afterLoad={() => setLoaded(true)}
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
