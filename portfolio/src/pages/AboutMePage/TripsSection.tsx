import Text from "../../components/atoms/Text";
import TripCard from "../../components/organisms/Card/TripCard";
import { trips } from "./AboutMe.constants";

export default function TripsSection() {
  return (
    <section id="trips" className="w-main mx-auto flex flex-col gap-lg">
        <Text text="About my trips" type="header" />
        <div className="w-full mx-auto flex flex-col gap-md">
            {trips.map((trip, index) => (
                <TripCard 
                    key={index}
                    layer={1}
                    size="large"
                    cities={trip.cities}
                    date={trip.date}
                    description={trip.description}
                    images={trip.images}
                />
            ))}
        </div>
    </section>
  );
}