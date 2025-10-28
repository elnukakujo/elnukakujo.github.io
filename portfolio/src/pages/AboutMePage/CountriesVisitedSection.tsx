import { countriesVisited } from "./AboutMe.constants";
import WorldMap from "../../components/atoms/WorldMap";

import Text from "../../components/atoms/Text";
import SimpleCard from "../../components/organisms/Card/SimpleCard"

function CountriesVisitedSection() {
    return (
        <section id='countries-visited' className="mx-auto flex flex-col gap-md items-center">
            <Text text="Outside Work" type="header" className="w-full"/>
            <SimpleCard size="large">
                <WorldMap visitedCountries={countriesVisited}/>
            </SimpleCard>
        </section>
    );
}

export default CountriesVisitedSection;