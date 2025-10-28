import { useEffect, useRef } from "react";

import worldData from "../../assets/json/countries-110m.json";
import * as d3 from "d3";
import * as topojson from "topojson-client";

function WorldMap({visitedCountries}) {
    const svgRef = useRef(null);
  
    useEffect(() => {
      const svg = d3.select(svgRef.current);
      const width = 1000, height = 500;
      const projection = d3.geoMercator().scale(140).translate([width / 2, height / 1.5]);
      const path = d3.geoPath().projection(projection);
  
      // Load and use the imported world data
      const countries = topojson.feature(worldData, worldData.objects.countries);
  
      svg.selectAll(".country")
        .data(countries.features)
        .join("path")
        .attr("class", "country")
        .attr("d", path)
        .attr("fill", (d) => {
            // If the country has been visited, change the color
            return visitedCountries.includes(d.properties.name) ? "#1E90FF" : "#ccc"; // Red color for visited countries
        })
        .attr("stroke", "#333")
        .on("mouseover", (event, d) => {
            visitedCountries.includes(d.properties.name) ? d3.select(event.target).attr("fill", "#1E90FFee"): null;
        })
        .on("mouseout", (event, d) => {
            d3.select(event.target).attr("fill", visitedCountries.includes(d.properties.name) ? "#1E90FF" : "#ccc");
        });
    }, []);
    return(
        <svg
            ref={svgRef}
            className="world-map"
            viewBox="0 0 1000 500"
        />    
    );
}

export default WorldMap;