import uniluPicture from "../../assets/img/unilu.png";
import udemPicture from "../../assets/img/udem.png";

import uniLuLogo from "../../assets/logo/education/unilu.png";
import udemLogo from "../../assets/logo/education/udem.png";

export const education = [
    {
        "anchorId": "masterUdem",
        "title": "Master in Informatics",
        "date": "September 2022 - Upcoming",
        "logo": udemLogo,
        "websiteUrl": "https://admission.umontreal.ca/programmes/maitrise-en-informatique/",
        "image":udemPicture,
        "courses": [
            "Data Science", 
            "Machine Learning Basics", 
            "Data Visualization", 
            "Model-Based Software Design",
            "Empirical methods in HCI", 
            "3D Vision"
        ]
    },
    {
        "anchorId": "bacUniLu",
        "title": "Bachelor of Science in Computer Science",
        "logo": uniLuLogo,
        "websiteUrl": "https://www.uni.lu/fstm-en/study-programs/bachelor-in-computer-science/",
        "image":uniluPicture,
        "date": "September 2019 - July 2022",
        "courses": [
            "Web development",
            "Software Engineering",
            "Networking and Communication",
            "Cybersecurity",
            "Human Computer Interaction",
            "User Centered Design"
        ]
    }
];

import calartsLogo from "../../assets/logo/education/calarts.png";
import illinoisLogo from "../../assets/logo/education/illinoisuni.png";
import deeplearningLogo from "../../assets/logo/education/deeplearningai.png";

export const ol = [
    {
        "title": "Design in Art and Concepts Specialization (Coursera - CalArts)",
        "url": "https://www.coursera.org/specializations/game-design",
        "logo": calartsLogo
    },
    {
        "title": "Data Mining Specialization (Coursera - University of Illinois at Urbana-Champaign)",
        "url": "https://www.coursera.org/specializations/data-mining",
        "logo": illinoisLogo
    },
    {
        "title":"Deep Learning Specialization (Coursera - Deeplearning.ai)",
        "url":"https://www.coursera.org/specializations/deep-learning",
        "logo": deeplearningLogo
    },
    {
        "title":"Generative AI with Large Language Models (Coursera - Deeplearning.ai)",
        "url":"https://www.coursera.org/account/accomplishments/verify/VJOG3DQEHRCJ",
        "logo": deeplearningLogo
    }
];

import appoxLogo from "../../assets/logo/experience/appox.png";

export const experience = [
    {
        'anchorId': "internshipAppOX",
        'status': 1,
        'title': "Research Internship",
        'company': "AppOX",
        'date': "May 2025 - November 2025",
        'logo': appoxLogo,
        'websiteUrl': "https://appox.ai/",
        'summary': "Evaluation of the robustness of data anonymization against re-identification attacks.",
        'description': "Since May 2025, I’ve been interning on a project that focuses on testing the robustness of anonymization techniques and synthetic data generation using AI-based re-identification models. Currently, I’m in the first phase of the internship, where I’m reviewing literature on the concepts and the state of the art in data anonymization. I’m also planning the next steps of the project.",
        'tags': ['data_anonymization', 'synthetic_data', 'research', 'py', 'torch', 'tf', 'gan', 'ae', 'data_privacy'],
        "external_ref":[
            {
                "title": "Modeling Tabular Data using Conditional GAN",
                "url": "https://arxiv.org/abs/1907.00503"
            },
            {
                "title": "Anonymization Procedures for Tabular Data : An Explanatory Technical and Legal Synthesis",
                "url": "https://www.mdpi.com/2078-2489/14/9/487#"
            },
            {
                "title": "PATE-GAN, Generating synthetic data with differential privacy guarantees",
                "url": "https://openreview.net/forum?id=S1zk9iRqF7&utm_source=se%D1%20uritylabru"
            }
        ]
    }
];

export const countriesVisited = [
    "France", "Germany", "Italy", "Spain", "United Kingdom", "United States of America", "Canada", "Japan", "Morocco", "Vietnam",
    "Belgium", "Czechia", "Netherlands", "Switzerland", "Austria", "Greece", "Poland", "Russia", "Montenegro", "Croatia", "Latvia", "Romania"
];

