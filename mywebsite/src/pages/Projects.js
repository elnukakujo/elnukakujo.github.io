import React from 'react';
import { useEffect } from 'react';

import '../assets/css/pages/projects.css';

function SectionOpener({id, title, children}){
    return (
        <div class="section" id={id}>
            <div class="content">
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    );
}

function SectionTitle({id, title}){
    return (
        <div>
            <div class="anchor" id={id}/>
            <h3>{title}</h3>
        </div>
    );
}

function EmbedVideo({url}){
    return (
        <div class="video-container">
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
            <a href={src} target='_blank' rel='noopener'>
                <img src={src}/>
            </a>
            <figcaption>{legend}</figcaption>
        </figure>
    );
}

function Project({anchorId, title, date, githubUrl, videoUrl, websiteUrl, description, graphInfos}){
    const output = [];
    if (date) {
        output.push(<li class="date" key="date"> Date: {date} </li>);
    }
    if (websiteUrl) {
        output.push(<li><a href={websiteUrl} target='_blank' rel='noopener'>See the website</a></li>);
    }
    if (githubUrl) {
        output.push(<li><a href={githubUrl} target='_blank' rel='noopener'>See the GitHub repository</a></li>);
    }
    if (description) {
        output.push(
            ...description.map((sentence, index) => (
            <li key={index}>{sentence}</li>
        )));
    }
    const video = videoUrl ? <EmbedVideo url={videoUrl} /> : null;
    const graphs = [];
    if (graphInfos) {
        graphs.push(
            ...graphInfos.map((infos, index) => (
                <Graph src={infos[0]} legend={infos[1]}/>
            ))
        );
    }
    const outputList=output.length!==0?
        <div class="description">
            <ul>
                {output}
            </ul>
        </div>
        :null;
    
    return (
        <div className='section' id='project'>
            <div class="anchor" id={anchorId}></div>
            <h4>{title}</h4>
            <div class="content">
                {outputList}
                {video}
                {
                    graphs ? 
                    <div class="graphs">
                        {graphs}
                    </div> 
                    : null
                }
            </div>
        </div>
    );
}

