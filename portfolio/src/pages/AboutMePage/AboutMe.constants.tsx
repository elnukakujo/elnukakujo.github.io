// @ts-ignore
import uniluPicture from "../../assets/img/unilu.png";
// @ts-ignore
import udemPicture from "../../assets/img/udem.png";

// @ts-ignore
import uniLuLogo from "../../assets/logo/education/unilu.png";
// @ts-ignore
import udemLogo from "../../assets/logo/education/udem.png";

import Degree from "../../interface/Degree";

export const education: Degree[] = [
    {
        status: 1,
        id: "masterUdem",
        name: "M.Sc in Informatics",
        date: "September 2022 - Upcoming",
        university: [{
            id: "udem",
            name: "University of Montréal",
            logoUrl: udemLogo,
            websiteUrl: "https://admission.umontreal.ca/programmes/maitrise-en-informatique/",
            images: [
                {
                    url: udemPicture,
                    caption: "University of Montréal Campus"
                }
            ]
        }],
        courses: [
            "Data Science",
            "Machine Learning Basics",
            "Data Visualization",
            "Model-Based Software Design",
            "Empirical methods in HCI", 
            "3D Vision"
        ]
    },
    {
        status: 2,
        id: "bacUniLu",
        name: "B.Sc in Computer Science",
        date: "September 2019 - July 2022",
        university: [{
            id: "unilu",
            name: "University of Luxembourg",
            logoUrl: uniLuLogo,
            websiteUrl: "https://www.uni.lu/fstm-en/study-programs/bachelor-in-computer-science/",
            images: [
                {
                    url: uniluPicture
                }
            ]
        }],
        courses: [
            "Web development",
            "Software Engineering",
            "Networking and Communication",
            "Cybersecurity",
            "Human Computer Interaction",
            "User Centered Design"
        ]
    }
];
// @ts-ignore
import calartsLogo from "../../assets/logo/education/calarts.png";
// @ts-ignore
import illinoisLogo from "../../assets/logo/education/illinoisuni.png";
// @ts-ignore
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

import type ProjectType from "../../interface/Project";

// @ts-ignore
import appoxLogo from "../../assets/logo/experience/appox.png";

export const experience: ProjectType[] = [
    {
        id: "internshipAppOX",
        status: 1,
        title: "Research Internship",
        company: [
            {
                id: "appox",
                name: "AppOX",
                websiteUrl: "https://appox.ai/",
                logoUrl: appoxLogo
            }
        ],
        date: "May 2025 - November 2025",
        summary: "Contrastive Representation Learning for Tabular Data Anonymity Evaluation",
        description: [
            {title: "Context", text: [
                "As companies collect data from their users to offer them services, some of those information might be **sensitive and hurtful** if leaked. To avoid this, gouvernments **impose** on companies to **anonymize their collected data** to protect their users personal informations. However, as model can generate (anonymized) synthetic data that mimicking real user data, **some methods have been created to infer back real data information using those synthetic data**. Hence, it is crucial to evaluate the anonymity risk of those synthetic data.",
                "From the work of Giomi et al. (2022), we discovered that a **practical solution with lower computational cost** that previous metrics (k-Anonymity, l-Diversity, t-Closeness) is to **simulate attacks on the original dataset** using the synthetic dataset. From those attacks, they evaluate a risk score based on the accuracy of their attacks. However, those attacks **rely on the Gower Distance between records**, which is **not optimal for high-dimensional data** and does **not capture complex relationships between features**."]},
            {title: "Problem", text: ["*Is using learned representations of synthetic records more accurate and generalizable to detect leaks in a synthetic dataset than using the Gower Distance?*"]}
        ],
        skills_id: ['data_anonymization', 'synthetic_data', 'research', 'py', 'torch', 'tf', 'gan', 'ae', 'data_privacy', 'mlflow', 'optuna', 'contrastive_learning', 'representation_learning'],
        externalLink:[
            {
                type:"externalLink",
                text: "Anonymity and the Netflix Dataset",
                url: "https://www.schneier.com/blog/archives/2007/12/anonymity_and_t_2.html"
            },
            {
                type:"externalLink",
                text: "How Strava leaks the Position of our World Leaders",
                url: "https://www.breakingnews.ie/world/fitness-app-strava-gives-away-location-of-world-leaders-french-newspaper-says-1688417.html"
            },
            {
                type:"externalLink",
                text: "Anonymeter: Unified Framework for Quantifying Privacy Risk in Synthetic Data",
                url: "https://github.com/statice/anonymeter"
            },
            {
                type:"externalLink",
                text: "A Simple Framework for Contrastive Learning of Visual Representations",
                url:"https://arxiv.org/abs/2002.05709"
            }
        ]
    }
];

