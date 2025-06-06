export const projects = [
    {
        status:2,
        id:"vocabulary-dbms",
        title: "Vocabulary Database Management System",
        tags: ["dbms", "sql", "sqlalchemy", "py", "pd"],
        date: "May 2025",
        summary: "Created a Python tool to save my 300-pages Language manual vocabulary into a SQL database for later projects.",
        description: "VocabularyDBMS is a Python tool designed to manage and store vocabulary per course units. It allows users to add vocabulary entries per pre-defined course unites, find duplicates and choose to keep or remove them, and export the vocabulary to a CSV file. The tool uses SQLAlchemy for database management and Pandas for data manipulation.",
        githubUrl: "https://github.com/elnukakujo/vocabulary-dbms",
        featured: false
    },
    {
        status: 2,
        id: "text2speechmultilingual",
        title: "Text to Speech Multilingual",
        tags: ["tts", "huggingface", "py"],
        date: "May 2025",
        summary: "Discovered Text2Speech tools for later projects purposes.",
        description:'Text2SpeechMultiLingualApp is a short project exploring multilingual speech synthesis using Coqui’s xTTS v2 model. It generates speech in languages like French, Chinese, and Japanese using voice samples from friends and online sources. I learned to install Python with Homebrew, manage PATH variables on macOS, and use tools like ffmpeg and yt-dlp for audio processing.',
        githubUrl: "https://github.com/elnukakujo/Text2SpeechMultiLingualApp",
        external_ref: [
            {
                "title": "Coqui-TTS",
                "url": "https://github.com/coqui-ai/TTS"
            },
            {
                "title": "xTTS_v2",
                "url": "https://huggingface.co/coqui/XTTS-v2"
            },
            {
                title: "yt-dlp",
                url: "https://github.com/yt-dlp/yt-dlp"
            },
            {
                title: "ffmpeg",
                url: "https://github.com/FFmpeg/FFmpeg"
            }
        ],
        featured: false
    },
    {
        status: 2,
        "id":"hackos4-2025",
        "title":"HackOS4-2025 Single Cell Perturbation Challenge",
        "tags": ["transformer", "svd", "embedding", "attention", "cnn", "regression", "deepl", "bioeng", "torch", "py", "r", "pd", "np", "sk", "huggingface", "plotly"],
        "date": "March 24th - April 2nd 2025",
        "summary":"First place in the HackOS4 organized by McGill and Waterloo Universities. Developed a custom Encoder only Transformer model with 1d CNN to predict perturbations in a cell RNA under the influence of a drug molecule.",
        "images": [
            {
                "imageUrl": "https://raw.githubusercontent.com/elnukakujo/hackos-4/refs/heads/main/images/CustomTransformerTrainingLineChart.png",
                "description": "Training and validation Mean Rowwise RMSE loss of the custom transformer model reaching 0.5685 on validation set at epoch 13."
            },
            {
                "imageUrl": "https://raw.githubusercontent.com/elnukakujo/hackos-4/refs/heads/main/images/cell_type_df_train_distribution.png",
                "description": "Distribution of the cell types in the training and testing set. The dataset contains 6 cell types common to both datasets."
            }
        ],
        "description": {
            "overview": "This high-stakes 9-day challenge from McGill and Waterloo universities tested my ability to predict how drugs affect cell RNA. We were evaluated on prediction accuracy using Mean Rowwise Root Mean Squared Error (MRRMSE).",
            "preprocessing": "I tackled the challenge of limited data (just 500 samples) by implementing smart dimensionality reduction. After normalizing gene perturbations to a 0-1 scale, I used Truncated SVD to compress 18,211 dimensions down to just 5 key features. To overcome the complete lack of overlap between training and test molecules, I generated molecular isomers using RDkit, forcing the model to understand fundamental chemical structures rather than memorizing specific molecules.",
            "model": "My winning solution featured a custom transformer architecture with four powerful components:\n\n 1. **Smart Molecule Understanding (Embeddings)**:\n- Used pre-trained ChemBERTa embeddings to grasp complex molecular structures\n- Combined with cell type information for context-aware predictions\n\n2. **Pattern Recognition Layer (1D CNN)**:\n- 1D CNN with optimized kernel size captures local molecular patterns\n- Applied strong regularization (80% dropout) to prevent overfitting\n\n3. **Chemical Relationship Modeling (Encoder)**:\n- 8-head transformer attention mechanism identifies critical interactions\n- Robust regularization ensures generalization to unseen molecules\n\n4. **Precision Prediction System (Normalized Regression Head)**:\n- Carefully designed output layers with normalization for stability\n- Sigmoid activation captures the non-linear nature of biological responses\n\nThis balanced architecture combined deep chemical understanding with powerful regularization techniques—essential for excellent performance with limited training data.",
            "results": "My custom transformer achieved remarkable success:\n\n- **1st place 🏆** in the competition\n- **0.5685 validation MRRMSE** (at epoch 13)\n\nThis achievement is particularly impressive considering:\n- Nearly zero overlap between training and test molecules\n- Extremely limited training data (500 samples)\n\nThe results demonstrate the model's exceptional ability to understand fundamental chemical-biological interactions rather than simply memorizing patterns from training data."
        },
        "githubUrl": "https://github.com/elnukakujo/hackos-4/tree/main",
        "external_ref":[
            {
                "title": "HackOS4-2025",
                "url": "https://lu.ma/xrt0iiqx"
            },
            {
                "title": "NeurIPS 2023 Competition",
                "url": "https://www.kaggle.com/competitions/open-problems-single-cell-perturbations/overview"
            },
            {
                "title": "ChemBERTa transformer",
                "url": "https://huggingface.co/seyonec/ChemBERTa-zinc-base-v1"
            }
        ],
        "featured":true
    },
    {
        "status": 2,
        "id": "my_memory_chat",
        "title": "My Memory Chat: A LLM Chatbot for Memory Recall",
        "tags": ["graph_rag", "generative_agents", "llm", "langchain", "neo4j", "flask", "react", "js", "full_stack", "prompt_eng", "gemini", "py", "figma", "api", "soft_eng", "ux_design"],
        "summary": "A client-server application integrating Gemini, Neo4j knowledge graphs, and the ReAct (Reason + Act) prompting method, allowing users to interact with an LLM to store life events and entities in a memory graph and receive insightful responses.",
        "description": {
            "context":"As digital interactions become more integrated into daily life, there is a growing need for AI assistants that can engage in **meaningful, long-term conversations while managing personal information securely**. Users want a system that not only remembers **key details** about their private lives—such as **people**, **events**, and **preferences**—but also **retrieves related images** to enhance interactions. However, ensuring data persistence, accessibility, and security remains a challenge. A robust memory system **must prevent data loss**, allow seamless external database access, and maintain user trust through reliable and structured information storage.",
            "problem":"*How can a **conversational AI assistant** effectively **store, retrieve, and manage user-specific personal information**, including images, while **ensuring data persistence, security, and seamless accessibility** across external databases?*",
            "contribution":"This project introduces a **full-stack conversational assistant** designed to address these challenges by integrating **Gemini 1.5**, a **Neo4j knowledge graph**, and **LLM Agents** for efficient long-term memory management. The system features a **React frontend and a Flask backend**, enabling smooth and responsive user interactions. To enhance reliability, it includes an **automated Neo4j backup system**, ensuring data persistence and protection against loss. Additionally, the app supports **image retrieval**, allowing users to associate images with their stored knowledge for a richer conversational experience. **Performance is optimized with quick response times (5-8 seconds)** and a **request-locking mechanism** to prevent simultaneous conflicting queries, ensuring a seamless and efficient user experience."
        },
        "date": "February - March 2025",
        "githubUrl": "https://github.com/MyMemoryChat",
        "images": [
            {
                "imageUrl": "https://raw.githubusercontent.com/MyMemoryChat/LLM_agent/main/neo4jconsole.png",
                "description": "Image of the Neo4j console with the memory graph"
            },
            {
                "imageUrl": "https://raw.githubusercontent.com/MyMemoryChat/Client/refs/heads/main/images/ExampleConversation2.png",
                "description": "Example history of a conversation in the React client"
            },
            {
                "imageUrl": "https://raw.githubusercontent.com/MyMemoryChat/Client/refs/heads/main/images/ExampleImageDisplay.png",
                "description": "Example image informations display in the React client"
            }
        ],
        "external_ref": [
            {
                "title": "Gemini 1.5",
                "url": "https://aistudio.google.com/welcome?gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwhYS_BhD2ARIsAJTMMQbEn7bJ0G52fWdF0NZPnlr-Ggw70ZxUIvn1MUpzdY7tkSBwnjQmeRYaAk_DEALw_wcB"
            },
            {
                "title": "ReAct: Synergizing Reasoning and Acting in Language Models",
                "url": "https://arxiv.org/abs/2210.03629"
            },
            {
                "title": "GraphRAG: Unlocking LLM discovery on narrative private data ",
                "url": "https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/"
            }
        ],
        "featured": true
    },
    {
        "status": 1,
        "id": "summoner_insight",
        "title": "Summoner-Insight: Real-Time Visualization and Prediction Assistant",
        "tags": ["react", "full_stack", "transformer", "huggingface", "torch", "js", "redux", "api", "soft_eng", "dotnet", "cs", "devops", "ux_design"],
        "summary": "A real-time visualization and prediction assistant for League of Legends, leveraging Deep Learning models for highly accurate recommendations and predictions, combined with D3.js for dynamic visualizations.",
        "description": {
            "v0.1": "Version 0.1 features a clean interface where players can search for summoners across regions, view comprehensive player statistics, analyze detailed match histories, and easily navigate between different player profiles."
        },
        "date": "June 2024 - In Progress",
        "githubUrl": "https://github.com/AnalyticsLoL/SummonerInsight",
        "videoUrl": "https://www.youtube.com/embed/ZksTQdx19MU?si=YGJKUTVtG4t4aUyP",
        "websiteUrl": "http://dev.summonerinsight.com/",
        "progress": {
            "githubUrl": "https://github.com/AnalyticsLoL/win_prediction",
            "phase": "implementation",
            "status_infos": "**Website is under maintenance after hardware failure.** \n\n Working on training a win prediction model using start of the game players information like:\n- champion_id,\n- (position),\n- (rank and division),\n- champion mastery,\n- (firstBlood kill or assist), \n- Rune paths chosen,\n- Win Rate and KDA in last 10 games."
        },
        "featured": true
    },
    {
        "status": 2,
        "id": "my_family_story",
        "title": "Generative Agents for Large Language Model Family Story Generation",
        "tags": ["generative_agents", "graph_rag", "llm", "langchain", "neo4j", "prompt_eng", "gemini", "py"],
        "summary": "Leveraging advancements in Retrieval-Augmented Generation (RAG) and Generative Agents, this application stores family images and comments in a knowledge graph to generate a personalized family storybook.",
        "description": "This project leverages Retrieval-Augmented Generation (RAG) and Generative Agents to create a personalized family storybook enriched with both text and visuals. A Neo4j knowledge graph stores family images, memories, and comments, allowing an LLM-powered agent to generate dynamic, context-aware narratives that reflect personal histories and relationships. Additionally, a dedicated image-selection agent explores the graph to retrieve relevant photos for each generated paragraph, ensuring meaningful visual storytelling. The final output is automatically formatted and converted into a Word document, providing a beautifully structured, shareable family album that brings memories to life in a seamless, AI-assisted storytelling experience.",
        "date": "January - February 2025"
    },
    {
        "status": 2,
        "id": "math_storytelling_llm_human_comparative_study",
        "title": "Empirical Study on Teaching Math through Storytelling",
        "tags": ["empirical_methods", "mixed_methods", "aws_elastic_beanstalk", "aws_cloudfront", "aws_amplify", "r", "llm", "hci", "js", "react", "cs", "dotnet"],
        "date": "September - December 2024",
        "summary":"Study of LLM-generated vs. human-authored stories for teaching university-level math. An experiment with 16 students showed improved understanding of Gradient from AI-generated content, suggesting LLMs' potential in education.",
        "description": {
            "context":"Large Language Models (LLMs) are increasingly being integrated into educational environments, raising questions about their effectiveness as teaching tools. While previous research has primarily focused on their ability to teach mathematics to children, less attention has been given to their role in higher education. Understanding how LLM-generated educational content compares to human-authored materials is essential for assessing their potential impact on university-level learning.",
            "problem":"*How do LLM-generated stories compare to human-authored stories in enhancing university students' understanding of advanced mathematical concepts?*",
            "contribution":"This study extends prior research by evaluating the effectiveness of LLM-generated stories versus human-authored stories in teaching university-level mathematics. Through an experiment involving 16 university students, participants were exposed to two different mathematical concepts (Gradient and Bayesian Probability), with story authorship blinded to eliminate bias. Preliminary results indicate a notable improvement in understanding the gradient concept among students who read LLM-generated stories. These findings highlight the potential advantages of LLMs in teaching specific mathematical topics and suggest the need for further research into their role in higher education."
        },
        "articleUrl":"https://raw.githubusercontent.com/elnukakujo/elnukakujo.github.io/main/mywebsite/src/assets/docs/IFT6075Report.pdf",
        "githubUrl": "https://github.com/elnukakujo/Large Language Model_maths_storytelling/tree/main",
        "external_ref": [
            {
                "title": "Mathemyths: Leveraging Large Language Models to Teach Mathematical Language through Child-AI Co-Creative Storytelling",
                "url": "https://arxiv.org/abs/2402.01927"
            }
        ]
    },
    {
        "status": 2,
        "id": "openai_assistant_m2_gen",
        "title": "Model assistant for the design of meta-models using OpenAI API",
        "tags": ["mde", "prompt_eng", "openai", "api", "soft_eng", "py", "pd", "llm"],
        "date": "September - December 2024",
        "summary": "Developed a Python Automated Model Assistant using OpenAI and Gemini to generate domain metamodels with Few-Shot learning, Task Decomposition, and Partial Solution Models. Achieved F1 scores of 0.90 (classes), 0.82 (attributes), and 0.79 (relations), reducing reliance on human experts.",
        "description": {
            "context":"Domain modeling is a crucial step in software and systems design, where an abstract representation of a solution domain is created to address a problem domain. Traditionally, this process requires a domain expert and an experienced modeler, iterating over multiple feedback cycles, making it time-intensive and costly. As Large Language Models (LLMs) advance, there is growing interest in automating domain model generation, reducing reliance on human intervention while maintaining high-quality results.",
            "problem":"*Can Large Language Models generate accurate domain models with minimal human intervention, reducing time and effort while maintaining high precision in class, attribute, and relationship extraction?*",
            "contribution":"This project introduces a Python Automated Model Assistant that leverages OpenAI and Gemini models to generate metamodels using Few-Shot learning, Task Decomposition, and Partial Solution Models. To our knowledge, this is the first implementation incorporating Task Decomposition and the ability to refine outputs using pre-existing partial models. Experimental results demonstrate that incorporating a 40% Partial Solution Model into the prompt significantly improves performance, achieving F1 scores of 0.90 for classes, 0.82 for attributes, and 0.79 for relationships. These findings highlight the potential of LLM-assisted domain modeling to streamline the process while maintaining strong accuracy."
        },
        "githubUrl": "https://github.com/elnukakujo/OpenAI_Assistant_M2_Gen",
        "articleUrl":"https://raw.githubusercontent.com/elnukakujo/elnukakujo.github.io/main/mywebsite/src/assets/docs/IFT6253Report.pdf",
        "external_ref": [
            {
                "title": "Automated Domain Modeling with Large Language Models: A Comparative Study",
                "url": "https://ieeexplore.ieee.org/document/10344012"
            },
            {
                "title": "Multi-step Iterative Automated Domain Modeling with Large Language Models",
                "url": "https://dl.acm.org/doi/10.1145/3652620.3687807"
            },
            {
                "title": "Matters of (Meta-)Modeling",
                "url": "https://link.springer.com/article/10.1007/s10270-006-0017-9"
            }
        ]
    },
    {
        "status": 2,
        "id": "sign_language_recognition",
        "title": "Sign Language Recognition with Deep Neural Network using basic TensorFlow",
        "tags": ["py", "tf", "deepl", "cnn", "cv2", "plotly"],
        "date": "August 2024",
        "summary": "Built a TensorFlow Neural Network to recognize ASL letters from the Sign Language MNIST dataset, using OpenCV preprocessing and fully connected layers. Designed pipelines for hyperparameter tuning and optimization.",
        "description": {
            "context":"Sign Language recognition is an important area of research aimed at facilitating communication between hearing and non-hearing individuals. With the growing availability of datasets, such as the Sign Language MNIST from Kaggle, there is an opportunity to leverage deep learning techniques for automatic recognition of sign language. While more complex models, such as Convolutional Neural Networks (CNNs), are often used for this task, simpler models can also provide meaningful insights and serve as a foundation for further exploration.",
            "problem":"*How can a simple Neural Network, without CNNs, effectively recognize American Sign Language letters using the Sign Language MNIST dataset?*",
            "contribution":"This project implements a basic Neural Network using TensorFlow (not Keras) to recognize the 24 American Sign Language letters from the Sign Language MNIST dataset. The model employs dense layers and was optimized using a manually decaying learning rate, mini-batch size of 512, and two hidden layers with 85 and 84 nodes. Despite the simplicity of the model, the system achieved 81% training accuracy, 65% testing accuracy, and a 0.67 cost, demonstrating solid performance for a basic architecture. Additionally, two hypertuning pipelines were created with respective graphs to improve model optimization."
        },
        "githubUrl": "https://github.com/elnukakujo/sign_language_recognition",
        "images": [
            {
                "imageUrl": "https://raw.githubusercontent.com/elnukakujo/sign_language_recognition/main/data/plots/20240816_172458.png",
                "description": "The evolution curve of my best training model"
            },
            {
                "imageUrl": "https://raw.githubusercontent.com/elnukakujo/sign_language_recognition/main/data/plots/example_caviar_tuning.png",
                "description": "Example of a caviar tuning plot"
            }
        ]
    },
    {
        "status": 2,
        "id": "clothing_classification",
        "title": "Clothing classification Shallow Neural Networks with NumPy",
        "tags": ["py", "np", "deepl"],
        "date": "August 2024",
        "summary":"Developed shallow neural networks in Python with NumPy to classify clothing images from the Fashion MNIST dataset. Implemented a single-layer network for binary classification and a three-layer network using ReLU, Softmax, and mini-batch gradient descent, with an optimized version using Adam.",
        "description": {
            "context":"Image classification, especially in the fashion industry, has gained significant attention for its potential applications in product recognition and recommendation systems. Leveraging datasets like Fashion MNIST provides an accessible way to explore and implement neural networks for classifying clothing images. While deep learning models such as CNNs are commonly used for such tasks, this project explores simpler, shallow neural networks to assess the performance and potential of basic architectures in achieving competitive accuracy.",
            "problem":"*How effectively can shallow neural networks classify clothing images from the Fashion MNIST dataset, and how do different network architectures impact classification accuracy?*",
            "contribution":"This project implements shallow neural networks in Python using NumPy to classify clothing images from the Fashion MNIST dataset. Three models were created: a single-layer neural network mimicking logistic regression for binary classification (achieving 97% accuracy for t-shirts and trousers after 2000 steps), a three-layer neural network using ReLU and Softmax activation functions (with 85% training accuracy and 83% testing accuracy after 10 epochs), and a three-layer network with the Adam optimizer (reaching 90% training accuracy and 87% testing accuracy after 10 epochs). These results highlight the impact of architecture and optimization techniques on performance."
        },
        "githubUrl": "https://github.com/elnukakujo/clothing_classification",
        "images": [
        {
            "imageUrl": "https://raw.githubusercontent.com/elnukakujo/clothing_classification/main/plot/binary/step_2000_train_acc_0.98.png",
            "description": "The binary classification training evolution curve"
        },
        {
            "imageUrl": "https://raw.githubusercontent.com/elnukakujo/clothing_classification/main/plot/multi_class/epoch_10_optimizer_none.png",
            "description": "The mini batch gradient descent for the multi classification"
        },
        {
            "imageUrl": "https://raw.githubusercontent.com/elnukakujo/clothing_classification/main/plot/multi_class/epoch_10_optimizer_adam.png",
            "description": "The mini batch gradient descent with Adam optimizer for the multi classification"
        }
        ]
    },
    {
        "status": 2,
        "id": "movie_search_app",
        "title": "Movie search app",
        "tags": ["cs", "dotnet", "js", "react", "full_stack", "api", "soft_eng"],
        "date": "July 2024",
        "summary":"Developed a local movie search app with a React frontend and a .NET backend, integrating data from the TMDB API. Features include recommendations, search, movie and actor pages, ratings, and comments. A great learning experience in React and .NET development.",
        "description": {
            "context":"With the rise of streaming platforms, users often face difficulty in discovering new movies or series that match their interests. A movie search app can help streamline this process by offering recommendations, detailed pages for movies and series, and user reviews. Leveraging public APIs like TMDB makes it easier to provide users with accurate and up-to-date information on their favorite movies, actors, and ratings, all within a customizable interface.",
            "problem":"*How can a movie search application, powered by the TMDB API, provide an intuitive and user-friendly experience for discovering and exploring movies, series, and their associated content?*",
            "contribution":"This project created a local movie search app using React for the frontend and .NET for the backend. The app offers multiple features, including a main page with movie recommendations, a search page, dedicated pages for movies/series, actors, and commentaries, with all data sourced from the TMDB API. Although there are opportunities for further enhancement, such as filtering comments and expanding the movie list on the home page, the project effectively showcases an interactive and engaging movie exploration experience."
        },
        "githubUrl": "https://github.com/elnukakujo/movieSearchApp",
        "videoUrl": "https://www.youtube.com/embed/4F4O1xsQ4WU?si=7nBexlFtNQ4BTcMg",
        "external_ref":[
            {
                "title": "TMDB API",
                "url": "https://www.themoviedb.org/documentation/api"
            }
        ]
    },
    {
        "status": 2,
        "id": "sportsai_website",
        "title": "Soccer coaching with SportsAI",
        "tags": ["plotly", "dash", "flask", "css", "data_viz", "py"],
        "date": "May - June 2024",
        "summary": "Final project for the INF8808E: Data Visualization course at Polytechnique Montréal, using a dataset from the 2020 Euro Cup. Developed a web application for soccer coaches to analyze and enhance player performance for SportsAI.",
        "description": {
            "context":"Analyzing player performance is crucial for soccer coaches to develop effective training strategies and improve team performance. By leveraging data visualization, coaches can gain valuable insights into player statistics and performance trends, ultimately leading to better decision-making. The 2020 Euro Cup dataset offers rich player data, which can be analyzed to identify key metrics and patterns that influence game outcomes.",
            "problem":"*How can data visualization techniques be applied to the 2020 Euro Cup dataset to help soccer coaches analyze and improve player performance?*",
            "contribution":"This project developed a web application for soccer coaches, leveraging the 2020 Euro Cup dataset to visualize player performance data. The tool enables coaches to analyze key performance metrics, identify trends, and make data-driven decisions to enhance player development and team strategy. The application is designed to provide actionable insights in an interactive and user-friendly interface for SportsAI."
        },
        "githubUrl": "https://github.com/elnukakujo/INF8808_DataViz_SportsAIProject",
        "websiteUrl": "https://sportsaiproject.onrender.com/",
        "images": [
            {
                "imageUrl": "https://raw.githubusercontent.com/elnukakujo/INF8808_DataViz_SportsAIProject/main/plots/italyperformance.png",
                "description": "Stacked bar charts showcasing Italy's performance in Euro 2020 across various metrics, with an added layer indicating their positions."
            },
            {
                "imageUrl": "https://raw.githubusercontent.com/elnukakujo/INF8808_DataViz_SportsAIProject/main/plots/radarchart.png",
                "description": "Radar Chart comparing Italy and England's performance in Euro 2020 across various metrics."
            }
        ],
        "featured": true
    },
    {
        "status": 2,
        "id": "drawing_with_webcam",
        "title": "Drawing with a webcam",
        "tags": ["py", "cv2", "comp_viz", "mediapipe"],
        "date": "February - June 2022",
        "summary": "Developed a real-time drawing application using Python and OpenCV under the guidance of Prof. Dr. Luis A. Leiva at the University of Luxembourg, leveraging finger position analysis for drawing actions.",
        "descriptions": [
            "With the tutoring of Prof. Dr. Luis A. LEIVA at University of Luxembourg",
            "Developed a real-time drawing application using Python and openCV",
            "Analyzed finger positions to determine drawing actions"
        ],
        "description": "Under the guidance of Prof. Dr. Luis A. Leiva at the University of Luxembourg, I developed a real-time drawing application using Python and OpenCV. The application analyzed finger positions to determine drawing actions, enabling users to interact with the system and create drawings through hand gestures. This project allowed me to explore computer vision techniques and real-time processing in a dynamic application.",
        "githubUrl": "https://github.com/elnukakujo/BSP06-Drawing-with-a-webcam",
        "external_ref":[
            {
                "title": "MediaPipe",
                "url": "https://github.com/google-ai-edge/mediapipe"
            }
        ]
    },
    {
        "status": 2,
        "id": "privacy_app_figma",
        "title": "Design of a privacy app with Figma",
        "tags": ["figma", "hci"],
        "summary": "A figma prototype of an IOS privacy app, designed in the context of my HCI bachelor course at the University of Luxembourg.",
        "description": "A figma prototype of an IOS privacy app, designed in the context of my HCI bachelor course at the University of Luxembourg.",
        "date": "September - December 2021",
        "videoUrl": "https://www.youtube.com/embed/QCm1njo0ayM?si=wlDq4pp-bgf6woDg"
    },
    {
        "status": 2,
        "id": "handwriting_generator",
        "title": "Handwriting Recognition with Tensorflow",
        "tags": ["deepl", "cnn", "tf", "py"],
        "date": "September 2021 - January 2022",
        "summary":"Developed a Convolutional Neural Network (CNN) in Python with TensorFlow to recognize diverse handwriting styles under the guidance of Prof. Dr. Luis A. Leiva at the University of Luxembourg, using a dataset from a separate project.",
        "description": "Under the guidance of Prof. Dr. Luis A. Leiva at the University of Luxembourg, I implemented a Convolutional Neural Network (CNN) in Python with TensorFlow to recognize diverse handwriting styles. Using a dataset from a separate project, the model was trained to replicate various handwriting styles, showcasing the power of CNNs in pattern recognition for handwritten text. This project provided valuable insights into the application of deep learning for handwriting analysis."
    },
    {
        "status": 2,
        "id": "chatbot",
        "title": "Conversational Chatbot with Tensorflow",
        "tags": ["deepl", "transformer", "tf", "py"],
        "date": "February - June 2021",
        "summary": "Developed a Transformer-based chatbot in Python with TensorFlow  at the University of Luxembourg. The model, featuring encoding, Bahdanau attention, and decoding, was trained on Reddit threads for French-English translation and small talk. The project included data extraction, cleaning, model training, and chatbot interface development.",
        "description": "Under the guidance of Prof. Dr. Christoph Schommer at the University of Luxembourg, I created a transformer architecture in Python using the TensorFlow library for building a chatbot. The project involved data extraction, cleaning, online article research, and defining and training a model before creating the chatbot interface. The model consisted of three parts: an encoding layer, an Attention layer, and a decoding layer. It was trained on Reddit threads containing parent commentaries in both French and English, allowing the chatbot to engage in small talk effectively."
    },
    {
        "status": 2,
        "id": "q_learning_drone",
        "title": "Q Learning for a drone in a simulated environment",
        "tags": ["q_learning", "py", "robot"],
        "date": "September 2020 - January 2021",
        "summary": "Under the guidance of Dr. Jose Luis Sanchez Lopez at the University of Luxembourg, trained a drone to navigate and avoid obstacles in a simulated AirSim environment using Python and Q-learning with a defined Q-table and rewards.",
        "description": "Under the guidance of Dr. Jose Luis Sanchez Lopez at the University of Luxembourg, I trained a drone to navigate and avoid obstacles in a simulated environment (AirSim) using Python. The drone's navigation was powered by Q-learning, where I defined a Q-table and implemented rewards to enable the drone to learn and improve its navigation strategy autonomously."
    },
    {
        "status": 2,
        "id": "group_drone",
        "title": "Control of a group of drone with Unreal Engine 4 using Python",
        "tags": ["py", "ue4", "robot"],
        "date": "February - June 2020",
        "summary": "Under the guidance of Dr. Grégoire Danoy at the University of Luxembourg, developed a simulated quadrotor environment in Unreal Engine 4 with Python, enabling drones to navigate, avoid obstacles, and prevent collisions using linear algebra-based movement control.",
        "description": "Under the guidance of Dr. Gregoire Danoy at the University of Luxembourg, I created a simulated environment with quadrotors as agents using Unreal Engine 4 and Python. The project involved controlling drones to avoid obstacles and collisions, applying linear algebra concepts to ensure precise movements and enhance the drones' ability to navigate autonomously in the environment.",
        "videoUrl": "https://www.youtube.com/embed/V8-CfdUBPYI?si=k667HmWQLU5A2UTB"
    },
    {
        "status": 2,
        "id": "sparki",
        "title": "Chase with Sparki",
        "tags": ["arduino", "robot"],
        "date": "September 2019 - January 2020",
        "summary": "Under the guidance of Dr. Grégoire Danoy at the University of Luxembourg, programmed Sparki robots in Sparkiduino to chase another Sparki while staying within an enclosure marked on the ground.",
        "description": "Under the guidance of Dr. Gregoire Danoy at the University of Luxembourg, I learned to work with the Sparki robot and programmed it using Sparkiduino. The task was to code Sparki to chase another Sparki while ensuring both robots stayed within an enclosure marked by ground markers. This project involved both robot control and spatial awareness programming."
    }
]

