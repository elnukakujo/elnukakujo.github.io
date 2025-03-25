import '../assets/css/ReusableComponents/expandableimage.css';

import React, { useState } from 'react';

export default function ExpandableImage({image}){
    const [isExpand, setIsExpand] = useState(false);

    return (
        <div className='expandable-image' onClick={() => setIsExpand(!isExpand)}>
            <figure className='default-view'>
                <img src={image.imageUrl} alt={"Image"} />
                <figcaption>{image.description}</figcaption>
            </figure>
            {isExpand && (
                <figure className='expanded-view'>
                    <img src={image.imageUrl} alt={"Image"} />
                    <figcaption>{image.description}</figcaption>
                </figure>
            )}
        </div>
    );
}