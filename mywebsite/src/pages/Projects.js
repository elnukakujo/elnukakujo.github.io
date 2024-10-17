import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
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

function Project({anchorId, title, tags, date, githubUrl, videoUrl, websiteUrl, description, graphInfos, pdfLink}){
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
                <Graph src={infos.image} legend={infos.description} key={index}/>
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
                {websiteUrl && (
                    <a className="websiteLink" href={websiteUrl} target='_blank' rel='noreferrer'>
                        <p>See the website</p>
                    </a>
                )}

                {githubUrl && (
                    <a className="githubLink" href={githubUrl} target='_blank' rel='noreferrer'>
                        <p>See the GitHub repository</p>
                    </a>
                )}

                {pdfLink && (
                    <div className='pdf-links'>
                        {Object.entries(pdfLink).map(([key, value]) => (
                            <div key={key}>
                                {value && (
                                    <a className="pdfLink" href={value} target='_blank' rel='noreferrer'>
                                        <p>See the {key}</p>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                )}
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

function FilterWindow({uniqueTags,selectedTags}){
    const [filterVisibility, setFilterVisibility] = useState("hidden"); // Initialize with "hidden"

    const toggleFilterWindow = () => {
        setFilterVisibility(prev => prev === "hidden" ? "visible" : "hidden"); // Toggle visibility
    };

    const location = useLocation();

    const [tags, setTags]=useState([]);
    useEffect(() => {
        const updatedTags = uniqueTags.map(tag => ({
            name: tag,
            clicked: selectedTags.includes(tag), // Keep the clicked state based on selectedTags
        }));
        setTags(updatedTags);
    }, [uniqueTags, selectedTags]);

    const navigate = useNavigate();

    const updateQueryParams = (selectedTags) => {
        const hashParams = new URLSearchParams(location.hash.slice(1));
    
        // Remove all existing 'tags' queries to start clean
        hashParams.delete('tags');
    
        // Add the selected tags to the query string
        if (selectedTags.length > 0) {
            hashParams.set('tags', selectedTags.join(','));
        }
    
        // Update the URL without refreshing the page
        navigate({ hash: `#${hashParams.toString()}` }, { replace: true });
    };

    const handleTagClick = (index) => {
        const updatedTags = tags.map((tag, i) =>
            i === index ? { ...tag, clicked: !tag.clicked } : tag
          );
        setTags(updatedTags);

        // Update query params
        const selectedTags = updatedTags
        .filter(tag => tag.clicked)
        .map(tag => tag.name);

        updateQueryParams(selectedTags);
    };

    const resetFilters = () => {
        const resetTags = tags.map(tag => ({ ...tag, clicked: false }));
        setTags(resetTags);

        const hashParams = new URLSearchParams(location.hash.slice(1));
        hashParams.delete('tags');
        navigate({ hash: `#${hashParams.toString()}` }, { replace: true });
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
                        <button
                            key={index}
                            className={tag.clicked ? 'tag clicked' : 'tag'}
                            onClick={() => handleTagClick(index)}
                        >
                            {tag.name}
                        </button>
                    ))}
                </div>
                <div className='footer'>
                    <button onClick={resetFilters}>Reset filters</button>
                </div>
            </div>
            <button className="filter-button" onClick={toggleFilterWindow}>Show filters</button>
        </div>
    );
}

export default function Projects(){
    const [projects, setProjects] = useState([]);
    const [uniqueTags, setUniqueTags] = useState([]);

    const location = useLocation();
    const hashParams = new URLSearchParams(location.hash.slice(1));
    const selectedTags = hashParams.get('tags')?.split(',') || [];

    const fetchProjects = useCallback(async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/elnukakujo/elnukakujo.github.io/refs/heads/main/mywebsite/src/assets/data/projects.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Set projects based on selectedTags
            const allTags = data.projects.flatMap((project) => project.tags);
            const uniqueTags = [...new Set(allTags)];
            setUniqueTags(uniqueTags);

            const filteredProjects = selectedTags.length > 0
                ? data.projects.filter(project =>
                    project.tags.some(tag => selectedTags.includes(tag))
                )
                : data.projects;

            setProjects(filteredProjects); // Set the filtered projects
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }, [selectedTags]); // Dependency on selectedTags

    useEffect(() => {
        fetchProjects(); // Fetch projects when selectedTags change
    }, [fetchProjects,location]);

    useEffect(() => {
        document.title = 'Projects | Noe Jager';
    }, []);

    return (
        <SectionOpener id="projects" title="Projects">
            <FilterWindow uniqueTags={uniqueTags} selectedTags={selectedTags}/>
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
                    pdfLink={project.pdfLink}
                />
            ))}
        </SectionOpener>
    );
}