// Language logos
import csLogo from "../../assets/logo/language/cs.png";
import pyLogo from "../../assets/logo/language/py.png";
import jsLogo from "../../assets/logo/language/js.png";
import rLogo from "../../assets/logo/language/r.png";
import arduinoLogo from "../../assets/logo/language/arduino.png";
import swiftLogo from "../../assets/logo/language/swift.png";
import cppLogo from "../../assets/logo/language/cpp.png";
import htmlLogo from "../../assets/logo/language/html.png";
import javaLogo from "../../assets/logo/language/java.png";
import cssLogo from "../../assets/logo/language/css.png";
import sqlLogo from "../../assets/logo/language/sql.png";

// Framework logos
import reactLogo from "../../assets/logo/framework/react.png";
import dotnetLogo from "../../assets/logo/framework/dotnet.png";
import reduxLogo from "../../assets/logo/framework/redux.png";
import langchainLogo from "../../assets/logo/framework/langchain.png";
import pdLogo from "../../assets/logo/framework/pd.png";
import tfLogo from "../../assets/logo/framework/tf.png";
import npLogo from "../../assets/logo/framework/np.png";
import plotlyLogo from "../../assets/logo/framework/plotly.png";
import cv2Logo from "../../assets/logo/framework/cv2.png";
import flaskLogo from "../../assets/logo/framework/flask.png";
import dashLogo from "../../assets/logo/framework/dash.png";
import torchLogo from "../../assets/logo/framework/torch.png";
import skLogo from "../../assets/logo/framework/sk.png";
import huggingfaceLogo from "../../assets/logo/framework/huggingface.png";
import tailwindLogo from "../../assets/logo/framework/tailwind.png";
import coquiLogo from "../../assets/logo/framework/tts.png";
import sqlAlchemyLogo from "../../assets/logo/framework/sqlalchemy.png";

