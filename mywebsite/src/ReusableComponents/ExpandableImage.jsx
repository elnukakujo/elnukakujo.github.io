import '../assets/css/ReusableComponents/expandableimage.css';

import React, { useState } from 'react';

export default function ExpandableImage({imageUrl, description}) {
    const [isExpand, setIsExpand] = useState(false);

    return (
        <div className='expandable-image' onClick={() => setIsExpand(!isExpand)}>
            <figure className='default-view'>
                <img src={imageUrl} alt={"Image"} />
                <figcaption>{description}</figcaption>
            </figure>
            {isExpand && (
                <figure className='expanded-view'>
                    <img src={imageUrl} alt={"Image"} />
                    <figcaption>{description}</figcaption>
                </figure>
            )}
        </div>
    );
}