export const countriesVisited = [
    "France", "Germany", "Italy", "Spain", "United Kingdom", "United States of America", "Canada", "Japan", "Morocco", "Vietnam",
    "Belgium", "Czechia", "Netherlands", "Switzerland", "Austria", "Greece", "Poland", "Russia", "Montenegro", "Croatia", "Latvia", "Romania", "China"
];

// @ts-ignore
import sagradaFamilia from "../../assets/img/sagradafamilia.png";
// @ts-ignore
import viewBarcelona from "../../assets/img/viewbarcelona.png";

// @ts-ignore
import terracottaArmy from "../../assets/img/terracottaarmy.png";
// @ts-ignore
import greatWall from "../../assets/img/greatwall.png";
// @ts-ignore
import streetFoodCartWuhan from "../../assets/img/streetfoodcartwuhan.png";

// @ts-ignore
import apartmentMontreal from "../../assets/img/apartmentmontreal.png";
// @ts-ignore
import anseDuPortAuPersil from "../../assets/img/anseportpersilquebec.png";
// @ts-ignore
import cnTowerToronto from "../../assets/img/cntowertoronto.png";
// @ts-ignore
import noeQuebecCity from "../../assets/img/noequebec.png";

// @ts-ignore
import coliseum from "../../assets/img/coliseum.png";
// @ts-ignore
import schoolAthens from "../../assets/img/school-athens.png";
// @ts-ignore
import vatican from "../../assets/img/vatican.png";

// @ts-ignore
import fushimiInari from "../../assets/img/fushimi-inari.png";
// @ts-ignore
import kabukicho from "../../assets/img/kabukicho.png";
// @ts-ignore
import shimanamiKaido from "../../assets/img/shimanami-kaido2.png";

import type TripType from "../../interface/Trip";

