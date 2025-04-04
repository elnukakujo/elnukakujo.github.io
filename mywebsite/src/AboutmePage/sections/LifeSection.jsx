import '../assets/css/sections/lifesection.css';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from "d3";
import * as topojson from "topojson-client";
import worldData from "../assets/data/countries-110m.json";
import life from "../assets/data/life.json";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSidebar } from "../SidebarContext";

import ExpandableImage from "../../ReusableComponents/ExpandableImage";

const images = import.meta.glob('../assets/img/life/**', { eager: true });

function TravelMap() {
    const svgRef = useRef(null);
    const { ref, inView } = useInView({
        threshold: 0.05,
        triggerOnce: false,
    });

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
        .on("mouseover", (event, d) => {
            visitedCountries.includes(d.properties.name) ? d3.select(event.target).attr("fill", "#1E90FFee"): null;
        })
        .on("mouseout", (event, d) => {
            d3.select(event.target).attr("fill", visitedCountries.includes(d.properties.name) ? "#1E90FF" : "#ccc");
        });
    }, []);
    return(
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='life-section__content travel-map'>
            <h2 className='life-section__content__title'>I have visited {visitedCountries ? visitedCountries.length:null} countries!</h2>
            <svg
            ref={svgRef}
            className="world-map"
            viewBox="0 0 1000 500"
            />
        </motion.div>
    )
}

function FavPlaces(){
    const { ref, inView } = useInView({
        threshold: 0.05,  // Detects when 50% of the section is visible
        triggerOnce: false, // Keeps updating as user scrolls
    });


    const favPlaces = life.fav_places;

    return(
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-8 bg-blue-500 text-white text-center rounded-xl shadow-lg life-section__content fav-places"
        >
            <h2 className='life-section__content__title'>My favorite places are ...</h2>
            <div className='life-section__content__places'>
                {favPlaces.map((place, index) => {
                    const { ref, inView } = useInView({
                        threshold: 0.05,  // Detects when 50% of the section is visible
                        triggerOnce: false, // Keeps updating as user scrolls
                    });                
                    return (
                        <motion.div
                        key={index}
                        ref={ref}
                        className='life-section__content__places__place'
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className='life-section__content__places__place__header'>
                                <h1>
                                    {
                                        [...new Set(place.locations.map(location => location.country))].map((country, index, countries) => (
                                            <span key={index}>
                                                {country}
                                                {index < countries.length - 1 ? ', ' : ''}
                                            </span>
                                        ))
                                    }
                                </h1>
                                <h2>
                                    {
                                        place.locations.map((location, index) => (
                                            <span key={index}>
                                                {location.city}
                                                {index < place.locations.length - 1 ? ', ' : ''}
                                            </span>
                                        ))
                                    }
                                </h2>
                            </div>
                            <p>{place.description}</p>
                            <div className='life-section__content__places__place__medias'>
                                {place.images ? place.images.map((image, index) => (
                                    <ExpandableImage imageUrl={images[image]?.default || null} />
                                )) : null}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    )
}

function Hobbies() {
    const { ref, inView } = useInView({
        threshold: 0.1,  // Detects when 50% of the section is visible
        triggerOnce: false, // Keeps updating as user scrolls
    });

    return(
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-8 bg-blue-500 text-white text-center rounded-xl shadow-lg life-section__content hobbies"
        >
            <h2 className='life-section__content__title'>During my free time, I like to ...</h2>
            <div className='life-section__content__hobbies'>
                {life.hobbies.map((hobby, index) => (
                    <div key={index} className='life-section__content__hobbies__hobby'>
                        <h1>{hobby.title}</h1>
                        <p>{hobby.description}</p>
                        <div className='life-section__content__hobbies__hobby__medias'>
                            {hobby.images ? hobby.images.map((image, index) => (
                                <ExpandableImage imageUrl={images[image]?.default || null} />
                            )) : null}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default function LifeSection() {
    const { setActiveSection } = useSidebar();
    const { ref, inView } = useInView({
        threshold: 0.01,  // Detects when 50% of the section is visible
        triggerOnce: false, // Keeps updating as user scrolls
    });

    // Update the active section when it becomes visible
    if (inView) {
        setActiveSection("life");
    }

    return(
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-8 bg-blue-500 text-white text-center rounded-xl shadow-lg life-section life"
        >
            <h1 className='life-section__title'>Some Insight on me</h1>
            <TravelMap />
            <FavPlaces />
            <Hobbies />
        </motion.div>
    )
}