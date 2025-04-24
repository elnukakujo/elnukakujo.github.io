import SwipeLayout from "../layouts/SwipeLayout";

function TravelCard({trip}) {
  return (
    <article className="travel-card card w-card items-start">
        <header className="flex flex-col gap-sm">
            <h2>{trip.cities}</h2>
            <h3>{trip.country}</h3>
            <p className="italic">{trip.date}</p>
        </header>
        <p>{trip.description}</p>
        {trip.images ? (<SwipeLayout>
            {trip.images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1} of ${trip.cities}, ${trip.country}`}
                    className="rounded-sm shadow-md size-media object-cover"
                />
            ))}
        </SwipeLayout>) : null}
    </article>
  );
}
export default TravelCard;