export default function Projects(){
    useEffect(() => {
        document.title = 'Projects | Noe Jager';
    }, []);
    return (
        <SectionOpener id="projects" title="Projects">
            <SectionTitle id="master_projects" title="Master Projects"/>
            <Project
                anchorId="clothing_classification"
                title="Clothing classification Shallow Neural Networks with NumPy"
                date="August 2024"
                description={[
                    "Implemented shallow neural networks in Python with NumPy to classify clothing images",
                    "Used the Fashion MNIST dataset to train and test the model",
                    "Two neural networks created :",
                    "A single layer neural network, mimicking a logistic regression gradient descent for binary classification. "+
                    "Metrics : 97% training/testing accuracy for tshirts and trousers and 0,075 cost",
                    "A 2 layer neural network, using ReLU and softmax activation function to classify 10 classes. "+
                    "Metrics : 81% training accuracy, 80% testing accuracy and 0,513 cost"
                ]}
                githubUrl="https://github.com/elnukakujo/clothing_classification"
                graphInfos={[
                    [
                        "https://raw.githubusercontent.com/elnukakujo/clothing_classification/main/plot/binary/step_2000_train_acc_0.98.png",
                        "The binary classification training evolution curve"
                    ],
                    [
                        "https://raw.githubusercontent.com/elnukakujo/clothing_classification/main/plot/multi_class/step_6000_train_acc_0.8257333333333333_cost_0.5130132978716956.png",
                        "The multi-class classification training evolution curve"
                    ]
                ]}
            />
            <Project
                anchorId="movie_search_app"
                title="Movie search app"
                date="July 2024"
                description={[
                    "Created a local movie search app with a React frontend and a .Net backend",
                    "Result has a lot of options: main page with recommendations, search page, movie/series page, actors page, commentaries and ratings",
                    "All the data used on the website is collected from the TMDB API",
                    "I could polish it more like filtering the comments and movie data, adding more movies on the home page too, but I feel like I did enough for now",
                    "I had a fun time exploring React and .Net with this project"
                ]}
                githubUrl="https://github.com/elnukakujo/movieSearchApp"
                videoUrl={"https://www.youtube.com/embed/4F4O1xsQ4WU?si=7nBexlFtNQ4BTcMg"}
            />
            <Project
                anchorId="lol_analytics"
                title="Analytics website for League of Legends"
                date="June 2024 - In Progress"
                githubUrl="https://github.com/AnalyticsLoL"
            />
            <Project
                anchorId="sportsai_website"
                title="Soccer coaching with SportsAI"
                date="May 2024 - June 2024"
                description={[
                    "With the tutoring of Hellen Vasquez teacher at Polytechnique Montreal and Tarik Agday co-founder of SportsAI",
                    "Worked as a team to create a website for soccer coaches to analyze and boost their players' performance",
                    "A final project team in the course INF8808E: Data Visualization at Polytechnique Montreal",
                    "Implemented using Python Dash and Plotly, as well as Flask and CSS"
                ]}
                githubUrl="https://github.com/elnukakujo/INF8808_DataViz_SportsAIProject"
                websiteUrl="https://sportsaiproject.onrender.com/"
            />
            <SectionTitle id="bachelor_projects" title="Bachelor Projects"/>
            <Project
                anchorId="drawing_with_webcam"
                title="Drawing with a webcam"
                date="February - June 2022"
                description={[
                    "With the tutoring of Prof. Dr. Luis A. LEIVA at University of Luxembourg",
                    "Developed a real-time drawing application using Python and openCV",
                    "Analyzed finger positions to determine drawing actions"
                ]}
                githubUrl="https://github.com/elnukakujo/BSP06-Drawing-with-a-webcam"
            />
            <Project
                anchorId="privacy_app_figma"
                title="Design of a privacy app with Figma"
                videoUrl={"https://www.youtube.com/embed/QCm1njo0ayM?si=wlDq4pp-bgf6woDg"}
            />
            <Project
                anchorId="handwriting_generator"
                title="Handwriting generator with Tensorflow"
                date="September 2021 - January 2022"
                description={[
                    "With the tutoring of Prof. Dr. Luis A. LEIVA at University of Luxembourg",
                    "Created a Recurrent Neural Network in Python with the TensorFlow library",
                    "Data extraction, cleaning, definition of a model, its training, then creation of the Chatbot interface",
                    "The model had 3 parts: encoding, Bahdanau Attention, and decoding",
                    "Replicated various handwriting styles using a dataset from a separate project"
                ]}
            />
            <Project
                anchorId="chatbot"
                title="Conversational Chatbot with Tensorflow"
                date="February - June 2021"
                description={[
                    "With the tutoring of Prof Dr Christoph Schommer at University of Luxembourg",
                    "Implemented a Convolutional Neural Network for chatbot functions in Python with TensorFlow",
                    "Reddit threads with parent commentaries as a dataset between French and English and engages in small talk"
                ]}
            />
            <Project
                anchorId="q_learning_drone"
                title="Q Learning for a drone in a simulated environment"
                date="September 2020 - January 2021"
                description={[
                    "With the tutoring of Dr Jose Luis Sanchez Lopez at University of Luxembourg",
                    "Trained a drone to navigate while avoiding obstacles in a simulated environment (airsim) using Python",
                    "Q-learning with a defined Q table and rewards"
                ]}
            />
            <Project
                anchorId="group_drone"
                title="Control of a group of drone with Unreal Engine 4 using Python"
                date="February - June 2020"
                description={[
                    "With the tutoring of Dr Gregoire Danoy at University of Luxembourg to create a simulated environment with quadrotors as agents",
                    "Controlled drones to avoid obstacles and collisions using Unreal Engine 4 and Python",
                    "Applied linear algebra concepts for precise drone movements"
                ]}
                videoUrl={"https://www.youtube.com/embed/V8-CfdUBPYI?si=k667HmWQLU5A2UTB"}
            />
            <Project
                anchorId="sparki"
                title="Chase with Sparki"
                date="September 2019 - January 2020"
                description={[
                    "With the tutoring of Dr Gregoire Danoy at University of Luxembourg, learned about Sparki",
                    "Coded Sparki in Sparkiduino to chase another Sparki",
                    "They also needed to remain in an enclosure delimited by markers on the ground"
                ]}
            />
        </SectionOpener>
    );
}