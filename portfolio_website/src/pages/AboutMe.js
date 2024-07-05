import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from "react";

import '../assets/css/pages/aboutme.css';

function Content({children}){
    return (
        <div className="content">
            <p>
                {children}
            </p>
        </div>
    );
}

export default function AboutMe(){
    useEffect(() => {
        document.title = 'About Me | Noe Jager';
    }, []);
    return (
        <div className="section" id="aboutme">
            <Content>
                Hello and welcome to my website! My name is Noe Jager, and I'm currently pursuing a master's degree in Computer Science at the University of Montreal.
                While I spend most of my time studying and enjoying life in Montreal, this year, I've given myself the mission to work on a variety of projects
                to expand my horizons and explore different domains.
            </Content> 
            <Content>
                In the summer of 2022, I completed my bachelor's degree at the University of Luxembourg, known for its modernity and its 93 world ranking in Computer Science 
                (Times Higher Education ranking 2022). Eager to explore the 'France in America', I embarked on a journey to Montreal. 
                Fluent in four languages (French, English, German, Japanese), I have gained valuable experience from a diverse range of projects undertaken 
                during my bachelor studies, often in collaboration with esteemed researchers. 
                These projects spanned areas such as Artificial Intelligence, Robotics like my  Q Learning for a drone in a simulated environment 
                and Control of a group of drone with Unreal Engine 4 using Python projects, and  Human-Computer Interaction, and Computer Vision 
                with Design of a privacy app with Figma and Drawing with a webcam. 
                I invite you to explore my Education and Projects pages for further insights into my academic and professional journey.
            </Content>
            <Content>
                I am driven by a passion to delve into the myriad domains within the dynamic realm of computer science. My goal is to continuously expand my expertise 
                by staying abreast of emerging software, programming languages, and frameworks. By doing so, I aim to undertake increasingly intricate projects over time. 
                Additionally, I am eager to forge connections and foster collaborations with fellow enthusiasts, believing that our collective efforts will yield superior 
                results.
            </Content>
            <Content>
                I prioritize effective communication and teamwork, drawing from experiences such as attending various summer camps. These experiences have honed my ability 
                to collaborate, strategize, and contribute meaningfully within a team dynamic. Furthermore, my passion for drawing fuels my creativity, influencing my approach 
                to problem-solving and project development. Additionally, my university education has ingrained in me the importance of diligence and time management. 
                I adhere to the principle of tackling tasks promptly and persisting until completion, ensuring a focused and efficient workflow.
            </Content>
            <Content>
                In addition to my professional pursuits, I am deeply engaged in various personal endeavors that enrich my life outside of work. 
                Participating in numerous team projects and events has been a fulfilling aspect of my journey, fostering collaboration and growth. 
                Beyond these endeavors, I find solace and inspiration in exploration and creativity. Having traveled to over 50 countries across four continents, 
                I am passionate about immersing myself in diverse cultures and languages, each offering unique perspectives on the world. 
                Moreover, after work, I indulge in the immersive worlds of video games and the captivating narratives of science fiction books. 
                These hobbies not only provide an enjoyable escape but also fuel my imagination and creativity, contributing to a well-rounded lifestyle.
            </Content>
            <Content>
                I invite you to contact me down below if you have any fun and interesting projects you need some help on. And I also recommend you to go see my 
                Education and Projects pages.
            </Content>
        </div>
    );
}