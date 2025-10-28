import { createPortal } from "react-dom";

import type ImageType from "../../interface/Image";

import Image from "../atoms/Image";

import { useState, useEffect } from "react";

export default function InteractiveImage({ url, caption, altText, className, size }: ImageType) {
    const [isZoomed, setIsZoomed] = useState<boolean>(false);

    return (
        <>
            {/* Normal image */}
            <Image
                url={url}
                caption={caption}
                altText={altText}
                size={size}
                className={`${className} cursor-zoom-in`}
                onClick={() => setIsZoomed(true)}
            />

            {/* Zoomed overlay */}
            {isZoomed && createPortal((
                <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                onClick={() => setIsZoomed(false)}
                >
                <Image
                    url={url}
                    caption={caption}
                    altText={altText}
                    size="fit"
                    className={`cursor-zoom-out`}
                />
                </div>
            ), document.body)}
        </>
    );
}