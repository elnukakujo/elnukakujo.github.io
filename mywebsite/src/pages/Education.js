import React from 'react';
import courseraLogo from '../assets/img/logo/coursera_logo.jpg';
import udemLogo from '../assets/img/logo/udem_logo.jpg';
import uniluLogo from '../assets/img/logo/unilu_logo.jpg';
import { useEffect } from "react";

import udemEte from '../assets/img/index/udem_ete.jpg';
import udemNeige from '../assets/img/index/udem_neige.jpg';

import '../assets/css/pages/education.css';

function SectionOpener({id, title, children}){
    return (
        <div className="section" id={id}>
            <div className="content">
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    );
}

function Images({images}){
  return (
    <div className="images">
      {images.map((image, index) => (
        <figure key={index} className='image-container'>
          <a href={image[1]} target="_blank" rel="noreferrer">
            <img src={image[0]} alt={image[1]}/>
          </a>
          <figcaption>{image[2]}</figcaption>
        </figure>
      ))}
    </div>
  )
}

function Description({anchorId, title, date, GPA, relevantCourses, onlineCourses, websiteLink, images}){
  if (onlineCourses) {
    return (
      <div>
        <div className="anchor" id="oc"></div>
        <div className="description" id="oc-content">
          <h4>Online Courses</h4>
          <ul>
            {onlineCourses.map((course, index) => (
              <li key={index}>
                <a href={course[1]} target="_blank" rel="noreferrer">
                  {course[0]}
                </a>
                <a className="coursera_container" href={course[1]} target="_blank" rel="noreferrer">
                  <img src={courseraLogo} alt="Coursera"/>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  const output = [];

  if (date) {
    output.push(<li className="date" key="date">Date: {date}</li>);
  }

  if (GPA) {
    output.push(<li key="gpa">GPA: {GPA}</li>);
  }

  if (relevantCourses) {
    output.push(
      <li key="relevantCourses">
        Relevant courses: {relevantCourses.join(', ')}
      </li>
    );
  }

  return (
    <div>
      <div className="anchor" id={anchorId}></div>
      <div className="description">
        <div className="top-row">
          <h4>{title}</h4>
          {
            websiteLink &&
            <a className="school-container" href={websiteLink[0]} target="_blank" rel="noreferrer">
              <img src={websiteLink[1]} alt="University of Luxembourg"/>
            </a>
          }
        </div>
        <ul>
          {output}
        </ul>
        {
          images &&
          <Images images={images}/>
        }
      </div>
    </div>
  );
}

export default function Education(){
    useEffect(() => {
      document.title = 'Education | Noe Jager';
    }, []);
    return (
        <SectionOpener id="education" title="Education">
            <Description
              anchorId={"masterUdem"}
              title={"Master in Computer Science at Université de Montréal"}
              date={"September 2022 - Upcoming"}
              relevantCourses={["Data Science", "Machine Learning Fundamentals", "Data Visualization"]}
              websiteLink={[
                "https://admission.umontreal.ca/programmes/maitrise-en-informatique/",
                udemLogo
              ]}
              images={[
                [
                  udemEte,
                  "https://admission.umontreal.ca/programmes/maitrise-en-informatique/",
                  "The campus of Université de Montréal in the summer"
                ],
                [
                  udemNeige,
                  "https://admission.umontreal.ca/programmes/maitrise-en-informatique/",
                  "The campus of Université de Montréal in the winter"
                ]
              ]}
            />
            <Description
              anchorId={"bacUniLu"}
              title={"Bachelor of Science in Computer Science at University of Luxembourg"}
              websiteLink={[
                "https://wwwen.uni.lu/studies/fstc/bachelor_in_computer_science",
                uniluLogo
              ]}
              date={"September 2019 - July 2022"}
              GPA={"3.0"}
              relevantCourses={["Web development", "Software Engineering", "Networking and Communication", "Cybersecurity 1 and 2", 
              "Human Computer Interaction and User Centered Design"]}
              images={[
                [
                  "https://www.uni.lu/wp-content/uploads/sites/9/2023/07/Belval_Maison-Savoir_est_Brumat-Photo-Foersom-sarl_2013-1.jpg",
                  "https://www.uni.lu/en/about/campuses/belval-campus/",
                  "View from the sky of the campus of Belval where my classes took place"
                ],
                [
                  "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttp%253A%252F%252Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%252Fc27a1fea-3af2-11e9-b856-5404d3811663%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
                  "https://www.ft.com/content/249fd948-35cc-11e9-9be1-7dc6e2dfa65e",
                  "The campus was built on a former industrial site, which is now a modern and vibrant area"
                ]
              ]}
            />
            <Description
              onlineCourses={[
                  [
                    "Design in Art and Concepts Specialization (Coursera - CalArts)",
                    "https://www.coursera.org/specializations/game-design"
                  ],
                  [
                    "Data Mining Specialization by the University of Illinois at Urbana-Champaign (Coursera)",
                    "https://www.coursera.org/specializations/data-mining"
                  ],
                  [
                    "Deep Learning Specialization by Deeplearning.ai (Coursera)",
                    "https://www.coursera.org/specializations/deep-learning"
                  ]
              ]}
            />
        </SectionOpener>
    )
}