export const trips: TripType[] = [
    {
        cities: [
            {
                name: "Aachen",
                country: "Germany",
                continent: "Europe"
            },
            {
                name: "Maastricht",
                country: "Netherlands",
                continent: "Europe"
            },
            {
                name: "Cologne",
                alias: "Köln",
                country: "Germany",
                continent: "Europe"
            },
            {
                name: "Düsseldorf",
                country: "Germany",
                continent: "Europe"
            }
        ],
        date: "October 2025 - Present"
    },
    {
        cities: [
            {
                name: "Barcelona",
                country: "Spain",
                continent: "Europe"
            }
        ],
        date: "September 2024",
        description: "I visited Barcelona for a week in September 2024. The city is known for its unique architecture by Antoni Gaudí, including the famous Sagrada Família church, which I had the chance to visit. I also enjoyed walking around the Gothic Quarter and trying some delicious tapas.",
        images:[
            {
                url: sagradaFamilia,
                caption: "The Sagrada Família church in Barcelona"
            },
            {
                url: viewBarcelona,
                caption: "A view of Barcelona from Park Güell"
            }
        ]
    },
    {
        cities: [
            {
                name: "Xi'an",
                alias: "西安",
                country: "China",
                continent: "Asia"
            },
            {
                name: "Beijing",
                alias: "北京",
                country: "China",
                continent: "Asia"
            },
            {
                name: "Wuhan",
                alias: "武汉",
                country: "China",
                continent: "Asia"
            }
        ],
        date: "July-August 2024",
        description: "A trip to China I did this summer to visit the oldest country in the world! I started by visiting Xi'an, the ancient heart of China, where the terracotta army have been standing for thousands of years. Then, I went to see Beijing, the capital city, with the histories of the Ming and Qing dynasties, I visited the Great Wall of China, the Forbidden City, and the Tian'anmen square. Finally, I went to Wuhan, to meet with my girlfriend's family and explore the city.",
        images:[
            {
                url: terracottaArmy,
                caption: "The famous Terracotta Army in Xi'an"
            },
            {
                url: greatWall,
                caption: "The Great Wall of China near Beijing"
            },
            {
                url: streetFoodCartWuhan,
                caption: "Some streetfood carts in Wuhan"
            }
        ]
    
    },
    {
        cities: [
            {
                name: "Montreal",
                country: "Canada",
                continent: "North America"
            },
            {
                name: "Québec",
                country: "Canada",
                continent: "North America"
            },
            {
                name: "Toronto",
                country: "Canada",
                continent: "North America"
            },
            {
                name: "Ottawa",
                country: "Canada",
                continent: "North America"
            }
        ],
        date: "September 2022 - April 2025",
        description:"I lived 4 years in Montréal. It's a beautiful vibrant city with a lot of events and activities throughout the year. I love the diversity of the city and the fact that you can find food from all over the world. It is also the place where I met and fell in love with my girlfriend.",
        images:[
            {
                url: apartmentMontreal,
                caption: "My first apartment in Montréal where I lived from August 2022 to June 2023"
            },
            {
                url: anseDuPortAuPersil,
                caption: "Anse du Port au Persil, near Québec City"
            },
            {
                url: cnTowerToronto,
                caption: "View of the CN Tower in Toronto from the street"
            },
            {
                url: noeQuebecCity,
                caption: "Picture of me in the below the Château Frontenac in Québec City"
            }
        ]
    },
    {
        cities: [
            {
                name: "Rome",
                country: "Italy",
                continent: "Europe"
            },
            {
                name: "Florence",
                country: "Italy",
                continent: "Europe"
            },
            {
                name: "Milan",
                country: "Italy",
                continent: "Europe"
            }
        ],
        date: "December 2024",
        description: "I had my first trip to Rome in December 2024, and I was captivated by the city's rich layers of architecture and history. The food was amazing, and I thoroughly enjoyed the vibrant atmosphere.",
        images:[
            {
                url: coliseum,
                caption: "The Coliseum in Rome"
            },
            {
                url: schoolAthens,
                caption: "The famous painting School of Athens in the Vatican Museum"
            },
            {
                url: vatican,
                caption: "The Vatican's St Peter's square"
            }
        ]
    },
    {
        cities: [
            {
                name: "Fussa",
                alias: "福生",
                country: "Japan",
                continent: "Asia"
            },
            {
                name: "Tokyo",
                alias: "東京",
                country: "Japan",
                continent: "Asia"
            },
            {
                name: "Kyoto",
                alias: "京都",
                country: "Japan",
                continent: "Asia"
            },
            {
                name: "Hiroshima",
                alias: "広島",
                country: "Japan",
                continent: "Asia"
            },
            {
                name: "Onomichi",
                alias: "尾道",
                country: "Japan",
                continent: "Asia"
            }
        ],
        date: "July 2019, July-August 2023",
        description:"I visited Japan in 2019 with my family for two weeks and returned in the summer of 2023, where I spent two months studying at a language school in Tokyo. During my travels, I explored various places, including Kamakura and the Shimanami Kaido cycling route.",
        images:[
            {
                url: fushimiInari,
                caption: "Fushimi Inari in Kyoto"
            },
            {
                url: kabukicho,
                caption: "Kabukicho district in Tokyo"
            },
            {
                url: shimanamiKaido,
                caption: "The Shimanami Kaido cycling road between Onomichi and the island of Shikoku"
            }
        ]
    },
    {
        cities: [
            {
                name: "Bārbele",
                country: "Latvia",
                continent: "Europe"
            },
            {
                name: "Riga",
                country: "Latvia",
                continent: "Europe"
            }
        ],
        date: "July 2018",
        description: "At 17, I went on a youth volunteering project in Latvia, where I spent two weeks in a small village called Bārbele. I worked with Spanish, Russians, Turkish and Czechs to clean a river for local kids, and we explored the capital city, Riga."
    },
    {
        cities: [
            {
                name: "New York City",
                country: "United States of America",
                continent: "North America"
            }
        ],
        date: "July 2016, May 2024",
        description: "At 15, I had my first trip alone where I crossed the Atlantic to go to an Education First campus close to New York City. I spent three weeks in the city, exploring Manhattan, Brooklyn, and Queens, as well as taking English classes and met with international teenagers."
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