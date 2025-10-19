import Text from "../../components/atoms/Text";
import SimpleCard from "../../components/organisms/Card/SimpleCard";
import { trips } from "./AboutMe.constants";

function TripsSection() {
  return (
    <section id="trips" className="w-main mx-auto flex flex-col gap-lg">
        <Text text="My favorite places are ..." type="header" />
        <div className="mx-auto flex flex-col gap-md">
            {trips.map((trip, index) => (
                <SimpleCard key={index} trip={trip} />
            ))}
        </div>
    </section>
  );
}

export default TripsSection;