// Tool logos
import geminiLogo from "../../assets/logo/tool/gemini.png";
import neo4jLogo from "../../assets/logo/tool/neo4j.png";
import awsLogo from "../../assets/logo/tool/aws.png";
import openaiLogo from "../../assets/logo/tool/openai.png";
import figmaLogo from "../../assets/logo/tool/figma.png";
import ue4Logo from "../../assets/logo/tool/ue4.png";
import obsidianLogo from "../../assets/logo/tool/obsidian.png";

export const skills = [
    {
        "id":"cs",
        "type": "language",
        "name":"C#",
        "projects": [
            "summoner_insight",
            "math_storytelling_llm_human_comparative_study",
            "movie_search_app"
        ],
        "logo": csLogo
    },
    {
        "id":"py",
        "type": "language",
        "name":"Python",
        "projects": [
            "my_family_story",
            "openai_assistant_m2_gen",
            "sign_language_recognition",
            "clothing_classification",
            "sportsai_website",
            "drawing_with_webcam",
            "handwriting_generator",
            "chatbot",
            "q_learning_drone",
            "group_drone"
        ],
        "logo": pyLogo
    },
    {
        "id":"js",
        "type": "language",
        "name":"JavaScript",
        "projects": [
            "summoner_insight",
            "math_storytelling_llm_human_comparative_study",
            "movie_search_app"
        ],
        "logo": jsLogo
    },
    {
        "id":"react",
        "type": "framework",
        "name":"React",
        "projects": [
            "summoner_insight",
            "math_storytelling_llm_human_comparative_study",
            "movie_search_app"
        ],
        "logo": reactLogo
    },
    {
        "id":"dotnet",
        "type": "framework",
        "name": ".Net",
        "projects": [
            "summoner_insight",
            "math_storytelling_llm_human_comparative_study",
            "movie_search_app"
        ],
        "logo": dotnetLogo
    },
    {
        "id": "redux",
        "type": "framework",
        "name": "Redux",
        "projects": [
            "summoner_insight"
        ],
        "logo": reduxLogo
    },
    {
        "id": "gemini",
        "type": "tool",
        "name": "Gemini",
        "projects": [
            "my_family_story"
        ],
        "logo": geminiLogo
    },
    {
        "id": "langchain",
        "type": "framework",
        "name": "LangChain",
        "projects": [
            "my_family_story",
            "openai_assistant_m2_gen"
        ],
        "logo": langchainLogo
    },
    {
        "id": "prompt_eng",
        "type": "concept",
        "name": "Prompt Engineering",
        "projects": [
            "my_family_story",
            "openai_assistant_m2_gen"
        ]
    },
    {
        "id": "generative_agents",
        "type": "concept",
        "name": "LLM Agents",
        "projects": [
            "my_family_story"
        ]
    },
    {
        "id": "llm",
        "type": "concept",
        "name": "LLM",
        "projects": [
            "my_family_story",
            "math_storytelling_llm_human_comparative_study",
            "openai_assistant_m2_gen"
        ]
    },
    {
        "id": "graph_rag",
        "type": "concept",
        "name": "Graph RAG",
        "projects": [
            "my_family_story"
        ]
    },
    {
        "id": "neo4j",
        "type": "tool",
        "name": "Neo4j",
        "projects": [
            "my_family_story"
        ],
        "logo": neo4jLogo
    },
    {
        "id": "full_stack",
        "type": "concept",
        "name": "Full-Stack",
        "projects": [
            "summoner_insight",
            "movie_search_app"
        ]
    },
    {
        "id": "api",
        "type": "concept",
        "name": "API",
        "projects": [
            "summoner_insight",
            "openai_assistant_m2_gen",
            "movie_search_app"
        ]
    },
    {
        "id": "soft_eng",
        "type": "concept",
        "name": "Software Engineering",
        "projects": [
            "summoner_insight",
            "openai_assistant_m2_gen",
            "movie_search_app"
        ]
    },
    {
        "id": "devops",
        "type": "concept",
        "name": "DevOps",
        "projects": [
            "summoner_insight",
            "math_storytelling_llm_human_comparative_study"
        ]
    },
    {
        "id": "ux_design",
        "type": "concept",
        "name": "UX Design",
        "projects": [
            "summoner_insight",
            "movie_search_app"
        ]
    },
    {
        "id": "empirical_methods",
        "type": "concept",
        "name": "Empirical Methods",
        "projects": [
            "math_storytelling_llm_human_comparative_study"
        ]
    },
    {
        "id": "mixed_methods",
        "type": "concept",
        "name": "Mixed Methods",
        "projects": [
            "math_storytelling_llm_human_comparative_study"
        ]
    },
    {
        "id": "hci",
        "type": "concept",
        "name": "Human-Computer Interaction",
        "projects": [
            "math_storytelling_llm_human_comparative_study",
            "privacy_app_figma"
        ]
    },
    {
        "id": "aws_elastic_beanstalk",
        "type": "tool",
        "name": "AWS Elastic Beanstalk",
        "projects": [
            "math_storytelling_llm_human_comparative_study"
        ],
        "logo": awsLogo
    },
    {
        "id": "aws_cloudfront",
        "type": "tool",
        "name": "AWS Cloudfront",
        "projects": [
            "math_storytelling_llm_human_comparative_study"
        ],
        "logo": awsLogo
    },
    {
        "id": "aws_amplify",
        "type": "tool",
        "name": "AWS Amplify",
        "projects": [
            "math_storytelling_llm_human_comparative_study"
        ],
        "logo": awsLogo
    },
    {
        "id": "r",
        "type": "language",
        "name": "R",
        "projects": [
            "math_storytelling_llm_human_comparative_study"
        ],
        "logo": rLogo
    },
    {
        "id": "openai",
        "type": "tool",
        "name": "OpenAI",
        "projects": [
            "openai_assistant_m2_gen"
        ],
        "logo": openaiLogo
    },
    {
        "id": "mde",
        "type": "concept",
        "name": "Model-Driven Engineering",
        "projects": [
            "openai_assistant_m2_gen"
        ]
    },
    {
        "id": "pd",
        "type": "framework",
        "name": "Pandas",
        "projects": [
            "openai_assistant_m2_gen"
        ],
        "logo": pdLogo
    },
    {
        "id": "tf",
        "type": "framework",
        "name": "Tensorflow",
        "projects": [
            "sign_language_recognition",
            "handwriting_generator",
            "chatbot"
        ],
        "logo": tfLogo
    },
    {
        "id": "deepl",
        "type": "concept",
        "name": "Deep Learning",
        "projects": [
            "sign_language_recognition",
            "clothing_classification",
            "handwriting_generator",
            "chatbot"
        ]
    },
    {
        "id": "cnn",
        "type": "concept",
        "name": "CNN",
        "projects": [
            "sign_language_recognition",
            "handwriting_generator"
        ]
    },
    {
        "id": "np",
        "type": "framework",
        "name": "Numpy",
        "projects": [
            "clothing_classification",
            "handwriting_generator"
        ],
        "logo": npLogo
    },
    {
        "id": "plotly",
        "type": "framework",
        "name": "Plotly",
        "projects": [
            "sportsai_website"
        ],
        "logo": plotlyLogo
    },
    {
        "id": "data_viz",
        "type": "concept",
        "name": "Data Visualization",
        "projects": [
            "sportsai_website"
        ]
    },
    {
        "id": "cv2",
        "type": "framework",
        "name": "OpenCV",
        "projects": [
            "sign_language_recognition",
            "drawing_with_webcam"
        ],
        "logo": cv2Logo
    },
    {
        "id": "comp_viz",
        "type": "concept",
        "name": "Computer Vision",
        "projects": [
            "drawing_with_webcam"
        ]
    },
    {
        "id": "mediapipe",
        "type": "framework",
        "name": "Mediapipe",
        "projects": [
            "drawing_with_webcam"
        ]
    },
    {
        "id": "figma",
        "type": "tool",
        "name": "Figma",
        "projects": [
            "privacy_app_figma"
        ],
        "logo": figmaLogo
    },
    {
        "id": "rnn",
        "type": "concept",
        "name": "RNN",
        "projects": [
            "chatbot"
        ]
    },
    {
        "id": "q_learning",
        "type": "concept",
        "name": "Q-Learning",
        "projects": [
            "q_learning_drone"
        ]
    },
    {
        "id": "robot",
        "type": "concept",
        "name": "Robotics",
        "projects": [
            "q_learning_drone"
        ]
    },
    {
        "id": "ue4",
        "type": "tool",
        "name": "Unreal Engine 4",
        "projects": [
            "group_drone"
        ],
        "logo": ue4Logo
    },
    {
        "id": "arduino",
        "type": "language",
        "name": "Arduino",
        "projects": [
            "sparki"
        ],
        "logo": arduinoLogo
    },
    {
        "id": "flask",
        "type": "framework",
        "name": "Flask",
        "projects": [
            "my_memory_chat"
        ],
        "logo": flaskLogo
    },
    {
        "id": "dash",
        "type": "framework",
        "name": "Dash",
        "projects": [
            "sportsai_website"
        ],
        "logo": dashLogo
    },
    {
        "id": "css",
        "type": "language",
        "name": "CSS",
        "projects": [
            "sportsai_website"
        ],
        "logo": cssLogo
    },
    {
        "id": "swift",
        "type": "language",
        "name": "Swift",
        "projects": [],
        "logo": swiftLogo
    },
    {
        "id": "cpp",
        "type": "language",
        "name": "C++",
        "projects": [],
        "logo": cppLogo
    },
    {
        "id": "html",
        "type": "language",
        "name": "HTML",
        "projects": [],
        "logo": htmlLogo
    },
    {
        "id": "java",
        "type": "language",
        "name": "Java",
        "projects": [],
        "logo": javaLogo
    },
    {
        "id": "transformer",
        "type": "concept",
        "name": "Transformer AI",
        "projects": [
            "chatbot"
        ]
    },
    {
        "id": "huggingface",
        "type": "framework",
        "name": "HuggingFace",
        "projects": [
            "summoner_insight"
        ],
        "logo": huggingfaceLogo
    },
    {
        "id": "svd",
        "type": "concept",
        "name": "Singular Value Decomposition",
        "projects": [
            "hackos4-2025"
        ]
    },
    {
        "id": "embedding",
        "type": "concept",
        "name": "Embeddings",
        "projects": [
            "hackos4-2025"
        ]
    },
    {
        "id": "attention",
        "type": "concept",
        "name": "Attention Layers",
        "projects": [
            "hackos4-2025"
        ]
    },
    {
        "id": "regression",
        "type": "concept",
        "name": "Regression Tasks",
        "projects": [
            "hackos4-2025"
        ]
    },
    {
        "id": "bioeng",
        "type": "concept",
        "name": "Bio-Engineering",
        "projects": [
            "hackos4-2025"
        ]
    },
    {
        "id": "sk",
        "type": "framework",
        "name": "Scikit-Learn",
        "projects": [
            "hackos4-2025"
        ],
        "logo": skLogo
    },
    {
        "id":"torch",
        "type": "framework",
        "name":"PyTorch",
        "projects": [
            "summoner_insight",
            "hackos4-2025"
        ],
        "logo": torchLogo
    },
    {
        "id": "tailwind",
        "type": "framework",
        "name": "Tailwind CSS",
        "projects": [],
        "logo": tailwindLogo
    },
    {
        'id': 'data_anonymization',
        'type': 'concept',
        'name': 'Data Anonymization',
        'projects': [],
        'experience': [
            'internshipAppOX'
        ]
    },
    {
        'id': 'synthetic_data',
        'type': 'concept',
        'name': 'Synthetic Data',
        'projects': [],
        'experience': [
            'internshipAppOX'
        ]
    },
    {
        'id': 'research',
        'type': 'concept',
        'name': 'Research',
        'projects': [],
        'experience': [
            'internshipAppOX'
        ]
    },
    {
        'id': 'gan',
        'type': 'concept',
        'name': 'Generative Adversarial Networks',
        'projects': [],
        'experience': [
            'internshipAppOX'
        ]
    },
    {
        'id': 'data_privacy',
        'type': 'concept',
        'name': 'Data Privacy',
        'projects': [],
        'experience': [
            'internshipAppOX'
        ]
    },
    {
        "id": "ae",
        "type": "concept",
        "name": "Autoencoders",
        "projects": [],
        "experience": [
            "internshipAppOX"
        ]
    },
    {
        id: "obsidian",
        type: "tool",
        name: "Obsidian",
        projects: [],
        experience: [
            "internshipAppOX"
        ],
        logo: obsidianLogo
    },
    {
        id: "tts",
        type: "framework",
        name: "Coqui TTS",
        projects: [
            "text2speechmultilingual"
        ],
        experience: [],
        logo: coquiLogo
    },
    {
        id: "dbms",
        type: "concept",
        name: "Database Management Systems",
        projects: [
            "vocabulary-dbms"
        ],
        experience: []
    },
    {
        id: "sql",
        type: "language",
        name: "SQL",
        projects: [
            "vocabulary-dbms"
        ],
        experience: [],
        logo: sqlLogo
    },
    {
        id:"sqlalchemy",
        type: "framework",
        name:"SQLAlchemy",
        projects: [
            "vocabulary-dbms"
        ],
        experience: [],
        logo: sqlAlchemyLogo
    }
]