import React from 'react';
import { useEffect } from 'react';
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
        graphs.push(
            ...graphInfos.map((infos, index) => (
                <Graph src={infos[0]} legend={infos[1]}/>
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
    useEffect(() => {
        document.title = 'Projects | Noe Jager';
    }, []);
    return (
        <SectionOpener id="projects" title="Projects">
            <SectionTitle id="master_projects" title="Master Projects"/>
            <Project
                anchorId="math_storytelling_LLM_human_comparative_study"
                title="Empirical Study on teaching Math through Storytelling"
                tag={["Empirical methods", "Mixed Methods", "Human-Computer Interaction", "Education", "Storytelling"]}
                date="September 2024 - In Progress"
                description={[
                    "IFT6075 Empirical Methods in Human-Computer Interaction Final Project at University of Montreal",
                    "Using the research from the CHI 2024 conference article 'Mathemyths: Leveraging LLMs to Teach Mathematical Language through Child-AI Co-Creative Storytelling'",
                    "Verifying their findings and enlarging its scope to multiple LLMs apps, multiple math teachers story tellers, as well as more complex problems and an older population"
                ]}
            />
            <Project
                anchorId="OpenAI_Assistant_M2_Gen"
                title="Model assistant for the design of meta-models using OpenAI API"
                tag={['Python', 'OpenAI', 'API', 'Model-Driven Engineering', 'Software Engineering', 'Prompt Engineering']}
                date="September 2024 - In Progress"
                description={[
                    "IFT6253 Model-Driven Engineering final project at University of Montreal",
                    "Using the research from the paper 'Automated Domain Modeling with LLMs: A Comparative Study'",
                    "Creating a Modeling Assistant to help designers create meta-models for Domain Specific Languages"
                ]}
                githubUrl="https://github.com/elnukakujo/OpenAI_Assistant_M2_Gen"
            />
            <Project
                anchorId="sign_language_recognition"
                title="Sign Language Recognition with Deep Neural Network using basic TensorFlow"
                tag={['Python', 'TensorFlow', 'Deep Learning', 'CNN']}
                date="August 2024"
                description={[
                    "Implementing a Neural Network using TensorFlow to recognize the American Sign Language",
                    "The dataset used is the Sign Language MNIST from Kaggle containing 24 letters (excluding J and Z)",
                    "Used OpenCV to preprocess the images and TensorFlow (not Keras) to do the computations for a very basic model (No CNN only 'dense layers')",
                    "The best hyperparameters are a learning rate starting from 6.5e-6 decaying manually to 5e-7, a mini batch size of 2**9 (512), two hidden layers with each 85 and 84 nodes, and a l2 lambda of 0 (not enough time to do the tuning for it but was still implemented)",
                    "I created two pipelines for hypertuning with respective graphs: panda and caviar tuning (See the graphs below and the github for more info)",
                    "The model has a 81% training accuracy, 65% testing accuracy and a 0.67 cost which is a good achievement for such a simple model"
                ]}
                githubUrl="https://github.com/elnukakujo/sign_language_recognition"
                graphInfos={[
                    [
                        "https://raw.githubusercontent.com/elnukakujo/sign_language_recognition/main/data/plots/20240816_172458.png",
                        "The evolution curve of my best training model"
                    ],
                    [
                        "https://raw.githubusercontent.com/elnukakujo/sign_language_recognition/main/data/plots/example_caviar_tuning.png",
                        "Example of a caviar tuning plot"
                    ]
                ]}
            />
            <Project
                anchorId="clothing_classification"
                title="Clothing classification Shallow Neural Networks with NumPy"
                tag={['Python', 'Numpy', 'Deep Learning']}
                date="August 2024"
                description={[
                    "Implemented shallow neural networks in Python with NumPy to classify clothing images",
                    "Used the Fashion MNIST dataset to train and test the model",
                    "Two neural networks created :",
                    "A single layer neural network, mimicking a logistic regression gradient descent for binary classification. "+
                    "Metrics after 2000 steps: 97% training/testing accuracy for tshirts and trousers and 0,075 cost",
                    "A 3 layer neural network, using ReLU and Softmax activation functions, and mini batch gradient descent to classify 10 classes. "+
                    "Metrics after 10 epochs: 85% training accuracy, 83% testing accuracy and 0,45 cost",
                    "The same 3 layer neural network, but using the adam optimizer to classify the 10 classes. "+
                    "Metrics after 10 epochs: 90% training accuracy, 87% testing accuracy and 0,27 cost"
                ]}
                githubUrl="https://github.com/elnukakujo/clothing_classification"
                graphInfos={[
                    [
                        "https://raw.githubusercontent.com/elnukakujo/clothing_classification/main/plot/binary/step_2000_train_acc_0.98.png",
                        "The binary classification training evolution curve"
                    ],
                    [
                        "https://raw.githubusercontent.com/elnukakujo/clothing_classification/main/plot/multi_class/epoch_10_optimizer_none.png",
                        "The mini batch gradient descent for the multi classification"
                    ],
                    [
                        "https://raw.githubusercontent.com/elnukakujo/clothing_classification/main/plot/multi_class/epoch_10_optimizer_adam.png",
                        "The mini batch gradient descent with Adam optimizer for the multi classification"
                    ]
                ]}
            />
            <Project
                anchorId="movie_search_app"
                title="Movie search app"
                tag={['C#', '.Net', 'JavaScript', 'React', 'Frontend', 'Backend', 'API', 'Software Engineering']}
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
                tag={[]}
                date="June 2024 - In Progress"
                githubUrl="https://github.com/AnalyticsLoL"
            />
            <Project
                anchorId="sportsai_website"
                title="Soccer coaching with SportsAI"
                tag={['Python', 'Plotly', 'Data Visualization', 'Frontend', 'Story Telling']}
                date="May 2024 - June 2024"
                description={[
                    "With the tutoring of Hellen Vasquez teacher at Polytechnique Montreal and Tarik Agday co-founder of SportsAI",
                    "Worked as a team to create a website for soccer coaches to analyze and boost their players' performance using data from the 2020 Euro Cup",
                    "A final project team in the course INF8808E: Data Visualization at Polytechnique Montreal",
                    "Implemented using Python Dash and Plotly, as well as Flask and CSS"
                ]}
                githubUrl="https://github.com/elnukakujo/INF8808_DataViz_SportsAIProject"
                websiteUrl="https://sportsaiproject.onrender.com/"
                graphInfos={[
                    [
                        "https://raw.githubusercontent.com/elnukakujo/INF8808_DataViz_SportsAIProject/main/plots/italyperformance.png",
                        "Stacked bar charts showcasing Italy's performance in Euro 2020 across various metrics, with an added layer indicating their positions."
                    ],
                    [
                        "https://raw.githubusercontent.com/elnukakujo/INF8808_DataViz_SportsAIProject/main/plots/radarchart.png",
                        "Radar Chart comparing Italy and England's performance in Euro 2020 across various metrics."
                    ]
                ]}
            />
            <SectionTitle id="bachelor_projects" title="Bachelor Projects"/>
            <Project
                anchorId="drawing_with_webcam"
                title="Drawing with a webcam"
                tag={['Python', 'OpenCV', 'Computer Vision', 'MediaPipe']}
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
                tag={['Figma', 'Human-Computer Interaction', 'Design']}
                videoUrl={"https://www.youtube.com/embed/QCm1njo0ayM?si=wlDq4pp-bgf6woDg"}
            />
            <Project
                anchorId="handwriting_generator"
                title="Handwriting Recognition with Tensorflow"
                tag={['Python', 'TensorFlow', 'Deep Learning', 'CNN']}
                date="September 2021 - January 2022"
                description={[
                    "With the tutoring of Prof. Dr. Luis A. LEIVA at University of Luxembourg",
                    "Implemented a Convolutional Neural Network in Python with TensorFlow to recognize from diverse handwriting",
                    "Replicated various handwriting styles using a dataset from a separate project"
                ]}
            />
            <Project
                anchorId="chatbot"
                title="Conversational Chatbot with Tensorflow"
                tag={['Python', 'TensorFlow', 'Deep Learning', 'Chatbot', 'RNN']}
                date="February - June 2021"
                description={[
                    "With the tutoring of Prof Dr Christoph Schommer at University of Luxembourg",
                    "Created a Recurrent Neural Network in Python with the TensorFlow library",
                    "Data extraction, cleaning, definition of a model, its training, then creation of the Chatbot interface",
                    "The model had 3 parts: encoding, Bahdanau Attention, and decoding",
                    "Reddit threads with parent commentaries as a dataset between French and English and engages in small talk"
                ]}
            />
            <Project
                anchorId="q_learning_drone"
                title="Q Learning for a drone in a simulated environment"
                tag={['Python', 'TensorFlow', 'Q Learning', "Robotics"]}
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
                tag={['Python', 'Unreal Engine 4', 'Linear Algebra', 'Robotics']}
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
                tag={['Arduino', 'Robotics']}
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