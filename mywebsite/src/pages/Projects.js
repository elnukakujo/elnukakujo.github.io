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

function SectionTitle({id, title}){
    return (
        <div>
            <div className="anchor" id={id}/>
            <h3>{title}</h3>
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

function Project({anchorId, title, tag, date, githubUrl, videoUrl, websiteUrl, description, graphInfos}){
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
        console.log(graphInfos);
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
                {tag.map((tag, index) => (
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

export default function Projects(){
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/elnukakujo/elnukakujo.github.io/refs/heads/main/mywebsite/src/assets/projects.json').then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            setProjects(data.projects);
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })
    }, []);
    useEffect(() => {
        document.title = 'Projects | Noe Jager';
    }, []);
    return (
        <SectionOpener id="projects" title="Projects">
            {projects.map((project, index) => (
                <Project 
                    key={index}
                    anchorId={project.anchorId}
                    title={project.title}
                    tag={project.tag || []}
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