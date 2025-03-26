import '../assets/css/sections/lifesection.css';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from "d3";
import * as topojson from "topojson-client";
import worldData from "../assets/data/countries-110m.json";
import life from "../assets/data/life.json";

function TravelMap() {
    const svgRef = useRef();
    const [hoveredCountry, setHoveredCountry] = useState(null);
    const visitedCountries = life.countries
  
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
        .on("mouseover", (event, d) => setHoveredCountry(d.properties.name))
        .on("mouseout", () => setHoveredCountry(null));
    }, []);
    return(
        <div className='life-section__travel-map'>
            <h2 className='life-section__travel-map__title'>I have visited {visitedCountries ? visitedCountries.length:null} countries!</h2>
            <div className="p-4 border rounded-lg">
                <svg ref={svgRef} viewBox="0 0 1000 500"></svg>
                {hoveredCountry && <p className="text-center mt-2">{hoveredCountry}</p>}
            </div>
        </div>
    )
}

export default function LifeSection() {
    return(
        <div className='life-section'>
            <h1 className='life-section__title'>Some Insight on me</h1>
            <TravelMap />
        </div>
    )
}