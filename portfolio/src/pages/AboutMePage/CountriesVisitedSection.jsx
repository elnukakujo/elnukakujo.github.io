import { countriesVisited } from "./AboutMe.constants";
import WorldMap from "../../components/atoms/WorldMap";

function CountriesVisitedSection() {
  return (
    <section id='countries-visited' className="w-main mx-auto flex flex-col gap-lg">
      <h1 className="w-full text-left">Outside Work</h1>
      <div className="card w-card mx-auto">
        <WorldMap visitedCountries={countriesVisited}/>
      </div>
    </section>
  );
}

export default CountriesVisitedSection;