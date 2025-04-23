import * as d3 from "d3";
import { useEffect, useRef } from "react";

function LifeCycleChart({phase}) {
    const phases = [
        { name: "Requirements"},
        { name: "Design"},
        { name: "Implementation"},
        { name: "Testing"},
        { name: "Deployment"},
        { name: "Maintenance"},
    ];

    // Determine statuses based on the current phase
    phases.forEach((p, i) => {
        if (i < phases.findIndex(x => x.name.toLowerCase() === phase)) {
            p.status = "done";
        } else if (p.name.toLowerCase() === phase) {
            p.status = "inProgress";
        } else {
            p.status = "notStarted";
        }
    });

    const statusColors = {
        done: "#4CAF50",        // Green
        inProgress: "#FFB74D",  // Orange
        notStarted: "#E53935",  // Red
    };
    
    const width = 300;
    const height = 150;
    const radius = Math.min(width, height) * 0.4;
    const innerRadius = radius * 0.75; // Thinner donut

    const ref = useRef();
    useEffect(() => {
        const svg = d3 // Create the SVG element
            .select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`);

        const pie = d3.pie().value(() => 1); // Equal parts
        const arc = d3.arc().innerRadius(innerRadius).outerRadius(radius);

        svg // Draw the donut chart
        .selectAll("path")
        .data(pie(phases))
        .enter()
        .append("path")
        .attr("d", arc)
        .style("fill", (d) => statusColors[d.data.status]) // Set fill color once
        .on("mouseover", function () {
            d3.select(this)
                .transition()
                .duration(300)
                .style("opacity", 0.7);
        })
        .on("mouseout", function () {
            d3.select(this)
                .transition()
                .duration(300)
                .style("opacity", 1);
        });

        const labelArc = d3.arc().innerRadius(radius).outerRadius(radius*1.2);

        svg // Add text labels
        .selectAll("text")
        .data(pie(phases))
        .enter()
        .append("text")
        .attr("transform", (d) => {
            const [x, y] = labelArc.centroid(d);
            return `translate(${x*1.1}, ${y*1.1})`;
        })
        .attr("text-anchor", (d) => (Math.cos(d.startAngle + d.endAngle) > 0 ? "start" : "end")) // Align left/right properly
        .attr("fill", (d) => statusColors[d.data.status])
        .style("font-size", "12px")
        .style("font-family", "Poppins-Medium")
        .style("text-anchor", (d) => {
            const midAngle = (d.startAngle + d.endAngle) / 2;
            return midAngle > Math.PI ? "end" : "start"; // Right or left alignment
        })
        .text((d) => d.data.name);

    }, []);

    return <svg ref={ref}></svg>;
};

export default LifeCycleChart;