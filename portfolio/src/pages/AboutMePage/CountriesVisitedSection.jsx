import { countriesVisited } from "./AboutMe.constants";
import WorldMap from "../../components/WorldMap";

function CountriesVisitedSection() {
  return (
    <section id='countries-visited' className="w-main mx-auto card">
      <h1 className="w-full text-left">{countriesVisited.length} countries visited</h1>
      <WorldMap visitedCountries={countriesVisited}/>
    </section>
  );
}

export default CountriesVisitedSection;