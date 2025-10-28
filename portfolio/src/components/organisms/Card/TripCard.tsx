import type TripType from "../../../interface/Trip";

import Text from "../../atoms/Text";
import SimpleCard from "./SimpleCard";
import SwipeElement from "../SwipeElement";
import InteractiveImage from "../../molecules/InteractiveImage";

interface TripCardProps extends TripType {
    className?: string;
    id?: string;
    size?: 'fit' | 'small' | 'medium' | 'large'
    layer?: number
}

export default function TripCard({ cities, date, description, images, className, id, size, layer} : TripCardProps) {
    const header = {
        location: cities,
        date: date
    }
    return (
        <SimpleCard header={header} className={className} id={id} size={size ? size : "fit"} layer={layer}>
            {images && (
                <SwipeElement>
                    {images.map((image, index) => (
                        <InteractiveImage
                            key={index}
                            url={image.url}
                            altText={image.altText}
                            caption={image.caption}
                            size="large"
                        />
                    ))}
                </SwipeElement>
            )}
            {description && (
                <SimpleCard
                    size="medium"
                    layer={2}    
                >
                    <Text text={description} type="text"/>
                </SimpleCard>
            )}
        </SimpleCard>
    );
}