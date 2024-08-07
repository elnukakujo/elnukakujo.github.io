import React from "react";
import {Link} from "react-router-dom";
import { useEffect } from "react";

import meImage from '../assets/img/index/me.jpg';
import udemEte from '../assets/img/index/udem_ete.jpg';
import udemNeige from '../assets/img/index/udem_neige.jpg';
import sparkiImage from '../assets/img/projects/sparki.jpg';
import ue4Image from "../assets/img/projects/unreal_engine4.png";
import qLearningEnvImage from "../assets/img/projects/Q_learning_drone.png";

import '../assets/css/pages/home.css';

function Figure({src, alt, url}){
    if(url){
        return (
            <Link className="img_container" to={url}>
                <img src={src} alt={alt}/>
            </Link>
        );
    }else{
        return (
            <figure className="img_container">
                <img src={src} alt={alt}/>
            </figure>
        );
    }
}

function Links({urls, headers}){
    return (
        <div className="links">
            {urls.map((url, index) => (
                <Link key={index} to={url}><h4>{headers[index]}</h4></Link>
            ))}
        </div>
    );

}

function SectionOpener({id, title, children}){
    if(title){
        return (
            <div className="section" id={id}>
                <div className="content">
                    <h2>{title}</h2>
                    {children}
                </div>
            </div>
        );
    }else{
        return (
            <div className="section" id={id}>
                <div className="content">
                    {children}
                </div>
            </div>
        );
    }
}

function IntroSection(){
    return(
        <SectionOpener id="intro">
            <Figure src={meImage} alt={"A picture of me"} url={"/aboutme"}/>
            <div className="description">
                <p> 
                    I'm Noé Jager, a master's student in Computer Science with extensive experience in programming, specializing in Artificial Intelligence, 
                    Data Science, Data Visualizations, and Full-Stack Web Development. I take great pride in my diverse projects and invite you to explore 
                    my portfolio, looking forward to potential collaboration opportunities.
                </p>
                <Link to="/aboutme"><h4>Learn more about me</h4></Link>
            </div>
        </SectionOpener>
    );
}

function EducationSection(){
    return(
        <SectionOpener id="education_intro" title={"Education"}>
            <div id="udem_pictures">
                <Figure src={udemEte} alt={"Udem in Summer"} url={"/education#masterUdem"}/>
                <Figure src={udemNeige} alt={"Udem in Winter"} url={"/education#masterUdem"}/>
            </div>
            <Links 
            urls={[
                "/education#masterUdem", 
                "/education#bacUniLu", 
                "/education#oc"]}
            headers={[
                "Master in Computer Science at Université de Montréal", 
                "Bachelor of Science in Computer Science at University of Luxembourg",
                "Online Courses"]}
            />
        </SectionOpener>
    );
}

function ProjectsSection(){
    return(
        <SectionOpener id="projects_intro" title={"Projects"}>
            <figure id="projects_pictures">
                <Figure src={sparkiImage} alt={"A little Sparki robot"} url={"./projects#sparki"}/>
                <Figure src={ue4Image} alt={"Unreal Engine 4 interface"} url={"./projects#group_drone"}/>
                <Figure src={qLearningEnvImage} alt={"Q learning simluation environment"} url={"./projects#q_learning_drone"}/>
            </figure>
            <Links 
                urls={[
                    "./projects#clothing_classification",
                    "./projects#movie_search_app",
                    "./projects#lol_analysis",
                    "./projects#sportsai_website",
                    "./projects#drawing_with_webcam",
                    "./projects#privacy_app_figma",
                    "./projects#handwriting_generator",
                    "./projects#chatbot",
                    "./projects#q_learning_drone",
                    "./projects#group_drone",
                    "./projects#sparki"]}
                headers={[
                    "Clothing classification Shallow Neural Networks with NumPy",
                    "Movie search app",
                    "Analytics website for League of Legends",
                    "Soccer coaching with SportsAI",
                    "Drawing with a webcam",
                    "Design of a privacy app with Figma",
                    "Handwriting generator with Tensorflow",
                    "Conversational Chatbot with Tensorflow",
                    "Q Learning for a drone in a simulated environment",
                    "Control of a group of drone with Unreal Engine 4 using Python",
                    "Chase with Sparki"]}
            />
        </SectionOpener>
    );
}

export default function Home() {
    useEffect(() => {
         document.title = 'Home | Noe Jager';
    }, []);
    return (
        <div>
            <IntroSection/>
            <EducationSection/>
            <ProjectsSection/>
        </div>
    )
}