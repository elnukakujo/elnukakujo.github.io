import React from 'react';
import { useEffect, useState } from 'react';
import githubLogo from '../assets/img/logo/github_logo.jpg';

import '../assets/css/pages/projects.css';

function SectionOpener({id, children}){
    return (
        <div className="section" id={id}>
            <div className="content">
                {children}
            </div>
        </div>
    );
}

function EmbedVideo({url}){
    return (
        <div className="video-container">
            <embed 
                className='video'
                width="560" 
                height="315" 
                src={url} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            />
        </div>
    );
}

function Graph({src,legend}){
    return (
        <figure className="graph_container">
            <a href={src} target='_blank' rel='noreferrer'>
                <img src={src} alt={"Graph"}/>
            </a>
            <figcaption>{legend}</figcaption>
        </figure>
    );
}

function Project({anchorId, title, tags, date, githubUrl, videoUrl, websiteUrl, description, graphInfos}){
    const output = [];
    if (date) {
        output.push(<p className="date" key="date"> Date: {date} </p>);
    }
    if (description) {
        output.push(
            ...description.map((sentence, index) => (
            <p key={index}>{sentence}</p>
        )));
    }
    const video = videoUrl ? <EmbedVideo url={videoUrl} /> : null;
    const graphs = [];
    if (graphInfos) {
        graphs.push(
            ...graphInfos.map((infos, index) => (
                <Graph src={infos.image} legend={infos.description}/>
            ))
        );
    }
    const outputList=output.length!==0?
        <div className="description">
            <ul>
                {output}
            </ul>
        </div>
        :null;
    
    return (
        <div className='section' id='project'>
            <div className="anchor" id={anchorId}></div>
            <div className="top-row">
                <h4>{title}</h4>
                {
                    githubUrl?
                    <a className="github_container" href={githubUrl} target="_blank" rel="noreferrer">
                        <img src={githubLogo} alt="GitHub"/>
                    </a>
                    :null
                }
            </div>
            <div className='tag-row'>
                {tags.map((tag, index) => (
                    <button key={index} className='tag'>{tag}</button>
                ))}
            </div>
            <div className='link-row'>
                {
                    websiteUrl?
                    <a className="websiteLink" href={websiteUrl} target='_blank' rel='noreferrer'>
                        <p>See the website</p>
                    </a>
                    :null
                }
                {
                    githubUrl?
                    <a className="githubLink" href={githubUrl} target='_blank' rel='noreferrer'>
                        <p>See the github repository</p>
                    </a>
                    :null
                }
            </div>
            <div className="content">
                {outputList}
                {video}
                {
                    graphs ? 
                    <div className="graphs">
                        {graphs}
                    </div> 
                    : null
                }
            </div>
        </div>
    );
}

function FilterWindow({tags}){
    const [filterVisibility, setFilterVisibility] = useState("hidden"); // Initialize with "hidden"

    const toggleFilterWindow = () => {
        setFilterVisibility(prev => prev === "hidden" ? "visible" : "hidden"); // Toggle visibility
    };
    return (
        <div className="filters">
            <div id="filter-window" style={{visibility: filterVisibility}}>
                <div className='header'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                        onClick={toggleFilterWindow}
                    >
                        <path fillRule="evenodd" d="M1.646 1.646a.5.5 0 0 1 .708 0L8 7.293 13.646 1.646a.5.5 0 1 1 .708.708L8.707 8l5.647 5.646a.5.5 0 0 1-.708.708L8 8.707l-5.646 5.647a.5.5 0 0 1-.708-.708L7.293 8 1.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <h4>Filter by tag</h4>
                </div>
                <div className='tag-row'>
                    {tags.map((tag, index) => (
                        <button key={index} className='tag'>{tag}</button>
                    ))}
                </div>
                <div className='footer'>
                    <button>All</button>
                    <button>Reset filters</button>
                </div>
            </div>
            <button className="filter-button" onClick={toggleFilterWindow}>Show filters</button>
        </div>
    );
}

export default function Projects(){
    const [projects, setProjects] = useState([]);
    const [uniqueTags, setUniqueTags] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/elnukakujo/elnukakujo.github.io/refs/heads/main/mywebsite/src/assets/projects.json').then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            setProjects(data.projects);
            const allTags = data.projects.flatMap((project) => project.tags); // Flatten all tags into a single array
            const uniqueTags = [...new Set(allTags)]; // Remove duplicates by creating a Set
            setUniqueTags(uniqueTags);
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })
    }, []);

    useEffect(() => {
        document.title = 'Projects | Noe Jager';
    }, []);

    return (
        <SectionOpener id="projects" title="Projects">
            <FilterWindow tags={uniqueTags}/>
            {projects.map((project, index) => (
                <Project 
                    key={index}
                    anchorId={project.anchorId}
                    title={project.title}
                    tags={project.tags}
                    date={project.date}
                    githubUrl={project.githubUrl}
                    videoUrl={project.videoUrl}
                    websiteUrl={project.websiteUrl}
                    description={project.description}
                    graphInfos={project.graphInfos}
                />
            ))}
        </SectionOpener>
    );
}