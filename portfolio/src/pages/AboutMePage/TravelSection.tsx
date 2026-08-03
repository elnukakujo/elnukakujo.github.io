import { countriesVisited, trips } from "./AboutMe.constants";
import WorldMap from "../../components/atoms/WorldMap";
import Text from "../../components/atoms/Text";
import SimpleCard from "../../components/organisms/Card/SimpleCard";
import TripCard from "../../components/organisms/Card/TripCard";

// ponytail: keep 3 most impressive trips to avoid travel dominating the page
const featuredTrips = trips.filter(t =>
    ["July-August 2024", "September 2022 - April 2025", "July 2019, July-August 2023"].includes(t.date)
);

function TravelSection() {
    return (
        <section id="travel" className="mx-auto flex flex-col gap-md items-center">
            <Text text="Travel" type="header" className="w-full"/>
            <SimpleCard size="large">
                <WorldMap visitedCountries={countriesVisited}/>
            </SimpleCard>
            {featuredTrips.map((trip, index) => (
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
        </section>
    );
}

export default TravelSection;
