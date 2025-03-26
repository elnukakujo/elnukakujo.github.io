import '../assets/css/sections/projectssection.css';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from "d3";

import Markdown from 'react-markdown';
import { useInView } from "react-intersection-observer";
import { useSidebar } from "../SidebarContext";

import projects from "../../assets/data/projects.json";
import skills from "../../assets/data/skills.json";

import githubLogo from "../../assets/img/logo/github_logo.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';

import ExpandableImage from '../../ReusableComponents/ExpandableImage';

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

function GitHubCommit ({githubUrl}) {
    const [commit, setCommit] = useState("");

    const urlParts = new URL(githubUrl).pathname.split("/").filter(Boolean);
    const [owner, repo] = urlParts;

    useEffect(() => {
        fetch(`https://api.github.com/repos/${owner}/${repo}/commits/main`)
            .then((response) => response.json())
            .then((data) => {
                if (data.commit) {
                    const message = data.commit.message;
                    const date = new Date(data.commit.committer.date).toLocaleString(); // Format date
                    setCommit({ message, date });
                }
            })
            .catch((error) => console.error("Error fetching commit:", error));
    }, []);

    return (
        <span className="projects-section__project__content__progress__github">
            <h2>Last Commit:</h2>
            <p>{commit.message || ""} on {commit.date || ''}</p>
        </span>
    );
};

function Project({project}) {
    const { setActiveSection } = useSidebar();
    const { ref, inView } = useInView({
        threshold: 0.3,  // Detects when 50% of the section is visible
        triggerOnce: false, // Keeps updating as user scrolls
    });

    // Update the active section when it becomes visible
    if (inView) {
        setActiveSection(project.anchorId);
    }

    return (
        <div ref={ref} className={`projects-section__project ${project.anchorId}`}>
            <div className="projects-section__project__header">
                <div className='projects-section__project__header__header'>
                    <h2 className="projects-section__project__title">{project.title}</h2>
                    <p className="projects-section__project__date">{project.date}</p>
                </div>
                <div className="projects-section__project__header__cta">
                    {project.articleUrl ? (
                        <a href={project.articleUrl} className="projects-section__project__header__cta-button" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGoogleScholar} />
                        </a>
                    ) : null}
                    {project.websiteUrl ? (
                        <a href={project.websiteUrl} className="projects-section__project__header__cta-button" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faCompass} />
                        </a>
                    ) : null}
                    {project.githubUrl ? (
                        <a href={project.githubUrl} className="projects-section__project__header__cta-button" target="_blank" rel="noreferrer">
                            <img src={githubLogo} alt="Github Logo" />
                        </a>
                    ) : null}
                </div>
            </div>
            {(project.images || project.videoUrl) ? (
                <div className="projects-section__project__medias">
                    {project.videoUrl ? (
                        <iframe src={project.videoUrl} title={project.title} className="projects-section__project__video"></iframe>
                    ) : project.images ? (
                        project.images.map((image, index) => {
                            return (
                                <ExpandableImage key={index} imageUrl={image.imageUrl} description={image.description} />
                            );
                        })
                    ): null}
                </div>
            ) : null}
            <div className="projects-section__project__content">
                {typeof project.description === 'object' ? (
                    Object.entries(project.description).map(([key, value], index) => {
                        const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
                        return (
                            <div className={`projects-section__project__content__${key}`} key={index}>
                                <h2 className={`projects-section__project__content__${key}__title`}>{capitalizedKey}</h2>
                                <Markdown>{value}</Markdown>
                            </div>
                        );
                    })
                ) : (
                    <div>
                        <Markdown>{project.description}</Markdown>
                    </div>
                )}
                {project.progress ? (
                    <div className='projects-section__project__content__progress'>
                        <h2 className='projects-section__project__content__progress__title'> Progress</h2>
                        <section className='projects-section__project__content__progress__content'>
                            <LifeCycleChart phase={project.progress.phase}/>
                            <section className='projects-section__project__content__progress__content__details'>
                                {project.githubUrl ? (<GitHubCommit githubUrl={project.githubUrl}/>) : null}
                                {project.progress.status_infos ? (
                                    <span className="projects-section__project__content__progress__content__details__infos">
                                        <h2>Last Update:</h2>
                                        <Markdown>{project.progress.status_infos}</Markdown>
                                    </span>
                                ): null}
                            </section>
                        </section>
                    </div>
                ) : null}
            </div>
            <div className="projects-section__project__tags">
                {project.tags.map((tag, index) => {
                    const skill = skills.find(skill => skill.id === tag).name;
                    return (
                        <p key={index}>{skill}</p>
                    );
                })}
            </div>
            {
                project.external_ref ? (
                    <div className="projects-section__project__references">
                        <h2 className="projects-section__project__references__title">External References</h2>
                        <ul>
                            {project.external_ref.map((ref, index) => {
                                return (
                                    <li key={index}>
                                        <a href={ref.url} target="_blank" rel="noreferrer">{ref.title}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : null
            }
        </div>
    );
}

export default function ProjectsSection() {
    const { setActiveSection } = useSidebar();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 100) {
                setActiveSection(null);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setActiveSection]);

    return (
        <section className='projects-section'>
            {projects.map((project, index) => <Project key={index} project={project} />)}
        </section>
    );
}