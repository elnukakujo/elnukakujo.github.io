import TravelCard from "../../components/TravelCard";
import { trips } from "./AboutMe.constants";

function TripsSection() {
  return (
    <section id="trips" className="w-main mx-auto flex flex-col gap-lg">
        <h1>My favorite places are ...</h1>
        <div className="mx-auto flex flex-col gap-md">
            {trips.map((trip, index) => (
                <TravelCard key={index} trip={trip} />
            ))}
        </div>
    </section>
  );
}

export default TripsSection;