import fushimiInari from "../../assets/img/fushimi-inari.png";
import kabukicho from "../../assets/img/kabukicho.png";
import shimanamiKaido from "../../assets/img/shimanami-kaido2.png";

import coliseum from "../../assets/img/coliseum.png";
import schoolAthens from "../../assets/img/school-athens.png";
import vatican from "../../assets/img/vatican.png";

export const trips = [
    {
        cities: "Montréal, Québec, Toronto, Ottawa",
        country: "Canada",
        date: "September 2022 - April 2025",
        "description":"I lived 4 years in Montréal. It's a beautiful vibrant city with a lot of events and activities throughout the year. I love the diversity of the city and the fact that you can find food from all over the world. It is also the place where I met and fell in love with my girlfriend."
    },
    {
        cities: "Fussa, Tokyo, Kyoto, Hiroshima, Onomichi",
        country: "Japan",
        date: "July 2019, July-August 2023",
        "description":"I visited Japan in 2019 with my family for two weeks and returned in the summer of 2023, where I spent two months studying at a language school in Tokyo. During my travels, I explored various places, including Kamakura and the Shimanami Kaido cycling route.",
        "images":[
            fushimiInari,
            kabukicho,
            shimanamiKaido
        ]
    },
    {
        cities: "Rome, Florence, Milan",
        country: "Italy",
        date: "December 2024",
        "description": "I had my first trip to Rome in December 2024, and I was captivated by the city's rich layers of architecture and history. The food was amazing, and I thoroughly enjoyed the vibrant atmosphere.",
        "images":[
            coliseum,
            schoolAthens,
            vatican
        ]
    },
    {
        cities: "Bārbele, Riga",
        country: "Latvia",
        date: "July 2018",
        "description": "At 17, I went on a youth volunteering project in Latvia, where I spent two weeks in a small village called Bārbele. I worked with Spanish, Russians, Turkish and Czechs to clean a river for local kids, and we explored the capital city, Riga."
    },
    {
        cities: "New York City",
        country: "United States of America",
        date: "July 2016, May 2024",
        "description": "At 15, I had my first trip alone where I crossed the Atlantic to go to an Education First campus close to New York City. I spent three weeks in the city, exploring Manhattan, Brooklyn, and Queens, as well as taking English classes and met with international teenagers."
    }
];

export const hobbies = [
    {
        "title":"Video Games",
        "description":"I feel like I have been playing video games for as long as I can remember. My tastes changed over the years starting with Pokemon Pearl on Nintendo DS, then moving to Minecraft, and now I enjoy many genres of games, including RPGs, strategy games, and MOBAs."
    },
    {
        "title": "Books",
        "description": "I've been an avid reader since childhood, starting with fantasy like LOTR and The Hobbit, then moving to historical subjects like the French Revolution and Roman Empire. More recently, I've been exploring philosophy and rhetoric classics."
    },
    {
        "title": "Learning languages",
        "description": "I enjoy learning new languages through various methods such as Duolingo, classes, and textbooks. I have studied French, English, and German in school. Additionally, I have self-studied Japanese, including formal study at a language school in Japan for two months. Currently, I am learning Chinese and Japanese."
    },
    { 
        "title": "Participate in Role-Play sessions", 
        "description": "I started playing Role Play games with initiation sessions at University of Montréal. I played in different settings such as fantasy, post-apocalyptic, and lovecraftian universes. I enjoy playing with friends in such a creative and free setting."
    },
    {
        "title": "Sports", 
            "description": "I do a wide range of sports, from going to the gym, bouldering, boxing, and running. I enjoy the physical and mental benefits of sports, find it a great way to relax after the stress of the day and enjoy seeing a constant progress in my performances." 
    },
    {
        "title": "Walk Around", 
        "description": "I constantly walk around the city, be it to walk my dog, go to the grocery store, or just change ideas when in mental deadlock. Looking at the nature or the cityscape helps me relax and think about my projects." 
    },
    { 
        "title": "Series/Movies", 
        "description": "I watched tons of Japanese animated series in highschool, probably the reason why I started learning Japanese. I also enjoy watching movies, especially science-fiction, historical movies, as well as animated or comedy movies."
    }
];